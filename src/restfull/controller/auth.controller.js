import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import bcrypt from 'bcryptjs';
import { generateToken } from '../../lib/generateToken.js';

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

            const token = generateToken(user.id);
            
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
        // je vaich chercer les inputs du formulaire login dans le body de la request
        const { email, password } = req.body;
        // je vérifie en BDD si j'ai un utulisateur qui est bien renseigné avec l'email envoyé
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });
        // Si pas d'utilisateur, on renvoie une message d'erreur
        if(!user) {
            return res.status(404).json({
                message: "User not found",
                success: false
            });
        }
        // On vérifie si le mot de passe envoyé est le même que celui enregistré en BDD
        const passwordIsValid = bcrypt.compareSync(password, user.password);
        // Si le mot de passe n'est pas le bon, on renvoie une message d'erreur
        if(!passwordIsValid) {
            return res.status(401).json({
                message: "Invalid password",
                success: false
            });
        }
        // Si tout est bon, on génère un token
        const token = generateToken(user.id);
        // On renvoie le token dans la réponse
        return res.status(200).json({
            token,
            success: true
        });
    }
}

export default authController;