/*
  Warnings:

  - The values [STUDENT,MEMBER,CANDIDATE,EMPLOYER,SUPER_ADMIN] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `major` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `picture` on the `User` table. All the data in the column will be lost.
  - The `createdAt` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Application` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Culture` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Preferences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RecentCoverLetter` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resume` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserEducation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserIdentity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserPreference` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserWorkExperience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jobs` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('SEEKER', 'RECRUITER', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "User" ALTER COLUMN "role" SET DEFAULT 'SEEKER';
COMMIT;

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_jobId_fkey";

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_userId_fkey";

-- DropForeignKey
ALTER TABLE "Culture" DROP CONSTRAINT "Culture_userId_fkey";

-- DropForeignKey
ALTER TABLE "Preferences" DROP CONSTRAINT "Preferences_userId_fkey";

-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "RecentCoverLetter" DROP CONSTRAINT "RecentCoverLetter_jobId_fkey";

-- DropForeignKey
ALTER TABLE "RecentCoverLetter" DROP CONSTRAINT "RecentCoverLetter_userId_fkey";

-- DropForeignKey
ALTER TABLE "Resume" DROP CONSTRAINT "Resume_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserEducation" DROP CONSTRAINT "UserEducation_profileId_fkey";

-- DropForeignKey
ALTER TABLE "UserIdentity" DROP CONSTRAINT "UserIdentity_profileId_fkey";

-- DropForeignKey
ALTER TABLE "UserPreference" DROP CONSTRAINT "UserPreference_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserWorkExperience" DROP CONSTRAINT "UserWorkExperience_profileId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "major",
DROP COLUMN "picture",
ALTER COLUMN "role" SET NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'SEEKER',
DROP COLUMN "updatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
DROP COLUMN "createdAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Application";

-- DropTable
DROP TABLE "Culture";

-- DropTable
DROP TABLE "Preferences";

-- DropTable
DROP TABLE "Profile";

-- DropTable
DROP TABLE "RecentCoverLetter";

-- DropTable
DROP TABLE "Resume";

-- DropTable
DROP TABLE "UserEducation";

-- DropTable
DROP TABLE "UserIdentity";

-- DropTable
DROP TABLE "UserPreference";

-- DropTable
DROP TABLE "UserWorkExperience";

-- DropTable
DROP TABLE "jobs";

-- DropEnum
DROP TYPE "InternshipType";

-- DropEnum
DROP TYPE "JobCategory";

-- DropEnum
DROP TYPE "OpportunityType";

-- DropEnum
DROP TYPE "StipendType";
