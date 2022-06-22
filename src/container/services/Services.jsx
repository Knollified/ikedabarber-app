import React from "react";
import Service from "../../components/service/Service";
import './Services.css'

const servicesData = [
    {
        title: "Hair Cut",
        price: "$35.00 "
    },
    {
        title: "Shape Up",
        price: "$25.00 "
    },
    {
        title: "Baldie",
        price: "$30.00 "
    },
    {
        title: "Kid's Hair Cut",
        price: "$30.00 "
    },
]

const Services = () => {
    return (
        <div className="ike__services section__padding" id="services">
            <h1>
                Services
            </h1>

            <div className="ike__skills-container__main">
                <div className="ike__skills-container">
                    {servicesData.map((item, index) => (
                        <Service title={item.title} price={item.price} key={item.title + index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Services