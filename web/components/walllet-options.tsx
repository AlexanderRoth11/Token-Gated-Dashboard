'use client'
import { useConnect } from 'wagmi'
import Button from './button'

const WalletOptions = () => {
  const { connectors, connect } = useConnect()

  return (
    <div className='flex gap-4 justify-center flex-wrap'>
      {connectors.map((connector) => (
        <Button key={connector.uid} text={connector.name} onClick={() => connect({ connector })} />
      ))}
    </div>
  )
}

export default WalletOptions
