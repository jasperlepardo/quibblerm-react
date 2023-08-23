import * as React from 'react'
import { Link } from 'gatsby'

import Header from './header'
import Footer from './footer'


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
        <main className="pt-32" id="content">
          {children}
        </main>
      <Footer/>
    </div>
  )
}

export default Layout

