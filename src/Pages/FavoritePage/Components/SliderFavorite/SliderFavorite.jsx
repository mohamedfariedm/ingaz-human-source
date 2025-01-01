import SwiperSlider from "Components/Ui/SwiperSlider/SwiperSlider";
import imageBanner1 from "../../../../assets/images/slider/01.png";
import imageBanner2 from "../../../../assets/images/slider/02.png";
import imageBanner3 from "../../../../assets/images/slider/03.png";
import "./SliderFavorite.css";
const SliderFavorite = () => {
  const itemsSlider = [
    { id: 1, imageUrl: imageBanner1 },
    { id: 2, imageUrl: imageBanner2 },
    { id: 3, imageUrl: imageBanner3 }
  ];

  return (
    <SwiperSlider
      itemsSlider={itemsSlider}
      sliderNewClass={"slider-height slider-favorite-page"}
    >
      {/* ========== START CONTENT SLIDER INFO ============ */}
      <div className="content-slider-info">
        {/* ========== START CONTAINER ========== */}
        <>
          {/* ========== START ALL MAIN CONTENT SLIDER =========== */}
          <div className="all-main-content-slider" data-aos="fade-down">
            <h2 className="title-silde">المفضلة</h2>
          </div>
          {/* ========== END ALL MAIN CONTENT SLIDER =========== */}
        </>
        {/* ========== END CONTAINER ========== */}
      </div>
      {/* ========== END CONTENT SLIDER INFO ============ */}
    </SwiperSlider>
  );
};

export default SliderFavorite;
