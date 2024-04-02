"use client";
import React, { useRef, useState } from "react";
import Heading from './Heading';
import Input from "./forms/Input";
import Card from './Card';
import { Button} from '@nextui-org/react';
import { Formik } from 'formik';
import * as Yup from "yup";
import DocumentUpload from './DocumentUpload';
import Select from "./forms/Select";
import PhoneInput from "@/components/forms/PhoneInput/index";
import DateInput from "@/components/forms/DateInput";
 
const AppointmentForm = () => {
  const handleGenderTypeChange = (event: string) => {
    setGenderType(event);
    
  };
  return (
    
      <>
       <Heading variant="h2"> Appointment Form </Heading>
       <br/>
      <section className="px-8 pt-8">
      <div>
        <Heading variant="h4">
          Personal Information
        </Heading>
        <hr className="border-b-2 border-black-200 my-4" />
      </div>
    </section>
    <div className="flex justify-center items-center"> {/* Centering only the card */}
        <Card className="flex flex-col gap-4 w-[1300px] bg-white px-8 pb-8">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              date: null,
              time: null,
              gender: "",
            }}
            enableReinitialize
            validateOnBlur
            validateOnChange={false}
            validationSchema={Yup.object({
              name: Yup.string().trim().required("Name required"),
              date: Yup.date().required("Pick date"),
              email: Yup.string()
                .trim()
                .email("Invalid email address")
                .required("Email address required"),
              phone: Yup.string().required("Phone number required"),
              gender: Yup.string().required("Select gender"),
            })}
            onSubmit={async (values) => {
              console.log(values);
            } }
          >
            {({
              values, errors, touched, handleChange, 
              handleBlur, setFieldValue, 
              setFieldError, handleSubmit,
            }) => (
              <form onSubmit={handleSubmit}>
                <div className="w-full flex flex-row items-start gap-4">
                  <Input
                    required
                    name="name"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Enter name"
                    variant="outlined"
                    error={touched.name ? errors.name : undefined} />
                  <Input
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email ? errors.email : undefined}
                    required
                    label="Enter email" 
                    variant="outlined"
                    />
                    <Input
                    required
                    name="job"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Job Description applying for"
                    variant="outlined"
                    error={touched.name ? errors.name : undefined} />
                    
                </div>
                <br/>
                <div className="w-full flex flex-row items-start gap-4">
                  <DateInput
                    name="date"
                    value={values.date ?? null}
                    required
                    readonly
                    className="border-b-1"
                    label="Date of birth"
                    variant="datetime"
                    onChange={(val) => {
                      setFieldValue("date", val);
                    } }
                    onBlur={handleBlur}
                    error={touched.date ? errors.date : undefined}
                    rangeVariant="start" />

                  <Select
                    required
                    name="Gender"
                    onChange={(e) => {
                      handleGenderTypeChange(e?.target.value ?? "");
                    }}
                    options={[
                      {
                        id: "Boy",
                        label: "Male",
                        value: "Boy",
                      },
                      {
                        id: "Girl",
                        label: "Female",
                        value: "Girl",
                      },
                    ]}
                
                    label="Select Gender"
 />
                </div>
                <br/>
                <div className="w-full flex flex-row items-start gap-4">
                  <PhoneInput
                    variant="underlined"
                    placeholder="Phone Number"
                    name="phone"
                    value={values.phone}
                    onChange={(v) => {
                      setFieldValue("phone", v);
                    } }
                    onBlur={handleBlur}
                    error={touched.phone ? errors.phone : undefined} />
                  <Input
                    required
                    name="Address"
                    value={values.name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    label="Residential Address"
                    error={touched.name ? errors.name : undefined} />
                </div>
              <br/>
              </form>
            )}
          </Formik>
        </Card>
      </div>

      <section className="px-8 pt-8">
      <div>
        <Heading variant="h4">
          Upload Documents
        </Heading>
        <hr className="border-b-2 border-black-200 my-4" />
      </div>
    </section>

    {/* codes for uploading items */}
    <div className="flex justify-center items-center">
        <Card className="flex flex-col gap-4 w-[1300px] bg-white px-8 pb-8">
        <DocumentUpload />
          </Card>
          </div>
   


      </>
      
   
  );
}

export default AppointmentForm;
function setGenderType(event: string) {
  throw new Error("Function not implemented.");
}

