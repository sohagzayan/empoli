import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { TbRulerOff } from "react-icons/tb";

const getSession = async () => {
  const session = await getServerSession(authOptions);
  console.log("session", session?.user?.email);
  return session?.user;
};

export async function GET(request: Request, context: any) {
  const { params } = context;
  try {
    const isExitsUser = await prisma.user.findFirst({
      where: {
        id: Number(params.userId),
      },
    });
    if (!isExitsUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const preference = await prisma.userPreference.findFirst({
      where: {
        userId: Number(params.userId),
      },
      select: {
        currently_looking_for: true,
        interest_of_areas: true,
        work_mode: true,
      },
    });
    return NextResponse.json(preference);
  } catch (error: any) {
    console.log("error", error);
    console.log("error from get preference caver latter > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(request: Request, context: any) {
  const { params } = context;
  const body = await request.json();

  try {
    const isExitsUser = await prisma.user.findFirst({
      where: {
        id: Number(params.userId),
      },
    });
    if (!isExitsUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const exitsPreference = await prisma.userPreference.findFirst({
      where: {
        userId: Number(params.userId),
      },
    });

    if (exitsPreference) {
      const preference = await prisma.userPreference.update({
        where: { id: exitsPreference.id },
        data: { ...body },
      });
      console.log("application", preference);
      return NextResponse.json(preference);
    } else {
      const preference = await prisma.userPreference.create({
        data: {
          ...body,
          userId: Number(params.userId),
        },
      });
      return NextResponse.json(preference);
    }
  } catch (error: any) {
    console.log("error", error);
    console.log("error from get preference caver latter > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
