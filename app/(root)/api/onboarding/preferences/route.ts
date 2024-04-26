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
    const exitsPreferences = await prisma.preferences.findFirst({
      where: {
        userId: session?.user?.id,
      },
    });

    if (exitsPreferences) {
      const updated = await prisma.preferences.update({
        where: {
          id: exitsPreferences.id,
        },
        data: body,
      });
      return NextResponse.json(updated);
    } else {
      const preferences = await prisma.preferences.create({
        data: {
          ...body,
          userId: parseInt(session.id),
        },
      });
      return NextResponse.json(preferences);
    }
  } catch (error: any) {
    console.log("error from get extended profile  > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
