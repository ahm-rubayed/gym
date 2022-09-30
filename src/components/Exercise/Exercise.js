import React from 'react';

const Exercise = () => {
    return (
        <div>
            <h4>Exercise Details</h4>
            <div className='d-flex bg-white justify-content-between align-items-center my-4 p-4'>
                <h6>Exercise Time</h6>
                <p className='ms-4'>200seconds</p>
            </div>

            <div className='d-flex bg-white justify-content-between align-items-center p-4'>
                <h6>Exercise Time</h6>
                <p>200seconds</p>
            </div>
        </div>
    );
};

export default Exercise;