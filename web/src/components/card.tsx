import React from 'react';

interface CardProps {
  text: string;
  dateTime: string;
}

const Card: React.FC<CardProps> = ({ text, dateTime }) => {
    return (
        <div
            style={{
                width: '80vw',
                margin: '20px auto',
                padding: '15px',
                backgroundColor: '#e9e9e9', /* Slightly opaque white background */
                border: '5px solid white', /* Light outline */
                borderRadius: '8px',
                color: '#fff'
            }}
        >
            <div style={{ fontSize: '20px', color: '#242424' , lineHeight: '1.5', textAlign: 'left' }}>{text}</div>
            <div style={{ fontSize: '12px', color: '#888', marginTop: '10px', textAlign: 'right' }}>
                {dateTime}
            </div>
        </div>
    );
};

export default Card;
