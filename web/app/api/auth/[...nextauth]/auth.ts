
import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials'
import { SiweMessage } from 'siwe'

export const config = {
    providers: [
        CredentialsProvider({
            name: 'Ethereum',
            credentials: {
                message: {
                    label: 'Message',
                    type: 'text',
                    placeholder: '0x0',
                },
                signature: {
                    label: 'Signature',
                    type: 'text',
                    placeholder: '0x0',
                },
            },
            async authorize(credentials) {
                try {
                    const siwe = new SiweMessage(
                        JSON.parse(credentials?.message || '{}')
                    )

                    const nextAuthUrl = new URL(process.env.NEXTAUTH_URL!)
                    if (siwe.domain !== nextAuthUrl.host) {
                        return null
                    }

                    await siwe.validate(credentials?.signature || '')
                    return {
                        id: siwe.address,
                        name: siwe.address,
                        email: `${siwe.address}@ethereum.local`,
                    }
                } catch (e) {
                    console.log(e)
                    return null
                }
            },
        }),
    ],
    session: { strategy: 'jwt' },
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            session.address = token.sub
            session.user!.name = token.sub
            return session
        },
    },

} satisfies NextAuthOptions


