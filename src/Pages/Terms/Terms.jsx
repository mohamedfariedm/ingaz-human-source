import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import singleImage from "../../assets/news/rectangle.svg";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t } = useTranslation("terms");

  return (
    <>
      <HelmetInfo titlePage={t("pageTitle")} />
      <div className="main-container flex xl:w-[1152px] flex-col gap-[96px] my-[164px] items-center flex-nowrap relative mx-auto px-5 xl:px-0">
        <div className="flex xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative">
          <BreadCrumb name={t("breadcrumb")} />
          <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[6]">
            <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
              <span className="flex rtl:xl:w-[474px] xl:h-[58px] justify-end items-center xl:items-start shrink-0 basis-auto text-[32px] text_bold_Bukra leading-[58px] text-[#0e4a79] relative text-center xl:text-right xl:whitespace-nowrap z-[8]">
                {t("title")}
              </span>
              <span className="flex xl:w-[662px] xl:h-[96px] justify-center items-start self-stretch shrink-0 text-[16px] font-normal leading-[32px] text-[#667680] relative text-center z-[9]">
                {t("introduction")}
              </span>
            </div>
          </div>
        </div>
        <div className="flex xl:w-[1152px] flex-col gap-[24px] items-start shrink-0 relative z-10 text-right">
          <p className="text-[18px] flex font-normal leading-[32px] text-[#667680]">
            {t("section1.title")}
          </p>
          <p className="text-[18px] ltr:text-start flex font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section1.content")}
          </p>
          <p className="text-[18px] flex font-normal leading-[32px] text-[#667680]">
            {t("section2.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section2.content")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section2.content1")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            {t("section3.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section3.content")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section3.content1")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            {t("section4.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section4.content")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section4.content1")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            {t("section5.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section5.content")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section5.content1")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            {t("section6.title")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section6.content")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section6.content1")}
          </p>
          <p className="text-[18px] flex ltr:text-start font-normal leading-[32px] text-[#667680]">
            {t("section7.title")}
          </p>
          <p className="text-[18px] flex font-normal ltr:text-start leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section7.content")}
          </p>
          <p className="text-[18px] flex font-normal ltr:text-start leading-[32px] text-[#667680]">
            <span style={{ margin: "0 10px" }}>•</span>
            {t("section7.content1")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Terms;

