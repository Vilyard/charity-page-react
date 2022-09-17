import React from 'react'
import { Link } from "react-router-dom"
import CharitioLogo from "../Images/CharitioLogo.png"
import { BiSearch } from "react-icons/bi"
import "../Navbar/Navbar.css"
import ScrollToTop from './scrollToTop'


function Navbar() {
    return (

        <nav>

            <div className='navbar-container'>
            <div className='img-container'>
            <img src={CharitioLogo} id="charitioLogo" alt="" />
            </div>
            <div className='center-buttons'>
            <button>
                <Link to="home">
                    Home
                </Link>
                </button>
                <button>
                <Link to="about">
                    About
                </Link>
                </button>
                <button><Link to="contact">
                    Contact
                </Link>
                </button>
            </div>

            <div className='right-buttons'>
            <button id='donate-btn'><Link to="contact">
                    Donate Now
                </Link>
                </button>
                <button id='search-nav'>
                <Link to="contact">
                    <BiSearch />
                </Link>
                </button>

            </div>

            </div>

           < ScrollToTop />





        </nav>

    )
}

export default Navbar