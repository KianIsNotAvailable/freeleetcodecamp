import React from 'react'
import Logo from '../assets/freeleetcodecamplogo3.png'
export default function Header() {
  return (
    <div>
        <div className='header flex bg-[#0a0a23] items-center justify-center p-3'>
            <img className='h-[56px]' src={Logo}></img>
        </div>
    </div>
  )
}
