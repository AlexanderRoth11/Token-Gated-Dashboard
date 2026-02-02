import { getServerSession } from 'next-auth'
import AppProvider from '@/provider/app-provider'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'
import { getAccessNFT } from '@/util/eth'
import BuyNft from '@/components/buy-nft'
import DashboardPanel from '@/components/dashboard-panel'
import PageHeader from '@/components/page-header'

export default async function Dashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/')
  }

  const accessNFT = getAccessNFT()
  const balance = await accessNFT.balanceOf(session.address)
  const hasBalance = balance > BigInt(0)

  return (
    <AppProvider>
      <PageHeader />
      <div className='mt-4 flex justify-center px-4'>
        {hasBalance && <DashboardPanel address={session.address!} balance={balance} nft={accessNFT} />}
        {!hasBalance && <BuyNft />}
      </div>
    </AppProvider>
  )
}
