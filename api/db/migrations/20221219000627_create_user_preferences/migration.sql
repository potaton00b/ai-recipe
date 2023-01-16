-- CreateEnum
CREATE TYPE "Diet" AS ENUM ('ANYTHING', 'PALEO', 'VEGETARIAN', 'VEGAN', 'KETOGENIC', 'MEDITERRANEAN');

-- CreateEnum
CREATE TYPE "Allergen" AS ENUM ('MILK', 'EGGS', 'FISH', 'CRUSTACEAN_SHELLFISH', 'TREE_NUTS', 'PEANUTS', 'WHEAT', 'SOYBEANS', 'SESAME');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "externalId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreferences" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "diet" "Diet" NOT NULL DEFAULT 'ANYTHING',
    "allergens" "Allergen"[] DEFAULT ARRAY[]::"Allergen"[],
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserPreferences_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_externalId_key" ON "User"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "UserPreferences_userId_key" ON "UserPreferences"("userId");

-- AddForeignKey
ALTER TABLE "UserPreferences" ADD CONSTRAINT "UserPreferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
