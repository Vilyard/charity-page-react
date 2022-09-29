import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import FifthSectionSliderData from '../Sliders/FifthSectionSliderData.jsx'
import "../Sliders/FifthSectionSlider.css"

function FifthSectionSlider() {

   const items = FifthSectionSliderData.map(type => {
                return (
                  <div className='item-fifthSection' key={type}>
                    <img src={type.image} alt='test' />
                    <br />
                    <a href='#'> {type?.name} </a>
                    <p> {type?.description} </p>
                  </div>
                );
              })

  return (
    <div className='test1'>

      <AliceCarousel mouseTracking items={items} responsive={{0: {items:1}, 768: {items: 3}, 1024: {items: 6}}}
       disableDotsControls={true} disableButtonsControls={true} infinite={true} autoPlay={true} autoPlayInterval={3000}
>

      </AliceCarousel>
  


    </div>
  )
}

export default FifthSectionSlider



















// import React, { useRef, useState, useEffect } from 'react'
// import { motion } from 'framer-motion'
// import "../Sliders/FifthSectionSlider.css"
// import FifthSectionSliderData from '../Sliders/FifthSectionSliderData.jsx'
// const FifthSectionSlider = () => {
//   const [width, setWidth] = useState(0);
//   const carousel = useRef();
//   useEffect(() => {
//     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
//   }, [])
//   return (
//     <div>
//       <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
//         <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
//           {FifthSectionSliderData.map(type => {
//             return (
//               <motion.div className='item-fifthSection' key={type}>
//                 <img src={type.image} alt='test' />
//                 <a href='#'> {type?.name} </a>
//                 <p> {type?.description} </p>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }
// export default FifthSectionSlider