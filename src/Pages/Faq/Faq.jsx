import React, { useState } from "react";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "./Components/BreadCrumb/BreadCrumb";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <HelmetInfo titlePage={"الاسئلة الشائعة"} />
      <div className="mt-[150px]" />
      <div className="main-container bg-[#fff] mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center gap-10 max-w-screen-lg mx-auto ">
          {/* Breadcrumb */}
          <BreadCrumb />
          {/* Title Section */}
          <div className="text-center flex justify-center items-center flex-col gap-4">
            <h1 className="text-4xl lg:text-[2.7rem] text_bold_Bukra text-[#0e4a79] leading-[80px]">
              الأسئلة الأكثر شيوعاً
            </h1>
            <p className="text-lg lg:text-[1.08rem] text-center text_small_Bukra  text-[#0e4a79] leading-relaxed md:px-[3.75rem] xl:w-[65%] mx-auto ">
              نحرص على توفير إجابات واضحة لأكثر الأسئلة شيوعاً حول خدماتنا، لتسهيل
              تجربتك وضمان فهمك الكامل لكل خطوة.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col gap-4 px-8 py-8 bg-[#0e4a79] rounded-[40px] mx-auto my-16 max-w-[95%] md:max-w-[85%] xl:p-28">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="overflow-hidden rounded-[16px] bg-[#255e8a]">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between gap-3 items-center w-full px-6 py-4 text-left text-white"
              >
                <span className="text-[14px] sm:text-[19px] text_small_Bukra font-normal text-start leading-[1.5]">
                  هل يمكن ترقية التأمين الطبي في حال رغبة العميل/الموظف؟
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    d="M13.4796 6.22757C13.4795 7.39618 13.4795 7.98052 13.8426 8.34362C14.2057 8.70672 14.7901 8.70674 15.9587 8.7067L18.4386 8.70675C19.015 8.70676 19.3034 8.70678 19.5398 8.77013C20.7292 9.08885 20.9181 10.1419 20.9181 11.1863C20.9181 12.2307 20.7292 13.2838 19.5398 13.6025C19.3034 13.6659 19.0151 13.6659 18.4387 13.6658L15.959 13.6658C14.7903 13.6658 14.2057 13.6658 13.8426 14.0289C13.4795 14.392 13.4795 14.9764 13.4796 16.145L13.4795 18.6249C13.4795 19.2014 13.4796 19.4896 13.4162 19.7261C13.0975 20.9154 12.0444 21.1045 11 21.1044C9.95564 21.1045 8.90248 20.9154 8.58386 19.7261C8.52043 19.4897 8.52036 19.2014 8.5205 18.6248L8.52043 16.1454C8.52043 14.9771 8.52043 14.392 8.15733 14.0289C7.7943 13.6659 7.20931 13.6658 6.04096 13.6659L3.56144 13.6658C2.98484 13.6659 2.69661 13.6659 2.4602 13.6024C1.27087 13.2838 1.08176 12.2307 1.0819 11.1862C1.08181 10.1419 1.27084 9.08883 2.46022 8.77009C2.69669 8.70675 2.98491 8.70676 3.56137 8.70678L6.04127 8.70671C7.20988 8.70676 7.79423 8.70676 8.15733 8.34366C8.52043 7.98056 8.52043 7.39592 8.52044 6.22723L8.52046 3.74758C8.52046 3.17118 8.52046 2.88296 8.58383 2.64648C8.90252 1.45712 9.95562 1.26816 11 1.26815C12.0444 1.26816 13.0975 1.45711 13.4162 2.64648C13.4795 2.88296 13.4795 3.17126 13.4795 3.74767L13.4796 6.22757Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Smooth Dropdown Section */}
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-40 py-4" : "max-h-0"
                } overflow-hidden px-6`}
              >
                <p className="text-white text-[14px] text_small_Bukra leading-relaxed">
                  نعم، يمكن ترقية التأمين الطبي بناءً على رغبة العميل أو الموظف من
                  خلال التواصل معنا وتقديم طلب الترقية.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
