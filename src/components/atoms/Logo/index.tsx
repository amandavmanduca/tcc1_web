import React from 'react';
import logo from '../../../assets/logo.png';

const logoProps = {
    width: 60,
    padding: '10px 0',
}

export default function Logo() {
    return(
        <img src={logo} alt="Logo" style={logoProps}/>
    );
}