import React, { createContext } from "react";

export const NavbarContextApi = createContext();

export const NavbarContextProvider = ({ children }) => {
  // const fullName = "Prabhu Vardhan Rao Pilli";
  // const value = { fullName };
  return (
    <NavbarContextApi.Provider value={{ fullName: "Testing" }}>
      {children}
    </NavbarContextApi.Provider>
  );
};
