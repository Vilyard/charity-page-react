import React from 'react'
import './firstSection.css'
import kid1 from '../../../Images/kid1.png'
import totalProjects from '../../../Images/totalprojects.png'
import kid2 from '../../../Images/kid2.png'

function firstSection() {
  return (
   
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
  
  )
}

export default firstSection