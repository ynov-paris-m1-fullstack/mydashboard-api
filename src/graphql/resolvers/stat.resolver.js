import salesJson from '../../data/sales.json' assert { type: "json" };

export const statResolver = {
    Query: {
        getStats: () => {
            const totalOrder = salesJson.length;
            const totalSales = salesJson.reduce((total, current) => total + current.totalRevenue, 0);
            const totalQuantity = salesJson.reduce((total, current) => total + current.quantitySold, 0);
            const averageSaleAmount = totalSales / totalOrder; 
            return {
                totalOrder,
                totalSales,
                totalQuantity,
                averageSaleAmount,
            }
        }
    }
}