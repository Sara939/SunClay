import React from "react";
import Container from "../../UI/Container";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Container backgroundColor={"rgba(249, 249, 249, 0.81)"} marginTop={30}>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          fontSize: "0.3 rem",
        }}
      >
        {" "}
        <br />
        Created by Sara Likaount, all rights reserved. @SunClay ordring
        platforme
        <br /> <br />
        Video: “ ויהי אור” by התקווה6 \ Hatikva6 , Source: YouTube
        {/* <br /> */}
        {/* Photo by Nasim Keshmiri on Unsplash */}
        <br />
        Photo by Asa Rodger on Unsplash
      </Typography>
    </Container>
    // flex-shrink: 0;
  );
}

export default Footer;
