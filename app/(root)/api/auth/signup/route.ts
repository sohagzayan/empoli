import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
// import { v4 as uuid } from 'uuid'

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, fullName } = body;

    console.log("all datas >", body);

    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters long." },
        { status: 400 }
      );
    }

    try {
      const existingUser = await prisma.user.findFirst({
        where: {
          email: email,
        },
      });

      if (existingUser) {
        return NextResponse.json(
          { message: "Email is already in use." },
          { status: 500 }
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("body", body);

      let user = await prisma.user.create({
        data: {
          name: fullName,
          email: email,
          password: hashedPassword,
          emailVerified: false,
          createdAt: Math.floor(Date.now() / 1000),
        },
      });
      // Create the specific profile based on the role
      return NextResponse.json(
        { message: "Signup successful" },
        { status: 201 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.log("error auth", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
