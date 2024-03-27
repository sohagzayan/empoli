-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'MEMBER', 'CANDIDATE', 'RECRUITER', 'EMPLOYER', 'SUPER_ADMIN');

-- CreateEnum
CREATE TYPE "JobCategory" AS ENUM ('INFORMATION_TECHNOLOGY', 'ENGINEERING', 'MARKETING', 'FINANCE', 'DESIGN', 'CUSTOMER_SERVICE', 'SALES', 'ADMINISTRATION', 'HUMAN_RESOURCES', 'OTHER');

-- CreateEnum
CREATE TYPE "InternshipType" AS ENUM ('IN_OFFICE', 'HYBRID', 'REMOTE', 'PART_TIME', 'FULL_TIME');

-- CreateEnum
CREATE TYPE "OpportunityType" AS ENUM ('INTERNSHIP', 'JOB');

-- CreateEnum
CREATE TYPE "StipendType" AS ENUM ('FIXED', 'NEGOTIABLE', 'PERFORMANCE_BASED', 'UNPAID');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "emailVerified" BOOLEAN DEFAULT false,
    "image" TEXT,
    "role" "Role" DEFAULT 'CANDIDATE',
    "phone" TEXT,
    "name" TEXT,
    "dob" TIMESTAMP(3),
    "major" TEXT,
    "language" VARCHAR(12) DEFAULT '',
    "picture" INTEGER DEFAULT 0,
    "updatedAt" INTEGER,
    "createdAt" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recruiter" (
    "id" SERIAL NOT NULL,
    "jobTitle" TEXT,
    "firstName" TEXT,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "emailVerified" BOOLEAN DEFAULT false,
    "image" TEXT,
    "role" "Role" DEFAULT 'CANDIDATE',
    "updatedAt" INTEGER,
    "createdAt" INTEGER,
    "companyName" TEXT,
    "companyWebsite" TEXT,
    "howDidYouHearAboutUs" TEXT,
    "howHeard" TEXT,
    "phone" TEXT,
    "survey" JSONB,
    "billing" JSONB,
    "subscribeToNewsletter" BOOLEAN DEFAULT false,
    "companyInfo" JSONB,
    "billingInfo" JSONB,
    "language" VARCHAR(12) DEFAULT '',
    "picture" INTEGER DEFAULT 0,

    CONSTRAINT "Recruiter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "token_type" TEXT,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "id_token" TEXT,
    "scope" TEXT,
    "session_state" TEXT,
    "expires_at" INTEGER,
    "userId" INTEGER NOT NULL,
    "rechuiterId" INTEGER,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobs" (
    "id" SERIAL NOT NULL,
    "job_title" VARCHAR(255) NOT NULL,
    "job_type" VARCHAR(255) NOT NULL,
    "job_description" TEXT NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "office_location" TEXT NOT NULL,
    "salary_range_min" DOUBLE PRECISION NOT NULL,
    "salary_range_max" DOUBLE PRECISION NOT NULL,
    "required_skills" TEXT[],
    "how_to_apply" JSONB,
    "experience" VARCHAR(255),
    "qualifications" TEXT,
    "job_responsibilities" TEXT NOT NULL,
    "applicationDeadline" TEXT NOT NULL,
    "assessmentQuestions" TEXT[],
    "numberOfOpenings" INTEGER NOT NULL,
    "job_duration" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "company_logo" TEXT NOT NULL,
    "perks" TEXT[],
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "recruiterId" INTEGER,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Recruiter_email_key" ON "Recruiter"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_rechuiterId_fkey" FOREIGN KEY ("rechuiterId") REFERENCES "Recruiter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "Recruiter"("id") ON DELETE SET NULL ON UPDATE CASCADE;
