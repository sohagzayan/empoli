import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.NEXT_PUBLIC_SECRET;

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret });
  const isAuthenticated = !!token;
  console.log("isAuthenticated >>>", isAuthenticated);
  console.log("req.nextUrl.pathname >>>", req.nextUrl.pathname);

  // if (
  //   req.nextUrl.pathname.includes("/sign-up") ||
  //   req.nextUrl.pathname.includes("/sign-in")
  // ) {
  //   if (isAuthenticated) {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   }
  // }

  // if (req.nextUrl.pathname == "/user" && !isAuthenticated) {
  //   return NextResponse.redirect(new URL("/user/login", req.url));
  // }

  // if (!isAuthenticated && req.nextUrl.pathname.startsWith("/property/")) {
  //   return NextResponse.redirect(new URL("/", req.url));
  // }
}
