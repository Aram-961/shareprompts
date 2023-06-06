import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { connectDB } from '@utils/db';
// import { signIn } from "next-auth/react";

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
// });

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({ session }) {
        try {
            await connectDB();

            // check if user exist

            // else create a user and connect it to db
            
        } catch (error) {
            console.log(error);
        }

    },

    async signIn({ profile }) {

    },
})

export { handler as GET, handler as POST }