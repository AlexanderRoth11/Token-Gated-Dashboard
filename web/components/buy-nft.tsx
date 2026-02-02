'use client'
import { getAccessNFT } from '@/util/eth'
import { ethers } from 'ethers'
import { useAccount } from 'wagmi'
import Button from './button'

const BuyNft = () => {
  const { address } = useAccount()

  const mint = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum as any)

      const network = await provider.getNetwork()

      if (network.chainId !== BigInt(11155111)) {
        throw 'Please change to the sepoila network. Id: 11155111'
      }

      const signer = await provider.getSigner(address)
      const contract = getAccessNFT(signer)
      const tx = await contract.mint({
        value: ethers.parseEther('0.001'),
      })
      await tx.wait()
      alert('NFT minted successfully!')
      window.location.reload()
    } catch (err) {
      console.error(err)
      alert('Mint failed: ' + err)
    }
  }

  return (
    <div className='text-center flex flex-col gap-4'>
      <h1 className='text-3xl'>Dashboard content is available only for NFT owners.</h1>
      <a href={`https://sepolia.etherscan.io/address/${process.env.NEXT_PUBLIC_NFT_ADDRESS}`} target='_blank' rel='noopener noreferrer'>
        NFT Address
      </a>
      <div>
        <Button text='Mint NFT' onClick={mint} />
      </div>
    </div>
  )
}

export default BuyNft
