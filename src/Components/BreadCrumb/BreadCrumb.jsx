import { faArrowAltCircleLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Arrow from "../../assets/about/arrow-left.svg";

const BreadCrumb = ({name}) => {

    return (
<div className="flex  gap-[12px] items-center justify-center flex-nowrap relative z-[4] mt-0 mr-0 mb-0">

<Link to={"/"} className="h-[20px]    text-[14px] font-semibold leading-[20px] text-[#667680] relative text-left  z-[8]">
  الصفحة الرئيسية
</Link>

<div
style={{ backgroundImage: `url(${Arrow})` }}
className="w-[24px] h-[24px]   bg-contain bg-no-repeat relative z-[7]" />

<div className="flex  justify-center items-center  flex-nowrap relative z-[5]">
  <span className="h-[20px]    text-[14px] font-extrabold leading-[20px] text-[#0e4a79] relative text-left  z-[6]">
{name}
  </span>
</div>
</div>
    );
  };
  
  export default BreadCrumb;
  