import React, { useEffect } from "react";
import "./Reviews.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import image1 from "../../../../assets/reviews/rectangele.svg";
import image2 from "../../../../assets/reviews/Subtract.svg";
import arrowLeft from "../../../../assets/reviews/arrow-left-01.svg";
import star from "../../../../assets/reviews/star.svg";

const CustomersReviews = () => {
    useEffect(() => {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting) {
                  entry.target.classList.add("animate-visible");
                } else {
                  entry.target.classList.remove("animate-visible");
                }
              });
            },
            { threshold: 0.2 } // Trigger animation when 20% of the section is visible
          );
      
          const sections = document.querySelectorAll(".animate-section");
          sections.forEach((section) => observer.observe(section));
      
          return () => observer.disconnect(); // Cleanup
        }, []);
  return (
    <div
    id="reviews"
    className="main-container flex flex-col gap-[82px] w-full max-w-[1440px] h-auto sm:h-[838px] bg-white relative overflow-hidden mx-auto my-0 animate-section opacity-0 transition-opacity duration-1000">
      {/* Header */}
      <div className="flex flex-col gap-5 items-center relative  mt-16 sm:mt-[64px] mx-auto w-[512px] text-center">
        <span className="text-sm sm:text-base font-medium leading-[29px] text-[#0e4a79]">
          آراء عملائنا
        </span>
        <span className="text-lg sm:text-2xl font-semibold leading-[58px] text-[#0e4a79]">
          ما الذي يقوله شركاؤنا عن خدماتنا؟
        </span>
      </div>

      {/* Reviews Section Slider */}
      <div className="relative mt-12 mx-auto flex justify-center">
        <Swiper
          spaceBetween={105}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Autoplay]}
  style={{
    overflow: "visible",
  }}         
   className="w-full max-w-[1200px]  flex justify-center items-center overflow-x-hidden"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
            <SwiperSlide
              key={index}
              className="transform transition-transform duration-300 ease-in-out items-center"
            >
              <div
                className="relative w-[319px] h-[259px] bg-cover bg-no-repeat mx-auto"
                style={{ backgroundImage: `url(${image2})` }}
              >
                <div className="main-container flex w-[287px] flex-col gap-[19px] flex-nowrap relative mx-auto my-0 py-5">
                  <span className="flex w-[212px] h-[50px] justify-end items-start shrink-0 text-[14px] font-semibold leading-[25.48px] text-[#667680] relative text-right">
                    لماذا إنجاز هو خيارك الأفضل للموارد البشرية؟
                  </span>
                  <div className="w-[21.828px] h-[1.364px] shrink-0 bg-cover bg-no-repeat relative z-[1]" />
                  <span className="flex w-[287px] h-[80px] justify-end items-start self-stretch shrink-0 text-[10px] font-normal leading-[20px] text-[#667680] relative text-right z-[2]">
                    مع "إنجاز"، تحصل على شريك يقدم حلولًا متكاملة للموارد
                    البشرية بخبرة معتمدة ومرونة عالية. خدماتنا تشمل التوظيف،
                    التدريب، والاستشارات باستخدام أحدث التقنيات لدعم أهدافك
                    وتحقيق رؤية المملكة 2030 من{" "}
                  </span>
                  <div className="flex justify-between items-center self-stretch shrink-0 flex-nowrap relative z-[3]">
                    <div className="flex w-[119px] flex-col shrink-0 flex-nowrap relative z-[12]">
                      <div
                        style={{ justifyContent: "start" }}
                        className="flex gap-[8px] items-center flex-row-reverse self-stretch shrink-0 flex-nowrap relative z-[13]"
                      >
                        <span className="flex w-[61px] h-[20px] items-start shrink-0 basis-auto text-[12px] font-medium leading-[20px] text-[#667680] relative text-right whitespace-nowrap z-[14]">
                          علي السيد
                        </span>
                        <div className="w-[10px] h-[10px] shrink-0 bg-[#667680] rounded-tl-none rounded-tr-[8px] rounded-br-none rounded-bl-none relative z-[15]" />
                      </div>
                      <div className="flex pt-0 pr-[18px] pb-0 pl-0 gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap relative z-[16]">
                        <span className="flex w-[101px] h-[20px] justify-end items-start shrink-0 basis-auto text-[10px] font-normal leading-[20px] text-[#667680] relative text-right whitespace-nowrap z-[17]">
                          مصمم تجربة مستخدم
                        </span>
                      </div>
                    </div>
                    <div className="flex w-[136px] gap-[8px] items-center shrink-0 flex-nowrap relative z-[4]">
                      <span className="flex w-[32px] h-[14px] justify-end items-start shrink-0 basis-auto text-[10px] font-medium leading-[14px] text-[#1d1d1d] relative text-right whitespace-nowrap z-[11]">
                        {" "}
                        4.8/5
                      </span>
                      <div className="flex w-[96px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[5]">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            style={{ backgroundImage: `url(${star})` }}
                            className="w-[16px] h-[16px] shrink-0 bg-cover bg-no-repeat relative overflow-hidden z-[6]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div
                id="imageCoats"
                  className="absolute top-0 left-0 w-[68px] h-[64px] bg-cover bg-no-repeat flex items-center justify-center z-10"
                >
                  <svg
                    width="21.8"
                    height="12"
                    viewBox="0 0 32 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                                        id="coat"
                      d="M10.3102 18.2771H0L9.70763 0H17.5407L10.3102 18.2771ZM24.5034 18.2771H14.1932L23.9009 0H31.7339L24.5034 18.2771Z"
                      fill="#0E4A79"
                    />
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center items-center gap-4 mt-12">
        <div className="swiper-prev cursor-pointer w-16 h-16 flex items-center justify-center border border-gray-300 group hover:bg-primary hover:scale-90 rounded-full bg-white transition-all duration-[1000ms] shadow-md">
          <div
            className="w-6 h-6 rotate-180 "

          >

<svg width="24" height="24" viewBox="0 0 24 24" className="stroke-[#0E4A79] group-hover:stroke-white transition-all duration-[1000ms]" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


          </div>
        </div>
        <div className="swiper-next cursor-pointer w-16 h-16 flex items-center justify-center border border-gray-300 rounded-full group hover:bg-primary hover:scale-90 transition-all duration-[1000ms]  bg-white shadow-md">
          <div
            className="w-6 h-6 bg-cover bg-no-repeat"

          >
            <svg width="24" height="24" viewBox="0 0 24 24" className="stroke-[#0E4A79] group-hover:stroke-white transition-all duration-[1000ms]" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomersReviews;
