import { ethers, Signer } from "ethers"
import SimpleContract from '../contracts/SimpleContract.json'

export const provider = new ethers.JsonRpcProvider(process.env.NEXT_RPC_URL)

export const getAccessNFT = (signer?: Signer) => {
    return new ethers.Contract(
        process.env.NEXT_PUBLIC_NFT_ADDRESS || '',
        SimpleContract.abi,
        signer ?? provider
    )
}

export async function getEthBalance(address: string) {
    const balance = await provider.getBalance(address)
    return ethers.formatEther(balance)
}