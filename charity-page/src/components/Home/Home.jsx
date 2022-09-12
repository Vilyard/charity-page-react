import React from 'react'
import "../Home/Home.css"
import kid1 from "../Images/kid1.png"
import totalProjects from "../Images/totalprojects.png"
import kid2 from "../Images/kid2.png"
import medicine from "../Images/medicine.png"
import faucet from "../Images/water-tap.png"
import vegetable from "../Images/vegetable.png"
import hat from "../Images/hat.png"


// import FirstSectionSlider from '../Sliders/FirstSectionSlider'
// import { FirstSectionSilderData } from "../Sliders/FirstSectionSilderData"


const Home = () => {



  return (
    
    <div className='home-container'>

      <div className='home-first-section'>

      <div className='first-section-first-div'>
          <h3>Help The Poor Children</h3>
          <h1>Your Marcy Can Change Someone’s Life</h1>
          <p>We help local nonprofits access the funding, tools, training, and support they need to become more.</p>
          <button>Get Started</button>
        </div>

        <div className='first-section-second-div'>
          <img src={kid1} alt="" />
          {/* <FirstSectionSlider items={FirstSectionSilderData} /> */}
        </div>

        <div className='first-section-third-div'>
          <img src={totalProjects} alt=""/>
          <br />
          <img src={kid2} alt="" />
        </div>

      </div>
      <div className='home-second-section'>
        <div className='icon-div'>
          <div className='first-box'>
            <div className='image-box-container'>
              <img src={vegetable} />
            </div>
            <a href="#">Healthy Food</a>
          </div>
          <div className='second-box'>
            <div className='image-box-container'>
              <img src={faucet} />
            </div>
            <a href="#">Clean Water</a>
          </div>
          <div className='third-box'>
            <div className='image-box-container'>
              <img src={medicine} />
            </div>
            <a href="#">Medical Care</a>
          </div>
          <div className='fourth-box'>
            <div className='image-box-container'>
              <img src={hat} />
            </div>
            <a href="#">Child Education</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home