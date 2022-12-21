import React from "react";
import GoogleMapReact from 'google-map-react';

const Pointer = () => <div className='pointer'></div>;

function Map({ area }){
  const coords = {
    center: {
      lat: area.lat,
      lng: area.long
    },
    zoom: 10
  }

  return (
    <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }} defaultCenter={coords.center} defaultZoom={coords.zoom}>
        <Pointer lat={area.lat} lng={area.long} />
    </GoogleMapReact>
  );
}

export default Map;