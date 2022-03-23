import React from "react";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Template from "./Components/Template";


function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Template />
      <Footer />
    </div>
  );
}

export default Home;