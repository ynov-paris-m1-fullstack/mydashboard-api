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

    app.use('/graphql',
        cors(),
        express.json(),
        expressMiddleware(server, {
            context: async ({ req }) => ({ token: req.headers.token }),
        }),
    );

    app.get('/api', (req, res) => {
        res.send('Hello World!');
    });

    await new Promise(resolve => httpServer.listen({ port: process.env.PORT }, resolve));
}

initApp();
