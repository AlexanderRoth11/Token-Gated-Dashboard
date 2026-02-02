import AppProvider from '@/provider/app-provider'
import WalletInfo from '@/components/wallet-info'
import PageHeader from '@/components/page-header'

export default function Home() {
  return (
    <AppProvider>
      <PageHeader />
      <div className='mt-4 px-4 flex justify-center'>
        <WalletInfo />
      </div>
    </AppProvider>
  )
}
