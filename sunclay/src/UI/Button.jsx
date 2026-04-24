import React from "react";
import { Button } from "@mui/material";

function ButtonXtra({ children, ...props }) {
  const buttonStyle = {
    height: 35,
    width: 185,
    margin: "0.3rem",
    borderRadius: 50,
    fontFamily: "system-ui",
    textTransform: "none",
    fontSize: "100%",
    color: "rgb(249, 249, 249)",
  };

  return (
    <Button variant="contained" color="black" style={buttonStyle} {...props}>
      {children}
    </Button>
  );
}
export default ButtonXtra;
