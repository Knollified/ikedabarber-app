import React from "react";
import "./Location.css";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "../../components/index";
const Location = () => {
  const [zoom, setZoom] = React.useState(18); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 40.75523,
    lng: -73.92741,
  });

  return (
    <div className="ike__location section__padding" id="location">
      <div className="ike__location-content">
          <h1>Location</h1>
        <Wrapper apiKey={process.env.REACT_APP_GMAPS_API}>
          <div className="ike__location__map-container">
            <Map
              center={center}
              zoom={zoom}
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        </Wrapper>
      </div>


    </div>
  );
};

export default Location;
