import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Victor from "assets/Layer_1.svg";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const ContactInformations = () => {
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
      <div id="contactus"></div>
      <div className="main-container scale-95 w-[92%] relative mx-auto my-5 p-4 md:py-16">
        {/* Main Section */}
        <div className="w-full bg-[#0e4a79] rounded-[32px] flex flex-col lg:flex-row justify-between items-center px-5 py-10 md:px-20 md:py-8">
          {/* Text Section */}
          <div className="flex flex-col gap-5 text-right text-[#fff] lg:w-2/3 px-2">
            <h1 className="text-[24px] md:text-[34px] font-extrabold leading-snug tracking-wider animate-section opacity-0 transition-opacity duration-1000">
              تواصل مع فريقنا لتلبية احتياجاتك بكل احترافية
            </h1>
            <p className="text-[14px] text_small_Bukra md:text-[16px] mt-4 leading-relaxed animate-section opacity-0 transition-opacity duration-1000">
              نحن هنا لخدمتك والإجابة على جميع استفساراتك. فريقنا المتخصص جاهز
              لتقديم الدعم والمساعدة على مدار الساعة لضمان راحتك ورضاك.
            </p>
            <Link
              to={"/contactus"}
              className="self-start my-6 px-10 py-3 border border-[#fff] rounded-full hover:bg-white hover:text-[#0e4a79] hover:scale-90 text-[14px] font-normal transition-all duration-500 animate-section opacity-0 transition-opacity duration-1000"
            >
              تواصل معنا
            </Link>
          </div>

          {/* Placeholder Image */}
          <div
            className="w-[258px] h-[311px] bg-cover bg-center rounded-[16px] mb-6 lg:mb-0 lg:ml-8 animate-section opacity-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${Victor})`,
            }}
          />
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-start mt-8 gap-20">
          {/* Card 1 */}
          <div className="flex items-start gap-4 w-full md:w-[25%] animate-section opacity-0 transition-opacity duration-1000">
            <div className="bg-[#0e4a79] p-[.75rem] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[18px] font-extrabold leading-[35px] text-[#0e4a79]">
                 الاتصال الهاتفي
              </h2>
              <p className="text-[14px] leading-[30px] text-[#667680] mt-2">
                ساعات العمل: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.
              </p>
              <div className="relative group mt-2">
                <span className="text-[14px] font-semibold text-[#0e4a79] relative z-10">
                  966 920020077+
                </span>
                <span className="absolute scale-[170%] rotate-45 top-1/2 right-[55%] opacity-non transform -translate-y-1/2 translate-x-[100px] text-[#0e4a79] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-full">
                  &larr;
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start gap-4 w-full md:w-[25%] animate-section opacity-0 transition-opacity duration-1000">
            <div className="bg-[#0e4a79] p-[.75rem] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[18px] font-extrabold leading-[35px] text-[#0e4a79]">
                البريد الإلكتروني
              </h2>
              <p className="text-[14px] leading-[30px] text-[#667680] mt-2">
                الرد خلال 24 ساعة. لا تتردد في مراسلتنا لمزيد من المعلومات أو الدعم.
              </p>
              <div className="relative group mt-2">
                <span className="text-[14px] font-semibold text-[#0e4a79] relative z-10">
                  info@enjaz.com
                </span>
                <span className="absolute scale-[170%] rotate-45 top-1/2 right-[55%] opacity-non transform -translate-y-1/2 translate-x-[100px] text-[#0e4a79] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-full">
                  &larr;
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start gap-4 w-full md:w-[25%] animate-section opacity-0 transition-opacity duration-1000">
            <div className="bg-[#0e4a79] p-[.75rem] rounded-full flex items-center justify-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-white w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-[18px] font-extrabold leading-[35px] text-[#0e4a79]">
                موقعنا
              </h2>
              <p className="text-[14px] leading-[30px] text-[#667680] mt-2">
                أوقات الزيارة: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.
              </p>
              <div className="relative group mt-2">
                <span
                  className="text-[14px] font-semibold text-[#0e4a79] border-[#0e4a79] border-b-[1px] relative z-10"
                >
                  الموقع على الخريطة
                </span>
                <span className="absolute scale-[170%] rotate-45 top-1/2 right-[55%] opacity-non transform -translate-y-1/2 translate-x-[100px] text-[#0e4a79] transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-x-full">
                  &larr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInformations;
