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
        releaseYear: Int
    }
    type Mutation {
        addProduct(input: ProductInput): Product
        updateProduct(productId: ID!, input: ProductInput): Product
    }
`
// addProduct(name: String category: String, price: Float, brand: String, releaseYear: String): Product
