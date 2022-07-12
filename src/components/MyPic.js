import React from 'react';
import '../style.css';
import Me from '../images/me.png';

export default function MyPic () {
    return (
        <img src={ Me } alt='My Pic' className='my-display-pic' />
    )
}
