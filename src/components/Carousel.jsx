import React from "react";
import FirstSlide from "../assests/firstSlide.jpg";
import SecondSlide from "../assests/secondSlide.jpg";
import thirdSlide from "../assests/thirdSlide.jpg";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel-main">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={FirstSlide} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={SecondSlide} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={thirdSlide} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
