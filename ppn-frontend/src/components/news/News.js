import React from "react";
import Article from "./Article";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";
const News = () => {
  var cards = [
    {
      image:
        "./images/news1.png",
      title: "Dịch COVID-19 đã làm chi phí hàng hóa tăng cao do đứt gãy chuỗi logistics",
    },

    {
      image: "./images/news2.png",
      title: "Thị trường Logistics sẽ đạt hơn 77 tỷ USD trong năm 2025",
    },
    {
      image:
        "./images/news3.png",
      title: "Hoa Kỳ chấm dứt điều tra gỗ Việt Nam, không thuế quan",
    },
    {
      image:
        "./images/news4.png",
      title: "Bộ trưởng Nguyễn Văn Thể: Sẽ có cơ chế đặc biệt để phát triển vận tải ven biển",
    },
    {
      image:
        "./images/news5.png",
      title: "Chính thức thành lập Hiệp hội Logistics TP Hồ Chí Minh",
    },
  
  ];
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };

  if (cards.length > 0) {
    var newsTemplate = cards.map(function (card, index) {
      return (
        <div key={index}>
          <Article card={card} />
        </div>
      );
    });
  } else {
    newsTemplate = <p>Please add some cards</p>;
  }
  return (
    <div className="home__news">
      <div className="px-8 pb-8 ">
        <div className="text-center p-4 font-medium text-3xl">Tin Tức</div>
        <Slider {...settings}>{newsTemplate}</Slider>
      </div>
    </div>
  );
};

export default News;
