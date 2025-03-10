import React from "react";
import Navbar from "./navbar";
import Hero from "./hero";
import BadgeContainer from "./badgeCard";
import SaleCardContainer from "./saleCard";
import TrendCardContainer from "./trendcards";
import BannerContainer from "./banners";
import MobileCardContainer from "./mobileCards";
import FashionContainer from "./fashionCards";
import Footer from "./footer";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <BadgeContainer />
      <SaleCardContainer />
      <div className="row text-center mt-4">
        <h2>TRENDING GIFT CARDS</h2>
      </div>
      <TrendCardContainer />
      <BannerContainer />
      <div className="row text-center mt-4">
        <h2>MOBILE AND ACCESSORIES</h2>
      </div>
      <MobileCardContainer />
      <div className="row text-center mt-4">
        <h2>FASHION</h2>
      </div>
      <FashionContainer/>
      <Footer/>
    </div>
  );
}

export default Home;
