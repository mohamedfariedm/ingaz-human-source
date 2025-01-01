import React from "react";
import "./NotFound.css";
import Lottie from "lottie-react";
import notFoundPage from "./404.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <div className="not-found-page flex flex-col  justify-center items-center mt-[120px]">
      <div className="animtion-lottie">
        <Lottie animationData={notFoundPage} />
      </div>
      <div className="content-info-error">
        <h2 className="title">الصفحة غير موجودة!</h2>
      </div>
      <Link to={"/"} className=" py-4 px-5 border flex justify-center items-center gap-2 rounded-[40px]">
        <FontAwesomeIcon icon={faHome} />
        الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default NotFound;
