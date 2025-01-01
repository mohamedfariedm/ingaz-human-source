import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import SingleStats from "./Components/SingleStats/SingleStats";
import BreadCrumb from "./Components/BreadCrumb/BreadCrumb";
import Victor from "assets/vectordegree45.svg";
import Mission from "assets/content.svg";
import Visson from "assets/content2.svg";

const AboutUs = () => {
  return (
    <>
       <HelmetInfo titlePage={"من نحن"} />
<div className="mt-[150px]"/>
       <div className="main-container bg-[#fff] mx-auto px-4 py-8 ">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 max-w-screen-lg mx-auto">
        {/* Breadcrumb */}
      <BreadCrumb/>

        {/* Title Section */}
        <div className="text-center flex items-center flex-col gap-6">
          <span className="text-lg font-medium text-[#0e4a79]">
            
          </span>
          <h1 className="text-4xl lg:text-[2.75rem] text_bold_Bukra text-[#0e4a79] leading-snug">
          شريكك في تحقيق الراحة والجودة
                    </h1>
          <p className="text-lg lg:text-[1rem] font-medium  w-[85%]  text-[#0e4a79] leading-relaxed">
          نحرص على توفير إجابات واضحة لأكثر الأسئلة شيوعاً حول خدماتنا، لتسهيل تجربتك وضمان فهمك الكامل لكل خطوة.
          </p>
        </div>
      </div>
      <div className="md:w-[90%] mx-auto my-0 bg-white px-4 py-8 relative ">
  {/* Section 1: Company Intro */}
  <div className="mx-auto my-10  text-[#0e4a79] text-lg lg:text-[1rem] font-medium  leading-relaxed md:px-5">
    <p className="text-lg lg:text-[1rem]  font-medium leading-relaxed tracking-wide">
      تأسست شركة إنجاز للاستقدام في عام 2015 كإحدى شركات مجموعة إنجاز، لتقدم حلولاً
      متكاملة في مجال استقدام العمالة المنزلية والمهنية. منذ البداية، التزمت إنجاز
      بتوفير خدمات استثنائية تلبي احتياجات الأفراد والشركات على حد سواء، مع التركيز
      على الجودة والابتكار والمصداقية.
    </p>
    <br />
    <p className="text-lg lg:text-[1rem]  font-medium leading-relaxed tracking-wide">
      تميزت إنجاز ببناء شراكات قوية مع مراكز تدريب عالمية في عدة دول، لتضمن تأهيل
      الكوادر البشرية وفق أعلى المعايير المهنية، ما يجعلها جاهزة لتلبية توقعات
      عملائنا بكفاءة واحترافية.
    </p>
    <br />
    <p className="text-lg lg:text-[1rem]  font-medium leading-relaxed tracking-wide">
      نسعى جاهدين للريادة في مجال الاستقدام من خلال تقديم خدمات موثوقة تواكب
      تطلعات العملاء وتحقق لهم الراحة والتميز...
    </p>
    <br />
    <p className="text-lg lg:text-[1rem]  font-medium leading-relaxed tracking-wide">
      بفضل فريق عملنا المتميز وخدماتنا المدروسة، نجحنا في كسب ثقة آلاف العملاء في
      جميع مناطق المملكة. نلتزم في إنجاز بحفظ حقوق العملاء والعمال على حد سواء،
      من خلال تطبيق أعلى معايير الجودة والشفافية.
    </p>
    <br />
    <p className="text-lg lg:text-[1rem]  font-medium leading-relaxed tracking-wide">
      بفضل فريق عملنا المتميز وخدماتنا المدروسة، نجحنا في كسب ثقة آلاف العملاء في
      جميع مناطق المملكة. نلتزم في إنجاز بحفظ حقوق العملاء والعمال على حد سواء،
      من خلال تطبيق أعلى معايير الجودة والشفافية.
    </p>
  </div>
</div>
  <div className="md:h-[75vh] flex items-center relative">
<div className="flex flex-col md:flex-row justify-start items-center w-[90%] mx-auto ">
  <div className="  max-w-screen-md  text-right md:ps-10 md:py-10">
    <h3 className="text-sm md:text-base  text_small_Bukra text-[#1d1d1d] mb-1 leading-[29px] py-3">
      كلمة رئيس مجلس الإدارة
    </h3>
    <h2 className="text-2xl md:text-[1.65rem] text_bold_Bukra text-[#1d1d1d] leading-tight pb-10">
      رؤية تقود نحو التميز
    </h2>
    <p className="mt-4 text-[#667680] text_small_Bukra text-sm md:text-base leading-[29px] ">
      في شركة إنجاز للاستقدام، نؤمن بأن النجاح الحقيقي يأتي من تقديم خدمات
      استثنائية تلبي احتياجات عملائنا وتفوق توقعاتهم. منذ انطلاقنا في عام 2015،
      وضعنا نصب أعيننا بناء علاقات قائمة على الثقة والاحترافية، مع التركيز على
      استقطاب أفضل الكفاءات المهنية والمنزلية من مختلف الجنسيات.
    </p>
  </div>

  <div
    className=" md:absolute w-full h-[200px] md:h-[350px] md:bottom-0 xl:h-[420px] bg-cover md:bg-center md:-start-2 "
    style={{ backgroundImage: `url(${Victor})`,backgroundSize:"cover" }}
  ></div>

</div>

  </div>

<div className="main-container w-full bg-[#fff] relative mx-auto my-0 md:px-36 py-8">
  {/* Vision and Mission Section */}
  <div className="flex flex-col items-center gap-6 text-center mt-12">
    <div className="flex flex-col gap-2">
      <span className="text-lg font-medium text_small_Bukra text-[#1d1d1d]">رؤيتنا ورسالتنا</span>
      <span className="text-2xl md:text-[1.65rem] text_bold_Bukra font-bold text-[#1d1d1d] leading-snug">
        نحو مستقبل يحقق طموحاتك
      </span>
    </div>
    <p className="text-sm md:text-base text_small_Bukra  text-[#667680] max-w-[90%] md:max-w-[550px] leading-relaxed">
      رؤيتنا تسعى للريادة في تقديم خدمات استقدام مبتكرة وموثوقة، ورسالتنا تركز على استقطاب الكفاءات الأفضل عالميًا لتلبية احتياجات عملائنا باحترافية عالية
    </p>
  </div>

  {/* Vision Box */}
  <div className=" flex flex-col lg:flex-row items-center justify-between bg-[#0e4a79] rounded-[16px] overflow-hidden mt-12 lg:mt-16 max-w-[90%] lg:max-w-[900px]  p-6 gap-6 ">
  <div className="w-full max-w-[272px] h-[161px]">
      <img
        src={Mission}
        alt="Vision Placeholder"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    
    <div className="flex flex-col gap-4 text-right text-white max-w-[90%] lg:max-w-[600px] pe-6">
      <span className="text-2xl md:text-[1.5rem] text_bold_Bukra   leading-snug">الرؤية</span>
      <p className="text-base leading-relaxed text_small_Bukra">
        أن نكون الخيار الأول في مجال الاستقدام بالمملكة العربية السعودية، من خلال تقديم خدمات احترافية تتسم بالجودة العالية والسرعة في الأداء، مع بناء علاقات قوية قائمة على الثقة والمصداقية مع عملائنا.
      </p>
    </div>

  </div>

  {/* Mission Box */}
  <div className="flex flex-col lg:flex-row-reverse items-center justify-between bg-[#0e4a79] rounded-[16px] overflow-hidden mt-8 lg:mt-12 max-w-[90%] lg:max-w-[900px] ms-auto p-6 gap-6">
    <div className="flex flex-col gap-4 text-right text-white max-w-[90%] lg:max-w-[600px]">
      <span className="text-2xl md:text-[1.5rem] text_bold_Bukra   leading-snug">الرسالة</span>
      <p className="text-base leading-relaxed text_small_Bukra">
        تقديم حلول استقدام شاملة تستقطب الكفاءات الأفضل عالميًا، مع ضمان تدريبهم وتأهيلهم وفق أعلى المعايير لتلبية احتياجات الأفراد والشركات في المملكة، مع الحفاظ على حقوق العملاء والعمال.
      </p>
    </div>
    <div className="w-full max-w-[272px] h-[161px]">
      <img
        src={Visson}
        alt="Mission Placeholder"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  </div>
</div>
    </div>
    </>
  );
};

export default AboutUs;
