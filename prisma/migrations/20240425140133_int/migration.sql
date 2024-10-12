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
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "emailVerified" BOOLEAN DEFAULT false,
    "image" TEXT,
    "role" "Role" DEFAULT 'CANDIDATE',
    "phone" TEXT,
    "dob" TIMESTAMP(3),
    "major" TEXT,
    "language" VARCHAR(12) DEFAULT '',
    "picture" INTEGER DEFAULT 0,
    "updatedAt" INTEGER,
    "createdAt" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Onboarding_Extended_profile" (
    "id" SERIAL NOT NULL,
    "where_you_based" TEXT NOT NULL,
    "currentRole" TEXT NOT NULL,
    "experienceInRole" TEXT NOT NULL,
    "isStudentOrNewGrad" TEXT,
    "job_title" TEXT,
    "company" TEXT,
    "isEmployed" BOOLEAN,
    "linkedinProfile" TEXT,
    "personalWebsite" TEXT,
    "userId" INTEGER NOT NULL,
    "updatedAt" INTEGER,
    "createdAt" INTEGER,

    CONSTRAINT "Onboarding_Extended_profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Onboarding_preferences" (
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

    CONSTRAINT "Onboarding_preferences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Onboarding_culture" (
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

    CONSTRAINT "Onboarding_culture_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Onboarding_resume" (
    "id" SERIAL NOT NULL,
    "resume" TEXT NOT NULL,
    "resumeId" TEXT,
    "userId" INTEGER NOT NULL,
    "updatedAt" INTEGER,
    "createdAt" INTEGER,

    CONSTRAINT "Onboarding_resume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" SERIAL NOT NULL,
    "where_you_based" TEXT,
    "currentRole" TEXT,
    "experienceInRole" TEXT,
    "isStudentOrNewGrad" TEXT,
    "job_title" TEXT,
    "company" TEXT,
    "isEmployed" BOOLEAN,
    "linkedinProfile" TEXT,
    "personalWebsite" TEXT,
    "social_profiles" JSONB,
    "currently_looking_for" TEXT[],
    "work_mode" TEXT[],
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "UserSkills" TEXT[],
    "achievements" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserWorkExperience" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "job_title" TEXT NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT,
    "currently_work_here" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT NOT NULL,
    "currently_looking_for" TEXT[],
    "position" TEXT NOT NULL,
    "seles_position" JSONB,
    "tecnical_position" TEXT[],
    "profileId" INTEGER NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserWorkExperience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserEducation" (
    "id" SERIAL NOT NULL,
    "college_university" TEXT NOT NULL,
    "graduation" TEXT NOT NULL,
    "degree_major" TEXT NOT NULL,
    "GPA_min" INTEGER NOT NULL,
    "GPA_max" INTEGER NOT NULL,
    "profileId" INTEGER NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserEducation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserIdentity" (
    "id" SERIAL NOT NULL,
    "pronouns" TEXT NOT NULL,
    "display_pronouns_my_profile" BOOLEAN NOT NULL DEFAULT false,
    "gender_identity" TEXT NOT NULL,
    "race_ethnicity" INTEGER NOT NULL,
    "profileId" INTEGER NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserIdentity_pkey" PRIMARY KEY ("id")
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
    "experience" TEXT NOT NULL,
    "qualifications" TEXT,
    "job_responsibilities" TEXT NOT NULL,
    "applicationDeadline" TEXT NOT NULL,
    "assessmentQuestions" JSONB,
    "numberOfOpenings" INTEGER NOT NULL,
    "job_duration" INTEGER NOT NULL,
    "company" TEXT NOT NULL,
    "perks" TEXT[],
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "startDate" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,

    CONSTRAINT "jobs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" SERIAL NOT NULL,
    "cover_latter" TEXT NOT NULL,
    "your_availability" BOOLEAN NOT NULL,
    "assessment" JSONB[],
    "resume" TEXT,
    "unavailable_reason" TEXT,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecentCoverLetter" (
    "id" SERIAL NOT NULL,
    "cover_latter" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "jobId" INTEGER NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RecentCoverLetter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPreference" (
    "id" SERIAL NOT NULL,
    "interest_of_areas" TEXT[],
    "currently_looking_for" TEXT[],
    "work_mode" TEXT[],
    "userId" INTEGER NOT NULL,
    "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPreference_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "Onboarding_Extended_profile" ADD CONSTRAINT "Onboarding_Extended_profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Onboarding_preferences" ADD CONSTRAINT "Onboarding_preferences_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Onboarding_culture" ADD CONSTRAINT "Onboarding_culture_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Onboarding_resume" ADD CONSTRAINT "Onboarding_resume_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserWorkExperience" ADD CONSTRAINT "UserWorkExperience_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserEducation" ADD CONSTRAINT "UserEducation_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserIdentity" ADD CONSTRAINT "UserIdentity_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecentCoverLetter" ADD CONSTRAINT "RecentCoverLetter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecentCoverLetter" ADD CONSTRAINT "RecentCoverLetter_jobId_fkey" FOREIGN KEY ("jobId") REFERENCES "jobs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPreference" ADD CONSTRAINT "UserPreference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
