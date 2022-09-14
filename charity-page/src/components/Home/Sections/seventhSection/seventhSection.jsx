import React from 'react'
import '../seventhSection/seventhSection.css'
import volunteerPicture from '../../../Images/volunteer.png'

function seventhSection() {
  return (
    <div className='home-seventh-section'>
            <div className='seventh-container'>

            
                    <ul>
                        <li>
                            <h1>Lets Chenge The World With Humanity</h1> 
                        </li>
                        <li>
                            <button>Become A Volunteer</button>
                        </li>
                        <li>
                            <img src={volunteerPicture} alt="volunteer picture" id='volunteer-pic' />
                        </li>
                    </ul>

              


            </div>
        </div>
  )
}

export default seventhSection