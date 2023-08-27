import { ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './NavBar'
import Style from '../Styles/Layout.module.scss'

type LayoutProps = {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className={Style.bodyContainer} >
      <div className={Style.LayoutContainer}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
