import React from 'react'
import FirstSectionContact from './Sections/firstSectionContact/firstSectionContact'
import SecondSectionContact from './Sections/secondSectionContact/secondSectionContact'
import "../Contact/Contact.css"
const Contact = () => {
  return (
    <div className='contact-container'>

    < FirstSectionContact />
    < SecondSectionContact />
    {/* < ThirdSectionContact /> 
   < FourthSectionContact /> */}
   
  </div>
  )
}

export default Contact