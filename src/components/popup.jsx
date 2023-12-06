import React, { useState } from 'react';
import './popup.css'; // Import your CSS file
import { usePopup } from './popupContext'

const Popup = () => {
  const { isPopupVisible, closePopup } = usePopup();

  



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
            <button  className=' bg-[#282c34] border border-gray-300 w-full hover:bg-gray-300 hover:text-black p-2'>Submit and go to the next challenge</button>
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
