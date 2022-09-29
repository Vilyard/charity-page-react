import React from 'react'
import '../secondSectionAbout/secondSectionAbout.css'
import SeconSectionPic from '../../../Images/second-section-about-picture.jpg'
import {BsFillPlayCircleFill} from 'react-icons/bs'

function secondSectionAbout() {
    return (
        <div className='about-second-section'>

            <div className='second-section-container'>


                <div className='image-container-second-about-section'>

                    <img src={SeconSectionPic} alt="second-section-picture" />

                    <BsFillPlayCircleFill />

                </div>

                <h2>See what we do for the <span>poor people and the children</span></h2>

                <hr />

            </div>

        </div>
    )
}

export default secondSectionAbout