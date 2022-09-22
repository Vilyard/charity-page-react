import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import "../Sliders/FifthSectionSlider.css"
import FifthSectionSliderData from '../Sliders/FifthSectionSliderData.jsx'
const FifthSectionSlider = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])
  return (
    <div>
      <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
        <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
          {FifthSectionSliderData.map(type => {
            return (
              <motion.div className='item-fifthSection' key={type}>
                <img src={type.image} alt='test' />
                <a href='#'> {type?.name} </a>
                <p> {type?.description} </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}
export default FifthSectionSlider