import { Toaster } from '@redwoodjs/web/dist/toast'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'

type DashboardLayoutProps = {
  children?: React.ReactNode
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <>
      <Toaster />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-grow dark:bg-gray-900">
          <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default DashboardLayout
