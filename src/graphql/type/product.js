export const ProductType = `
    type Product {
        productId: ID!
        name: String
        category: String
        price: Int
        brand: String
        releaseYear: String
        features: [String]
    }
`