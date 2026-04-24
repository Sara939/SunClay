import Header from "../src/components/header/Header";
import Footer from "../src/components/footer/Footer";
import MainPage from "../src/components/pages/MainPage";
import { useRef } from "react";

function App() {
  const aboutRef = useRef(null);
  const catalogRef = useRef(null);
  const orderRef = useRef(null);

  return (
    <>
      <div>
        <Header
          aboutRef={aboutRef}
          catalogRef={catalogRef}
          orderRef={orderRef}
        />
        <MainPage
          aboutRef={aboutRef}
          catalogRef={catalogRef}
          orderRef={orderRef}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
