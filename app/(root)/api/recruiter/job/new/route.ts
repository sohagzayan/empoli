import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
// import { getSession } from "next-auth/react";
import { NextApiRequest } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
// import { v4 as uuid } from 'uuid'

const getSession = async () => {
  const session = await getServerSession(authOptions);
  console.log("hello", session?.user?.email);
  return session?.user;
};

export async function POST(request: Request) {
  const body = await request.json();
  const session = await getSession();
  console.log("req body", body);
  const {
    job_type,
    experience,
    qualifications,
    job_description,
    applicationDeadline,
    job_duration,
    location,
    job_responsibilities,
    required_skills,
    office_location,
    numberOfOpenings,
    salary_range_min,
    salary_range_max,
    assessment_question1,
    assessment_question2,
    job_title,
    assessmentQuestions,
    perks,
    how_to_apply,
    company,
  } = body;
  // console.log("im from api >>", session);
  try {
    const job = await prisma.job.create({
      data: {
        required_skills: required_skills,
        numberOfOpenings: parseInt(numberOfOpenings),
        salary_range_min: parseFloat(salary_range_min),
        salary_range_max: parseInt(salary_range_max),
        assessmentQuestions: assessmentQuestions,
        job_title,
        job_type,
        experience: experience.toLowerCase(),
        qualifications,
        job_description,
        applicationDeadline,
        job_duration: parseInt(job_duration),
        location,
        job_responsibilities,
        perks,
        how_to_apply,
        office_location,
        company,
        userId: session?.id as number,
      },
    });
    console.log("user", job);
    return NextResponse.json(
      { message: "job create successful" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("error from job post > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
