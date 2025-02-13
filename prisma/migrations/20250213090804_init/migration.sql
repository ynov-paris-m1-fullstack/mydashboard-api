-- CreateTable
CREATE TABLE "Sale" (
    "saleId" SERIAL NOT NULL,
    "quantitySold" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("saleId")
);
