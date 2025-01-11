import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import cloud from "../../assets/cloud-upload.svg";

// Validation schema for the form
const validationSchema = Yup.object({
  citizenship: Yup.string().required("يرجى تحديد الجنسية"),
  jobTitle: Yup.string().required("المسمى الوظيفي مطلوب"),
  contactPeriod: Yup.string().required("فترة التواصل مطلوبة"),
  experience: Yup.string().required("فترة الخبرة مطلوبة"),
  email: Yup.string()
    .email("يرجى إدخال بريد إلكتروني صالح")
    .required("البريد الإلكتروني مطلوب"),
  name: Yup.string().required("الاسم الشركة مطلوب"),
  cv: Yup.mixed().required("يرجى إرفاق السيرة الذاتية"),
});

const IndividaulsForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    alert("تم إرسال البيانات بنجاح");
    resetForm();
  };

  return (
    <>
      <HelmetInfo titlePage={"شروط الاستخدام"} />
      <div className="main-container flex xl:w-[1152px] flex-col gap-[55px] my-[164px] items-center flex-nowrap relative mx-auto px-5 xl:px-0">
        <div className="flex xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative">
          <BreadCrumb name={"تسجيل فى خدمات الافراد"} />
          <div className="flex flex-col gap-[64px] items-center self-stretch shrink-0 flex-nowrap relative z-[6]">
            <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
              <span className="flex  xl:h-[58px] items-center shrink-0 basis-auto text-[32px] font-semibold leading-[58px] text-[#0e4a79] relative text-center z-[7]">
                سجّل الآن في خدمة الافراد
              </span>
              <span className="xl:h-[32px] self-stretch shrink-0 basis-auto text-[16px] font-normal leading-[32px] text-[#667680] relative text-center z-[8]">
                انضم إلى شبكتنا واستفد من حلولنا المصممة خصيصًا لتلبية احتياجات
                أعمالك
              </span>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            citizenship: "سعودي",
            jobTitle: "",
            contactPeriod: "",
            experience: "",
            email: "",
            name: "",
            cv: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[9]">
              <div className="main-container flex w-full  xl:w-[564px] flex-col gap-[40px] items-start flex-nowrap relative mx-auto my-0">
                {/* Saudi/Non-Saudi Toggle */}
                <div className="flex pt-[6px] pr-[6px] pb-[6px] pl-[6px] items-center self-stretch shrink-0 flex-nowrap bg-[#f1f8fd] rounded-[99px] relative">
                <button
                    type="button"
                    className={`flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap ${
                      values.citizenship === "سعودي"
                        ? "bg-[#0e4a79] text-[#fff]"
                        : "bg-[#f1f8fd] text-[#667680]"
                    } rounded-[99px] border-none relative z-[3] pointer`}
                    onClick={() => setFieldValue("citizenship", "سعودي")}
                  >
                    سعودي
                  </button>
                  <button
                    type="button"
                    className={`flex pt-[8px] pr-[16px] pb-[8px] pl-[16px] gap-[8px] justify-center items-center grow shrink-0 basis-0 flex-nowrap ${
                      values.citizenship === "غير سعودي"
                        ? "bg-[#0e4a79] text-[#fff]"
                        : "bg-[#f1f8fd] text-[#667680]"
                    } rounded-[99px] border-none relative z-[3] pointer`}
                    onClick={() => setFieldValue("citizenship", "غير سعودي")}
                  >
                    غير سعودي
                  </button>
                
                </div>
                <ErrorMessage
                  name="citizenship"
                  component="div"
                  className="text-red-500 text-[12px]"
                />

                {/* Job Title Field */}
                <div className="flex w-full   flex-col md:flex-row xl:w-[564px]  gap-[8px]">
                {/* Name Field */}
                <div className="flex w-full  xl:w-[270px] flex-col gap-[8px]">
                  <label className="text-[#667680] text-[14px] font-medium">
                    الاسم
                  </label>
                  <Field
                    name="name"
                    placeholder="اسم الشركة"
                    className="flex h-[56px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f4f4f4] rounded-[999px] border-none px-[16px] text-right"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>
                
                <div className="flex w-full  xl:w-[270px] flex-col gap-[8px]">
                  <label className="text-[#667680] text-[14px] font-medium">
                    المسمى الوظيفي
                  </label>
                  <Field
                    name="jobTitle"
                    placeholder="المسمى الوظيفي"
                    className="flex h-[56px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f4f4f4] rounded-[999px] border-none px-[16px] text-right"
                  />
                  <ErrorMessage
                    name="jobTitle"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>


                </div>


                <div className="flex w-full flex-col md:flex-row  xl:w-[564px]  gap-[8px]">
                {/* Name Field */}
                <div className="flex w-full  xl:w-[270px] flex-col gap-[8px]">
                  <label className="text-[#667680] text-[14px] font-medium">
                    مدة الخبرة
                  </label>
                  <Field
                    name="experience"
                    placeholder="مدة الخبرة"
                    className="flex h-[56px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f4f4f4] rounded-[999px] border-none px-[16px] text-right"
                  />
                  <ErrorMessage
                    name="experience"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>
                
                {/* Contact Period Field */}
                <div className="flex w-full  xl:w-[270px] flex-col gap-[8px]">
                  <label className="text-[#667680] text-[14px] font-medium">
                    فترة التواصل
                  </label>
                  <Field
                    name="contactPeriod"
                    placeholder="مثال: صباحي"
                    className="flex h-[56px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f4f4f4] rounded-[999px] border-none px-[16px] text-right"
                  />
                  <ErrorMessage
                    name="contactPeriod"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>
                </div>

                

                {/* Email Field */}
                <div className="flex w-full  xl:w-[564px] flex-col gap-[8px]">
                  <label className="text-[#667680] text-[14px] font-medium">
                    البريد الإلكتروني
                  </label>
                  <Field
                    name="email"
                    placeholder="example@email.com"
                    className="flex h-[56px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#f4f4f4] rounded-[999px] border-none px-[16px] text-right"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>

                {/* CV Upload */}
                <div className="flex flex-col gap-[8px] w-full flex-nowrap relative mx-auto my-0">
  <div className="flex xl:w-[135px] gap-[2px] items-center shrink-0 flex-nowrap relative">
    <span className="h-[20px] shrink-0 basis-auto  text-[14px] font-medium leading-[20px] text-[#667680] relative text-left whitespace-nowrap z-[1]">
      *
    </span>
    <span className="h-[20px] shrink-0 basis-auto  text-[14px] font-medium leading-[20px] text-[#667680] relative text-left whitespace-nowrap z-[2]">
      إرفاق السيرة الذاتية
    </span>
  </div>
  <div className="flex flex-col gap-[16px] items-start self-stretch shrink-0 flex-nowrap relative z-[3]">
    <div className="flex pt-[16px] pr-[24px] pb-[16px] pl-[24px] flex-col gap-[4px] items-center self-stretch shrink-0 flex-nowrap rounded-[12px] border-solid border border-[#e7e7e7] relative z-[4]">
      <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[5]">
        <div className="w-[40px] h-[40px] shrink-0 rounded-[8px] border-solid border border-[#e7e7e7] flex justify-center items-center relative overflow-hidden z-[6]">
          <div
            className="w-[20px] h-[20px] bg-cover bg-no-repeat relative z-[7] "
            style={{ backgroundImage: `url(${cloud})` }}
          />
        </div>
        <div className="flex flex-col gap-[8px] items-center self-stretch shrink-0 flex-nowrap relative z-[8]">
          <div className="flex gap-[4px] justify-center items-start self-stretch shrink-0 flex-nowrap relative z-[9]">
            <div className="flex xl:w-[89px] gap-[6px] justify-center items-center shrink-0 flex-nowrap relative overflow-hidden z-[11]">
              <label
                htmlFor="cvUpload"
                className="h-[20px] shrink-0 basis-auto  text-[14px] font-semibold leading-[20px] text-[#0e4a79] relative text-left whitespace-nowrap z-[12] pointer"
              >
                اضغط لتحميل
              </label>
              <input
                id="cvUpload"
                type="file"
                className="hidden"
                accept=".png, .jpg, .pdf"
                onChange={(event) =>
                  setFieldValue("cv", event.target.files[0])
                }
              />
            </div>
            <span className="h-[20px] shrink-0 basis-auto  text-[14px] font-normal leading-[20px] text-[#667680] relative text-left xl:whitespace-nowrap z-10">
              أو السحب والإفلات
            </span>
          </div>
          <span className="h-[18px] self-stretch shrink-0 basis-auto  text-[12px] font-normal leading-[18px] text-[#667680] relative text-center xl:whitespace-nowrap z-[13]">
            PNG, JPG or PDF (max. 800x400px)
          </span>
        </div>
      </div>
    </div>
  </div>
  <ErrorMessage
    name="cv"
    component="div"
    className="text-red-500 text-[12px]"
  />
</div>

                

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex h-[56px] pt-[12px] pr-[49px] pb-[12px] pl-[49px] gap-[8px] justify-center items-center self-stretch shrink-0 flex-nowrap bg-[#0e4a79] rounded-[999px] border-none relative overflow-hidden z-[60] pointer"
                >
                  <span className="flex  xl:w-[43px] h-[29px] justify-center items-start shrink-0 basis-auto text-[16px] font-medium leading-[29px] text-[#fff] relative text-center whitespace-nowrap z-[61]">
                    إرسال
                  </span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default IndividaulsForm;
