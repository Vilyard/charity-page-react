import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import "../Sliders/FirstSectionSlider.css"
import FirstSectionSliderData from '../Sliders/FirstSectionSliderData.jsx'
const FirstSectionSlider = () => {
  const [width, setWidth] = useState(0);
  const firstCarousel = useRef();
  useEffect(() => {
    setWidth(firstCarousel.current.scrollWidth - firstCarousel.current.offsetWidth)
  }, [])
  return (
    <div>
      <motion.div ref={firstCarousel} className='firstCarousel' whileTap={{cursor: "grabbing"}}>
        <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-first-carousel'>
          {FirstSectionSliderData.map(type => {
            return (
              <motion.div className='item-firstSection' key={type}>
                <img src={type.image} alt='test' />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
export default FirstSectionSlider