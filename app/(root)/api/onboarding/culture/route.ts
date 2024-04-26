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
  console.log("body >", body);
  try {
    const exitsCulture = await prisma.culture.findFirst({
      where: {
        userId: session?.user?.id,
      },
    });

    if (exitsCulture) {
      const updated = await prisma.culture.update({
        where: {
          id: exitsCulture.id,
        },
        data: body,
      });
      return NextResponse.json(updated);
    } else {
      const culture = await prisma.culture.create({
        data: {
          ...body,
          userId: parseInt(session.id),
        },
      });
      return NextResponse.json(culture);
    }
  } catch (error: any) {
    console.log("error from get extended profile  > >", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
