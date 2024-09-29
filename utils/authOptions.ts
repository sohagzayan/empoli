import { prisma } from '@/lib/database';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // Google profile handling
      async profile(profile) {
        // You can fetch or define the role dynamically here if needed
        // For example, set default "user" role if it's not present
        return {
          id: profile.sub, // Required unique identifier
          email: profile.email,
          image: profile.picture,
          name: profile.name,
          role: 'SEEKER', // Default role as "user", or fetch from your logic if necessary
        };
      },
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials: any) {
        if (!credentials) {
          throw new Error('Please provide credentials');
        }

        const user: any = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error('Sorry, unrecognized username or password');
        }

        // Check if the user has signed up with Google and doesn't have a password
        if (user && !user.password) {
          const account: any = await prisma.account.findFirst({
            where: {
              userId: user.id,
              provider: 'google',
            },
          });
          if (account) {
            throw new Error(
              'An account with an alternative sign-in method is already associated with this email address.',
            );
          }
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.password,
        );

        if (!passwordMatch) {
          throw new Error('Sorry, unrecognized username or password');
        }

        return user;
      },
    }),
  ],

  secret: process.env.NEXT_PUBLIC_SECRET,
  session: {
    strategy: 'jwt',
  },

  callbacks: {
    // JWT callback is called whenever a token is created or updated
    async jwt({ token, user, trigger, session: newData }) {
      if (user) {
        // Assign role from the user if available (for new sign-ins)
        token.role = user.role || token.role || 'user'; // Default to 'user' if role is not provided
      }
      // Handle token updates
      if (trigger === 'update' && newData) {
        token = { ...token, ...newData };
      }
      return token;
    },

    // Session callback is called when a session is checked
    async session({ session, token }) {
      // Attach role from token to the session object
      if (session?.user) {
        session.user.role = token.role as string; // Ensure role is a string
      }
      return session;
    },
  },
};
