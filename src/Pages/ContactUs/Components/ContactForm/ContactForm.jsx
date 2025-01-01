import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Vector from "assets/contactus.svg";
import Vector1 from "assets/Icon.svg";
import Vector2 from "assets/mail-02.svg";

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
      // Simulating a successful submission
      console.log("Form Submitted:", values);
      toast.success("تم إرسال الرسالة بنجاح!");
      resetForm(); // Reset the form
    } catch (error) {
      toast.error("حدث خطأ أثناء الإرسال. حاول مرة أخرى.");
    }
  };

  return (
    <div className="flex my-[125px] flex-col lg:flex-row gap-8 items-center bg-[#fff] overflow-hidden mx-auto w-[100%] md:[80%] px-4 py-8">
      <ToastContainer />
      {/* Form Section */}
      <div className="w-full max-w-[500px] bg-[#fbfbfb] p-8 rounded-lg">
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
          <Form className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-[12px] font-medium text-[#667680] mb-2">
                  الاسم الأول
                </label>
                <Field
                  name="firstName"
                  placeholder="الاسم الأول"
                  className="w-full px-4 py-2 text-[12px] bg-[#f4f4f4] rounded-full focus:outline-none"
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-red-500 text-[12px]"
                />
              </div>
              <div className="flex-1">
                <label className="block text-[12px] font-medium text-[#667680] mb-2">
                  الاسم الأخير
                </label>
                <Field
                  name="lastName"
                  placeholder="الاسم الأخير"
                  className="w-full px-4 py-2 bg-[#f4f4f4] rounded-full focus:outline-none"
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="text-red-500 text-[12px]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[12px] font-medium text-[#667680] mb-2">
                البريد الإلكتروني
              </label>
              <Field
                name="email"
                type="email"
                placeholder="you@company.com"
                className="w-full px-4 py-2 bg-[#f4f4f4] rounded-full focus:outline-none"
              />
              <ErrorMessage
                name="email"
                component="span"
                className="text-red-500 text-[12px]"
              />
            </div>

            <div>
              <label className="block text-[12px] font-medium text-[#667680] mb-2">
                رقم الهاتف
              </label>
              <Field
                name="phone"
                placeholder="05XXXXXXXX أو +9665XXXXXXXX"
                className="w-full px-4 py-2 bg-[#f4f4f4] rounded-full focus:outline-none"
              />
              <ErrorMessage
                name="phone"
                component="span"
                className="text-red-500 text-[12px]"
              />
            </div>

            <div>
              <label className="block text-[12px] font-medium text-[#667680] mb-2">
                الرسالة
              </label>
              <Field
                name="message"
                as="textarea"
                placeholder="اترك لنا رسالة..."
                rows={4}
                className="w-full px-4 py-2 bg-[#f4f4f4] rounded-lg focus:outline-none"
              />
              <ErrorMessage
                name="message"
                component="span"
                className="text-red-500 text-[12px]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0e4a79] text-white py-3 rounded-full text-center font-medium"
            >
              إرسال
            </button>
          </Form>
        </Formik>
      </div>

      {/* Upper Section */}
      <div className="flex flex-col gap-8 items-center justify-between w-full max-w-screen-xl">
        <div className="w-full lg:w-[591px] h-[250px] bg-cover bg-center rounded-md">
          <img
            src={Vector}
            alt="Placeholder"
            className="w-[80%] h-full object-contain rounded-md"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Phone Section */}
          <div className="flex flex-col items-center gap-4 text-center px-5">
            <div className="w-10 h-10 bg-[#0e4a79] rounded-full flex items-center justify-center">
              <img src={Vector1} alt="Phone Icon" className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[1rem] font-semibold text-[#1d1d1d]">
                الاتصال الهاتفي
              </span>
              <span className="text-[14px] text_small_Bukra text-[#94969c] leading-6">
                ساعات العمل: من الأحد إلى الخميس، من 9 صباحًا حتى 5 مساءً.
              </span>
            </div>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center gap-4 text-center px-5">
            <div className="w-10 h-10 bg-[#0e4a79] rounded-full flex items-center justify-center">
              <img src={Vector2} alt="Email Icon" className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[1rem] font-semibold text-[#1d1d1d]">
                البريد الإلكتروني
              </span>
              <span className="text-[14px] text-[#94969c] leading-6">
                الرد خلال 24 ساعة. لا تتردد في مراسلتنا لمزيد من المعلومات أو الدعم.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
