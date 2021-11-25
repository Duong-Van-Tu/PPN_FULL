import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/data";
const BannerService = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== services.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === services.length) {
      setSlideIndex(1);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timeoutSlider = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearTimeout(timeoutSlider);
    };
  });
  const moveDot = (index) => {
    setSlideIndex(index);
  };
  return (
    <div className="banner-service">
      {services.map((data, index) => {
        return (
          <div
            key={data.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
          >
            <div className="service__slider-left">
              <h1 className="service__slider-title">{data.title}</h1>
              <Link to="/service">
                <button className="btn-base">
                  Xem thêm <i className="fal fa-chevron-double-right"></i>
                </button>
              </Link>
            </div>
            <div className="service__slider-right">
              <img src={`./images/img${index + 1}.png`} alt="" />
            </div>
          </div>
        );
      })}

      <div className="container-dots">
        {Array.from({ length: 5 }).map((item, index) => (
          <div
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? "dot active" : "dot"}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BannerService;
