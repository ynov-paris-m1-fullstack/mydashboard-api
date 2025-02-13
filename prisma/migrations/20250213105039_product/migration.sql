-- CreateTable
CREATE TABLE "Product" (
    "productId" SERIAL NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "category" TEXT NOT NULL DEFAULT '',
    "price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "brand" TEXT NOT NULL DEFAULT '',
    "releaseYear" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customerId" SERIAL NOT NULL,
    "username" TEXT NOT NULL DEFAULT '',
    "age" INTEGER NOT NULL DEFAULT 0,
    "gender" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customerId")
);
