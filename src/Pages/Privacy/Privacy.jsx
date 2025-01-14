import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import singleImage from "../../assets/news/rectangle.svg";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t } = useTranslation("privacy"); // Use the "privacy" namespace for translations

  return (
    <>
      <HelmetInfo titlePage={"سياسة الخصوصية"} />
      <div className="main-container flex xl:w-[1152px] flex-col gap-[96px] my-[164px] items-center flex-nowrap relative mx-auto px-5 xl:px-0">
        <div className="flex xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative">
        <BreadCrumb name={t("breadcrumb")} />
        <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[6]">
            <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
              <span className="flex xl:w-[415px] xl:h-[58px] text_bold_Bukra ltr:justify-center rtl:justify-end items-center shrink-0 basis-auto text-[32px]  leading-[58px] text-[#0e4a79] relative text-start xl:whitespace-nowrap z-[8]">
              {t("title")}
              </span>
              <span className="flex xl:w-[662px] rtl:xl:h-[96px] justify-center items-center self-stretch shrink-0 text-[16px] font-normal leading-[32px] text-[#667680] relative text-center z-[9]">
              {t("introduction")}

              </span>
            </div>
          </div>
        </div>
        <div className="flex xl:w-[1152px] flex-col gap-[24px] items-start shrink-0 relative z-10 text-right">
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section1.title`)}
                    </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section1.content1`)}
            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#667680]">
          {t(`section1.content2`)}

          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section1.content3`)}
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section2.title`)}
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section2.content1`)}
            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section2.content2`)}
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section2.content3`)}
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section2.content4`)}
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section3.title`)}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#667680]">
          {t(`section3.content`)}

            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section4.title`)}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#667680]">
          {t(`section4.content1`)}

          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section4.content2`)}

          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section5.title`)}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#667680]">
          {t(`section5.content`)}

            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section6.title`)}
          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section6.content1`)}

          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section6.content2`)}

          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section6.content3`)}

          </p>
          <p className="text-[18px] font-normal text-start  leading-[32px] text-[#667680]">
          {t(`section7.title`)}
          </p>
          <p className="text-[18px] font-normal text-start leading-[32px] text-[#667680]">
          {t(`section7.content`)}

          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
