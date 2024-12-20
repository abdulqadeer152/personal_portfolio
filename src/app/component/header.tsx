import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Contact from '../contact/page'
const Header = () => {
  return (
    <div className="header sticky z-50 top-0">
        <div className="logo">
        <Image alt='logo' height={100} width={100} src={require('../../../public/Screenshot__23_-removebg-preview.png')}/>
        </div>
        <div className="pages">
            <ul className='unorder'>
                <li><Link href={"/"}> Home</Link></li>
                <li><Link href={"/about"}> About</Link></li>
                <li><Link href={"#contact"}> Contact</Link></li>
                <li><Link href={"#project"}> Project</Link></li>
                <li><Link href={"/skills"}> Skills</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header