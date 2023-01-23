import React from "react";
import { Button, Box } from "@mui/material";
import styles from "../../styles/Home.module.css";

export const LeftNavBar = () => {
  return (
    <Box component={"div"} sx={{ padding: "20px", backgroundColor: "black" }}>
      <Button
        className={`${styles.button} ${styles.buttonMarginBottom}`}
        variant="contained"
      >
        Charging Stations
      </Button>
      <Button
        className={`${styles.button} ${styles.buttonMarginBottom}`}
        variant="contained"
      >
        Route Planner
      </Button>
      <Button
        className={`${styles.button} ${styles.buttonMarginBottom}`}
        variant="contained"
      >
        Range Map
      </Button>
    </Box>
  );
};
