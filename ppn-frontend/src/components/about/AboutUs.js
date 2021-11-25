import React from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="home__about">
      <img src="./images/home-about.png" alt="" />
      <div className="home__about-introduce">
        <div className="home__about-title">Về Chúng Tôi</div>
        <div className="home__about-paragraph">
          <p>
            Công ty <b> TNHH Giao Nhận Vận Tải PPN </b> hoạt động trong lĩnh vực
            dịch vụ vận chuyển quốc tế, dịch vụ giao nhận khai Hải Quan và vận
            chuyển nội địa.
          </p>

          <p>
            Với đội ngũ nhân viên nhiều kinh nghiệm trong lĩnh vực cung cấp dịch
            vụ vận chuyển và giao nhận, đã và đang được sự tín nhiệm của các
            khách hàng về chất lượng dịch vụ và giá cả cạnh tranh.
          </p>

          <p>
            Chúng tôi luôn luôn cải tiến, nâng cao chất lượng dịch vụ và đặt mục
            tiêu phấn đấu ngày càng hoàn thiện trở thành nhà cung cấp dịch vụ
            vận chuyển chất lượng hàng đầu.
          </p>
          <Link to="/about" className="home__about-link">
            <button className="btn-base">
              Xem thêm <i className="fal fa-chevron-double-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
