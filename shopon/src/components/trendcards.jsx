import React from "react";
import './components.css'
import trend1 from "../assets/trend card 1.jpg";
import trend2 from "../assets/trend card 2.jpg";
import trend3 from "../assets/trend card 3.jpg";
import trend4 from "../assets/trend card 4.jpg";
function TrendCardContainer() {
  const trendCardData = [
    { picture: trend1 },
    { picture: trend2 },
    { picture: trend3 },
    { picture: trend4 },
  ];
  return(
    <div className="container trend_card_container mt-3">
        <div className="row">
        {trendCardData.map((card,index)=>{
            return <TrendCard key={index} img={card.picture}/>
        })}
        </div>
    </div>
  )
}
function TrendCard({ img }) {
  return (
    <div className="trend_card p-3 text-center align-items-center col-lg-3 col-md-6 col-sm-12">
      <img src={img} alt="trend Card" width={200} height={200} />
    </div>
  );
}
export default TrendCardContainer;
