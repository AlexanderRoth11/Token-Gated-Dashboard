'use client'
import { useAccount, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'
import { getCsrfToken, signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Button from './button'

const WalletSignIn = () => {
  const { signMessageAsync } = useSignMessage()
  const { address, isConnected } = useAccount()
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleLogin = async () => {
    try {
      const callbackUrl = '/protected'
      const message = new SiweMessage({
        domain: window.location.host,
        address: address,
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: 1,
        nonce: await getCsrfToken(),
      })

      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })

      signIn('credentials', {
        message: JSON.stringify(message),
        redirect: false,
        signature,
        callbackUrl,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return session ? (
    <div className='text-center'>
      <h1 className='mb-4 text-3xl'>Sign in successful!</h1>
      <div className='mb-4 text-xl break-all'>Signed in as: {session.user?.name}</div>
      <Button text='Sign Out' onClick={() => signOut()} />
      <div className='mb-20' />
      <Button text='To the Dashbard' onClick={() => router.push('/dashboard')} />
    </div>
  ) : (
    <div className='text-center'>
      <h1 className='mb-4 text-3xl'>To use the dashboard, please sign in.</h1>
      <Button text='Sign in' onClick={() => handleLogin()} />
    </div>
  )
}

export default WalletSignIn
