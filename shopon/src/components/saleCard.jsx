import React from "react";
import saleCard1 from "../assets/sale card1.jpg";
import saleCard2 from "../assets/sale card2.png";
import saleCard3 from "../assets/sale card3.png";
import saleCard14 from "../assets/sale card4.jpg";

function SaleCardContainer() {
  const SaleCardData = [
    {
      picture: saleCard1,
      caption: "Ultra Smart Watch With 7 Straps with best quality",
      price: 3000,
    },
    {
      picture: saleCard2,
      caption: "JBL M3 Mini Bluetooth Speaker Extra Bass",
      price: 1700,
    },
    {
      picture: saleCard3,
      caption: "Doomax Fast Micro Usb Charging + Data Cable 1M",
      price: 400,
    },
    {
      picture: saleCard14,
      caption: "SOLAR WALL LIGHT SWL-38 / 700LM",
      price: 4000,
    },
  ];
  return (
    <div className="container sale_card_container mt-4">
      <div className="row">
        {SaleCardData.map((card, index) => {
          return (
            <SaleCard
              key={index}
              img={card.picture}
              caption={card.caption}
              price={card.price}
            />
          );
        })}
      </div>
    </div>
  );
}

function SaleCard({ img, caption, price }) {
  return (
    <div className="card p-3 text-center align-items-center col-lg-3 col-md-6 col-sm-12">
      <img src={img} alt={caption} width={200} height={200} />
      <p className="mt-2">{caption}</p>
      <h3>Price: {price}</h3>
    </div>
  );
}
export default SaleCardContainer;
