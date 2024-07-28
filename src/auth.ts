import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { User } from './app/models/userModel';
import { compare } from 'bcryptjs';
import { connectToDatabase } from './utils';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        contact_no: { label: "Contact Number", type: "number", placeholder: "0000000000", name: "contact_no" },
        password: { label: "Password", type: "password", name: "password" },
      },
      authorize: async (credentials) => {
        const contact_no = credentials?.contact_no as string;
        const password = credentials?.password as string;
    
        await connectToDatabase();
        const user = await User.findOne({ contact_no }).select("+password");
    
        if (!user || !user.password) {
            throw new Error('Invalid contact number or password');
        }
    
        const isMatch = await compare(password, user.password);
    
        if (!isMatch) {
            throw new Error('Invalid contact number or password');
        }
    
        // Return only the necessary fields, excluding email
        return {
            id: user._id.toString(),
            name: user.name,
            contact_no: user.contact_no,
            // Remove email or any other fields you do not need
        };
      }
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
          token.id = user.id;
          token.name = user.name;
          token.contact_no = user.contact_no; // Include contact_no
          // Remove email
      }
      console.log('JWT Token:', token); // For debugging
      return token;
  },
  async session({ session, token }) {
    session.user.id = token.id as string;
    session.user.name = token.name as string;
    session.user.contact_no = token.contact_no as string; // Include contact_no
    // Remove email
    console.log('Session:', session); // For debugging
    return session;
},
  },
});
