import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const productResolver = {
    // Query c'est la partie des resolver respondre dans la lecture des données
    // de type : get, find, search
    Query: {

    },
    // Mutation c'est la partie des resolver respondre dans la manipulation des données
    // de type : create, update, delete
    Mutation: {
        addProduct: async (parent, args, context, info) => {
            // Utiliser prisma pour ajouter un produit
            console.log(args);
            const product = await prisma.product.create({
                data: args.input
            });
            console.log(product);
            return product;
        }
    }
}