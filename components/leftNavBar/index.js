import { Button } from "@mui/material";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const LeftNavBar = () => {
  const [someState, setSomeState] = useState(false);

  const handleClick = () => {
    setSomeState(!someState);
  };

  return (
    <div className={`${styles.parent}`}>
      <Button onClick={handleClick} variant="contained">
        Charging Stations
      </Button>
    </div>
  );
};
