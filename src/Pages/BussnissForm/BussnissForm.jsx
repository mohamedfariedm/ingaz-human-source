import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";

// Validation schema for the form
const validationSchema = Yup.object({
  companyName: Yup.string().required("أسم الشركة مطلوب"),
  contactPerson: Yup.string().required("اسم مسؤول التواصل مطلوب"),
  email: Yup.string()
    .email("يرجى إدخال بريد إلكتروني صالح")
    .required("البريد الإلكتروني مطلوب"),
  phone: Yup.string()
    .matches(/^(?:\+966|0)?5\d{8}$/, "يرجى إدخال رقم هاتف سعودي صالح")
    .required("رقم الهاتف مطلوب"),
  commercialRegistration: Yup.string().required("رقم السجل التجاري مطلوب"),
  companyFile: Yup.string().required("رقم ملف المنشأة مطلوب"),
  workersCount: Yup.number()
    .typeError("يرجى إدخال عدد العمالة")
    .required("عدد العمالة المطلوبة مطلوب"),
  requiredProfession: Yup.string().required("المهنة المطلوبة مطلوبة"),
  companyActivity: Yup.string().required("نشاط الشركة مطلوب"),
  region: Yup.string().required("المنطقة مطلوبة"),
  contractDuration: Yup.string().required("مدة التعاقد مطلوبة"),
  jobTitle: Yup.string().required("المسمى الوظيفي مطلوب"),
});

const BussnissForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    alert("تم إرسال البيانات بنجاح");
    resetForm(); // Reset the form after submission
  };

  return (
    <>
      <HelmetInfo titlePage={"شروط الاستخدام"} />
      <div className="main-container flex xl:w-[1152px] flex-col gap-[55px] my-[164px] items-center flex-nowrap relative mx-auto px-5 xl:px-0">
        <div className="flex xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative">
          <BreadCrumb name={"اسم الخدمة المختارة"} />
          <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[6]">
            <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
              <span className="flex xl:w-[404px] xl:h-[58px] justify-end items-start shrink-0 basis-auto text-[32px] font-semibold leading-[58px] text-[#0e4a79] relative text-center  z-[7]">
                سجّل الآن في خدمة الاعمال
              </span>
              <span className="xl:h-[32px] self-stretch shrink-0 basis-auto text-[16px] font-normal leading-[32px] text-[#667680] relative text-center  z-[8]">
                انضم إلى شبكتنا واستفد من حلولنا المصممة خصيصًا لتلبية احتياجات
                أعمالك
              </span>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            companyName: "",
            contactPerson: "",
            email: "",
            phone: "",
            commercialRegistration: "",
            companyFile: "",
            workersCount: "",
            requiredProfession: "",
            companyActivity: "",
            region: "",
            contractDuration: "",
            jobTitle: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[9]">
              <div className="flex w-full xl:w-[1152px] flex-col gap-[24px] shrink-0 relative z-10">
                {/* First Field: Full Width */}
                <div className="flex w-full flex-col gap-[8px]">
                  <label className="text-[#667680] text-[14px] font-medium">
                    أسم الشركة
                  </label>
                  <Field
                    name="companyName"
                    placeholder="أسم الشركة"
                    className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>

                {/* Second and Third Fields */}
                <div className="flex flex-col xl:flex-row w-full gap-[24px]">
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                      نشاط الشركة
                    </label>
                    <Field
                      name="companyActivity"
                      placeholder="نشاط الشركة"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="companyActivity"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                      اسم مسؤول التواصل
                    </label>
                    <Field
                      name="contactPerson"
                      placeholder="اسم مسؤول التواصل"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="contactPerson"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                </div>

                {/* Fourth Field */}
                {/* Fifth and Sixth Fields */}

                <div className="flex flex-col xl:flex-row w-full gap-[24px]">
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                      المنطقة
                    </label>
                    <Field
                      name="region"
                      placeholder="المنطقة"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="region"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                <div className="flex flex-col xl:flex-row w-full gap-[24px]">
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                      رقم الهاتف
                    </label>
                    <Field
                      name="phone"
                      placeholder="رقم الهاتف"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                 البريد الإلكتروني
                    </label>
                    <Field
                      name="email"
                      placeholder="البريد الإلكتروني"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                </div>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row w-full gap-[24px]">
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                      مدة التعاقد
                    </label>
                    <Field
                      name="contractDuration"
                      placeholder="مدة التعاقد"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="contractDuration"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                <div className="flex flex-col xl:flex-row w-full gap-[24px]">
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                      رقم ملف المنشأة
                    </label>
                    <Field
                      name="companyFile"
                      placeholder="رقم ملف المنشأة"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="companyFile"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                 رقم السجل التجاري
                    </label>
                    <Field
                      name="commercialRegistration"
                      placeholder="رقم السجل التجاري"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="commercialRegistration"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                </div>
                  </div>
                </div>
                <div className="flex flex-col xl:flex-row w-full gap-[24px]">
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                      المسمى الوظيفي
                    </label>
                    <Field
                      name="jobTitle"
                      placeholder="المسمى الوظيفي"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="jobTitle"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                <div className="flex flex-col xl:flex-row w-full gap-[24px]">
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                      المهنة المطلوبة
                    </label>
                    <Field
                      name="requiredProfession"
                      placeholder="المهنة المطلوبة"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="requiredProfession"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
                  عدد العمالة المطلوبة
                    </label>
                    <Field
                      name="workersCount"
                      placeholder=" عدد العمالة المطلوبة"
                      className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                    />
                    <ErrorMessage
                      name="workersCount"
                      component="div"
                      className="text-red-500 text-[12px]"
                    />
                  </div>
                </div>
                  </div>
                </div>

              </div>

              <button
                type="submit"
                className="flex h-[56px] pt-[12px] pr-[49px] pb-[12px] pl-[49px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#0e4a79] rounded-[999px] border-none relative overflow-hidden z-[111] pointer"
              >
                <span className="flex w-[43px] h-[29px] justify-center items-start shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#fff] relative text-center whitespace-nowrap z-[112]">
                  إرسال
                </span>
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default BussnissForm;
