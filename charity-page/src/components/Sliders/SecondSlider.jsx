import React, {useState, useEffect} from 'react'
import "../Sliders/FirstSectionSlider.css"
import { FirstSectionSilderData } from './FirstSectionSilderData'

const SecondSlider = ({items}) => {
    const [firstImage, setFirstImage] = useState(0);
    const [secondImage, setSecondImage] = useState (1);
    const [thirdImage, setThirdImageImage] = useState(2);
    const [fourthImage, setFourthImage] = useState (3);

    const length = items.length;
    
    useEffect(
        () => {
            const interval = setInterval(() => {
                setFirstImage(firstImage === length - 1 ? 0 : firstImage + 1);
                setSecondImage(secondImage === length - 1 ? 0 : secondImage + 1);
                setThirdImageImage(thirdImage === length - 1 ? 0 : thirdImage + 1);
                setFourthImage(fourthImage === length - 1 ? 0 : fourthImage + 1);
                console.log(firstImage)
                console.log(secondImage)
                console.log(thirdImage)
            }, 2000);
            return () => clearInterval(interval);
        },
        [firstImage], [secondImage], [thirdImage]
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
                <div className={index === firstImage ? "item-active" : "item"} key={index}>
                    {index === firstImage && 
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

export default SecondSlider