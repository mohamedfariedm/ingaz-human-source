import { useTranslation } from "react-i18next";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import Mission from "./Components/Mission/Mission";
import Vission from "./Components/Vission/Vission";
import Services from "Pages/Home/Components/Services/Services";

const AboutUs = () => {
  const { t } = useTranslation("aboutUs");

  return (
    <>
      <HelmetInfo titlePage={t("helmetTitle")} />
      <div className="xl:w-[1152px] relative mx-auto my-[191px] px-5 xl:px-0">
        <BreadCrumb name={t("breadcrumb")} />
        <div className="flex flex-col gap-[8px] items-center flex-nowrap relative mt-[66px]">
          <span className="rtl:xl:h-[87px] self-stretch text_bold_Bukra shrink-0 basis-auto text-[48px] font-bold leading-[87px] text-[#0e4a79] relative text-center z-[1]">
            {t("title")}
          </span>
          <span className="rtl:xl:h-[33px] self-stretch shrink-0 basis-auto text-[18px] font-normal leading-[32.76px] text-[#0e4a79] tracking-[0.36px] relative text-center z-[2]">
            {t("subtitle")}
          </span>
        </div>
        <span className="flex xl:w-[1152px] justify-center items-center xl:h-[462px] text-[18px] font-normal leading-[32.76px] text-[#667680] wordSpacing relative z-[3] mt-[91px]">
          {t("content")}
        </span>
        <Mission />
        <Vission />
        <Services />
      </div>
    </>
  );
};

export default AboutUs;
