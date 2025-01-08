import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import Victor from "assets/vectordegree45.svg";
// import Mission from "assets/content.svg";
// import Visson from "assets/content2.svg";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import Mission from "./Components/Mission/Mission";
import Vission from "./Components/Vission/Vission";
import Services from "Pages/Home/Components/Services/Services";

const AboutUs = () => {
  return (
    <>
       <HelmetInfo titlePage={"من نحن"} />
       <div className=" xl:w-[1152px] relative mx-auto my-[191px] p- xl:p-0">
<BreadCrumb/>
      <div className="flex  flex-col gap-[8px] items-center flex-nowrap relative mt-[66px] mr-0 mb-0  ">
        <span className="xl:h-[87px] self-stretch text_bold_Bukra shrink-0 basis-auto  text-[48px] font-bold leading-[87px] text-[#0e4a79]  relative text-center  z-[1]">
          من نحن ولماذا نحن الخيار الأمثل؟
        </span>
        <span className="xl:h-[33px] self-stretch shrink-0 basis-auto  text-[18px] font-normal leading-[32.76px] text-[#0e4a79] tracking-[0.36px] relative text-center  z-[2]">
          إنجاز: شريكك الاستراتيجي في تحقيق النجاح والتميز
        </span>
      </div>

      <span className="flex  xl:w-[1152px] justify-center items-center xl:h-[462px]   text-[18px] font-normal leading-[32.76px] text-[#667680] wordSpacing relative z-[3] mt-[91px] mr-0 mb-0 ml-0">
        شركة إنجاز للموارد البشرية هي واحدة من الشركات السعودية الرائدة في تقديم
        حلول شاملة ومتكاملة في مجالات الموارد البشرية والاستشارات الإدارية.
        تأسسنا برؤية واضحة تهدف إلى تمكين الأفراد والمؤسسات من تحقيق إمكاناتهم
        الكاملة، وذلك من خلال توفير خدمات متخصصة تلبي احتياجات السوق المحلي
        والدولي.
        <br />
        <br />
        منذ البداية، ركزنا جهودنا على دعم رؤية المملكة 2030 عبر تمكين الكفاءات
        السعودية وتقليل معدلات البطالة، مع تسهيل وصول الشركات إلى أفضل المواهب.
        نحن نفخر بحصولنا على العديد من الاعتمادات العالمية مثل ترخيص حلف الناتو
        وشهادات ISO، مما يعكس التزامنا بالمعايير الدولية للجودة والاحترافية.
        <br />
        <br />
        إننا نؤمن بأن النجاح الحقيقي يتطلب الشراكة، لذلك نسعى إلى بناء علاقات
        استراتيجية طويلة الأمد مع عملائنا الكرام. خدماتنا تغطي مجموعة واسعة من
        المجالات بما في ذلك التوظيف، التدريب، العمل عن بُعد، التشغيل الخارجي،
        والاستشارات الإدارية، وكل ذلك باستخدام أحدث التقنيات المبتكرة مثل الذكاء
        الاصطناعي لضمان تقديم حلول مرنة وفعالة.
        <br />
        <br />
        نحن في إنجاز نضع عملاءنا في صميم كل ما نقوم به، مع التزام كامل بتوفير
        تجربة فريدة تلبي توقعاتهم بل وتفوقها. نسعى دائمًا لتطوير خدماتنا وفقًا
        لاحتياجات السوق المتغيرة، مع الحفاظ على قيمنا الأساسية التي تشمل الجودة،
        الابتكار، الالتزام، والشفافية.
      </span>
<Mission/>
<Vission/>
<Services/>
    </div>
    </>
  );
};

export default AboutUs;
