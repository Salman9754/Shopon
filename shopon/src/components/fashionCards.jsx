import React from "react";
import fashionBanner from "../assets/fashion banner.jpg";
import fashion1 from "../assets/fashion 1.jpg";
import fashion2 from "../assets/fashion 2.jpg";
import fashion3 from "../assets/fashion 3.jpg";
import fashion4 from "../assets/fashion 4.jpg";
function FashionContainer() {
  const fashionCardsData = [
    { picture: fashion1 },
    { picture: fashion2 },
    { picture: fashion3 },
    { picture: fashion4 },
  ];
  return (
    <>
      <div className="container overflow-hidden mt-3">
        <div className="fashion_banner">
          <img src={fashionBanner} alt="banner" />
        </div>
      </div>
      <div className="container d-flex justify-content-between mt-3">
        {fashionCardsData.map((card, index) => {
          return <FashionCard key={index} img={card.picture} />;
        })}
      </div>
    </>
  );
}
function FashionCard({ img }) {
  return (
    <div className="cards p-3 text-center align-items-center">
      <img src={img} alt="" width={250} height={200} className="rounded-2"/>
    </div>
  );
}
export default FashionContainer;
