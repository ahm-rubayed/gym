import React from 'react';
import "./Exercise.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Exercise = (props) => { 

    let total = 0;

    for(const tim of props.time){
        total = total + tim.time;
    }

    const toastify = () => {
       toast("Wow you done the workout!") 
    }
    return (
        <div className='mt-5'>
            <h5 className='text-capitalize fw-bold'>Exercise Details</h5>
            <div className='d-flex bg-white justify-content-between align-items-center my-4 rounded py-2 px-4'>
                <h6 className='fw-bold'>Exercise Time</h6>
                <p className='ms-4'>{total}s</p>
            </div>

            <div className='d-flex bg-white justify-content-between align-items-center rounded py-2 px-4'>
                <h6 className='fw-bold'>Exercise Time</h6>
                <p>200seconds</p>
            </div>
            <button onClick={toastify} className='w-100 mt-5 border-0 text-white rounded py-3 exercise-btn'>Activity completed</button>
            <ToastContainer />
        </div>
    );
};

export default Exercise;