/*
  Warnings:

  - You are about to drop the `Onboarding_Extended_profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Onboarding_culture` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Onboarding_preferences` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Onboarding_resume` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Made the column `experienceInRole` on table `Profile` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Onboarding_Extended_profile" DROP CONSTRAINT "Onboarding_Extended_profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "Onboarding_culture" DROP CONSTRAINT "Onboarding_culture_userId_fkey";

-- DropForeignKey
ALTER TABLE "Onboarding_preferences" DROP CONSTRAINT "Onboarding_preferences_userId_fkey";

-- DropForeignKey
ALTER TABLE "Onboarding_resume" DROP CONSTRAINT "Onboarding_resume_userId_fkey";

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "createdAt" INTEGER,
ADD COLUMN     "updatedAt" INTEGER,
ALTER COLUMN "experienceInRole" SET NOT NULL;

-- DropTable
DROP TABLE "Onboarding_Extended_profile";

-- DropTable
DROP TABLE "Onboarding_culture";

-- DropTable
DROP TABLE "Onboarding_preferences";

-- DropTable
DROP TABLE "Onboarding_resume";

-- CreateTable
CREATE TABLE "Preferences" (
    "id" SERIAL NOT NULL,
    "job_search_status" TEXT NOT NULL,
    "preferred_job_type" TEXT NOT NULL,
    "desired_salary" TEXT NOT NULL,
    "desired_salary_info" JSONB NOT NULL,
    "preferred_role" TEXT[],
    "preferred_work_locations" TEXT NOT NULL,
    "remote_work_flexibility" BOOLEAN NOT NULL,
    "userId" INTEGER NOT NULL,
    "updatedAt" INTEGER,
    "createdAt" INTEGER,

    CONSTRAINT "Preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Culture" (
    "id" SERIAL NOT NULL,
    "technology_interests" TEXT[],
    "unpreferred_technologies" TEXT[],
    "primary_motivators" TEXT NOT NULL,
    "future_career_aspirations" TEXT NOT NULL,
    "preferred_work_environment" TEXT NOT NULL,
    "most_important_to_you_for_next_job" TEXT[],
    "remote_work_flexibility_preference" TEXT NOT NULL,
    "quiet_office_preference_priority" TEXT NOT NULL,
    "next_job_desires" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "updatedAt" INTEGER,
    "createdAt" INTEGER,

    CONSTRAINT "Culture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resume" (
    "id" SERIAL NOT NULL,
    "resume" TEXT NOT NULL,
    "resumeId" TEXT,
    "userId" INTEGER NOT NULL,
    "updatedAt" INTEGER,
    "createdAt" INTEGER,

    CONSTRAINT "Resume_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Preferences_userId_key" ON "Preferences"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Culture_userId_key" ON "Culture"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Resume_userId_key" ON "Resume"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Preferences" ADD CONSTRAINT "Preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Culture" ADD CONSTRAINT "Culture_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
