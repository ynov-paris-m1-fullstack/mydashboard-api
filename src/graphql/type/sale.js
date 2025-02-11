export const SaleType = `
    type Sale {
        saleId: ID!
        quantitySold: Int
        totalRevenue: Int
        saleDate: String
        region : String
        salesChannel: String
        paymentMethod: String
        product: Product
        customer: Customer
    }
    type Query {
        sales: [Sale]
        sale(saleId: ID!): Sale
    }
`