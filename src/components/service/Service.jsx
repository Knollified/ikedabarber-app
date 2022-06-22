import React from 'react'
import './Service.css'

const Service = ({title, price}) => {
    return (
        <div className="ike__services-container__service">
            <div className="ike__services-container__service-title">
                <div />
                <h1>{title}</h1>
            </div>
            <div className="ike__services-container_service-price">
                <div />
                <p>{price}</p>
            </div>
        </div>
    );
}


export default Service