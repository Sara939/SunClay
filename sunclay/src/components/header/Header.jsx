import React from "react";
import Video from "../../UI/Video";
import or from "../../assets/or.mp4";
import Container from "../../UI/Container";
import cover from "../../assets/cover.png";
import ButtonXtra from "../../UI/Button";

function Header({ aboutRef, catalogRef, orderRef }) {
  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  console.log({ aboutRef, catalogRef, orderRef });

  return (
    <div style={{ display: "flex" }}>
      <Video>
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
        }}
      >
        <ButtonXtra onClick={() => handleScroll(aboutRef)}>
          <p>About Me</p>
        </ButtonXtra>
        <ButtonXtra onClick={() => handleScroll(catalogRef)}>
          <p>Catalog</p>
        </ButtonXtra>
        <ButtonXtra onClick={() => handleScroll(orderRef)}>
          <p>Order Now</p>
        </ButtonXtra>
      </Container>
    </div>
  );
}

export default Header;
