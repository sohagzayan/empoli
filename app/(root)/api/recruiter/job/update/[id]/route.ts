import { prisma } from "@/lib/database";
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const id = request.url.split("update/")[1];

  console.log("body", body);
  console.log("id", id);

  try {
    // const existingUser = await prisma.recruiter.findFirst({
    //   where: {
    //     id: parseInt(id),
    //   },
    // });

    // console.log("existingUser", existingUser);

    // const res = await prisma.recruiter.update({
    //   where: {
    //     email: existingUser?.email,
    //   },
    //   data: {
    //     survey: body,
    //   },
    // });
    console.log("res", "res");
    return NextResponse.json("jobs update");
  } catch (error: any) {
    console.log("error form jobs geting >>>>>", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
