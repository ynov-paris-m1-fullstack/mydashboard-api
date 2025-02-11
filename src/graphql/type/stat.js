export const StatType = `
    type Stat {
        totalOrder : Int
        totalSales: Float
        totalQuantity: Int
        averageSaleAmount: Float
        totalCustomers: Int
    }
    type Query {
        getStats: Stat
    }
`  