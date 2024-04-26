import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const getSession = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session?.user?.email);
  return session?.user;
};

export async function GET(request: Request) {
  const session = await getSession();
  const jobId = request.url.split("recent_cover_letter/")[1];

  try {
    const cover_latter = await prisma.recentCoverLetter.findFirst({
      where: {
        userId: session?.user?.id,
        jobId: parseInt(jobId),
      },
    });
    console.log("application", cover_latter);
    return NextResponse.json(cover_latter);
  } catch (error: any) {
    console.log("error", error);
    console.log("error from get recent caver latter > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
