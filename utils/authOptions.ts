import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/database";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      async profile(profile) {
        return profile;
        // return {
        //   id: profile.sub,
        //   email: profile.email,
        //   image: profile.picture,
        //   firstName: profile.name,
        //   lastName: profile.lastName,
        //   role: profile.role,
        // };
      },
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Please provide credentials");
        }

        const user: any = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
          include: {
            preferences: true,
            culture: true,
            profile: true,
            resume: true,
          },
        });

        // console.log("user from auth option", user);
        if (!user) {
          throw new Error("Sorry, unrecognized username or password");
        }
        if (user && !user.password) {
          const account: any = await prisma.account.findFirst({
            where: {
              userId: user.id,
              provider: "google",
            },
          });
          if (account) {
            throw new Error(
              "An account with an alternative sign-in method is already associated with this email address."
            );
          }
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!passwordMatch) {
          throw new Error("Sorry, unrecognized username or password");
        }
        return user;
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_SECRET,
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user, trigger, session: newData }) {
      if (user) {
        // console.log("user form jwt >", user);
        // token.userId = user.id;
        console.log("checking user list >>", user);
        Object.assign(token, user);
      }
      if (trigger === "update") {
        token = newData;
      }
      return token;
    },
    async session({ session, token }) {
      // console.log("session?.user", session?.user);
      // console.log("session?.user token", token);

      if (session?.user) {
        session.user = token;
        // session.user.name = token.name;
        // session.user.role = token.role as string;
      }
      // console.log("session from auth", session);
      return session;
    },
  },
};
