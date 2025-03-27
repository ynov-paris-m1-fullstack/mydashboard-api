import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const userController = {
    getMe: async (req, res) => {
        try {
            
            const user = await prisma.user.findUnique({
                where: {
                    userId: req.user.id
                }
            });
            return res.status(200).json({
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                },
                success: true
            });
        }
        catch (err) {
            return res.status(500).json({
                message: err.message,
                success: false
            });
        }
    },
    updateMe: async (req, res) => {
        try {
            // j'ai recupère les informations du formulaire
            const { firstName, lastName, email } = req.body;
            // Je mets à jour les informations de l'utilisateur
            const user = await prisma.user.update({
                where: {
                    userId: req.user.id
                },
                data: {
                    firstName,
                    lastName,
                    email
                }
            });
            // je retourne les informations mis à jour
            return res.status(200).json({
                user: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                },
                success: true
            });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({
                message: err.message,
                success: false
            });
        }
    }
}

export default userController;