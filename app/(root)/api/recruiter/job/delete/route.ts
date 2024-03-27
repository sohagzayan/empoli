import { prisma } from "@/lib/database";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
// import { v4 as uuid } from 'uuid'

export async function DELETE(request: Request) {
  return NextResponse.json({ message: "delete" }, { status: 500 });
}
