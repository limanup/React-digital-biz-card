import React from 'react';
import './style.css';
import MyPic from './components/MyPic';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Page() {
    return (
        <>
            <MyPic />
            <MainContent />
            <Footer />
        </>
    )
}