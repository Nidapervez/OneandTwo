import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>

<div className="flex flex-row h-full bg-blue-800 justify-center items-center">
          <h1 className="text-[1.125rem] font-extrabold text-[#b9d8f3] h-full p-8">
            Tuition Free Education On Latest Technologies
          </h1>
          <ul className="flex flex-row ml-40">
            <li className="text-white"><Link href="/">Home</Link></li>
            <li className="ml-6 text-white"><Link href="/apply">Apply</Link></li>
            <li className="ml-6 text-white"><Link href="/jobs">Jobs</Link></li>
            <li className="ml-6 text-white"><Link href="/results">Results</Link></li>
            <li className="ml-6 text-white"><Link href="/courses">Courses</Link></li>
          </ul>
        </div>


    </div>
  )
}

export default Header