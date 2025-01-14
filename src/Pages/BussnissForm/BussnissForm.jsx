import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HelmetInfo from "Components/HelmetInfo/HelmetInfo";
import BreadCrumb from "Components/BreadCrumb/BreadCrumb";
import { useTranslation } from "react-i18next";

// Validation schema for the form


const BussnissForm = () => {

  const { t } = useTranslation("businessForm"); // Translation namespace

  const validationSchema = Yup.object({
    companyName: Yup.string().required(t("validation.companyName")),
    contactPerson: Yup.string().required(t("validation.contactPerson")),
    email: Yup.string()
      .email(t("validation.emailInvalid"))
      .required(t("validation.email")),
    phone: Yup.string()
      .matches(/^(?:\+966|0)?5\d{8}$/,t("validation.phoneInvalid") )
      .required(t("validation.phone")),
    commercialRegistration: Yup.string().required(t("validation.commercialRegistration")),
    companyFile: Yup.string().required(t("validation.companyFile")),
    workersCount: Yup.number()
      .typeError(t("validation.workersCountInvalid"))
      .required(t("validation.workersCount")),
    requiredProfession: Yup.string().required(t("validation.requiredProfession")),
    companyActivity: Yup.string().required(t("validation.companyActivity")),
    region: Yup.string().required(t("validation.region")),
    contractDuration: Yup.string().required(t("validation.contractDuration")),
    jobTitle: Yup.string().required(t("validation.jobTitle")),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    alert(t("alert.success"));
    resetForm(); // Reset the form after submission
  };

  return (
    <>
      <HelmetInfo titlePage={"شروط الاستخدام"} />
      <div className="main-container flex xl:w-[1152px] flex-col gap-[55px] my-[164px] items-center flex-nowrap relative mx-auto px-5 xl:px-0">
        <div className="flex xl:w-[662px] flex-col gap-[64px] items-center shrink-0 flex-nowrap relative">
        <BreadCrumb name={t("breadcrumb.name")} />
        <div className="flex flex-col gap-[64px] items-start self-stretch shrink-0 flex-nowrap relative z-[6]">
            <div className="flex flex-col gap-[32px] items-center self-stretch shrink-0 flex-nowrap relative z-[7]">
              <span className="flex rtl:xl:w-[404px] rtl:xl:h-[58px] justify-end items-start shrink-0 basis-auto text-[32px] font-semibold leading-[58px] text-[#0e4a79] relative text-center  z-[7]">
              {t("form.title")}
              </span>
              <span className="xl:h-[32px] self-stretch shrink-0 basis-auto text-[16px] font-normal leading-[32px] text-[#667680] relative text-center  z-[8]">
              {t("form.subtitle")}

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
                    {t("fields.companyName")} *
                  </label>
                  <Field
                    name="companyName"
                    placeholder={t("fields.companyName")}
                    className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>

                        <div className="flex flex-col xl:flex-row w-full gap-[24px]">
                          <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                          <label className="text-[#667680] text-[14px] font-medium">
                {t("fields.companyActivity")}*
                          </label>
                          <Field
                            name="companyActivity"
                            placeholder={t("fields.companyActivity")}
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
                            {t("fields.contactPerson")}*
                          </label>
                          <Field
                            name="contactPerson"
                            placeholder={t("fields.contactPerson")}
                            className="w-full h-[56px] px-[16px] bg-[#f4f4f4] rounded-[999px] border-none outline-none"
                          />
                          <ErrorMessage
                            name="contactPerson"
                            component="div"
                            className="text-red-500 text-[12px]"
                          />
                          </div>
                        </div>


                <div className="flex flex-col xl:flex-row w-full gap-[24px]">
                  <div className="flex w-full xl:w-1/2 flex-col gap-[8px]">
                    <label className="text-[#667680] text-[14px] font-medium">
{t("fields.region")}*
                    </label>
                    <Field
                      name="region"
                      placeholder={t("fields.region")}
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
                      {t("fields.phone") }*
                    </label>
                    <Field
                      name="phone"
                      placeholder={t("fields.phone")}
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
                    {t("fields.email")}*                    </label>
                    <Field
                      name="email"
                      placeholder={t("fields.email")}
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
{t("fields.contractDuration")}
                    </label>
                    <Field
                      name="contractDuration"
                      placeholder={t("fields.contractDuration")}
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
{ t("fields.companyFile")}
                    </label>
                    <Field
                      name="companyFile"
                      placeholder={ t("fields.companyFile")}
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
{t("fields.commercialRegistration") }  
                  </label>
                    <Field
                      name="commercialRegistration"
                      placeholder={t("fields.commercialRegistration")}
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
                    {t("fields.jobTitle") }                    </label>
                    <Field
                      name="jobTitle"
                      placeholder={t("fields.jobTitle")}
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
{ t("fields.requiredProfession")}                    </label>
                    <Field
                      name="requiredProfession"
                      placeholder={t("fields.requiredProfession")}
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
{t("fields.workersCount")}                    </label>
                    <Field
                      name="workersCount"
                      placeholder={t("fields.workersCount")}
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
                  {t("form.submit")}
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
