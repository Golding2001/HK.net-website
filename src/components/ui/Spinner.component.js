import React from 'react';
import spinnerImg from '../../asstes/images/spinner.gif';

const SpinnerComponent = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <img src={spinnerImg} alt="spinner" />
        </div>
    );
};

export default SpinnerComponent;