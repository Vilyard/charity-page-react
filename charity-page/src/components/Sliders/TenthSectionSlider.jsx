import React, { useRef, useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
import "../Sliders/TenthSectionSlider.css"
import TenthSectionSliderData from '../Sliders/TenthSectionSliderData.jsx'
const TenthSectionSlider = () => {
  // const [width, setWidth] = useState(0);
  // const tenthCarousel = useRef();
  // useEffect(() => {
  //   setWidth(tenthCarousel.current.scrollWidth - tenthCarousel.current.offsetWidth)
  // }, [])
  return (
    <div>
      {/* <motion.div ref={tenthCarousel} className='tenthCarousel' whileTap={{cursor: "grabbing"}}>
        <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-tenth-carousel'>
          {TenthSectionSliderData.map(type => {
            return (
              <motion.div className='item-tenthSection' key={type}>
                <img src={type.image} alt='test' />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div> */}
    </div>
  )
}
export default TenthSectionSlider