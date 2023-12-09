import React, { useState } from 'react';
import './popup.css'; // Import your CSS file
import { usePopup } from './popupContext';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../types';
import { updateButtonState } from '../actions';
import { useChallenge } from './challengeContext';
import { Link } from "react-router-dom";
const Popup = () => {
  const { isPopupVisible, closePopup } = usePopup();
  const buttonState = useSelector((state: RootState) => state.buttonState);
  const dispatch = useDispatch();
  const { introductionCheck, loopsCheck, enumerateCheck, hashmapCheck } = useChallenge();
  const [link, setLink] = useState(false);
  const handleClick = () =>{
    console.log("clicked")
    closePopup();
    if (buttonState === 1){
      introductionCheck(true)
      
    } else if (buttonState === 2){
      loopsCheck(true)
      
    } else if (buttonState === 3){
      enumerateCheck(true)
      setLink(true);
    }else if(buttonState === 4){
      hashmapCheck(true);
      
    }
    //if button state is 1 setIntroductionComplete //true for each one
    dispatch(updateButtonState(buttonState < 4 ? buttonState + 1 : buttonState))
  
  }



  return (
    <div>
      

      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className='popup-header'>
                <h1>Cool Aid Man says oh yeah!</h1>
            <button className='close-btn' onClick={closePopup}>X</button>
            </div>
            <div className="popup-body">
                <p>Fundamentals of TwoSum</p>
            </div>
            <div className='popup-footer'>
            {link ? <Link to='/'><button onClick={handleClick} className=' bg-[#282c34] border border-gray-300 w-full hover:bg-gray-300 hover:text-black p-2'>Submit and go to the next challenge</button></Link>
             : <button onClick={handleClick} className=' bg-[#282c34] border border-gray-300 w-full hover:bg-gray-300 hover:text-black p-2'>Submit and go to the next challenge</button>}
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
