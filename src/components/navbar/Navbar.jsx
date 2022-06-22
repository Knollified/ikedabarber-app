import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="ike__navbar">
            <div className="ike__navbar-links">
                <div className="ike__navbar-links_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="ike__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#about">About Ike</a></p>
                    <p><a href="#services">Services</a></p>
                    <p><a href="#gallery">Gallery</a></p>
                    <p><a href="#location">Location</a></p>
                </div>
            </div>
            <div className="ike__navbar-contact">
                <button type="button" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "#book"
                }}>Book</button>
            </div>
            <div className="ike__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                    <div className="ike__navbar-menu_container scale-up-center">
                        <div className="ike__navbar-menu_container-links">
                            <p><a href="#home">Home</a></p>
                            <p><a href="#about">About Ike</a></p>
                            <p><a href="#services">Services</a></p>
                            <p><a href="#gallery">Gallery</a></p>
                            <p><a href="#location">Location</a></p>
                        </div>
                        <div className="ike__navbar-menu_container-links-contact">
                            <button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href = "#book"
                            }}>Book</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;