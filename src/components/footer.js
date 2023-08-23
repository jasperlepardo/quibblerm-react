import * as React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
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
  )
}

export default Footer

