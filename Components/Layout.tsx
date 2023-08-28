/* Import Packages */
import { ReactNode } from 'react'

/* Import Components */
import Footer from './Footer'
import Navbar from './NavBar'

/* Import Styles */
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
