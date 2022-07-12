import React from 'react';
import '../style.css';
import TwitterIcon from '../images/Twitter Icon.png';
import FacebookIcon from '../images/Facebook Icon.png';
import InstagramIcon from '../images/Instagram Icon.png';
import GithubIcon from '../images/GitHub Icon.png';

export default function Footer() {
    return (
        <div className='social-icons'>
            <a href='https://twitter.com/LimanSHEN'>
                <img src={ TwitterIcon } />
            </a>
            <a href='https://www.facebook.com/limanshen0/'>
                <img src={ FacebookIcon } />
            </a>
            <a href='https://www.instagram.com/limanup/'>
                <img src={ InstagramIcon } />
            </a>
            <a href='https://github.com/limanup'>
                <img src={ GithubIcon } />
            </a>
        </div>
    )
}
