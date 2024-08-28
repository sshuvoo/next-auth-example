import NextAuth from "next-auth";
import "next-auth/jwt";

import Spotify from "next-auth/providers/spotify";

export const { handlers, auth, signIn, signOut } = NextAuth({
   providers: [
      Spotify({
         clientId: process.env.AUTH_SPOTIFY_ID,
         clientSecret: process.env.AUTH_SPOTIFY_SECRET,
         authorization: { params: { scope: "user-top-read user-read-email" } },
      }),
   ],
});
