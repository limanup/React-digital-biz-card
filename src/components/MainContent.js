import React from 'react';
import '../style.css';
import MailIcon from '../images/Mail.png';
import LinkedinIcon from '../images/linkedin.png';

export default function MainContent () {
    return (
        <div className='main'>
            <h1 className='name'>Liman Shen</h1>
            <p className='job-title'>Full Stack Software Engineer</p>
            <a href='https://liman-shen-digital-biz-card.herokuapp.com/' className='website'>
                limanshen.website
            </a>
            <div className='buttons'>
                <a href='mailto:liman123shen@gmail.com' className='link-button email-button'>
                    <img src={ MailIcon } />
                    <span>Email</span>
                </a>
                <a href='https://www.linkedin.com/in/limanshen/' className='link-button linkedin-button'>
                    <img src={ LinkedinIcon } />
                    <span>LinkedIn</span>
                </a>
            </div>
            <div className='main-text'>
                <h2>About</h2>
                <p>I am a full stack software engineer currently pursuing Computer Science Master degree at the University of Texas at Austin. After graduating with a Math Bachelor degree from the University of Waterloo, I had been working in the Finance industry, mainly in Capital Markets Trading with a focus on Canadian Government bonds. I love creating applications to automate daily tasks and processes, and I am always looking for new tech stacks to learn. </p>
                <h2>Interests</h2>
                <p>Badminton 🏸. Biking 🚴‍♀️. Hiking 🥾. Baking 🍞. Cooking 👩‍🍳. Ukuleling 🎸.</p>
            </div>
        </div>
    )
}