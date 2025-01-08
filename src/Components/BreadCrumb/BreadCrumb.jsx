import { faArrowAltCircleLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Arrow from "../../assets/about/arrow-left.svg";

const BreadCrumb = () => {

    return (
<div className="flex  gap-[12px] items-center justify-center flex-nowrap relative z-[4] mt-0 mr-0 mb-0">

<span className="h-[20px] shrink-0 basis-auto  text-[14px] font-medium leading-[20px] text-[#667680] relative text-left whitespace-nowrap z-[8]">
  الصفحة الرئيسية
</span>
<div
style={{ backgroundImage: `url(${Arrow})` }}
className="w-[24px] h-[24px] shrink-0  bg-contain bg-no-repeat relative z-[7]" />

<div className="flex w-[46px] justify-center items-center shrink-0 flex-nowrap relative z-[5]">
  <span className="h-[20px] shrink-0 basis-auto  text-[14px] font-semibold leading-[20px] text-[#0e4a79] relative text-left whitespace-nowrap z-[6]">
    من نحن
  </span>
</div>
</div>
    );
  };
  
  export default BreadCrumb;
  