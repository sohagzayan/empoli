import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export async function GET(request: Request) {
  try {
    const popular_career_interests = await prisma.job.groupBy({
      by: ["job_title"],
      _count: {
        job_title: true,
      },
      orderBy: {
        _count: {
          job_title: "desc",
        },
      },
      take: 20, // Limit to the top 15 categories
    });

    console.log("application", popular_career_interests);
    return NextResponse.json(popular_career_interests);
  } catch (error: any) {
    console.log("error", error);
    console.log(
      "error from get popular_career_interests  caver latter > >",
      error
    );
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
