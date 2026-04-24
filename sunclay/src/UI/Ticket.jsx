import { Height } from "@mui/icons-material";
import React from "react";

function Ticket({ children }) {
  const ticketStyle = {
    // backgroundColor: "#9e90902f",
    borderRadius: "4px",
    display: "block",
    width: "41%",
    padding: "3px",
    textAlign: "center",
    justifyContent: "center",

    // border: "1px solid #30353018",
  };

  return <div style={ticketStyle}>{children}</div>;
}

export default Ticket;
