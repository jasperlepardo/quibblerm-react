import * as React from 'react'
import { Link } from 'gatsby'

import Header from './header'

import logo from "../images/logo.svg"

const Layout = ({ children }) => {
  return (
    <div>
        <Header />

        <main className="pt-32" id="content">
        {children}
      </main>

      <footer className="py-20">
        <div className="container mx-auto px-4 text-center">

            <ul className="inline-flex flex-col lg:flex-row items-center mx-auto">
                <li className="inline-flex">
                    <Link className="p-5 text-xl" to="">Contact Us</Link>
                </li>
                <li className="inline-flex">
                    <Link className="p-5 text-xl" to="">QuibbleLite for Small Operators</Link>
                </li>
                <li className="inline-flex">
                    <Link className="p-5 text-xl" to="">Privacy Policy</Link>
                </li>
            </ul>
        </div>
    </footer>





    </div>
  )
}

export default Layout

