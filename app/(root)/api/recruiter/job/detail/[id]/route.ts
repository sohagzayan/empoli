import { prisma } from "@/lib/database";
import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.url.split("detail/")[1];
  console.log("idddd", id);
  try {
    const jobDetails = await prisma.job.findFirst({
      where: {
        id: parseInt(id),
      },
    });

    console.log("job detial", jobDetails);

    if (jobDetails) {
      return NextResponse.json(jobDetails);
    } else {
      return NextResponse.json({ message: "Job not found" });
    }
  } catch (error: any) {
    console.log("error form jobs geting >>>>>", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
