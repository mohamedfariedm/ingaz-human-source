import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import singleImage from "../../assets/news/rectangle.svg";

const Privacy = () => {
  return (
    <>
      <HelmetInfo titlePage={"سياسة الخصوصية"} />
      <div className="main-container flex xl:w-[1152px] flex-col gap-[96px] my-[164px] items-center flex-nowrap relative mx-auto px-5 xl:px-0">
        <div className="flex xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative">
          <BreadCrumb name={"سياسة الخصوصية"} />
          <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[6]">
            <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
              <span className="flex xl:w-[415px] xl:h-[58px] text_bold_Bukra justify-end items-start shrink-0 basis-auto text-[32px]  leading-[58px] text-[#0e4a79] relative text-right xl:whitespace-nowrap z-[8]">
                سياسة الخصوصية الخاصة بنا
              </span>
              <span className="flex xl:w-[662px] xl:h-[96px] justify-center items-start self-stretch shrink-0 text-[16px] font-normal leading-[32px] text-[#667680] relative text-center z-[9]">
                في إنجاز، نلتزم بحماية خصوصية معلوماتك الشخصية. تشرح هذه السياسة
                كيفية جمع واستخدام وحماية بياناتك عند استخدام خدماتنا. نأخذ
                خصوصيتك على محمل الجد ونتعهد بالحفاظ على الأمان والسرية في جميع
                الأوقات.
              </span>
            </div>
          </div>
        </div>
        <div className="flex xl:w-[1152px] flex-col gap-[24px] items-start shrink-0 relative z-10 text-right">
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            1. المعلومات التي نقوم بجمعها:
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            نقوم بجمع المعلومات التالية عند استخدامك لموقعنا أو خدماتنا:
            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            المعلومات الشخصية: مثل الاسم، البريد الإلكتروني، رقم الهاتف،
            ومعلومات الحساب التي تقدمها عند التسجيل أو استخدام خدماتنا.
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            المعلومات التلقائية: مثل عنوان الـ IP، متصفح الإنترنت، وأنواع الأجهزة
            المستخدمة، والتي يتم جمعها أثناء تصفح الموقع.
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            2. كيفية استخدام المعلومات:
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            نستخدم معلوماتك الشخصية للغرض التالي:
            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            تحسين الخدمات: لتقديم خدمات مخصصة وتقديم الدعم الفني.
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            التواصل: للتواصل معك بشأن تحديثات الخدمة أو الرد على استفساراتك.
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            تحليل البيانات: لفهم كيفية استخدام خدماتنا وتحسين تجربة المستخدم.
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            3. حماية بياناتك:
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            نحن نتخذ جميع التدابير اللازمة لحماية معلوماتك الشخصية باستخدام
            تقنيات الأمان المناسبة مثل التشفير وحماية البيانات. ومع ذلك، لا يمكننا
            ضمان الأمان الكامل في بيئة الإنترنت.
            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            4. مشاركة البيانات مع أطراف ثالثة:
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            مقدمو الخدمات: قد نشارك معلوماتك مع أطراف ثالثة تساعدنا في توفير
            الخدمات (مثل مزودي الدفع، ومقدمي الدعم التقني).
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            الامتثال للقانون: قد نكشف عن معلوماتك إذا كان ذلك مطلوبًا بموجب
            القانون أو للاستجابة لطلبات السلطات القضائية.
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            5. ملفات تعريف الارتباط (Cookies):
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            نستخدم ملفات تعريف الارتباط لتحسين تجربتك على الموقع وتخصيص المحتوى.
            يمكنك تعديل إعدادات المتصفح لرفض ملفات تعريف الارتباط، ولكن ذلك قد
            يؤثر على بعض وظائف الموقع.
            <br />
            <br />
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            6. حقوقك:
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            الوصول إلى البيانات: يحق لك الوصول إلى بياناتك الشخصية وتصحيحها أو
            تحديثها.
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            إلغاء الاشتراك: يمكنك إلغاء الاشتراك في رسائل البريد الإلكتروني
            التسويقية في أي وقت عبر الرابط الموجود في أسفل البريد.
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            حذف البيانات: إذا أردت حذف بياناتك من سجلاتنا، يمكنك التواصل معنا
            لتنفيذ ذلك.
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            7. التعديلات على سياسة الخصوصية:
          </p>
          <p className="text-[18px] font-normal leading-[32px] text-[#667680]">
            قد نقوم بتعديل هذه السياسة من وقت لآخر. سيتم نشر التعديلات على هذه
            الصفحة مع تاريخ التحديث. إذا استمرت في استخدام خدماتنا بعد
            التعديلات، فإنك توافق على السياسة المعدلة.
          </p>
        </div>
      </div>
    </>
  );
};

export default Privacy;
