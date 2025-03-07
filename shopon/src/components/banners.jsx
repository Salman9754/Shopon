import React from "react";
import ban1 from "../assets/banner 1.jpg";
import ban2 from "../assets/banner 2.jpg";
function BannerContainer() {
  const BannerData = [{ picture: ban1 }, { picture: ban2 }];
  return (
    <div className="container gap-3 mt-4">
     <div className="row row-gap-3">
     {BannerData.map((value, index) => {
        return <BannerCard key={index} img={value.picture} />;
      })}
     </div>
    </div>
  );
}
function BannerCard({ img }) {
  return (
    <div className="banner col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
      <img src={img} alt="banner" />
    </div>
  );
}
export default BannerContainer;
