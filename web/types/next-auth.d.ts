import NextAuth from 'next-auth'

declare module 'next-auth' {
    interface Session {
        address?: string
    }

    interface User {
        name?: string
    }
}
