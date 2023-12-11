import React from 'react'
import Logo from '../assets/freeleetcodecamplogo3.png'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
    <div>
        <div className='header flex bg-[#0a0a23] items-center justify-center p-3'>
            <Link to="/"><img className='h-[56px]' src={Logo}></img></Link> //lets you click the logo to go back home
        </div>
    </div>
  )
}
