import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from "@apollo/server/express4";
import http from 'http';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bodyParser from 'body-parser';
import 'dotenv/config';
import { typeDefs } from './graphql/type/index.js';
import { resolvers } from './graphql/resolvers/index.js';

const app = express();

const initApp = async () => { 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());

    const httpServer = http.createServer(app);

    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });

    await server.start();
    // app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    app.use('/graphql',
        cors(),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );

    const secret = 'N4ZfP3IwJI20n8fKH8ETsk3agOWL2DuzwU567qL86E8JMPKVIhcDHCF0DY_FcX_XAMi7RtXaiBY94M6v9-FRKw';

    app.get('/api', (req, res) => {
        res.send('Hello World!');
    });

    app.get('/api/sales', (req, res) => {
        // token = req.headers.authorization;
        // if (!token) {
        //     return res.status(403).send({
        //         data: 'A token is required for authentication',
        //         success: false
        //     });
        // }
        // token= token.replace('Bearer ', '');
        // try {
        //     jwt.verify(token, secret);
        // } catch (err) {
        //     return res.status(401).send({
        //         error: 'Invalid Token',
        //         success: false
        //     });
        // }
        res.json({
            data: salesJson,
            success: true
        });
    });

    app.post('/api/auth/login', (req, res) => {
        const { email, password } = req.body;
        const user = { name: "Max" };

        if (!email || !password) {
            return res.status(400).send({
                error: 'Email and password are required',
                success: false
            });
        }

        if (email === 'user@ynov.com' && password === 'jhG6P8HrRopmvZqNbKUhAg') {
            const token = jwt.sign(user, secret, { expiresIn: '4h' });
            res.json({
                token: token,
                success: true
            });
        } else {
            res.status(401).send({
                error: 'Invalid username or password',
                success: false
            });
        }
    });

    // const PORT = process.env.PORT || 3000;
    // app.listen(PORT, () => {
    //     console.log(`Server is running on port ${PORT}`);
    // });
    await new Promise(resolve => httpServer.listen({ port: 3030 }, resolve));
}

initApp();
