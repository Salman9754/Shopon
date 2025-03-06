import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import BadgeContainer from "./badgeCard";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <BadgeContainer />
    </div>
  );
}

export default Home;
