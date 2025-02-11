import { CustomerType } from "./customer.js";
import { ProductType } from "./product.js";
import { SaleType } from "./sale.js";

export const typeDefs = `
    ${CustomerType}
    ${ProductType}
    ${SaleType}
`