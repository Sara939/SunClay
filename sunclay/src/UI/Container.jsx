import { Margin, Source } from "@mui/icons-material";
import React from "react";

function Container({
  children,
  position,
  display,
  flexWrap,
  backgroundColor,
  backgroundImage,
  marginTop,
}) {
  const containerStyle = {
    backgroundColor: backgroundColor,
    borderRadius: "4px",
    position: position || "absolute",
    display: display || "block",
    width: "100%",
    justifyContent: "center",
    paddingTop: "5px",
    flexWrap: flexWrap,
    alignItems: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    marginTop: marginTop || 0,
  };

  return <div style={containerStyle}>{children}</div>;
}

export default Container;
