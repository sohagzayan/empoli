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

    const exits = await prisma.profile.findFirst({
      where: {
        userId: session?.id,
      },
    });

    if (exits) {
      const updated = await prisma.profile.update({
        where: {
          id: exits.id,
        },
        data: body,
      });
      const updatedUser = await prisma.user.findFirst({
        where: { id: session.id },
        include: {
          profile: true,
          resume: true,
          preferences: true,
          culture: true,
        },
      });
      return NextResponse.json({
        profile: updated,
        user: updatedUser,
      });
    } else {
      const extended_profile = await prisma.profile.create({
        data: {
          ...body,
          userId: parseInt(session.id),
        },
      });
      const updatedUser = await prisma.user.findFirst({
        where: { id: session.id },
        include: {
          profile: true,
          resume: true,
          preferences: true,
          culture: true,
        },
      });
      return NextResponse.json({
        profile: extended_profile,
        user: updatedUser,
      });
    }
  } catch (error: any) {
    console.log("error from get extended profile  > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
