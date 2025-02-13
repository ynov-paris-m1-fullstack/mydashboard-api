-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "productId" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("productId") ON DELETE RESTRICT ON UPDATE CASCADE;
