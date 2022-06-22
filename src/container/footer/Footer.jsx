import React from 'react';
import { RiInstagramFill } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
    return (
        <div className="ike__footer section__padding" id="footer">

            <div className="ike__footer-heading">
                <h1>Ike Da Barber on Null Pi</h1>
            </div>

            <div className="ike__footer-content">
                <p><a href="#home">Home</a></p>
                <p><a href="#about">About Ike</a></p>
                <p><a href="#services">Services</a></p>
                <p><a href="#gallery">Gallery</a></p>
                <p><a href="#location">Location</a></p>
            </div>

            <div className='ike__footer-links'>
                <RiInstagramFill color='#faf0d2' onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "https://www.instagram.com/ikedabarbero/"
                }} size={50} />
            </div>

            <div className='ike__footer-copy'>
                &copy;<em color='#fff'> nullpiserver.com</em>
            </div>

        </div>
    )
}


export default Footer