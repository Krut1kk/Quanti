import React from 'react';

const FormsSwapButtons: React.FC = () => {
    return (
        <div className='formsSwapButtons'>
            <button className='formsSwapButtons__button active'>Физ. особа</button>
            <button className='formsSwapButtons__button'>Юр. особа</button>
        </div>
    );
};

export default FormsSwapButtons;
