import React from 'react'
import {Carousel} from "react-responsive-carousel";
import firstpic from "../Images/first-carousel-pic1.png";
import secountpic from "../Images/first-carousel-pic2.png";
import thirdpic from "../Images/first-carousel-pic3.png";
import fourthpic from "../Images/first-carousel-pic4.png";



const FirstSectionCarousel = () => {
  return (
    <div> <Carousel>

                <img src={firstpic} />

                    <img src={secountpic} />

                    <img src={thirdpic} />

                    <img src={fourthpic} />

            </Carousel>
            </div>
  )
}

export default FirstSectionCarousel