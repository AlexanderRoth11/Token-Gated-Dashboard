import NextAuth, { NextAuthOptions } from 'next-auth'
import { config } from './auth'


export const authOptions: NextAuthOptions = {
    ...config
}

const authHandler = NextAuth(authOptions)

export { authHandler as GET, authHandler as POST }