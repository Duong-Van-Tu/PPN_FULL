import React, { useContext } from "react";
import "./PhoneAndZalo.css";
import { AuthContext } from "../../contexts/AuthContext";
const PhoneAndZalo = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);

  return (
    <div>
      {!user && (
        <div className="zalo-phone">
          <a
            href="https://zalo.me/0773641222"
            className="zalo__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./images/zalo.png" alt="zalo" />
          </a>
          <div
            className="phonering-alo-phone phonering-alo-green phonering-alo-show"
            id="phonering-alo-phoneIcon"
          >
            <div className="phonering-alo-ph-circle" />
            <div className="phonering-alo-ph-circle-fill" />
            <a href="tel:0902999000" className="pps-btn-img" title="Liên hệ">
              <div className="phonering-alo-ph-img-circle" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneAndZalo;
