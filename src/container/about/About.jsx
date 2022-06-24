import React from 'react';
import './About.css';
import ike from '../../assets/Ike.jpg'

const About = () => (
  <div className="ike__about section__padding" id="about">
      <div className="ike__about-image">
            <img src={ike} alt="" />
        </div>
        <div />
      <div className="ike__about-content">
        <div className="ike__about-text">
            <h1>About Me</h1>
            <p className>Hello, I am Isaac Torres or "Ike Da Barber" from Icons Barbershop.</p>
        </div>
      </div>
  </div>
);

export default About;