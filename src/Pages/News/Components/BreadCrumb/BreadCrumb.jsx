import { faArrowAltCircleLeft, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const BreadCrumb = () => {

    return (
        <div className="flex items-center gap-2 text-sm text-[#667680]">
          <Link to={"/"}>الصفحة الرئيسية</Link>
          <div className="w-6 h-6 bg-cover bg-center flex justify-center items-center"> 
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="15" height="15" viewBox="0 0 15 15" xmlSpace="preserve">

<defs>
</defs>
<g  transform="scale(.15)" >
	<path d="M 65.75 90 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 29.2 45 L 68.225 5.975 c 1.367 -1.367 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.366 -4.95 0 l -41.5 41.5 c -1.367 1.366 -1.367 3.583 0 4.949 l 41.5 41.5 C 63.958 89.658 64.854 90 65.75 90 z"  transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>            
             </div>
          <span className="font-semibold text-[#0e4a79]">تفاصيل الخبر</span>
        </div>
    );
  };
  
  export default BreadCrumb;
  