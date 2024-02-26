import React, { useEffect, useState } from 'react';

const Alert: React.FC<{ message: string }> = ({ message }) => {
    const [showPopup, setShowPopup] = useState(false);

    // Effect to show the popup with a slight delay for transition
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 200); // Adjust the delay as needed
  
      return () => clearTimeout(timer);
    }, []);
  
    
    // Inline styles
    const popupOverlayStyle: React.CSSProperties = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'opacity 0.3s ease', // Transition for opacity
      opacity: showPopup ? 1 : 0, // Toggle opacity based on showPopup state
    };
  
    const popupStyle: React.CSSProperties = {
      backgroundColor: 'white',
      paddingBottom: '20px',
      paddingInline: '50px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      color: '#242424', // Text color
      transition: 'transform 0.7s ease', // Transition for transform
      transform: showPopup ? 'scale(1)' : 'scale(0.8)', // Toggle scale based on showPopup state
    };
  
  
    // Render the popup
    return (
      <>
        {showPopup && (
          <div style={popupOverlayStyle}>
            <div style={popupStyle}>
              <div>
                <p>{message}</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };


export default Alert;
