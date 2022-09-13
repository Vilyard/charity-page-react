import React from 'react'
import "../Home/Home.css"
import FirstSection from './Sections/firstSection/firstSection.jsx'
import SecondSection from './Sections/secondSection/secondSection.jsx'
import ThirdSection from './Sections/thirdSection/thirdSection.jsx'
import FourthSection from './Sections/fourthSection/fourthSection.jsx'

const Home = () => {

  return (
    
    <div className='home-container'>

      < FirstSection />
      < SecondSection />
      < ThirdSection />
      < FourthSection />
    </div>
  )
}

export default Home