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
    console.log("body > ", body);
    console.log("session form router >>> ", session);

    const exits = await prisma.onboarding_Extended_profile.findFirst({
      where: {
        userId: session?.user?.id,
      },
    });

    if (exits) {
      const updated = await prisma.onboarding_Extended_profile.update({
        where: {
          id: exits.id,
        },
        data: body,
      });
      return NextResponse.json(updated);
    } else {
      const extended_profile = await prisma.onboarding_Extended_profile.create({
        data: {
          ...body,
          userId: parseInt(session.id),
        },
      });
      return NextResponse.json(extended_profile);
    }
  } catch (error: any) {
    console.log("error from get extended profile  > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
