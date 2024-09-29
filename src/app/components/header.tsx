import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>

<div className="flex flex-row h-full bg-pink-400 justify-center items-center">
          <h1 className="text-[1.125rem] font-extrabold text-white h-full p-8">
            Welcome to my website
          </h1>
          <ul className="flex flex-row ml-40">
            <li className="text-white"><Link href="/">Home</Link></li>
            <li className="ml-6 text-white"><Link href="/portfolio">Portfolio</Link></li>
            <li className="ml-6 text-white"><Link href="/about">About</Link></li>
            <li className="ml-6 text-white"><Link href="/contactus">Contact us</Link></li>
          </ul>
        </div>


    </div>
  )
}

export default Header