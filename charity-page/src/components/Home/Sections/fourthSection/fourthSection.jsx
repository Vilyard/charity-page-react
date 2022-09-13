import React from 'react'
import './fourthSection.css'
import FourthMedicine from "../../../Images/medicine_fourth.png"
import FourthMedicineProgress from "../../../Images/medicine-progress.png"
import Food from "../../../Images/food.png"
import FoodProgress from "../../../Images/food-progress.png"
import Education from "../../../Images/education.png"
import EducationProgress from "../../../Images/education-progress.png"


const fourthSection = () => {
  return (
    <div className='home-fourth-section'>
        <div className='fourth-container'>
            <div className='fourth-upper-container'>
                    <h4>We Love To Help Poor</h4>
                    <h2>Our Featured Campaigns</h2>
                    <p>There are many variations of passages of Lorem Ipsum available, 
                        but the majority have suffered alteration in some form,</p>
            </div>
            <div className='fourth-lower-container'>
                <div className='lower-column-container'>
                    <div className='education-div'>
                        <img src={Education} />
                        <br />
                        <a href="#">Help To Build a Secure Life Of a Poor Children.</a>
                        <br />
                        <img src={EducationProgress} />
                        <hr />
                    </div>
                    <div className='food-div'>
                        <img src={Food}/>
                        <br />
                        <a href="#">Ensure Clean Water To The African Kids.</a>
                        <br />
                        <img src={FoodProgress} />
                        <hr />
                    </div>
                    <div className='medicine-div'>
                        <img src={FourthMedicine} />
                        <br />
                        <a href="#">Your Help Can Save A Human Life From Death.</a>
                        <br />
                        <img src={FourthMedicineProgress} />
                        <hr />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default fourthSection