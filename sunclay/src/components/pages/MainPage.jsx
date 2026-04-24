import React from "react";
import AboutMe from "./AboutMe";
import Catalog from "./Catalog";
import MakeOrder from "./MakeOrder";

function MainPage({ aboutRef, catalogRef, orderRef }) {
  return (
    <>
      <div ref={aboutRef}>
        <AboutMe />
      </div>
      <div ref={catalogRef}>
        <Catalog />
      </div>
      <div ref={orderRef}>
        <MakeOrder />
      </div>
    </>
  );
}
// style={{ flexGrow: "20" }}
export default MainPage;
