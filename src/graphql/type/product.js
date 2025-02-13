export const ProductType = `
    type Product {
        productId: ID!
        name: String
        category: String
        price: Int
        brand: String
        releaseYear: String
    }
    type Response {
        message: String,
        success: Boolean
    }
    input ProductInput {
        name: String
        category: String
        price: Float
        brand: String
        releaseYear: String
    }
    type Mutation {
        addProduct(input: ProductInput): Product
    }
`
// addProduct(name: String category: String, price: Float, brand: String, releaseYear: String): Product
