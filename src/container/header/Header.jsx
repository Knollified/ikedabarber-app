import React from "react";
import header from "../../assets/header.png"
import './Header.css'
const Header = () => {
    return (
        <div className="ike__header" id="home">
            <div className="ike__header-image">
                <img src={header} alt="" />
            </div>
        </div>
    )
}
export default Header