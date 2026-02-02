'use client'
import { useAccount, useDisconnect } from 'wagmi'

import WalletOptions from './walllet-options'
import WalletSignIn from './wallet-sign-in'
import Button from './button'

const WalletInfo = () => {
  const { address, isConnected, isConnecting } = useAccount()
  const { disconnect } = useDisconnect()

  if (isConnecting) {
    return <div className='animate-spin rounded-full border-white border-t-transparent h-9 w-9 border-4' />
  }

  return isConnected ? (
    <div className='text-center'>
      <h1 className='mb-4 text-3xl'>Connection successful!</h1>
      <div className='mb-4 text-xl break-all'>Connected with: {address}</div>
      <Button text='Disconnect' onClick={() => disconnect()} />
      <div className='mb-20' />
      <WalletSignIn />
    </div>
  ) : (
    <div className='text-center'>
      <h1 className='mb-8 text-3xl'>To start, use a connector from below to connect your wallet.</h1>
      <WalletOptions />
    </div>
  )
}

export default WalletInfo
