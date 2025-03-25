import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// import Prisma 
// récupérer les données du body de la requête
// installer le package bcrypt
// installer le package jsonwebtoken (avec un secret dans une variable d'environnement)
// cryper le mot de passe
// utiliser la methode create ^pour enregistrer l'utilisateur en base de données
// générer un token
// retourner le token

const authController = {
    register: async (req, res) => {
        const { firstName, lastName, email, password } = req.body;
        try {
            // check if email exist 
            const userExist = await prisma.user.findUnique({
                where: {
                    email
                }
            });
            if (userExist) {
                return res.status(400).json({
                    message: "Email already exist",
                    success: false
                });
            }

            const hashPassword = bcrypt.hashSync(password, 10);

            const user = await prisma.user.create({
                data: {
                    firstName,
                    lastName,
                    email,
                    password: hashPassword
                }
            });

            console.log(user);

            const token = jwt.sign(
                {
                    id: user.userId,
                },
                process.env.JWT_SECRET, {
                expiresIn: 86400
            });

            return res.status(200).json({
                token,
                success: true
            });
        }
        catch (error) {
            return res.status(500).json({
                message: error.message,
                success: false
            });
        }
    },
    login: async (req, res) => {
        const { email, password } = req.body;
        // verifie que mail existe
        // vérifie que le mot de passe est correct bcrypt.compareSync
        // https://www.npmjs.com/package/bcryptjs
        // générer un token
        // retourner le token
    }
}

export default authController;