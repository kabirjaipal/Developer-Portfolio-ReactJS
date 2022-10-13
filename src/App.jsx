import React, { useState } from "react";
import {
  Footer,
  Navbar,
  Header,
  About,
  ContactUS,
  Portfolio,
  Services,
  Skills,
} from "./components/index";

const App = () => {
  const [page, setPage] = useState("Header");
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page == "Header" && <Header />}
      {page == "About US" && <About />}
      {page == "Portfolio" && <Portfolio />}
      {page == "Skills" && <Skills />}
      {page == "Services" && <Services />}
      {page == "Contact US" && <ContactUS />}
      <Footer page={page} setPage={setPage} />
    </>
  );
};

export default App;
