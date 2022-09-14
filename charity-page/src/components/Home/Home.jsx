import React from 'react'
import "../Home/Home.css"
import FirstSection from './Sections/firstSection/firstSection.jsx'
import SecondSection from './Sections/secondSection/secondSection.jsx'
import ThirdSection from './Sections/thirdSection/thirdSection.jsx'
import FourthSection from './Sections/fourthSection/fourthSection.jsx'
import FifthSection from './Sections/fifthSection/fifthSection.jsx'

const Home = () => {

  return (
    
    <div className='home-container'>

      < FirstSection />
      < SecondSection />
      < ThirdSection />
      < FourthSection />
      < FifthSection />
    </div>
  )
}

export default Home