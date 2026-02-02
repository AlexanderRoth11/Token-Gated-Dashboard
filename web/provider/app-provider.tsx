'use client'

import { getConfig } from '@/wagmi-config/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { SessionProvider } from 'next-auth/react'

const queryClient = new QueryClient()

export default function AppProvider(props: { children: ReactNode }) {
  return (
    <SessionProvider>
      <WagmiProvider config={getConfig()}>
        <QueryClientProvider client={queryClient}>{props.children}</QueryClientProvider>
      </WagmiProvider>
    </SessionProvider>
  )
}
