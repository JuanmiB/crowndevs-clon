import React, { useState } from 'react'
import './index.scss'

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
        <div className="">
            <div className={`nav_items ${isOpen && 'open'}`}>
                <a href="#"> INICIO</a>
                <a href="#"> BIO</a>
                <a href="#"> PORTAFOLIO</a>
                <a href="#"> CONTACTO</a>
            </div>
            <div className={`nav_toggle ${isOpen && 'open'}`} onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
  )
}
export default BurgerMenu
