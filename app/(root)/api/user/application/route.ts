import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const getSession = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session?.user?.email);
  return session?.user;
};

export async function POST(request: Request) {
  const body = await request.json();
  const session = await getSession();
  console.log("session form router >>> ", session);
  console.log("req body ....", body);
  const {
    jobId,
    cover_latter,
    your_availability,
    question1,
    question2,
    unavailable_reason,
    resume,
  } = body;
  try {
    const job = await prisma.job.findFirst({ where: { id: jobId } });
    console.log("job job >>", job);
    const application = await prisma.application.create({
      data: {
        cover_latter,
        your_availability,
        assessment: [question1, question2],
        resume,
        unavailable_reason,
        jobId,
        userId: session?.id as number,
      },
    });
    if (application) {
      const job = await prisma.job.findFirst({ where: { id: jobId } });
      await prisma.recentCoverLetter.create({
        data: {
          category: job?.job_title || "",
          cover_latter: cover_latter,
          jobId,
          userId: session?.id as number,
        },
      });
    }
    console.log("application", application);
    return NextResponse.json(
      { message: "application submit successful" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("error", error);
    console.log("error from application > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
