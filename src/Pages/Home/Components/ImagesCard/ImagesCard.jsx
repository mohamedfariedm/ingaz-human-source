import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const ImagesCard = () => {
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
  return (<>
  <div id="services" className=" "></div>
<div  className="main-container h-auto bg -[#fbfbfb] w-full md:mt-[85px] relative  ">
      {/* Background Images */}
      
      {/* Content Section */}
      <div className="xl:scale-[92%] w-[80%] md:w-[90%] xl:w-[90%] mx-auto flex flex-col items-center md:flex-row md:items-end justify-between mb-10 animate-section opacity-0 transition-opacity duration-1000">
      <div className="flex flex-col gap-[24px] items-start z-[3] mt-16 sm:mt-8 md:w-[70%] ">
        <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
          <span className="  text-[16px] text_small_Bukra  font-normal leading-[29px] text-[#0e4a79]">
            خدماتنا
          </span>
          <span className="flex  text_bold_Bukra  text-[1.79rem]  leading-[54.6px] text-[#0e4a79] ">
            حلول شاملة تلبي جميع احتياجاتك
          </span>
        </div>
        <span className="flex  text_small_Bukra  text-[1rem] font-normal leading-[29.12px] text-[#667680] xl:w-[80%]">
        في إنجاز للاستقدام، نقدم مجموعة متنوعة من الخدمات المصممة لتلبية احتياجات الأفراد والشركات باحترافية وجودة عالية. نسعى لتقديم حلول متكاملة في استقدام العمالة والتدريب والتأهيل لضمان راحتك ورضاك.
        </span>
      </div>
      <div className="mt-5">
      <div className="flex gap-5 animate-section ">
            <div className="group hover:bg-[#0e4a79] transition-transform duration-300 hover:scale-90  arrow-1-right cursor-pointer swiper-prev flex w-[64px] h-[64px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center flex-nowrap rounded-[32px] border-solid border border-[#e7e7e7] ">
                        <FontAwesomeIcon className="text-[#0e4a79] group-hover:text-white cursor-pointer" icon={faArrowRight} size="lg" />
              
            </div>
            <div className="group hover:bg-[#0e4a79] cursor-pointer transition-transform duration-300 hover:scale-90 arrow-1-left swiper-next flex w-[64px] h-[64px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[8px] justify-center items-center flex-nowrap rounded-[32px] border-solid border border-[#e7e7e7]">
            <FontAwesomeIcon className="text-[#0e4a79] group-hover:text-white" icon={faArrowLeft} size="lg" />

            </div>
          </div>
      </div>
      </div>

     {/* Swiper Slider */}
     <div className="swiper-container mt-8 px-2  sm:mt-20 animate-section opacity-0 transition-opacity duration-1000 ">
        <Swiper
        dir="ltr"
          spaceBetween={20} // Adjust space between cards
          slidesPerView={1} // Show 3 full cards and half of the 4th
          centeredSlides={true} // Center the active slide
          navigation={{
            nextEl: ".arrow-1-right",
            prevEl: ".arrow-1-left"
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
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          <SwiperSlide>
            <div className="transition-transform duration-300 hover:scale-90 flex relative  w-full h-[270px] bg-[url(https://s3-alpha-sig.figma.com/img/e9e3/1f11/ccfbeec9641dc3b5ff77bc218a6c7411?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qfiZcKz4zubu8MVzNCnzItH6NhuTlpMizeMEnrYQ9xysgCYS-oTGE4-Trx-zmubXSb-v~2GcBGDLgPm-kAKYG3DJC6UK6ISz5H0DYgMiUn1lwuUj3bP3DaEaXxZ7VsIQU-Ip4dYI8GsKvaB8AAYRz16BjiM1rfagpTluIE3B-LTNUKWKPitQfvvamZxshDpVmTBj577-xdyH0fsIs0lehBOTLtqHHc7DJ1sWVrmS~O2uRY4rTF50Ue0sJoB07nRl0Vcu2IG67JsorOkTcNSUwUcSn8~pIeZ36EaBBra0hdBXUsW8cxJG-wqTOqYhGpkSaA0MVnoSXdV2e~X88FGtYQ__)] bg-cover bg-center bg-no-repeat rounded-[24px] flex-nowrap justify-center items-end p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>

              <span className="flex relative text-white text-[32px] font-bold">نقل خادمات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex relative w-full h-[270px] transition-transform duration-300 hover:scale-90 bg-[url(https://s3-alpha-sig.figma.com/img/7457/69e9/eec30ec0783fa56a574d2f8a05000975?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ekIOehHRp0GhvvrcCFzShiTr8Xm4xIQZ0eII1ks-37swLkhg5aaUBOtbljn9lN5R6gUi8uVbCdpJTWB8mNsYfNbmDnb3EeS2vvbMMyLsa~qed~WU~617RuyM9Y0mSM1vqVHDeKidJXOYP9TdsUQu~r78PoqO5o7DbmANrEZEVfQkf-yoHwRcMCNc25nAQkKnsAy8qOBk0oLMuxjDCg0bd3TZ3eMR4wY31l8G6cX5vwzg3xlP9NmIFM0wBAiucX00CL~CbHDgaqigUbiM1L29VEt0GLI3jWb8BcUVx3HB8Puc1bkBfhkV40WFbMb2Spn36N0D2PS6djeHdIULeNaL5A__)] bg-cover bg-no-repeat bg-center rounded-[24px] flex-nowrap justify-center items-end p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>

              <span className="flex relative text-white text-[32px] font-bold">استقدام سائقين</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex relative w-full h-[270px] transition-transform duration-300 hover:scale-90 bg-[url(https://s3-alpha-sig.figma.com/img/b81c/8433/2980222d00047f2a0f4bfc86b8b45582?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z5sCh3dG4sQ24ZiSkuLW7BJi62D3hDBc3uRw1H-qbI4OkkMKqXU9-aYYq~TUlcRCt3AAgEEuzWLkNjV2AknvchBA-zI0-qsaiTim5vMmyHzvA0X3fb9aUw2zSAqFOseuDT1USWUZr0x9X7Nf6QsBjdWtwxa7OvKq-DKI-mebYeyO~kq4NvNR3QFujFAISyFMYzxi~yjR7p8T0Q5cIILTQDB6sbzuVCYfHua32nZ4AP8JlxWjyXXWNUUg8WmpbfaFb-VR13Os7OlzxXBcHSMweolMLRntHkuynuz1z9A8MdUqugh7QDYAjPG71mY4WoFrAgZV96J2EoCWbrd3krsLUA__)] bg-cover bg-no-repeat bg-center rounded-[24px] flex-nowrap justify-center items-end p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>

              <span className="flex relative text-white text-[32px] font-bold">استقدام عاملات</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex relative w-full h-[270px] transition-transform duration-300 hover:scale-90 bg-[url(https://s3-alpha-sig.figma.com/img/851a/68be/cccbe746d0166050deb81be3a53252ad?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsfrHaGjnK8qMIZ3nfu5JHeWRBCoGmQTPjFXH93DGpXhv7tBZEladPzeUGS665iHYIA~84CiizZkzlBgGuENv62CFtV3WwwAoaDHHLQrFvXqujS~JJtaAH7QyZ3hoIi9cOi-VtVqoxVnhEjfbABgRIk4YaNgEwfrlw5v1W8sv1F-siN7iK1Sab8B05GNJ1xkldZ8U7~GDPGtqACwBhgFlkCTFc3bGUCqCfnUTVRf99CDfh6sZRSFHQPf5OT33bvV9C0JmoY0DiahI4alNBQpSJjaRzBERIKRimvEfwffa8MGM0emwPLmLSY0jZLHz7w6RgZ4VC7joSbv7vqsUWlOfw__)] bg-cover bg-no-repeat bg-center rounded-[24px] flex-nowrap justify-center items-end p-8">
            <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>
            <span className="flex relative text-white text-[32px] font-bold">خدماتنا</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="relative w-full h-[270px] transition-transform duration-300 hover:scale-90 bg-[url(https://s3-alpha-sig.figma.com/img/0001/e77a/ce627dbf8fb2b4d75e6e703653d94541?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pRBQI~4jqmdmQ6~aSWPBP9kMoUxjYZ~6rdZuLROjMQtxU97ZebnzWN2IKsNRTdEGD7H2uxqnOHfDViksZGpl6TjLhqkkL0sRK0MEHiBhZKByl8KQWBBB24XsYgGfor5q727EcznFUNW8JhL5Ri1UICkGoK2NiYghJwjHZcCMT~U8klHjkOFt1Q5zW4e7GtCEbC9kSPda-P0RwmiaauSBnwNSRuT88xxuAp8YRqjAKyvH7agDfUFnqFanv6HG4pB7jcJuZ1h286wKe37nBZ3YT8sqljgeFR~2ppoLw4RtDPuBYQ1dw5zdS5w~Q2qBJ3DOOhyyQYMJ1cO0wzP7W-~RPg__)] bg-cover bg-no-repeat bg-center rounded-[24px] flex justify-center items-end p-8">
  {/* Linear Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#10637C]/100  to-[#149C75]/20 rounded-[24px]"></div>
  {/* Content */}
  <span className="relative text-white text-[32px] font-bold">مناطق الاستقدام</span>
</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>






    
  </>
  );
};

export default ImagesCard;
