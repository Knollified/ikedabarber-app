import React, { useEffect, useRef, useState } from "react";
import "./Map.css";

const Map = ({ style, zoom, center }) => {
  const [map, setMap] = useState();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center,
          zoom,
        })
      );
    }
  }, [ref, map]);

  useEffect(() => {
    new window.google.maps.Marker({
      position: center,
      map: map,
      title: "Icons Barbershop",
    });
  }, [ref, map]);

  return (
    <div className="ike__map">
      <div className="ike__map-content">
        <div className="ike__map-map" style={style} ref={ref}></div>
      </div>
    </div>
  );
};

export default Map;
