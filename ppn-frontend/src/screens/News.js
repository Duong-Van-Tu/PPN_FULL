import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    // AOS.init({
    //   offset: 400, 
    //   delay: 0, 
    //   duration: 1000, 
    // });
  }, []);

  return (
    <div className="news">
      <div className="news__banner">
        <div className="news-main-content">
          <h2>Tin tức mới nhất về thị trường logistics thế giới</h2>
          <h3>Cổng tin tức về thị trường logistics</h3>

          <button className="btn-base">
            <Link to="/news" className="read-more">
              Xem thêm <i className="fad fa-chevron-double-right text-xs"></i>
            </Link>
          </button>

          <div className="current-news-head">
            <h3>
              Dịch COVID-19 đã làm chi phí hàng hóa tăng cao do đứt gãy chuỗi
              logistics
              <span>by Dương Văn Tú</span>
            </h3>

            <h3>
              Chính thức thành lập Hiệp hội Logistics TP Hồ Chí Minh
              <span>by Dương Văn Tú</span>
            </h3>

            <h3>
              Thị trường Logistics sẽ đạt hơn 77 tỷ USD trong năm 2025
              <span>by Dương Văn Tú</span>
            </h3>

            <h3>
              Hoa Kỳ chấm dứt điều tra gỗ Việt Nam, không thuế quan
              <span>by Dương Văn Tú</span>
            </h3>
          </div>
        </div>
        <div className="news-sub-content">
          <div className="hot-topic">
            <img src="images/news1.png" alt="" />
            <div className="hot-topic-content">
              <h2>
                Dịch COVID-19 đã làm chi phí hàng hóa tăng cao do đứt gãy chuỗi
                logistics
              </h2>

              <p>
                Trong 2 năm qua, do ảnh hưởng dịch COVID-19 khiến chuỗi
                logistics trong và ngoài nước liên tục bị đứt gãy.
              </p>
              <button className="btn-base">
                <Link to="/news" className="read-more">
                  Xem thêm
                </Link>
              </button>
            </div>
          </div>
          <div className="hot-topic">
            <img src="images/news2.png" alt="" />
            <div className="hot-topic-content">
              <h2>Thị trường Logistics sẽ đạt hơn 77 tỷ USD trong năm 2025</h2>

              <p>
                Báo cáo mới nhất của Technavio dự báo thị trường logistics dự
                kiến ​​sẽ tăng trưởng 77,28 tỷ USD trong giai đoạn 2021 – 2025.
              </p>
              <button className="btn-base">
                <Link to="/news" className="read-more">
                  Xem thêm
                </Link>
              </button>
            </div>
          </div>
          <div className="hot-topic">
            <img src="images/news3.png" alt="" />
            <div className="hot-topic-content">
              <h2>Hoa Kỳ chấm dứt điều tra gỗ Việt Nam, không thuế quan</h2>

              <p>
                Theo tuyên bố của Đại diện Thương mại Hoa Kỳ, hai nước đã đi đến
                một thỏa thuận nhằm đưa ra giải pháp thỏa đáng cho vấn đề đang
              </p>
              <button className="btn">
                <Link to="/news" className="read-more">
                  Xem thêm
                </Link>
              </button>
            </div>
          </div>
          <div className="hot-topic">
            <img src="images/news4.png" alt="" />
            <div className="hot-topic-content">
              <h2>
                Bộ trưởng Nguyễn Văn Thể: Sẽ có cơ chế đặc biệt để phát triển
                vận tải ven biển
              </h2>

              <p>
                Sáng 14/10, tại Hà Nội, Bộ trưởng Bộ Giao thông Vận tải Nguyễn
                Văn Thể chủ trì Hội nghị trực tuyến toàn quốc phát triển
                logistics
              </p>
              <button className="btn-base">
                <Link to="/news" className="read-more">
                  Xem thêm
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="news__main grid">
        <div className="main-container-left">
          <h2 className="text-2xl font-medium">Tin Tức Hot</h2>
          <div className="container-top-left">
            <article>
              <img src="images/img1.png" alt="" />
              <div>
                <h3>Vận tải hàng hóa đường không</h3>
                <p>
                  Sau nhiều năm âm thầm dưới sự thống trị của các hãng nước
                  ngoài, thị trường vận tải hàng hóa bằng đường không Việt Nam
                  đang nóng dần lên với cuộc đua “xin bay” của hàng loạt doanh
                  nghiệp
                </p>
                <Link to="/news" className="read-more">
                  Đọc thêm <span>&gt;&gt;</span>
                </Link>
              </div>
            </article>
          </div>
          <div className="container-bottom-left">
            <article>
              <img src="images/img2.png" alt="" />
              <div>
                <h3>Best smart speakers for the year</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi iure modi animi cupiditate. Explicabo, nihil?
                </p>
                <Link to="/news" className="read-more">
                  Đọc thêm <span>&gt;&gt;</span>
                </Link>
              </div>
            </article>
            <article>
              <img src="images/img3.png" alt="" />
              <div>
                <h3>
                  iPad Pro, reviewed: Has the iPad become my main computer now?
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Commodi iure modi animi cupiditate. Explicabo, nihil?
                </p>
                <Link to="/news" className="read-more">
                  Đọc thêm <span>&gt;&gt;</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
        <div className="main-container-right">
          <h2 className="text-2xl font-medium">Tin Tức Mới Nhất</h2>
          <article>
            <h4>just in </h4>
            <div>
              <h2>
                Here's how to track your stimulus check with the IRS Get My
                Payment Portal
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                repellendus?
              </p>
              <Link to="/news" className="read-more">
                Đọc thêm <span>&gt;&gt;</span>
              </Link>
            </div>
            <img src="images/img1.png" alt="" />
          </article>
          <article>
            <h4>just in </h4>
            <div>
              <h2>The best outdoor games to play with your family</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                repellendus?
              </p>
              <Link to="/news" className="read-more">
                Đọc thêm <span>&gt;&gt;</span>
              </Link>
            </div>
            <img src="images/img2.png" alt="" />
          </article>
          <article>
            <h4>just in </h4>
            <div>
              <h2>
                Why walk? Check out the best electric scooters and e-bikes for
                2020
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                repellendus?
              </p>
              <Link to="/news" className="read-more">
                Đọc thêm <span>&gt;&gt;</span>
              </Link>
            </div>
            <img src="images/img3.png" alt="" />
          </article>
          <article>
            <h4>just in </h4>
            <div>
              <h2>
                Disneyland Paris will stream its Lion King stage show Friday
                night
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                repellendus?
              </p>
              <Link to="/news" className="read-more">
                Đọc thêm <span>&gt;&gt;</span>
              </Link>
            </div>
            <img src="images/img4.png" alt="" />
          </article>
          <article>
            <h4>just in </h4>
            <div>
              <h2>
                Looking at a phone's lock screen also requries a warrant, judge
                rules
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                repellendus?
              </p>
              <Link to="/news" className="read-more">
                Đọc thêm <span>&gt;&gt;</span>
              </Link>
            </div>
            <img src="images/news5.png" alt="" />
          </article>
        </div>
      </div>
    </div>
  );
};

export default News;
