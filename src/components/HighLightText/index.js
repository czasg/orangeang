import React from 'react';

const HighLightText = ({children, bgColor = '#ecd2a7', color = '#ea135f'}) => {
    return (
        <span
            style={{
                backgroundColor: bgColor,
                borderRadius: '10px',
                color: color,
                padding: '0.4rem',
                fontWeight: 900,
                fontFamily: 'Arial, sans-serif',
                letterSpacing: '1px',
            }}>
            {children}
        </span>
    );
};

export default HighLightText;
