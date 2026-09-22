import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

export interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden">
      <NavBar />
      <main className="flex-1 w-full">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
