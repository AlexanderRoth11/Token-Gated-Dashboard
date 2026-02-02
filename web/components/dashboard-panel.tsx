import { getEthBalance, provider } from '@/util/eth'
import { Contract } from 'ethers'

const DashboardPanel = async ({ address, balance, nft }: { address: string; balance: BigInt; nft: Contract }) => {
  const ethBalance = parseFloat(await getEthBalance(address)).toFixed(4)
  const network = await provider.getNetwork()
  const totalSupply = await nft.totalSupply()
  const maxSupply = await nft.maxSupply()
  const owner = await nft.owner()
  const name = await nft.name()
  const txCount = await provider.getTransactionCount(address)

  return (
    <div className='flex gap-16 mx-auto break-all'>
      <div className='max-w-xl flex flex-col gap-2'>
        <h1 className='text-3xl'>{name}</h1>
        <div>My balance: {balance.toString()}</div>
        <div>
          Total tokens minted: {totalSupply} / {maxSupply}
        </div>
        <div>
          Owner:{' '}
          <a href={`https://sepolia.etherscan.io/address/${owner}`} target='_blank' rel='noopener noreferrer'>
            {owner}
          </a>
        </div>
      </div>

      <div className='max-w-xl flex flex-col gap-2'>
        <h1 className='text-3xl'>{network.name.toUpperCase()}</h1>
        <div>My eth balance: {ethBalance}</div>
        <div>Transactions sent: {txCount}</div>
        <div>
          My address:{' '}
          <a href={`https://sepolia.etherscan.io/address/${address}`} target='_blank' rel='noopener noreferrer'>
            {address}
          </a>
        </div>
      </div>
    </div>
  )
}

export default DashboardPanel
