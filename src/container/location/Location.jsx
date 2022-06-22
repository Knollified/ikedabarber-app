import React from "react";
import "./Location.css";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "../../components/index";
const Location = () => {
  const [zoom, setZoom] = React.useState(18); // initial zoom
  const [center, setCenter] = React.useState({
    lat: 40.7552478,
    lng: -73.9275324,
  });

  return (
    <div className="ike__location section__padding" id="location">
      <h1>Location</h1>
      <Wrapper apiKey={process.env.REACT_APP_GMAPS_API}>
        <Map
          center={center}
          zoom={zoom}
          style={{ width: "400px", height: "400px" }}
        />
      </Wrapper>
    </div>
  );
};

export default Location;
