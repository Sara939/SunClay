import React from "react";
import Video from "../../UI/Video";
import or from "../../assets/or.mp4";
import Container from "../../UI/Container";
import cover from "../../assets/cover.png";
import ButtonXtra from "../../UI/Button";
import clay from "../../../public/clay.jpg";
import Typography from "@mui/material/Typography";

function Header({ aboutRef, catalogRef, orderRef }) {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  console.log({ aboutRef, catalogRef, orderRef });

  return (
    <div style={{ display: "flex" }}>
      <Video poster={clay}>
        <source src={or} type="video/mp4" />
      </Video>
      <img
        src={cover}
        alt="Company Logo"
        style={{
          width: "100%",
        }}
      />

      <Container
        style={{
          height: "15%",
          overflowY: "scroll",
          display: "none",
        }}
      >
        <ButtonXtra onClick={() => handleScroll(aboutRef)}>
          <Typography variant="body2">About Me</Typography>
        </ButtonXtra>
        <ButtonXtra onClick={() => handleScroll(catalogRef)}>
          <Typography variant="body2">Catalog</Typography>
        </ButtonXtra>
        <ButtonXtra onClick={() => handleScroll(orderRef)}>
          <Typography variant="body2">Order Now</Typography>
        </ButtonXtra>
      </Container>
    </div>
  );
}

export default Header;
