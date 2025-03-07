import React from "react";
import "./components.css"
import badge1 from "../assets/badge 1.png";
import badge2 from "../assets/badge 2.png";
import badge3 from "../assets/badge 3.png";
import badge4 from "../assets/badge 4.png";
import badge5 from "../assets/badge 5.png";
import badge6 from "../assets/badge 6.png";

function BadgeContainer() {
  const BadgeData = [
    { img: badge1, label: "Gift Cards" },
    { img: badge2, label: "Grocery" },
    { img: badge3, label: "Fashion" },
    { img: badge4, label: "Beauty" },
    { img: badge5, label: "Home & Decor" },
    { img: badge6, label: "Mobile & Tablets" },
  ];
  return (
    <div className="container badge-container p-4 mt-3">
      <div className="row justify-content-center">
        {BadgeData.map((badge, index) => (
          <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
            <BadgeCard img={badge.img} label={badge.label} />
          </div>
        ))}
      </div>
    </div>
  );
}

function BadgeCard({ img, label }) {
  return (
    <div className="card p-3 text-center align-items-center">
      <img src={img} alt={label} width={50} height={50} />
      <p className="mt-2">{label}</p>
    </div>
  );
}
export default BadgeContainer;
