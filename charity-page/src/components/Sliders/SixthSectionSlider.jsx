import React, { useRef, useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
import "../Sliders/SixthSectionSlider.css"
import SixthSectionSliderData from '../Sliders/SixthSectionSliderData.jsx'
import {RiDoubleQuotesR} from "react-icons/ri"
const SixthSectionSlider = () => {
  // const [width, setWidth] = useState(0);
  // const sixthCarousel = useRef();
  // useEffect(() => {
  //   setWidth(sixthCarousel.current.scrollWidth - sixthCarousel.current.offsetWidth)
  // }, [])
  return (
    <div>
      {/* <motion.div ref={sixthCarousel} className='sixthCarousel' whileTap={{cursor: "grabbing"}}>
        <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-sixth-carousel'>
          {SixthSectionSliderData.map(type => {
            return (
              <motion.div className='item-sixthSection' key={type}>
                <div className='item-sixth-img'>
                <img src={type.image} alt='test' />
                </div>
                <div className='item-sixth-desc'>
                < RiDoubleQuotesR />
                <p> {type?.description} </p>
                </div>
                <div className='item-sixth-name'>
                <p> {type?.name} </p>
                </div>
                <div className='item-sixth-title'>
                <p> {type?.title} </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div> */}
    </div>
  )
}
export default SixthSectionSlider