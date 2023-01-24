import { Button } from "@mui/material";
import React from "react";
import styles from "./Navbar.module.css";

export const LeftNavBar = () => {
  return (
    <div className={`${styles.parent}`}>
      <Button variant="contained">Charging Stations</Button>
    </div>
  );
};
