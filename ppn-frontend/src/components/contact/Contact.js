import React, { useState, useContext } from "react";
import "./Contact.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { toast } from "react-toastify";
import { employees } from "../../data/data";
import { CustomerContext } from "../../contexts/CustomerContext";

const Contact = () => {
  // context
  const { addCustomer } = useContext(CustomerContext);
  const notify = () => {
    if (name === "" || phoneNumber === "") {
      toast.error(
        "Gửi yêu cầu thất bại. Bạn vui lòng nhập tên và số điện thoại!"
      );
    } else {
      toast.success("Cảm ơn bạn đã gửi yêu cầu chúng tôi sẽ sớm phản hồi!");
    }
  };
  // state
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });

  // value
  const { name, email, phoneNumber, service, message } = newCustomer;

  const onChangeNewCustomerForm = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await addCustomer(newCustomer);
    resetAddCustomerData();
  };

  const resetAddCustomerData = () => {
    setNewCustomer({
      name: "",
      email: "",
      service: "",
      phoneNumber: "",
      message: "",
    });
  };
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
    <div className="home__contact" id="contact">
      <div className="home__contact-top" id="contact">
        <div className="image">
          <div className="info-company">
            <h2>
              Liên hệ ngay với chúng tôi để giải đáp thắc mắc của quý khách
            </h2>
            <div className="info-container">
              <div className="info-item">
                <i className="fad fa-phone"></i> 0902999000
              </div>
              <div className="info-item">
                <i className="fal fa-envelope-square"></i>
                ppn.logistics88@gmail.com
              </div>
              <div className="info-item">
                <i className="fad fa-map-marker-alt"></i>
                <span>
                  243D - Cộng Hoà - phường 13 - Quận Tân Bình - Thành phố Hồ Chí
                  Minh
                </span>
              </div>
              <p>Làm việc từ 9h - 17h thứ 2 đến thứ 6 hằng tuần</p>
            </div>
          </div>
          <img src="images/home-contact.png" alt="" />
        </div>
        <form onSubmit={onSubmit}>
          <h3>Nhận Tư Vấn</h3>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Nhập họ tên"
            className="box"
            onChange={onChangeNewCustomerForm}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            placeholder="Nhập số điện thoại"
            className="box"
            onChange={onChangeNewCustomerForm}
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Nhập email"
            className="box"
            onChange={onChangeNewCustomerForm}
          />

          <select
            name="service"
            value={service}
            className="box"
            onChange={onChangeNewCustomerForm}
          >
            <option value="">-- Dịch Vụ --</option>
            <option value="Khai báo hải quan">Khai báo hải quan</option>
            <option value="Vận tải hàng hóa nội địa">
              Vận tải hàng hóa nội địa
            </option>
            <option value="Vận tải đường bộ">Vận tải đường bộ</option>
            <option value="Vận tải đường biển">Vận tải đường biển</option>
            <option value="Vận tải đường không">Vận tải đường không</option>
          </select>
          <textarea
            name="message"
            placeholder="Lời nhắn của bạn"
            id
            cols={30}
            rows={10}
            value={message}
            onChange={onChangeNewCustomerForm}
          />
          <input
            onClick={notify}
            type="submit"
            value="Gửi yêu cầu"
            className="btn-base"
          />
        </form>
      </div>
      <div className="home__contact-title">Hỗ Trợ Khách Hàng</div>

      <Slider {...settings}>
        {employees.map(function (employee, index) {
          return (
            <div key={index}>
              <div className="card-contact">
                <span className="close" />
                <span className="arrow" />
                <article className="contact-article">
                  <h2>{employee.name}</h2>
                  <div className="title">Tư vấn viên</div>
                  <div className="pic">
                    <img src={`${employee.image}`} alt="" />
                  </div>
                  <div className="desc">
                    <a
                      href={`tel:${employee.phoneNumber}`}
                      className="desc-phone"
                    >
                      <i className="fad fa-phone-square"></i>
                      {employee.phoneNumber}
                    </a>
                    <a href={`mailto:${employee.email}`} className="desc-mail">
                      <i className="fad fa-envelope"></i>
                      {employee.email}
                    </a>
                  </div>
                </article>
                <div className="contact-actions">
                  <a
                    href={`https://zalo.me/${employee.zalo}`}
                    className="btn-contact"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>zalo</span>
                    <img className="icon" src="./images/zalo.png" alt="" />
                  </a>

                  <a
                    href={`tel:${employee.phoneNumber}`}
                    className="btn-contact"
                  >
                    <span>Telephone</span>
                    <img className="icon" src="./images/phone.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Contact;
