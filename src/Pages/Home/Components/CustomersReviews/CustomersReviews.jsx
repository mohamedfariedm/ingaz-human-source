import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Vector from "assets/certification.svg";
import { useEffect, useState } from "react";

const certifications = [
  {
    title: "أيزو 9001 : 2015",
    description:
      "المواصفة الدولية ISO 9001:2015 هي المعيار الذي يحدد متطلبات نظام إدارة الجودة (QMS). من خلال تطبيق هذا المعيار في مجالات عملها، أثبتت شركة إنجاز كفاءتها في تقديم منتجات وخدمات تلبي احتياجات العملاء وتستوفي المتطلبات التنظيمية بكفاءة عالية.",
    image:"https://s3-alpha-sig.figma.com/img/b291/fe1f/6eb44daff1730c79b3b745d96a02c6d6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJ0pP8~Kwb02IwPkPe81PmcZcbl7M9-gu49Sk8iOJldtBCxv88q68fM5scGHPJ~AcQefeU5JCOhYgwwVpb-vU-to5KHsRqFxNu5MwTVRP0fHUTKXvJYHXmstlbK1S7m-b6~uCUxSrvyMHMFaJpYx1wS3IaVt59HaKXLb1G3crUeuwayYVqGETEX7xj~fXPqk7za3HoLhpoNJi7yPdxQrjLJaNq1K6~60C6WmhsPbtudOWLjI9nTClIZXddqehoE7Hj8CkF7py1J2X0xeF2WRPE9sI6MqKqHVxFNuAi574fgD8yfvaNSpkBqVkJjcVYGr0E6M~SuqtNhxWZ0iL58xkg__" 
      },
  {
    title: "أيزو 9001 : 2015",
    description:
      "المواصفة الدولية ISO 9001:2015 هي المعيار الذي يحدد متطلبات نظام إدارة الجودة (QMS). من خلال تطبيق هذا المعيار في مجالات عملها، أثبتت شركة إنجاز كفاءتها في تقديم منتجات وخدمات تلبي احتياجات العملاء وتستوفي المتطلبات التنظيمية بكفاءة عالية.",
      image:"https://s3-alpha-sig.figma.com/img/b291/fe1f/6eb44daff1730c79b3b745d96a02c6d6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJ0pP8~Kwb02IwPkPe81PmcZcbl7M9-gu49Sk8iOJldtBCxv88q68fM5scGHPJ~AcQefeU5JCOhYgwwVpb-vU-to5KHsRqFxNu5MwTVRP0fHUTKXvJYHXmstlbK1S7m-b6~uCUxSrvyMHMFaJpYx1wS3IaVt59HaKXLb1G3crUeuwayYVqGETEX7xj~fXPqk7za3HoLhpoNJi7yPdxQrjLJaNq1K6~60C6WmhsPbtudOWLjI9nTClIZXddqehoE7Hj8CkF7py1J2X0xeF2WRPE9sI6MqKqHVxFNuAi574fgD8yfvaNSpkBqVkJjcVYGr0E6M~SuqtNhxWZ0iL58xkg__" 
    },
  {
    title: "أيزو 9001 : 2015",
    description:
      "المواصفة الدولية ISO 9001:2015 هي المعيار الذي يحدد متطلبات نظام إدارة الجودة (QMS). من خلال تطبيق هذا المعيار في مجالات عملها، أثبتت شركة إنجاز كفاءتها في تقديم منتجات وخدمات تلبي احتياجات العملاء وتستوفي المتطلبات التنظيمية بكفاءة عالية.",
      image:"https://s3-alpha-sig.figma.com/img/b291/fe1f/6eb44daff1730c79b3b745d96a02c6d6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJ0pP8~Kwb02IwPkPe81PmcZcbl7M9-gu49Sk8iOJldtBCxv88q68fM5scGHPJ~AcQefeU5JCOhYgwwVpb-vU-to5KHsRqFxNu5MwTVRP0fHUTKXvJYHXmstlbK1S7m-b6~uCUxSrvyMHMFaJpYx1wS3IaVt59HaKXLb1G3crUeuwayYVqGETEX7xj~fXPqk7za3HoLhpoNJi7yPdxQrjLJaNq1K6~60C6WmhsPbtudOWLjI9nTClIZXddqehoE7Hj8CkF7py1J2X0xeF2WRPE9sI6MqKqHVxFNuAi574fgD8yfvaNSpkBqVkJjcVYGr0E6M~SuqtNhxWZ0iL58xkg__" 
    },
  {
    title: "أيزو 9001 : 2015",
    description:
      "المواصفة الدولية ISO 9001:2015 هي المعيار الذي يحدد متطلبات نظام إدارة الجودة (QMS). من خلال تطبيق هذا المعيار في مجالات عملها، أثبتت شركة إنجاز كفاءتها في تقديم منتجات وخدمات تلبي احتياجات العملاء وتستوفي المتطلبات التنظيمية بكفاءة عالية.",
      image:"https://s3-alpha-sig.figma.com/img/b291/fe1f/6eb44daff1730c79b3b745d96a02c6d6?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJ0pP8~Kwb02IwPkPe81PmcZcbl7M9-gu49Sk8iOJldtBCxv88q68fM5scGHPJ~AcQefeU5JCOhYgwwVpb-vU-to5KHsRqFxNu5MwTVRP0fHUTKXvJYHXmstlbK1S7m-b6~uCUxSrvyMHMFaJpYx1wS3IaVt59HaKXLb1G3crUeuwayYVqGETEX7xj~fXPqk7za3HoLhpoNJi7yPdxQrjLJaNq1K6~60C6WmhsPbtudOWLjI9nTClIZXddqehoE7Hj8CkF7py1J2X0xeF2WRPE9sI6MqKqHVxFNuAi574fgD8yfvaNSpkBqVkJjcVYGr0E6M~SuqtNhxWZ0iL58xkg__" 
    },
];

const CustomersReviews = () => {
  const [inlineStyle, setInlineStyle] = useState({});

  useEffect(() => {
    const updateStyle = () => {
      if (window.innerWidth <= 600) {
        // Small screen style
        setInlineStyle({ overflow: "visible" });
      } else {
        setInlineStyle({});
        // Default style
      }
    };

    // Initial style check
    updateStyle();

    // Add resize listener
    window.addEventListener("resize", updateStyle);

    return () => {
      // Cleanup listener on component unmount
      window.removeEventListener("resize", updateStyle);
    };
  }, []);

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
        { threshold: 0.2 }
      );
  
      const sections = document.querySelectorAll(".animate-section");
      sections.forEach((section) => observer.observe(section));
  
      return () => observer.disconnect();
    }, []);

  return (
    <>
      <div id="certifications"></div>
      <div className="w-full bg-[#fff] relative h-[140vh] md:h-[110vh] mx-auto py-4 scale-90">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 justify-center items-center relative mx-auto pb-8 pt-12 px-4 w-[95%] animate-section opacity-0 transition-opacity duration-1000">
          <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
            <span className="text-[16px] text_small_Bukra text-start font-normal leading-[29px] text-[#0e4a79] tracking-[0.32px]">
              الشهادات
            </span>
            <span className="text-[30px] text_bold_Bukra font-bold leading-[54.6px] text-[#0e4a79] tracking-[0.6px]">
              شهادات الجودة والتميز
            </span>
          </div>
          <span className="text-start md:text-right text-[17px] text_small_Bukra font-normal leading-[29.12px] text-[#667680] tracking-[0.32px]">
            تفخر شركة إنجاز بحصولها على شهادات جودة معتمدة، تعكس التزامنا بأعلى
            المعايير العالمية في تقديم خدمات متميزة تلبي توقعات عملائنا وتحقق
            رضاهم.
          </span>
        </div>

        {/* Certification Section */}
        <div className="relative mt-8 md:mt-[83px] h-[150vh] md:h-auto animate-section opacity-0 transition-opacity duration-1000">
          {/* Background Box */}
          <div className="absolute top-[11.5rem] -start-7 lg:-top-[20%] lg:-start-32 w-[80%] md:flex items-center justify-center max-w-[1166px] min-h-[530px] bg-[#0e4a79] rounded-tl-[32px] rounded-bl-[32px]" />

          {/* Swiper Section */}
          <div className="relative -bottom-[200px] md:bottom-0  z-10  rounded-[32px]  md:rounded-none">
            <Swiper
          dir="ltr"
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          modules={[Navigation,Autoplay]}
          loop={true}
          watchOverflow
          autoplay={{
            delay: 3000, // Time in milliseconds between slide transitions
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          navigation={{
            nextEl: ".arrow-right",
            prevEl: ".arrow-left",
          }}
          style={inlineStyle}
              className="my-8 "
            >
              {certifications.map((cert, index) => (
                <SwiperSlide  key={index}>
                  <div className="flex flex-col-reverse pt-5 my-auto  md:flex-row justify-center gap-6 items-center">
                    {/* Text Card */}
                    <div className="rounded-[32px] sm:p-6 flex flex-col gap-4 ">
                      <div className="flex flex-col gap-4 w-full max-w-[839px] bg-[#fbfbfb] rounded-[32px] px-10 py-16">
                        <span className="sm:text-[24px] font-bold leading-[43.68px] text-[#1d1d1d] text-right ">
                          {cert.title}
                        </span>
                        <span className=" text-[14px] sm:text-[16px] font-medium leading-[29.12px] text-[#667680] text-right ">
                          {cert.description}
                        </span>
                      </div>
                    </div>

                    {/* Images */}
                    <div className="flex gap-10  md:gap-4 items-center  md:flex-row absolute -top-[13rem] md:top-0 z-50    md:relative ">
                                            <div
                        className="w-[100px] md:w-[262px] h-[100px] md:h-[262px] bg-cover bg-center rounded-[16px] scale-[1.2] md:scale-100"
                        style={{
                          backgroundImage: `url(${Vector})`,
                        }}
                      />
                      <div
                        className="w-[100px] md:w-[242px] h-[150px] md:h-[338px] bg-cover bg-center rounded-[16px] scale-[1.2] md:scale-100"
                        style={{
                          backgroundImage: `url(${cert.image})`,
                        }}
                      />

                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
          
        <div className="flex mt-[45%] sm:mt-0 sm:absolute end-16 gap-5 my-10  sm:mb-0 justify-center sm:justify-end w-full">
              <div className="group hover:bg-[#0e4a79] transition-transform duration-300 hover:scale-90 arrow-right cursor-pointer flex w-[64px] h-[64px] gap-[8px] justify-center items-center rounded-[32px] border border-[#e7e7e7]">
                <FontAwesomeIcon
                  className="text-[#0e4a79] group-hover:text-white"
                  icon={faArrowRight}
                  size="lg"
                />
              </div>
              <div className="group hover:bg-[#0e4a79] transition-transform duration-300 hover:scale-90 arrow-left cursor-pointer flex w-[64px] h-[64px] gap-[8px] justify-center items-center rounded-[32px] border border-[#e7e7e7]">
                <FontAwesomeIcon
                  className="text-[#0e4a79] group-hover:text-white"
                  icon={faArrowLeft}
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomersReviews;
