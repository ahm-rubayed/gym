import React from 'react';

const Break = () => {
    return (
        <div className='mt-5'>
            <h5 className='text-capitalize fw-bold'>Add a break</h5>
            <ul className='mt-3 rounded bg-white d-flex py-3 gap-4 justify-content-center'>
              <li>10s</li>
              <li>20s</li>
              <li>30s</li>
              <li>40s</li>
            </ul>
        </div>
    );
};

export default Break;