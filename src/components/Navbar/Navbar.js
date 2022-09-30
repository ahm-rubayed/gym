import React from 'react';
import './Navbar.css'
import logo from './../../logo.png';

const Navbar = () => {
    return (
        <div className='ps-4'>
        <div className='d-flex align-items-center'>
            <img src={logo} alt='afafd'/>
            <h2 className='nav-title text-bold'>Gymify</h2>
        </div>
        </div>
    );
};

export default Navbar;