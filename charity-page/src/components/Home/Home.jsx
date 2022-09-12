import React from 'react'
import "../Home/Home.css"
import FirstSection from '../Home/Sections/firstSection/firstSection.jsx'
import SecondSection from './Sections/secondSection/secondSection.jsx'
import ThirdSection from './Sections/thirdSection/thirdSection.jsx'

const Home = () => {

  return (
    
    <div className='home-container'>

      < FirstSection />
      < SecondSection />
      < ThirdSection />

    </div>
  )
}

export default Home