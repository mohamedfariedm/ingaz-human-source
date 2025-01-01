import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import "./CardsBooks.css";
import Victor1 from "assets/image1.svg";
import Victor2 from "assets/image2.svg";
import Victor3 from "assets/image3.svg";
import Victor4 from "assets/image4.svg";
import Victor5 from "assets/image5.svg";

const CardsBooks = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(false); // Reset the animation
          setTimeout(() => setShouldAnimate(true), 100); // Restart the animation
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(false); // Reset the animation
          setTimeout(() => setShouldAnimate(true), 100); // Restart the animation
        }
      },
      { threshold: 0.1 } // Lowered threshold for small screens
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <>
      <div id="numbers"></div>
      <div
        ref={sectionRef}
        className="main-container w-full h-auto bg-[#fff] relative mx-auto"
      >
        {/* Title Section */}
        <div className="flex flex-col items-center gap-4 w-full max-w-screen-lg mx-auto mt-[95.813px] animate-section opacity-0 transition-opacity duration-1000">
          <span className="text-[28px] text_bold_Bukra leading-[54.6px] text-[#0e4a79] text-center">
            إنــجاز فــي أرقــام
          </span>
          <span className="text-[1rem] text_small_Bukra leading-[29.12px] text-[#667680] text-center max-w-[43rem] mx-auto">
            منذ تأسيسها في عام 2015، أصبحت شركة إنجاز للاستقدام إحدى أبرز شركات
            مجموعة إنجاز، التي تفخر بتقديم حلول شاملة ومتكاملة في مجال استقدام
            العمالة المنزلية والمهنية من مختلف الجنسيات.
          </span>
        </div>

        {/* Stats Cards Section */}
        <div className="flex flex-wrap flex-row-reverse gap-5 justify-center my-24 animate-section opacity-0 transition-opacity duration-1000">
          {/* Card 1 */}
          <div className="w-[250px] h-[345px] bg-gradient-to-tr from-[#10637C]/100 to-[#79B8B3]/100 relative overflow-hidden rounded-[24px]">
            <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
              <span className="text-[40px] font-semibold text-[#fff]">
                {shouldAnimate && <CountUp start={0} end={1120} duration={4} />}
              </span>
              <span className="text-[24px] font-semibold text-[#fff]">
                عقد مساند
              </span>
            </div>
            <img src={Victor1} alt="" />
          </div>

          {/* Card 2 */}
          <div className="w-[250px] h-[345px] bg-gradient-to-tr from-[#10637C]/100 to-[#79B8B3]/100 relative overflow-hidden rounded-[24px]">
            <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
              <span className="text-[40px] font-semibold text-[#fff]">
                {shouldAnimate && <CountUp start={0} end={50000} duration={4.5} />}
              </span>
              <span className="text-[24px] font-semibold text-[#fff]">وكلاء</span>
            </div>
            <img src={Victor2} alt="" />
          </div>

          {/* Card 3 */}
          <div className="w-[250px] h-[345px] bg-gradient-to-tr from-[#10637C]/100 to-[#79B8B3]/100 relative overflow-hidden rounded-[24px]">
            <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
              <span className="text-[40px] font-semibold text-[#fff]">
                {shouldAnimate && <CountUp start={0} end={1120} duration={4} />}
              </span>
              <span className="text-[24px] font-semibold text-[#fff]">
                تقييم عبر مساند
              </span>
            </div>
            <img src={Victor3} alt="" />
          </div>

          {/* Card 4 */}
          <div className="w-[250px] h-[345px] bg-gradient-to-tr from-[#10637C]/100 to-[#79B8B3]/100 relative overflow-hidden rounded-[24px]">
            <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
              <span className="text-[40px] font-semibold text-[#fff]">
                {shouldAnimate && <CountUp start={0} end={50000} duration={4.5} />}
              </span>
              <span className="text-[24px] font-semibold text-[#fff]">
                خدمة مناطق إدارية
              </span>
            </div>
            <img src={Victor4} alt="" />
          </div>

          {/* Card 5 */}
          <div className="w-[250px] h-[345px] bg-gradient-to-tr from-[#10637C]/100 to-[#79B8B3]/100 relative overflow-hidden rounded-[24px]">
            <div className="flex flex-col items-start gap-4 mt-6 ms-3 ">
              <span className="text-[40px] font-semibold text-[#fff]">
                {shouldAnimate && <CountUp start={0} end={50000} duration={2.5} />}
              </span>
              <span className="text-[24px] font-semibold text-[#fff]">
                خدمة عميل
              </span>
            </div>
            <img src={Victor5} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsBooks;
