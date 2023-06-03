import * as React from "react"

import Header from "./Header"
import Footer from "./Footer"

interface LayoutProps {
  children: React.ReactNode
  archivePath?: string // for Breadcrumbs
  isCategory?: boolean // for Breadcrumbs
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
