import React from "react";
import { LeftNavBar } from "@/components/leftNavBar";
import { Grid } from "@mui/material";
import { useLoadScript, Marker, GoogleMap } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export const MapLayout = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });
  return (
    <Grid container>
      <Grid item xs={2} sx={{ backgroundColor: "black" }}>
        <LeftNavBar />
      </Grid>
      <Grid item xs={10}>
        {isLoaded && (
          <GoogleMap
            center={center}
            zoom={16}
            mapContainerStyle={mapContainerStyle}
          >
            <Marker position={center} />
          </GoogleMap>
        )}
        {!isLoaded && <div>Loading ...</div>}
      </Grid>
    </Grid>
  );
};
