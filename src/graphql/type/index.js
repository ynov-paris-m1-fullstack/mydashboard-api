import { CustomerType } from "./customer.js";
import { ProductType } from "./product.js";
import { SaleType } from "./sale.js";
import { StatType } from "./stat.js";

export const typeDefs = `
    ${CustomerType}
    ${ProductType}
    ${SaleType}
    ${StatType}
`