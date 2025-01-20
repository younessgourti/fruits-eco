import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banners/Banner";
import Banner2 from "./components/Banners/Banner2";



const App = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        < Navbar />
        < Hero />
        < Menus />
        <Banner />
        <Banner2 />
        
      </main>
    </>
  );
};

export default App;
