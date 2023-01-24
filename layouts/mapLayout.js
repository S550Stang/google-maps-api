import React from "react";
import { LeftNavBar } from "../components/leftNavBar";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Grid } from "@mui/material";

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export const MapLayout = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD5vHpsJZ8FQ2cqCRo1f8Vp5UihzP78MbI", // ,
    // ...otherOptions
  });
  if (loadError) {
    return <div>Error Loading..</div>;
  }
  if (!isLoaded) {
    return <div>please wait map is loading ...</div>;
  }

  return (
    <Grid container>
      <Grid item xs={2}>
        <LeftNavBar />
      </Grid>
      <Grid item xs={10}>
        <GoogleMap
          center={center}
          zoom={16}
          mapContainerStyle={mapContainerStyle}
        >
          <Marker position={center} />
        </GoogleMap>
      </Grid>
    </Grid>
  );
};
