import salesJson from '../../data/sales.json' assert { type: "json" };
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const saleResolver = {
     Query: {
        sales: async (parent, args) => {
             //  const users = await prisma.user.findMany()
             const sales = await prisma.sale.findMany({
                    include: {
                        product: true
                    },
                    take: args.limit
                });
                return sales;
            },
            sale: (parent, args, context, info) => {
                return salesJson.find(sale => sale.saleId == args.saleId);
            }
        }
}