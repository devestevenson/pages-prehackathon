import React from 'react'
import '../footer/Footer.css'
import Linkedin from '../footer/linkedin.png'
import Github from '../footer/github.png'

const Footer = () => {
  return (
    <div className='footer'>
      <p> <span>2022</span>, Hijos del Sol</p>
      
      <div className="redsocial">
        <img src={Linkedin} alt="" />
        <img src={Github} alt="" />
      </div>
    </div>
  )
}

export default Footer
