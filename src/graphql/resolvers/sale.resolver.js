import salesJson from '../../data/sales.json' assert { type: "json" };

export const saleResolver = {
     Query: {
            sales: () => {
                console.log('salesJson', salesJson);
                return salesJson;
            },
            sale: (parent, args, context, info) => {
                return salesJson.find(sale => sale.saleId == args.saleId);
            }
        }
}