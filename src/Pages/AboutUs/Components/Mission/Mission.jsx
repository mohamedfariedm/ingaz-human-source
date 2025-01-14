import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import mission from "../../../../assets/mission/vector.svg";

const Mission = () => {
  const { t } = useTranslation("aboutUs");

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
    <div className="main-container md:w-[1457.5px] md:h-[506.05px] relative mx-auto mt-[191px] my-0 animate-section opacity-0 transition-opacity duration-1000">
      <div className="flex md:w-[571px] flex-col gap-[24px] items-end flex-nowrap relative pt-[55px]">
        <span className="md:h-[87px] self-stretch shrink-0 basis-auto text-[48px] font-semibold leading-[87px] text-[#0e4a79] tracking-[0.96px] relative ltr:text-left rtl:text-right z-[3]">
          {t("mission.title")}
        </span>
        <span className="flex md:w-[571px] md:h-[132px] items-start self-stretch shrink-0 text-[18px] font-normal leading-[32.76px] text-[#667680] tracking-[0.36px] relative z-[2]">
          {t("mission.content")}
        </span>
      </div>
      <div
        style={{ backgroundImage: `url(${mission})` }}
        className="w-full h-[350px] md:w-[1440px] md:h-[509.049px] bg-contain xl:bg-cover bg-no-repeat md:absolute top-[-1.5px] rtl:left-[60%] ltr:right-[10%]  rtl:md:translate-x-[-50.61%] ltr:rotate-y-180 z-[1]"
      />
    </div>
  );
};

export default Mission;
