import React from 'react'
import { Link } from "react-router-dom"
import CharitioLogo from "../Images/CharitioLogo.png"
import { BiSearch } from "react-icons/bi"
import "../Navbar/Navbar.css"


function Navbar() {
    return (

        <nav>

            <div className='navbar-container'>

            <Link to="/"> <img src={CharitioLogo} alt="" />   </Link>

            <div className='center-buttons'>
                <Link to="home"><button>
                    Home
                </button></Link>
                <Link to="about"><button>
                    About
                </button></Link>
                <Link to="contact"><button>
                    Contact
                </button></Link>
            </div>

            <div className='right-buttons'>
                <Link to="contact"><button>
                    Donate Now
                </button></Link>

                <Link to="contact"><button>
                    <BiSearch />
                </button></Link>

            </div>

            </div>



        </nav>

    )
}

export default Navbar