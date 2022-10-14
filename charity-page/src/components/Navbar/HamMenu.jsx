import React from 'react'
import {useState} from "react"
import "../Navbar/HamMenu.css"
import {GiHamburgerMenu} from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

const HamMenu = () => {
  const [menu, setMenu] = useState(false);


  const openMenu = () =>{
    setMenu(!menu);
  }


  return (
    <div className='ham-menu-container'>
        <button id='ham-menu-btn' onClick={openMenu}> <GiHamburgerMenu /> 
        {menu ? (
            <section className='menu__bg'>
                <div className='menu__align'>
                  <div className='menu__content' menu={menu}>
                    <button id="ham_menu_close_btn">
                    < AiOutlineClose className="menu__close" />
                    </button>
                      <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                      </ul>
                  </div>
                </div>
            </section>
        ) : null}
        </button>
    </div>
  )
}

export default HamMenu