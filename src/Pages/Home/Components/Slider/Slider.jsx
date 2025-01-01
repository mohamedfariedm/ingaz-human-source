import React, { useEffect, useState } from "react";
import { AvatarGroup } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SwiperSlider from "Components/Ui/SwiperSlider/SwiperSlider";
import SearchInputLocation from "Components/Ui/SearchInputLocation/SearchInputLocation";
import DatePickerComponent from "Components/Ui/DatePickerComponent/DatePickerComponent";
import GeneralAPI from "api/generalApi";
import LoaderSvg from "assets/Icons/LoaderSvg";
import "./Slider.css";

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSliders = async () => {
      try {
        const response = await GeneralAPI.getSliders();
        setSliders(response.data || []);
      } catch (err) {
        setError("Failed to fetch slider data. Please try again later.");
        console.error("Error fetching sliders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSliders();
  }, []);

  if (loading) {
    return (
      <div className="flex-center-center h-50vh">
        <span style={{ scale: "2" }}>
          <LoaderSvg />
        </span>
      </div>
    );
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  const itemsSlider = sliders.map((slider) => ({
    id: slider.id,
    imageUrl: slider.image,
    title: slider.title,
    description: slider.description,
    url: slider.url,
  }));

  return (
    <SwiperSlider itemsSlider={itemsSlider} sliderNewClass={"slider-home"}>
      {/* ========== START CONTENT SLIDER INFO ============ */}
      <div className="content-slider-info">
        <div className="all-main-content-slider" data-aos="fade-up">
          <h2 className="title-silde">مغامرات لا تنسى تنتظرك</h2>
          <p className="text">
            ذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
            هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
            العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
            التطبيق.
          </p>

          <div className="main-add-place-date main-add-place-date--1">
            <SearchInputLocation />
            <DatePickerComponent addTextPlaceHolder={"حدد تاريخ الرحلة"} />
            <button className="btn-main btn-search-submit" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
    </SwiperSlider>
  );
};

export default Slider;
