import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
// import { v4 as uuid } from 'uuid'

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      email,
      password,
      first_name,
      last_name,
      company_name,
      company_website,
      job_title,
      how_did_you_hear_about_us,
    } = body;

    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters long." },
        { status: 400 }
      );
    }

    try {
      const existingRecruiter = await prisma.recruiter.findFirst({
        where: {
          email: email,
        },
      });

      if (existingRecruiter) {
        return NextResponse.json(
          { message: "Email is already in use." },
          { status: 500 }
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      let recruiter = await prisma.recruiter.create({
        data: {
          first_name: first_name,
          email: email,
          last_name: last_name,
          company_name: company_name,
          company_website: company_website,
          password: hashedPassword,
          job_title: job_title,
          onboardingStep: ["SIGN_UP"],
          how_did_you_hear_about_us: how_did_you_hear_about_us,
          createdAt: Math.floor(Date.now() / 1000),
        },
      });
      // Create the specific profile based on the role
      return NextResponse.json(
        { message: "Signup successful" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.log("error auth", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
