
import Link from 'next/link'
import React from 'react'
import Prof_Image from './prof_imag.png'
import Image from 'next/image'

function navbar() {
  return (
    <nav >
    <Image src={Prof_Image} alt="Agbuya Image" width ={70} quality={100} placeholder='blur'/>
    
    
    <h1 className="white-text-shadow-hard font-extrabold text-3xl mr-4">Agbuya E-Portfolio</h1>
    <Link className="division-cell" href="/">
      <div className="font-style-navbar">Home</div> 
    </Link>
    <Link className="division-cell" href="/acad_works">
      <div className="font-style-navbar">Acad Works</div> 
    </Link>
    <Link className="division-cell" href="/resume">
    <div className="font-style-navbar">Resume</div></Link>


    </nav>

  )
}

export default navbar
