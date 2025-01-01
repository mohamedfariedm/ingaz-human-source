import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SwiperSlider.css"
import { useEffect, useState } from "react";
import GeneralAPI from "api/generalApi";
import LoaderSvg from "assets/Icons/LoaderSvg";
import SearchInputLocation from "../SearchInputLocation/SearchInputLocation";
import DatePickerComponent from "../DatePickerComponent/DatePickerComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SwiperSliderHome = () => {
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
    <>
      <div className={`banner-main-area slider-home`}>
        <Swiper
          spaceBetween={15}
          effect={"fade"}
          navigation={false}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, EffectFade, Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          className="mySwiper"
        >
          {itemsSlider.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                {/* ========= START BANNER ONE ======== */}
                <div
                  className="banner-one section-padding bg-image"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                ></div>
                {/* ======== END BANNER ONE ========= */}
                <div className="content-slider-info">
        <div className="all-main-content-slider" data-aos="fade-up">
          <h2 className="title-silde">{item.title}</h2>
          <p className="text" dangerouslySetInnerHTML={{ __html: item.description }}/>


          <div className="main-add-place-date main-add-place-date--1">
            <SearchInputLocation />
            <DatePickerComponent addTextPlaceHolder={"حدد تاريخ الرحلة"} />
            <button className="btn-main btn-search-submit" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
      </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* {children} */}
      </div>
    </>
  );
};

export default SwiperSliderHome;
