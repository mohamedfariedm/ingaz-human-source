import { Link } from "react-router-dom";
import "./HeaderCard.css";
import Victor from "assets/Vector.svg";
import { useEffect } from "react";
const HeaderCard = () => {
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
    <div className=" w-[90%]  relative mx-auto scale-[98%] "
        // style={
    //   {
    //     backgroundImage:`url(${Victor})`,
    //     backgroundPosition:"-100px,0",
    //     backgroundSize:"80%",
    //     backgroundRepeat:"no-repeat"
    //   }
    // }
    >
      {/* Background Images */}
      <div className="md:pt-20">
<img className="relative w-[100%] xl:absolute xl:bottom-[10%]  xl:end-10 xl:w-[69%] animate-section opacity-0 transition-opacity duration-1000"  src={Victor} alt="" />
      {/* Content Section */}
      <div className=" w-full xl:w-[50%] py-10 xl:ms-8 animate-section opacity-0 transition-opacity duration-1000">
      <div className="flex flex-col gap-5  items-start flex-nowrap">
        <div className="flex flex-col gap-[4px] items-start self-stretch shrink-0 flex-nowrap relative z-[4]">
          <span className=" text-[16px] font-normal leading-[29px] text-[#0e4a79] text_small_Bukra">
            من نحن
          </span>
          <span className="flex  text-[28px] text_bold_Bukra  leading-[54.6px] text-[#0e4a79] md:w-[80%]  ">
            رحلة التميز في توفير الكوادر البشرية لتلبية احتياجات الأفراد
            والأعمال في المملكة
          </span>
        </div>
        <span className="flex  font-medium text-[1rem] leading-[25px] text_small_Bukra text-[#667680] md:w-[85%]">
          منذ تأسيسها في عام 2015، أصبحت شركة إنجاز للاستقدام إحدى أبرز شركات
          مجموعة إنجاز، التي تفخر بتقديم حلول شاملة ومتكاملة في مجال استقدام
          العمالة المنزلية والمهنية من مختلف الجنسيات. تعمل إنجاز برؤية واضحة
          تواكب رؤية المملكة 2030، حيث تلتزم بتقديم خدمات عالية الجودة تسهم في
          بناء حياة مستدامة ومتميزة للمواطنين والمقيمين في جميع أنحاء المملكة.
        </span>
      </div>
      <div className="flex"> 
      <Link to={"/aboutus"} className="flex   px-10 py-2 gap-[8px] justify-center items-center rounded-[999px] border-solid border border-[#0e4a79] group hover:bg-[#0e4a79] hover:text-white hover:border-white hover:scale-90 transition-transform duration-300 pointer mt-16">
        <span  className="flex justify-center text_small_Bukra  font-normal items-start shrink-0 basis-auto  text-[14px] text-[#0e4a79] group-hover:text-white leading-[25px]  relative text-center whitespace-nowrap z-[9] ">
          إقرأ المزيد
        </span>
      </Link>

      </div>

      </div>

      </div>
    </div>
  );
};

export default HeaderCard;
