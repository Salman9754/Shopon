import React from "react";
import mobile1 from "../assets/mobile 1.jpg";
import mobile2 from "../assets/mobile 2.jpg";
import mobile3 from "../assets/mobile 3.jpg";
import mobile4 from "../assets/mobile 4.jpg";
import mobile5 from "../assets/mobile 5.jpg";
import mobile6 from "../assets/mobile 6.jpg";
import mobile7 from "../assets/mobile 7.jpg";
import mobile8 from "../assets/mobile 8.jpg";
import mobile9 from "../assets/mobile 9.jpg";
import mobile10 from "../assets/mobile 10.jpg";
import mobile11 from "../assets/mobile 11.jpg";
import mobile12 from "../assets/mobile 12.jpg";
function MobileCardContainer() {
  const MobilesData = [
    { picture: mobile1, name: "Oppo A9 2020 (128GB 8GB)", price: 10000 },
    {
      picture: mobile2,
      name: "Apple iPhone 14 Pre Order 14 128",
      price: 12000,
    },
    { picture: mobile3, name: "Apple iPhone 14 Plus Pre Order", price: 15000 },
    { picture: mobile4, name: "Apple iPhone 14 Mini Pre Order", price: 18000 },
    {
      picture: mobile5,
      name: "Apple iPhone 14 Pro Max Pre-Order",
      price: 20000,
    },
    { picture: mobile6, name: "Xiaomi Redmi Note 13 pro 512GB", price: 22000 },
    {
      picture: mobile7,
      name: "Samsung Galaxy S25 Ultra (12GB + 512GB)",
      price: 25000,
    },
    {
      picture: mobile8,
      name: "Samsung Galaxy S23 Ultra 12GB 256GB ",
      price: 27000,
    },
    {
      picture: mobile9,
      name: "Samsung Galaxy S24 Ultra 512GB GRAY",
      price: 30000,
    },
    {
      picture: mobile10,
      name: "Samsung Galaxy S24 Ultra 12GB RAM 256GB",
      price: 35000,
    },
    {
      picture: mobile11,
      name: "Samsung Galaxy Z Fold 5 (Icy Blue 512GB + 12GB)",
      price: 35000,
    },
    {
      picture: mobile12,
      name: "Samsung Galaxy Z Fold 5 (Icy Gray 512GB + 12GB)",
      price: 35800,
    },
  ];
  return (
    <div className="container mt-4">
      <div className="row row-gap-2">
        {MobilesData.map((card, index) => {
          return (
            <MobileCard
              key={index}
              img={card.picture}
              name={card.name}
              price={card.price}
            />
          );
        })}
      </div>
    </div>
  );
}
function MobileCard({ img, name, price }) {
  return (
    <div className="card col-lg-3 col-md-6 col-sm-12 justify-content-center align-items-center p-3">
      <img src={img} alt={name} width={200} height={200} />
      <p className="mt-2">{name}</p>
      <h3>Price: {price}</h3>
    </div>
  );
}

export default MobileCardContainer;
