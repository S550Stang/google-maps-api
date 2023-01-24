import React, { useContext } from "react";
import { LeftNavBar } from "../components/leftNavBar";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Grid } from "@mui/material";
import { NavbarContextApi } from "../contexts/navbar.context";
import { NavbarContextProvider } from "../contexts/navbar.context";

const mapContainerStyle = {
  height: "100%",
  width: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
const options = {
  mapId: "6ec9794f21386d95",
};

export const MapLayout = () => {
  const [someState, setSomeState] = useState(false);
  const fullName = useContext(NavbarContextApi);

  console.log("Value", fullName);
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
      <NavbarContextProvider>
        <Grid item xs={10}>
          <GoogleMap
            center={center}
            zoom={16}
            mapContainerStyle={mapContainerStyle}
            options={options}
          >
            <Marker position={center} />
          </GoogleMap>
        </Grid>
      </NavbarContextProvider>
    </Grid>
  );
};
