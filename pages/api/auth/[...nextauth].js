import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          response_type: "code",
          scope: "openid email profile https://www.googleapis.com/auth/drive"
        }
      }
    }),
    
  ],
  secret: process.env.SECRET,

  session: {
    strategy: "jwt",
  },
  jwt: {
  },
  pages: {
  },
  callbacks: {
  },
  events: {},
  theme: {
    colorScheme: "light",
  },
  debug: false,
})
