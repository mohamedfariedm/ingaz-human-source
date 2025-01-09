import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  // Validation schema with Saudi phone validation
  const validationSchema = Yup.object({
    firstName: Yup.string().required("الاسم الأول مطلوب"),
    lastName: Yup.string().required("الاسم الأخير مطلوب"),
    email: Yup.string()
      .email("يرجى إدخال بريد إلكتروني صالح")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string()
      .matches(
        /^(?:\+966|0)?5\d{8}$/,
        "يرجى إدخال رقم هاتف سعودي صالح (يبدأ بـ +966 أو 05)"
      )
      .required("رقم الهاتف مطلوب"),
    message: Yup.string().required("الرسالة مطلوبة"),
  });

  const handleSubmit = (values, { resetForm }) => {
    try {
      console.log("Form Submitted:", values);
      toast.success("تم إرسال الرسالة بنجاح!");
      resetForm(); // Reset the form
    } catch (error) {
      toast.error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    }
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <div className="main-container w-full flex xl:w-[560px] pt-[32px] pr-[32px]  pl-[32px] flex-col gap-[32px] items-center bg-[#fbfbfb] rounded-[16px] relative mx-auto my-0">
          <Form className="flex w-full xl:w-[496px] flex-col gap-[40px] items-center shrink-0 relative">
            <div className="flex flex-col gap-[24px] items-center self-stretch shrink-0 relative z-[1]">
              <div className="flex flex-col xl:flex-row gap-[32px] items-start self-stretch shrink-0 relative z-[2]">
                {/* First Name */}
                <div className="flex xl:w-[232px] flex-col gap-[8px] self-stretch shrink-0 relative z-[11]">
                  <label className="text-[14px] font-medium text-[#667680]">
                    الاسم الأول *
                  </label>
                  <Field
                    name="firstName"
                    placeholder="الاسم الأول"
                    className="outline-none w-full xl:w-[232px] h-[56px] bg-[#f4f4f4] rounded-[999px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>
                {/* Last Name */}
                <div className="flex xl:w-[232px] flex-col gap-[8px] self-stretch shrink-0 relative z-[3]">
                  <label className="text-[14px] font-medium text-[#667680]">
                    الاسم الأخير *
                  </label>
                  <Field
                    name="lastName"
                    placeholder="الاسم الأخير"
                    className="outline-none w-full xl:w-[232px] h-[56px] bg-[#f4f4f4] rounded-[999px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>
              </div>
              {/* Email */}
              <div className="flex flex-col gap-[8px] self-stretch shrink-0 relative z-[19]">
                <label className="text-[14px] font-medium text-[#667680]">
                  البريد الإلكتروني *
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className="outline-none w-full xl:w-[496px] h-[56px] bg-[#f4f4f4] rounded-[999px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-[12px]"
                />
              </div>
              {/* Phone */}
              <div className="flex flex-col gap-[8px] self-stretch shrink-0 relative z-[27]">
                <label className="text-[14px] font-medium text-[#667680]">
                  رقم الهاتف *
                </label>
                <Field
                  name="phone"
                  placeholder="+966 5XXXXXXXX"
                  className="outline-none w-full xl:w-[496px] h-[56px] bg-[#f4f4f4] rounded-[999px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-[12px]"
                />
              </div>
              {/* Message */}
              <div className="flex flex-col gap-[8px] self-stretch shrink-0 relative z-[29]">
                <label className="text-[14px] font-medium text-[#667680]">
                  الرسالة
                </label>
                <Field
                  name="message"
                  as="textarea"
                  placeholder="اترك لنا رسالة..."
                  className="outline-none w-full xl:w-[496px] h-[90px] bg-[#f4f4f4] rounded-[8px] px-[16px] shadow-[0_1px_2px_0_rgba(16,24,40,0.05)]"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-[12px]"
                />
              </div>
            </div>
            <button
              type="submit"
              className="flex  gap-[16px] items-start justify-center self-stretch shrink-0 bg-[#0e4a79] text-[#fff] rounded-[45px] px-[50px] py-[14px]"
            >
              
              إرسال
            </button>
          </Form>
          <ToastContainer />
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
