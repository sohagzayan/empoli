-- CreateEnum
CREATE TYPE "OnboardingStep" AS ENUM ('SIGN_UP', 'RECRUITER_COMPANY_INFO', 'RECRUITER_PAYMENT_INFO', 'RECRUITER_BILLING_INFO', 'COMPLETED');

-- CreateTable
CREATE TABLE "Recruiter" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "company_name" TEXT NOT NULL,
    "company_website" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "how_did_you_hear_about_us" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "address" TEXT,
    "position" TEXT,
    "linkedinProfile" TEXT,
    "website" TEXT,
    "bio" TEXT,
    "profilePicture" TEXT,
    "onboardingStep" "OnboardingStep"[],
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "roles" TEXT[] DEFAULT ARRAY['recruiter']::TEXT[],

    CONSTRAINT "Recruiter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecruiterCompanyInfo" (
    "id" SERIAL NOT NULL,
    "where_is_your_company_based" TEXT,
    "remote_work_policy" TEXT,
    "planned_flexible_job_openings" TEXT,
    "sample_job_posting" TEXT,
    "flexible_job_types" TEXT,
    "arraignment_job_flexible_ruls" TEXT NOT NULL,
    "recruiterId" INTEGER NOT NULL,

    CONSTRAINT "RecruiterCompanyInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecruiterPaymentInfo" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "card_number" TEXT NOT NULL,
    "expriation_date" TEXT NOT NULL,
    "cvv_cvc" TEXT NOT NULL,
    "recruiterId" INTEGER NOT NULL,

    CONSTRAINT "RecruiterPaymentInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecruiterBillingInfo" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "state_province" TEXT NOT NULL,
    "posttal_code" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "recruiterId" INTEGER NOT NULL,

    CONSTRAINT "RecruiterBillingInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobListing" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "salary" TEXT,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "recruiterId" INTEGER NOT NULL,
    "recruiterCompanyInfoId" INTEGER,

    CONSTRAINT "JobListing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recruiter_email_key" ON "Recruiter"("email");

-- AddForeignKey
ALTER TABLE "RecruiterCompanyInfo" ADD CONSTRAINT "RecruiterCompanyInfo_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "Recruiter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecruiterPaymentInfo" ADD CONSTRAINT "RecruiterPaymentInfo_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "Recruiter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecruiterBillingInfo" ADD CONSTRAINT "RecruiterBillingInfo_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "Recruiter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobListing" ADD CONSTRAINT "JobListing_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "Recruiter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
