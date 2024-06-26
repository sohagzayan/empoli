import { prisma } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const getSession = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};

export async function POST(request: Request) {
  const body = await request.json();
  const session = await getSession();

  try {
    const exitsResume = await prisma.resume.findFirst({
      where: {
        userId: session?.user?.id,
      },
    });

    if (exitsResume) {
      const updated = await prisma.resume.update({
        where: {
          id: exitsResume.id,
        },
        data: body,
      });
      return NextResponse.json(updated);
    } else {
      const resume = await prisma.resume.create({
        data: {
          ...body,
          userId: parseInt(session.id),
        },
      });
      return NextResponse.json(resume);
    }
  } catch (error: any) {
    console.log("error from get extended profile  > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
