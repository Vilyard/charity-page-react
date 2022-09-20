import React, {useState, useEffect} from 'react'
import "../Sliders/FirstSectionSlider.css"
import { FirstSectionSilderData } from './FirstSectionSilderData'


const FirstSectionSlider = ({items}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [secondImage, setSecondImage] = useState (1);
    const length = items.length;
    
    useEffect(
        () => {
            const interval = setInterval(() => {
                setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1);
                setSecondImage(secondImage === length - 1 ? 1 : secondImage + 1) 
               

            }, 2000);
            return () => clearInterval(interval);
        },
        [currentImage] [secondImage]
    );

   


    // const nextItem = () => {
    //     setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
    // }
    // const previousItem = () => {
    //     setCurrentImage(currentImage === 0 ? length - 1 : currentImage -1)
    // }

    if(!Array.isArray(items) || items.length <= 0) {
        return null;
    }
    
  return (
    <div className='first-section-slider'>
        {/* <button className='left-btn' onClick={previousItem}>left</button>
        <button className='right-btn' onClick={nextItem}>right</button> */}
        {FirstSectionSilderData.map((items, index) => {
            return (
                <div>
                <div className={index === currentImage ? "item-active" : "item"} key={index}>
                    {index === currentImage && 
                        (  
                            <img src={items.image} alt="test" className='first-section-img' />
                            
                        )
                    }    
    
                     </div>
                     <div className={index === secondImage ? "item-active" : "item"} key={index}>
                    {index === secondImage && 
                        (  
                            <img src={items.image} alt="test" className='first-section-img' />
                            
                        )
                    }    
    
                     </div>
                   
                   
                 </div>

                 
                
            )
        })}
    </div>
  )
}

export default FirstSectionSlider