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
}

export default userController;