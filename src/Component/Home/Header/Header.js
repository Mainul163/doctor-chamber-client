import React from 'react';
import './Header.css'
import Headermain from '../Headermain/Headermain';

import Businessinfo from '../Businessinfo/Businessinfo';
import Navbar from '../../Coommon/Navbar/Navbar';

const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <Headermain></Headermain>
            <Businessinfo></Businessinfo>
            
        </div>
    );
};

export default Header;