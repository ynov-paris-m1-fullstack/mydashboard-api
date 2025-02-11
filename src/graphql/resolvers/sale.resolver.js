import salesJson from '../../data/sales.json' assert { type: "json" };

export const saleResolver = {
     Query: {
        sales: (parent, args) => {
                console.log('args', args);
                 const limit = args.limit
                if (limit) {
                    return salesJson.slice(0, limit);
                }         
                return salesJson;
            },
            sale: (parent, args, context, info) => {
                return salesJson.find(sale => sale.saleId == args.saleId);
            }
        }
}