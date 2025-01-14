import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation("contact"); // Use the "contact" namespace for translations

  // Validation schema with Saudi phone validation
  const validationSchema = Yup.object({
    firstName: Yup.string().required(t("validation.firstName")),
    lastName: Yup.string().required(t("validation.lastName")),
    email: Yup.string()
      .email(t("validation.emailInvalid"))
      .required(t("validation.email")),
    phone: Yup.string()
      .matches(/^(?:\+966|0)?5\d{8}$/, t("validation.phoneInvalid"))
      .required(t("validation.phone")),
    message: Yup.string().required(t("validation.message")),
  });

  const handleSubmit = (values, { resetForm }) => {
    try {
      console.log("Form Submitted:", values);
      toast.success(t("toast.success"));
      resetForm(); // Reset the form
    } catch (error) {
      toast.error(t("toast.error"));
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
        <div className="main-container w-full flex xl:w-[560px] pt-[32px] pr-[32px] pl-[32px] flex-col gap-[32px] items-center bg-[#fbfbfb] rounded-[16px] relative mx-auto my-0">
          <Form className="flex w-full xl:w-[496px] flex-col gap-[40px] items-center shrink-0 relative">
            <div className="flex flex-col gap-[24px] items-center self-stretch shrink-0 relative z-[1]">
              <div className="flex flex-col xl:flex-row gap-[32px] items-start self-stretch shrink-0 relative z-[2]">
                {/* First Name */}
                <div className="flex xl:w-[232px] flex-col gap-[8px] self-stretch shrink-0 relative z-[11]">
                  <label className="text-[14px] font-medium text-[#667680]">
                    {t("fields.firstName")} *
                  </label>
                  <Field
                    name="firstName"
                    placeholder={t("placeholders.firstName")}
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
                    {t("fields.lastName")} *
                  </label>
                  <Field
                    name="lastName"
                    placeholder={t("placeholders.lastName")}
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
                  {t("fields.email")} *
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder={t("placeholders.email")}
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
                  {t("fields.phone")} *
                </label>
                <Field
                  name="phone"
                  placeholder={t("placeholders.phone")}
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
                  {t("fields.message")}
                </label>
                <Field
                  name="message"
                  as="textarea"
                  placeholder={t("placeholders.message")}
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
              className="flex gap-[16px] items-start justify-center self-stretch shrink-0 bg-[#0e4a79] text-[#fff] rounded-[45px] px-[50px] py-[14px]"
            >
              {t("buttons.submit")}
            </button>
          </Form>
          <ToastContainer />
        </div>
      )}
    </Formik>
  );
};

export default ContactForm;
