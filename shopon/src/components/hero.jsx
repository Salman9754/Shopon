import Carousel from "react-bootstrap/Carousel";
import "./components.css"
import item1 from "../assets/item 1.png";
import item2 from "../assets/item 2.png";
import item3 from "../assets/item 3.png";
import item4 from "../assets/item 4.png";
import item5 from "../assets/item 5.png";
import item6 from "../assets/item 6.png";

function Hero() {
  return (
    <div className="container-fluid hero p-0">
      <Carousel controls={false} indicators={false} pause={false} interval={3000}>
        <Carousel.Item>
          <img src={item1} alt="Slide 1" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={item2} alt="Slide 2" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={item3} alt="Slide 3" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={item4} alt="Slide 3" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={item5} alt="Slide 3" className="d-block w-100" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={item6} alt="Slide 3" className="d-block w-100" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
