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
        title: "Full Shave",
        price: "$30.00 "
    },

]
const servicesDatatwo = [
    {
        title: "Senior Hair Cut",
        price: "$30.00 "
    },
    {
        title: "Kid's Hair Cut",
        price: "$30.00 "
    },
    {
        title: "Baldie with Beard, Goatee, Mustache",
        price: "$35.00 "
    },
    {
        title: "Haircut with Beard, Goatee, Mustache ",
        price: "$45.00 "
    },
]
const servicesDatathree = [
    {
        title: "Design",
        price: "$55.00 "
    }
]

const Services = () => {
    return (
        <div className="ike__services section__padding" id="services">

            <div className="ike__services-heading">
                <h1>
                    Services
                </h1>
            </div>
            <div className="ike__services-container__main">
                <div className="ike__services-container">
                    {servicesData.map((item, index) => (
                        <Service title={item.title} price={item.price} key={item.title + index} />
                    ))}
                </div>
                <div className="ike__services-container">
                    {servicesDatatwo.map((item, index) => (
                        <Service title={item.title} price={item.price} key={item.title + index} />
                    ))}
                </div>
                <div className="ike__services-container">
                    {servicesDatathree.map((item, index) => (
                        <Service title={item.title} price={item.price} key={item.title + index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Services