import NextAuth, { type DefaultSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

declare module "next-auth" {
  interface Session {
    user: {
      role: string;
    } & DefaultSession["user"];
  }

  interface User {
    role: string;
  }
}

export const { signIn, signOut, auth, handlers } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const { email, password } = credentials as {
            email: string;
            password: string;
          };

          const user = await prisma.user.findFirst({
            where: { email },
          });

          if (!user) {
            throw new Error("Invalid email or password.");
          }

          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) {
            throw new Error("Invalid email or password.");
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Ensure role is set in token
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = (token.role as string) ?? "user"; // Default to "user" if role is undefined
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
