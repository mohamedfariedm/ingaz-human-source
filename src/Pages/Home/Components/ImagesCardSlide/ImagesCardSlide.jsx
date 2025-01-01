import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Victor1 from "assets/1.svg";
import Victor2 from "assets/2.svg";
import Victor3 from "assets/3.svg";
import Victor4 from "assets/4.svg";
import Victor5 from "assets/5.svg";

const ImagesCardSlide = () => {
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

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "التواصل الاجتماعي",
      description: "قسم يدير وسائل التواصل لنشر الثقافة وبناء ثقة العملاء.",
      image: Victor1,
    },
    {
      title: "الإدارة المالية",
      description: "قسم يدير جميع الشؤون المالية لشركة إنجاز للاستقدام.",
      image: Victor2,
    },
    {
      title: "تقنية المعلومات",
      description: "قسم مسؤول عن الحاسب الآلي، البرامج، الأجهزة، والشبكات بالشركة.",
      image: Victor3,
    },
    {
      title: "الإدارة القانونية",
      description: "قسم يقدم الاستشارات القانونية ويحل الشكاوى وفق أنظمة المملكة.",
      image: "",
    },
    {
      title: "الترجمة",
      description: "قسم الترجمة يقدم ترجمات دقيقة ومتخصصة حسب احتياجات الشركة.",
      image: Victor5,
    },
    {
      title: "مراكز الاتصال",
      description: "مركز اتصالات ينسق الخدمات ويضمن الجودة والتطوير المستمر.",
      image: Victor4,
    },
  ];

  return (
    <>
      <div id="categories"></div>
      <div className="scale-95 main-container h-auto py-10 md:py-16 w-full relative">
        {/* Content Section */}
        <div className="w-[88%] mx-auto flex flex-col items-center md:flex-row md:items-end justify-between mb-10">
          <div className="flex flex-col gap-[24px] items-start z-[3] mt-16 sm:mt-8 md:w-[60%] animate-section opacity-0 transition-opacity duration-1000">
            <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
              <span className="text-[16px] text_small_Bukra font-normal leading-[29px] text-[#0e4a79]">
                الأقسام
              </span>
              <span className="text-[30px] text_bold_Bukra font-bold leading-[54.6px] text-[#0e4a79]">
                خبرة شاملة تغطي جميع احتياجاتك
              </span>
            </div>
            <span className="text-[16px] font-normal text_small_Bukra md:w-[70%] leading-[29.12px] text-[#667680]">
              في إنجاز للاستقدام، نقدم خدمات متكاملة من خلال أقسامنا المتخصصة التي
              تعمل بتناغم لضمان تحقيق أعلى مستويات الجودة والتميز. كل قسم مصمم
              لتلبية احتياجات الأفراد والشركات بكفاءة واحترافية.
            </span>
          </div>
          <div className="mt-5">
            <div className="flex gap-5">
              <div className="group hover:bg-[#0e4a79] transition-transform duration-300 hover:scale-90 arrow-2-right cursor-pointer swiper-prev flex w-[64px] h-[64px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center flex-nowrap rounded-[32px] border-solid border border-[#e7e7e7]">
                <FontAwesomeIcon
                  className="text-[#0e4a79] group-hover:text-white"
                  icon={faArrowRight}
                  size="lg"
                />
              </div>
              <div className="group hover:bg-[#0e4a79] transition-transform duration-300 hover:scale-90 arrow-2-left cursor-pointer swiper-next flex w-[64px] h-[64px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center flex-nowrap rounded-[32px] border-solid border border-[#e7e7e7]">
                <FontAwesomeIcon
                  className="text-[#0e4a79] group-hover:text-white"
                  icon={faArrowLeft}
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <div className="swiper-container mt-8 sm:mt-4 w-[90%] ms-auto me-auto md:ms-auto md:me-0 animate-section opacity-0 transition-opacity duration-1000">
          <Swiper
            dir="ltr"
            spaceBetween={20}
            slidesPerView={1}
            centeredSlides={true}
            navigation={{
              nextEl: ".arrow-2-right",
              prevEl: ".arrow-2-left",
            }}
            modules={[Navigation,Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000, // Time in milliseconds between slide transitions
              disableOnInteraction: false, // Continue autoplay after user interaction
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-[#fbfbfb] rounded-[10px] transition-transform duration-300 hover:scale-90 animate-section opacity-0">
                  <div className="flex justify-center">
                    <div
                      className="w-full h-[136px] max-w-[136px] bg-cover bg-center rounded-t-[16px] mb-4"
                      style={{ backgroundImage: `url(${card.image})` }}
                    ></div>
                  </div>
                  <h3 className="text-[20px] text-center line-clamp-1 font-medium leading-[36px] text-[#0e4a79] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-[14px] text-center line-clamp-2 leading-[25.48px] text-[#667680]">
                    {card.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ImagesCardSlide;
