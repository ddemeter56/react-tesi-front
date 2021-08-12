import React from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import LocationOnIcon from '@material-ui/icons/LocationOn';
const libraries = ["places"];

const mapContainerStyle = {
  width: "100%",
  height: 500
}

const MapComponent = ({ location }) => {
  console.log(location);
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  })

  if(loadError) return "Error loading maps";
  if(!isLoaded) return "loading maps";

  return (
    <>
      <GoogleMap 
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={location} />
    </>  
  )
}

export default MapComponent;