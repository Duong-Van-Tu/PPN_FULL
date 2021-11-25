import React, { useState, useEffect } from "react";
import BannerService from "../components/banner/BannerService";
import "../components/banner/Banner.css";
import Contact from "../components/contact/Contact";
import { services } from "../data/data";
const Service = () => {
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

  return (
    <div className="service">
      <BannerService></BannerService>
      <div className="service__main">
        <div className="service__main-intro">
          <h2>Dịch Vụ Chính</h2>
          <p>
            <span>PPN LOGISTICS TRANSPORT </span>
            hỗ trợ tư vấn khách hàng các loại tài liệu xuất nhập khẩu, các quy
            định về hải quan địa phương, trách nhiệm và thuế. Chúng tôi luôn sẵn
            sàng làm việc với các cơ quan liên quan để tìm ra các giải pháp tốt
            nhất để thông quan cho lô hàng một cách nhanh nhất và kịp thời.
          </p>
        </div>
        <main className="service__container">
          <div className="service__section">
            <div className="service__card-text">
              <h2 className="service__intro-title">Khai Báo Hải Quan</h2>
              <div className="service__intro-paragraph">
                <span>Dịch vụ khai báo hải quan</span> hàng xuất nhập gồm hàng
                nguyên tàu, hàng nguyên container, hàng lẻ, hàng rời với đa dạng
                các mặt hàng như gỗ, quần áo, vải, móc áo, trang trí hội thất,
                nhựa, trang thiết bị máy móc, hàng nguy hiểm, ôtô.
                <br />
                Thực hiện thông quan cho tất cả các loại hình như kinh doanh,
                đầu tư, tạm nhập tái xuất, tạm xuất - tái nhập, gia công, sản
                xuất xuất khẩu, hàng mẫu, hàng phi mậu dịch, hàng kho ngoại
                quan…
                <br />
                Dịch vụ thông quan đối với tất cả các loại hình hàng hoá xuất
                nhập khẩu là hàng hàng viện trợ, hàng dự án, hàng triển lãm,
                hàng quá cảnh.
                <br />
                Tư vấn cho khách hàng về loại hình khai hải quan phù hợp, tính
                thuế, áp mã, áp giá hải quan, làm C/O, hoàn thuế nhập khẩu và
                các chính sách thuế khác có liên quan.
                <br />
                Cung cấp các thông tin hữu ích về các quy định của các nước khác
                xuất từ Việt Nam, cung cấp dịch vụ khai thuê hải quan tại nơi
                đến.
                <br />
                Là nhà vận tải đa phương thức, chúng tôi thực hiện dịch vụ khai
                Hải quan ngày càng đa dạng tại các cửa khẩu Việt Nam - Trung
                Quốc, Việt Nam - Mỹ, Việt Nam - Nhật,...
              </div>
            </div>
            <img src="./images/img4.png" alt="" />
          </div>
          <div className="service__section">
            <img src="./images/img3.png" alt="" />
            <div className="service__card-text">
              <h2 className="service__intro-title">Vận Tải Đường Bộ</h2>
              <div className="service__intro-paragraph">
                <span>Vận chuyển nội địa</span> chúng tôi tư vấn và cung cấp
                giải pháp vận chuyển, phân phối hàng hóa khắp các tỉnh thành
                Việt Nam hoặc xuyên biên giới Lào và Campuchia, nhằm đáp ứng kịp
                thời nhu cầu vận tải hàng hóa của doanh nghiệp.
                <br />
                <span style={{ marginLeft: "20px" }}>Vận chuyển quốc tế:</span>
                <br />
                <div>
                  <i className="far fa-check"></i>
                  Vận chuyển hàng lẻ và hàng full container
                </div>
                <div>
                  <i className="far fa-check"></i>
                  Vận chuyển qua đường biên giới
                </div>
                <div>
                  <i className="far fa-check"></i>
                  Vận chuyển hàng trực tiếp từ CFS
                </div>
                <div>
                  <i className="far fa-check"></i>
                  Cung cấp dịch vụ kéo container từ cảng biển hoặc bằng đường
                  sắt
                </div>
                <div>
                  <i className="far fa-check"></i>
                  Vận chuyển hàng hóa vào các khu dân cư
                </div>
                <div>
                  <i className="far fa-check"></i>
                  Vận chuyển đa phương thức như đường sắt, đường bộ,...
                </div>
              </div>
            </div>
          </div>
          <div className="service__section">
            <div className="service__card-text">
              <h2 className="service__intro-title">Vận Tải Đường Không</h2>
              <div className="service__intro-paragraph">
                <span>Vận chuyển bằng máy bay </span>
                là lựa chọn nhanh nhất, an toàn nhất, nhưng chi phí cao nhất
                trong tất cả các phương thức vận chuyển. Vì thế, phương thức vận
                chuyển này thường phù hợp với những hàng hóa có giá trị cao,
                nhạy cảm với thời gian giao hàng
                <br />
                <span style={{ marginLeft: "20px" }}>
                  Dịch vụ xuất nhập khẩu hàng không:
                </span>
                <br />
                <div>
                  <i className="far fa-check"></i>
                  Hàng hóa vận chuyển đường hàng không (Air Cargo)
                </div>
                <div>
                  <i className="far fa-check"></i>
                  Chuyển phát nhanh (Express/ Courier)
                </div>
                <span style={{ marginLeft: "20px" }}>Dịch vụ khác:</span>
                <div>
                  <i className="far fa-check"></i>
                  Giao nhận hàng tận nơi
                </div>
                <div>
                  <i className="far fa-check"></i>
                  Theo dõi lịch trình chuyến bay
                </div>
                <div>
                  <i className="far fa-check"></i>
                  Theo dõi lịch trình chuyến bay
                </div>
                <div>
                  <i className="far fa-check"></i>
                  Đóng gói phù hợp với yêu cầu vận chuyển của khách hàng
                </div>
              </div>
            </div>
            <img src="./images/img5.png" alt="" />
          </div>
          <div className="service__section">
            <img src="./images/img1.png" alt="" />
            <div className="service__card-text">
              <h2 className="service__intro-title">Vận Tải Đường Biển</h2>
              <div className="service__intro-paragraph">
                <span>Dịch vụ vận tải đường biển </span>
                Cung cấp cho khách hàng dịch vụ vận chuyển hàng xuất khẩu và
                nhập khẩu bằng đường biển từ Việt Nam đi mọi nơi trên thế giới
                và ngược lại (hàng nguyên container FCL và hàng lẻ LCL.
                <br />
                Thực hiện thông quan cho tất cả các loại hình như kinh doanh,
                đầu tư, tạm nhập tái xuất, tạm xuất - tái nhập, gia công, sản
                xuất xuất khẩu, hàng mẫu, hàng phi mậu dịch, hàng kho ngoại
                quan…
                <br />
                Chất lượng dịch vụ được bảo đảm bởi các tuyến đi thẳng thông qua
                mạng lưới đại lý lâu năm và có uy tín.
                <br />
                Giá cạnh tranh và thời gian chuyển tải nhanh nhất, luôn gắn với
                bảo hiểm trách nhiệm người vận tải.
                <br />
                Cung cấp dịch vụ hàng nhập từ các nơi trên thế giới về Việt Nam.
                <br />
                Dịch vụ giao nhận hàng tận nơi (Door to door services).
                <br />
                Các dịch vụ hỗ trợ (Add – services).
              </div>
            </div>
          </div>
          <div className="service__section">
            <div className="service__card-text">
              <h2 className="service__intro-title">Vận Tải Hàng Hóa Nội Địa</h2>
              <div className="service__intro-paragraph">
                <span>PPN Logistics</span> cung cấp dịch vụ vận chuyển hàng hoá
                xuất nhập khẩu từ sân bay, cảng biển về các kho , nhà máy, khu
                công nghiệp và từ các khu công nghiệp, kho bãi của khách hàng
                đến sân bay, cảng biển bằng các phương tiện vận tải như xe
                container, xe tải các loại.
                <br />
                Với giá thành hợp lý và dịch vụ uy tín, chất lượng chắc chắn sẽ
                làm hài lòng tất cả các khách hàng.
              </div>
            </div>
            <img src="./images/img2.png" alt="" />
          </div>
        </main>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default Service;
