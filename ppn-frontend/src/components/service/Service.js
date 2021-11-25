import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Service.css";
import { services } from "../../data/data";
export default function Service() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="home__service">
      <div className="home__service-title">Dịch Vụ Nổi Bật</div>
      <Slider {...settings}>
        {services.map(function (service, index) {
          return (
            <Link className="service__card-link" to="/service" key={index}>
              <div className="service__card">
                <img src={`images/img${index + 1}.png`} alt="" />
                <div className="card-body">
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                  <Link to="/service">
                    <button className="btn-base">
                      Xem thêm <i className="fal fa-chevron-double-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          );
        })}
      </Slider>
    </div>
  );
}
