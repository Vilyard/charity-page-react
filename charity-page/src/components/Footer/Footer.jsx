import React from 'react'
import CharitioLogoFooter from '../Images/charitio-logo-footer.png'
import '../Footer/Footer.css'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'
import { TiSocialGooglePlus } from 'react-icons/ti'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>

            <div className='footer-container'>

                <div className='upper-container'>

                    <div className='logo-container'>

                        <img src={CharitioLogoFooter} alt="" className='logo-footer' />
                        <p>Welcome and open yourself to your truest love this year with us! With the Release Process</p>
                        <div className='button-container'>
                            <button> <FiFacebook size={20} /> </button>
                            <button> <FiTwitter size={20} /> </button>
                            <button> <FiInstagram size={20} /> </button>
                            <button> <TiSocialGooglePlus size={20} /> </button>
                        </div>

                    </div>

                    <div className='services-container'>

                    </div>

                    <div className='contact-container'>

                    </div>

                    <div className='projects-container'>

                    </div>

                </div>

                <div className='lower-container'>


                </div>

            </div>


        </footer>
    )
}

export default Footer