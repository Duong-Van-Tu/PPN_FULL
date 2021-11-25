import React, { useEffect} from "react";
import Contact from "../components/contact/Contact";
import AboutUs from "../components/about/AboutUs";
import BannerService from "../components/banner/BannerService";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);

  return (
    <div className="about">
      <BannerService></BannerService>
      <AboutUs></AboutUs>
      <div className="about__reason-choosing">
        <div className="about__reason-title">Vì Sao Nên Chọn Chúng Tôi?</div>
        <div className="about__reason-list">
          <div className="about__reason-item">
            <h4 className="reason__item-title">
              Chúng tôi đặt tiêu chí phục vụ khách hàng lên hàng đầu
            </h4>
            <div className="reason__item-content">
              <img src="./images/about-nut-1.jpg" alt="nut-1" />
              <p>
                Toàn bộ đội ngũ nhân viên của chúng tôi thấu hiểu một điều rằng
                thành công của chúng tôi nằm trong những giá trị mà chúng tôi
                đem lại cho khách hàng. Chính vì lẽ đó chúng tôi luôn cam kết
                mang lại cho khách hàng những giá trị nhiều hơn sự mong đợi.
              </p>
            </div>
          </div>
          <div className="about__reason-item">
            <h4 className="reason__item-title">Chi phí giá cả hợp lý</h4>
            <div className="reason__item-content">
              <img src="./images/about-nut-2.jpg" alt="nut-1" />
              <p>
                Để mang đến sự thoải mái cho khách hàng, chúng tôi luôn luôn so
                sánh để điều chỉnh phí dịch vụ trên cơ sở chất lượng tư vấn
                tương tự.
              </p>
            </div>
          </div>
          <div className="about__reason-item">
            <h4 className="reason__item-title">
              Chúng tôi làm việc với niềm say mê và cảm hứng sáng tạo
            </h4>
            <div className="reason__item-content">
              <img src="./images/about-nut-3.jpg" alt="nut-1" />
              <p>
                Chúng tôi nhận ra rằng những doanh nghiệp thành công là nhờ
                những con người ưu tú. Mỗi thành viên của PPN Logistics đều là
                những chuyên gia trong lĩnh vực của mình. Thân thiện, giầu cảm
                hứng sáng tạo, có động lực làm việc mạnh mẽ đó chính là điểm
                khác biệt của họ.
              </p>
            </div>
          </div>
          <div className="about__reason-item">
            <h4 className="reason__item-title">
              Chất lượng dịch vụ uy tín đã được khẳng định
            </h4>
            <div className="reason__item-content">
              <img src="./images/about-nut-4.jpg" alt="nut-1" />
              <p>
                Vì giá trị cốt lõi mà chúng tôi muốn hướng đến là xây dựng một
                thương hiệu bền vững. Cho nên, khi cung cấp bất kỳ dịch vụ thiết
                kế nào, kể cả gói chi phí thấp nhất, PPN Logistics vẫn luôn nỗ
                lực. Chúng tôi tin rằng với những giá trị mà mình đang theo
                đuổi, chắc chắn sẽ chinh phục được cả những khách hàng khó tính
                nhất.
              </p>
            </div>
          </div>
          <div className="about__reason-item">
            <h4 className="reason__item-title">
              Chúng tôi coi trọng mối quan hệ lâu dài
            </h4>
            <div className="reason__item-content">
              <img src="./images/about-nut-5.jpg" alt="nut-1" />
              <p>
                PPN Logistics bắt đầu bằng việc khởi tạo mối quan hệ hợp tác tin
                tưởng, và hoàn thành công việc bằng việc duy trì quan hệ dài
                lâu. Chính sách hỗ trợ, hậu mãi tạo cho khách hàng niềm tin hoàn
                toàn khi trao công việc cho chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact></Contact>
    </div>
  );
};

export default About;
