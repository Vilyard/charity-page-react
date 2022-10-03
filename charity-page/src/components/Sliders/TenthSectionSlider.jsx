// import React, { useRef, useState, useEffect } from 'react'
// // import { motion } from 'framer-motion'
// import "../Sliders/TenthSectionSlider.css"
// import TenthSectionSliderData from '../Sliders/TenthSectionSliderData.jsx'
// const TenthSectionSlider = () => {
//   // const [width, setWidth] = useState(0);
//   // const tenthCarousel = useRef();
//   // useEffect(() => {
//   //   setWidth(tenthCarousel.current.scrollWidth - tenthCarousel.current.offsetWidth)
//   // }, [])
//   return (
//     <div>
//       {/* <motion.div ref={tenthCarousel} className='tenthCarousel' whileTap={{cursor: "grabbing"}}>
//         <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-tenth-carousel'>
//           {TenthSectionSliderData.map(type => {
//             return (
//               <motion.div className='item-tenthSection' key={type}>
//                 <img src={type.image} alt='test' />
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </motion.div> */}
//     </div>
//   )
// }
// export default TenthSectionSlider





import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import FirstSectionSliderData from '../Sliders/FirstSectionSliderData.jsx'
import "../Sliders/FirstSectionSlider.css"
function FirstSectionSlider() {
   const items = FirstSectionSliderData.map(type => {
                return (
                  <div className='item-firstSection' key={type}>
                    <img src={type.image} alt='test' />
                  </div>
                );
              })
  return (
    <div className='first-carousel-container'>
      <AliceCarousel mouseTracking items={items} responsive={{0: {items:1}, 767: {items: 3}, 1023: {items: 5}}}
       disableDotsControls={true} disableButtonsControls={true} infinite={true} autoPlay={true} autoPlayInterval={3000}
>
      </AliceCarousel>
    </div>
  )
}
export default FirstSectionSlider


