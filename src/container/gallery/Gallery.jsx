import React from "react";
import './Gallery.css'
import gallery1 from "../../assets/Gallery1.png";
import gallery2 from "../../assets/Gallery2.png";
import gallery3 from "../../assets/Gallery3.png";
import gallery4 from "../../assets/Gallery4.png";
import gallery5 from "../../assets/Gallery5.png";
import gallery6 from "../../assets/Gallery6.png";
import gallery7 from "../../assets/Gallery7.png";
import gallery8 from "../../assets/Gallery8.png";
import gallery9 from "../../assets/Gallery9.png";

const Gallery = () => {
    return (
        <div className="ike__gallery section__padding" id="gallery">

            <div className="ike__gallery-content">
                <h1>Gallery</h1>
                <p></p>
            </div>

            <div className="ike__gallery-image">
                <div className="ike__gallery-image__set-one">
                    <img src={gallery1} alt="" />
                    <img src={gallery2} alt="" />
                    <img src={gallery3} alt="" />
                </div>

                <div className="ike__gallery-image__set-two">
                    <img src={gallery4} alt="" />
                    <img src={gallery5} alt="" />
                    <img src={gallery6} alt="" />
                </div>

                <div className="ike__gallery-image__set-three">
                    <img src={gallery7} alt="" />
                    <img src={gallery8} alt="" />
                    <img src={gallery9} alt="" />
                </div>
            </div>


        </div>
    )
}

export default Gallery