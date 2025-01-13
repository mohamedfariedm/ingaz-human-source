import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import singleImage from "../../assets/news/rectangle.svg";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Stats = () => {
  const { t } = useTranslation("news"); // Use the "news" namespace for translations

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
                { threshold: 0.2 } // Trigger animation when 20% of the section is visible
              );
          
              const sections = document.querySelectorAll(".animate-section");
              sections.forEach((section) => observer.observe(section));
          
              return () => observer.disconnect(); // Cleanup
            }, []);
  return (
    <>
       <HelmetInfo titlePage={"تفاصيل الخبر"} />
       <div className="xl:w-[1152px] flex gap-[50px] flex-col relative mx-auto my-[164px] px-5 xl:px-0">
       <BreadCrumb name={"تفاصيل الخبر"} />
  <div className="flex xl:w-[1014px] flex-col gap-[24px] items-center shrink-0 flex-nowrap relative mx-auto z-[5] animate-section opacity-0 transition-opacity duration-1000">
    <span className="flex xl:w-[1014px] xl:h-[174px] justify-center items-start self-stretch shrink-0  text-[48px] text_bold_Bukra leading-[87.36px] text-[#0e4a79] tracking-[0.50px] relative text-center z-[6]">
      رحلة التميز في توفير الكوادر البشرية لتلبية احتياجات الأفراد والأعمال
      في المملكة
    </span>
    <span className="flex xl:w-[1014px] xl:h-[132px] justify-center items-start self-stretch shrink-0  text-[18px] font-normal leading-[32.76px] text-[#667680] tracking-[0.36px] relative text-center z-[7]">
      منذ تأسيسها في عام 2015، أصبحت شركة إنجاز للاستقدام إحدى أبرز شركات
      مجموعة إنجاز، التي تفخر بتقديم حلول شاملة ومتكاملة في مجال استقدام
      العمالة المنزلية والمهنية من مختلف الجنسيات. تعمل إنجاز برؤية واضحة
      تواكب رؤية المملكة 2030، حيث تلتزم بتقديم خدمات عالية الجودة تسهم في
      بناء حياة مستدامة ومتميزة للمواطنين والمقيمين في جميع أنحاء المملكة.
    </span>
  </div>
  <div className="xl:w-[1152px] flex flex-col gap-[63px] items-start self-stretch shrink-0 flex-nowrap relative z-[8] animate-section opacity-0 transition-opacity duration-1000">
    <div
      className="h-[648px]  self-stretch shrink-0 bg-[rgba(217,217,217,0.2)] bg-cover bg-no-repeat rounded-[32px] relative z-[9]"
      style={{
        backgroundImage: `url(${singleImage})`,
      }}
    />
    <span className="flex xl:w-[1152px] xl:h-[624px] justify-end items-start self-stretch shrink-0  text-[20px] font-normal leading-[48px] text-[#667680] tracking-[0.4px] relative text-right z-10">
      مركز إنجاز المتحدة للتدريب الرائدة في التدريب المؤسسي والتكنولوجيا
      التعليمية في منطقة الشرق الأوسط، حيث نقدم أكثر الحلول شمولية في تطوير
      التعلم والتدريب في جميع الوظائف المؤسسية الاستراتيجية، بما في ذلك
      الموارد البشرية، الموارد الرقمية والدورات المهنية والمتخصصة في جميع
      المجالات. من خلال جلسات تدريبية بقيادة مدربين، وتدريب داخل الشركات
      والإرشاد، وأحدث الحلول التقنية في جميع أنحاء منطقة الشرق الأوسط نقدم
      لعملائنا الكرام مجموعة واسعة من الخدمات، بما في ذلك تحليل احتياجات
      التدريب، تطوير وتقييم الكفاءات، وحلول التعلم الإلكتروني المصممة خصيصًا
      لتلبية احتياجات صناعات ومجالات معرفية محددة. و نقدم أفضل ممارسات حلول
      تحسين الأعمال لتنفيذ عملية العناوين والتكنولوجيا والتحسينات التنظيمية
      نحن نختار مستشارينا بعناية من أجل أن نقدم لعملائنا أعلى مستويات الجودة
      من الخبرة بالإضافة إلى الخبرة الواسعة في ممارسات الصناعة. يتمتع
      مستشارونا بسجل حافل في تنفيذ المهام الاستشارية الكبرى التي تتضمن النشر
      على مستوى المنظمة والجغرافيا المتعددة والوضع الاستشاري للتحسين المستمر
      للعملية لمهمتنا في مركز إنجاز المتحدة للتدريب هي تعزيز تنافسية عملائنا
      عالميًا من خلال التعلم المستمر، بينما نسعى لتحقيق رؤيتنا بأن نصبح أفضل
      مركز تدريب مؤسسي وتقني في المملكة ومنطقة الشرق الأوسط رؤيتنا : إيمانا
      منا بأهمية الاستثمار في تطوير وبناء الكوادر البشرية، نقدم لكم أفضل
      التقنيات والحلول المستخدمة في مجال التدريب والاستشارات نعمل وفقًا
      لأحدث المعايير العالمية لتطوير الأداء المؤسسي، ونسعى باستمرار لتزويد
      شركائنا بأحدث الابتكارات والممارسات لتحقيق الأهداف المرجوة.
    </span>
  </div>
</div>

    </>
  );
};

export default Stats;
