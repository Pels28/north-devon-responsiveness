"use client";


import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { CircularProgress, Image } from "@nextui-org/react";
import Button from "@/components/Button/index";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Input from "@/components/forms/Input";
import PhoneInput from "@/components/forms/PhoneInput/index";
import DateInput from "@/components/forms/DateInput";
import Select from "@/components/forms/Select";
import { Formik } from "formik";
import * as Yup from "yup";
import HoverVideoPlayer from "react-hover-video-player";
import { useEffect, useRef, useState } from "react";
// import Chatbot from "@/components/Chatbot";
import styles from "./card.module.css";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";


const Home = () => {

    const emblaRef = useRef(null);
    const [viewportRef, embla] = useEmblaCarousel({
      loop: true, // Enable looping
    });
  
    useEffect(() => {
      if (embla) {
        const timer = setInterval(() => {
          // Scroll to the next slide with smooth transition
          embla.scrollNext();
        }, 1000); // Adjust the time interval as needed
        return () => clearInterval(timer);
      }
    }, [embla]);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="w-screen">
    
      <>
        <section className={`h-[627px] overflow-hidden relative bg-[url('/images/portrait-nurse.jpg')] bg-no-repeat bg-center bg-auto md:bg-cover opacity-90 w-[100vw] `}>
         </section>
        <div className="sm:w-[94%] text-xs sm:text-[14px] w-[600px] mx-2  sm:mx-auto my-8 sm:px-10">
          <div className="flex items-center justify-start sm:justify-center px-6 mx-auto">
            <div className="sm:flex-grow hidden sm:flex border-b border-secondary"></div>
            <div className="px-4 sm:mx-auto mx-2">
              Companies we have guided and supported our clients in
            </div>
            <div className="sm:flex-grow hidden sm:flex   border-b border-secondary"></div>
          </div>
          <div
            className="embla w-full overflow-x-hidden p-4 pl-0 "
            ref={emblaRef}
          >
            <div className="embla__viewport" ref={viewportRef}>
              <div className="embla__container">
              {[...Array(3)].map((_, index) => (
                 <React.Fragment key={index}>
                   <div className="embla__slide">
                <Image src="/images/amazon.jpg" alt="amazon" className="w-[130px] h-[80px]" />
              </div>
              <div className="embla__slide">
                <Image
                  src="/images/barclays.jpg"
                  alt="barclays"
                  className="w-[130px] h-[80px]"
                />
              </div>
              <div className="embla__slide">
                <Image alt="meta" src="/images/meta.jpg" className="w-[130px] h-[80px]" />
              </div>
              <div className="embla__slide">
                <Image alt="netflix" src="/images/netflix-logo.png" className="w-[120px] h-[100px]" />
              </div>
              <div className="embla__slide">
                <Image alt="jpm" src="/images/jpm.jpg" className="w-[130px] h-[80px]" />
              </div>
              <div className="embla__slide">
                <Image alt="d/o.e" src="/images/doe.jpg" className="w-[300px] h-[100px]" />
              </div>
              </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        </div>

        <div className="bg-gray w-full h-[900px]  p-8 flex flex-col md:flex-row items-start md:items-center justify-start gap-8">
         
          <Card
            shadow
            rounded
            padded={false}
            className="p-4 w-full flex justify-start md:w-7/12  md:flex md:flex-row md:items-start md:justify-start gap-4 cursor-pointer"
            >
              <div className="w-full relative md:w-1/2 h-full md:h-1/2 px-4 pb-2 flex flex-col  md:items-center md:justify-center  gap-2">
                <Image
                  isBurred
                  isZoomed
                  src="/images/family.jpg"
                  alt="family"
                  className="p-0 m-0 object-cover rounded-3xl object-center "
                  sizes="100vw"
                />
                <Image
                  isBurred
                  isZoomed
                  src="/images/teachers.jpg"
                  alt="teachers"
                  className="hidden md:flex"
                />
              </div>
              <div className="hidden md:flex w-1/2 flex-col h-full p-0">
                <Image
                  isBurred
                  isZoomed
                  src="/images/old.jpg"
                  className="w-full h-[400px]"
                  alt="old"
                />
  
                <Image
                  src="/images/plane-path.png"
                  alt="plane"
                  className="mt-[-80px] p-0 w-[400px] h-[300px]"
                />
              {/* <TbPlaneTilt fill="#E9722B" color="#E9722B" className="mt-7 h-10 w-10 flex justify-center"/> */}
            </div>
          </Card>
          <div className="w-full md:w-1/2 h-[550px] flex flex-col items-start justify-start gap-4">
            <p className="font-semibold">About Us</p>
            <Heading variant="h3">What is Our Mission?</Heading>
            <p className="text-secondary-gray text-sm">
              Our mission is to empower individuals worldwide by facilitating
              access to exceptional educational opportunities, career pathways,
              and healthcare services. Our commitment extends to guiding
              aspiring students towards their academic goals,...
            </p>
            <p className="text-secondary-gray text-sm mt-4">
              Our vision is to be the premier global recruitment agency,
              renowned for our commitment to excellence in study abroad
              programs, international and local recruitment, healthcare
              staffing, and standardized test preparation. We aspire to be the
              catalysts of transformational journeys,...
            </p>

            <Button size="lg" className="px-8 mt-5" rounded>
              Read more
            </Button>
          </div>
        </div>
      
        <div className="w-full overflow-hidden p-8 md:flex md:flex-row md:items-center md:justify-start gap-8 mb-0">
          <div className="w-full md:w-5/12 pl-8 h-[450px] flex flex-col items-start justify-start gap-4">
            <p className="font-semibold">Our Services</p>
            <Heading variant="h3">How we work</Heading>
            <p className="text-secondary-gray text-sm">
              We match the right candidates with the right job opportunities,
              providing value to both clients and candidates throughout the
              recruitment process.
            </p>

            <div className="flex flex-row items-center justify-start gap-3">
              <IoMdCheckmarkCircleOutline
                fill="#E9722B"
                color="#E9722B"
                className="w-8 h-8"
              />
              <p className="font-semibold">600 Offers</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <IoMdCheckmarkCircleOutline
                fill="#E9722B"
                color="#E9722B"
                className="w-8 h-8"
              />
              <p className="font-semibold">2+ Years Experience</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <IoMdCheckmarkCircleOutline
                fill="#E9722B"
                color="#E9722B"
                className="w-8 h-8"
              />
              <p className="font-semibold">10+ Team Members</p>
            </div>
            <div className="flex flex-row items-center justify-start gap-3">
              <IoMdCheckmarkCircleOutline
                fill="#E9722B"
                color="#E9722B"
                className="w-8 h-8"
              />
              <p className="font-semibold">700+ Satisfied Customers</p>
            </div>

            <Button size="lg" className="px-8" rounded>
              Get in touch
            </Button>
          </div>
          <Card
            shadow={false}
            rounded
            padded={false}
            className={`p-4 mt-8 md:mb-8 w-full h-[500px] ${styles.card} flex flex-col  md:items-center md:justify-start justify-center gap-4 cursor-pointer`}
          >
            <div className={` h-full p-0 ${styles.card} ${styles.innercard}`}>
              <Image
                isZoomed
                alt="teachers"
                src="/images/teaching.jpg"
                className={`w-[550px]`}
              />
              {/* <TbPlaneTilt fill="#E9722B" color="#E9722B" className="mt-7 h-10 w-10 flex justify-center"/> */}
            </div>
            <div
              className={`w-[470px] ${styles.innercard}  mt-[-80px] h-full p-0 pb-2 hidden md:flex flex-row items-start justify-start gap-2 z-10`}
            >
              <Image
                isZoomed
                src="/images/industry.jpeg"
                className={`w-[500px] h-[150px]`}
                alt="industry"
              />
              <Image
                isZoomed
                src="/images/class.jpg"
                alt="class"
                className={`w-[500px] h-[150px]`}
              />
            </div>
          </Card>
        </div>
       
        <div className="w-full flex flex-row gap-0 mb-4">
          <div className="w-full bg-gray md:w-3/4 md:h-[600px] overflow-hidden md:pl-10 py-6 flex flex-col items-center my-auto justify-center gap-8 md:bg-[url('/images/sunset.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="w-full flex flex-col items-start justify-start md:flex-row md:items-center md:justify-between mt-20 gap-4">
              <p className="relative md:w-5/12 text-secondary md:text-white text-left md:text-2xl pl-10">
                The Services we provide include the following:
              </p>
              <div className="flex w-[100%] px-4 mx-auto flex-row items-start md:items-center justify-start gap-4 md:absolute left-[480px] z-10">
                <Card
                  shadow={false}
                  padded={false}
                  className="bg-white text-black p-4 h-[200px] w-[220px] flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <p className="w-1/2">International Recruitment </p>
                </Card>
                <Card
                  shadow={false}
                  padded={false}
                  className="bg-white text-black p-4 h-[200px] w-[220px] flex items-center justify-center shadow-lg hover:shadow-xl"
                >
                  <p className="w-1/2"> ND Healthcare</p>
                </Card>
              </div>
            </div>
            <div className="w-full grid grid-cols-2  md:flex md:flex-row px-4 md:items-start md:justify-start gap-2 md:gap-5 md:pt-16 md:px-0 md:pl-10">
              <Card
                shadow={false}
                padded={false}
                className="md:bg-white shadow-lg hover:shadow-xl bg-secondary text-white md:text-secondary p-4 h-[200px] w-[220px] flex items-center justify-center hover:shadow-lg"
              >
                <p className="md:w-1/2">Local Recruitment</p>
              </Card>
              <Card
                shadow={false}
                padded={false}
                className="bg-white md:text-secondary  p-4 h-[200px] w- [220px] flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <p className="md:w-1/2">Study Abroad</p>
              </Card>
              <Card
                shadow={false}
                padded={false}
                className="bg-primary  p-4 h-[200px] hidden md:flex items-center justify-center"
              >
                <p className="md:w-1/2 text-white">
                  Standardized test (OET, GMAT, GRE, TOFEL, IELT)
                </p>
              </Card>
            </div>
            <Card
              shadow={false}
              padded={false}
              className="md:bg-primary bg-gray  p-4 h-[200px] flex md:hidden items-center justify-center shadow-lg hover:shadow-xl"
            >
              <p className="md:w-1/2 md:text-white text-secondary">
                Standardized test (OET, GMAT, GRE, TOFEL, IELT)
              </p>
            </Card>
          </div>
          <div className="hidden md:flex w-2/5 h-[500px] my-auto z-0">
            <Image
              src="/images/plane.jpeg"
              className="h-[500px] rounded-none"
              alt="plane"
            />
          </div>
        </div>
        <div className="mt-5 w-screen h-[800px] p-8 flex flex-row items-center justify-start gap-8">
          <Card
            shadow
            rounded
            padded={false}
            className="md:pl-12 pt-0 mt-0 md:w-7/12 w-full  flex flex-col items-start justify-start gap-4 cursor-pointer"
          >
            <Heading variant="h3" className="text-left w-screen">
              Vacancies and Events
            </Heading>

            <Image
              isBurred
              isZoomed
              src="/images/book.jpg"
              className="h-[420px] w-[100vw]"
              alt="books"
            />
            <div className="flex flex-col items-start justify-start gap-4 mx-8 mt-4">
              <Heading variant="h6">Lorem ipsum dolor sit amet</Heading>
              <p className="text-secondary-gray text-sm">
              NDR is introducing an online OET class tailored around your needs{" "}
              </p>
              <Button size="lg" className="px-8" rounded>
                Read more
              </Button>
            </div>
          </Card>
          <div className="w-4/12  h-[600px] hidden md:flex flex-col items-start justify-between pt-8 ">
            <Card
              shadow
              padded
              className="flex flex-col items-start justify-start gap-5"
            >
              <Heading variant="h6">News Update</Heading>
              <p className="text-secondary-gray text-sm">
              Primary school teachers and secondary teachers with a 
                recent teaching experience{" "}
              </p>
              <Button size="lg" className="px-8" rounded>
                Read more
              </Button>
            </Card>
            <Card
              shadow
              padded
              className="flex flex-col items-start justify-start gap-5"
            >
              <Heading variant="h6">News Update</Heading>
              <p className="text-secondary-gray text-sm">
              A school in UK is recruiting Geography teacher.
                Deadline 25/03/2024{" "}
              </p>
              <Button size="lg" className="px-8" rounded>
                Read more
              </Button>
            </Card>
          </div>
        </div>

        <div className="mx-auto md:w-2/3 w-[85%]">
          {/* <Video  autoPlay={false} accentColor="#E9722B" src={northVideo}/> */}
          <HoverVideoPlayer
            videoSrc="/north-video.mp4"
            preload="metadata"
            controls
            // Disable both the download and fullscreen buttons
            controlsList="nodownload nofullscreen"
            className="w-full mx-auto h-full hover: scale-110"
            pausedOverlay={
              <div className="w-full h-full bg-secondary opacity-50 flex flex-col items-center justify-center gap-4"></div>
            }
            loadingOverlay={
              <div className="w-full h-full bg-secondary opacity-50 flex flex-col items-center justify-center gap-4">
                <CircularProgress className="w-14 h-14" />
              </div>
            }
          />
        </div>

        <div className="bg-gray w-full h-[650px] p-2 md:p-10 flex justify-center mt-4">
          <Card
            shadow
            rounded
            padded={false}
            className="p-10 m-6 full h-[500px] flex flex-row items-center justify-start gap-12 cursor-pointer"
          >
            <Card className="bg-primary w-1/2 text-white h-full pt-8 hidden md:flex flex-col items-center justify-center gap-5">
              <p className="w-3/4">
              Subscribe to our newsletter for product updates and be the first to know about our specials and promotions
              
              </p>
              <Input
                className="bg-white rounded-full w-3/4"
                rounded
                size="lg"
                append={
                  <Button className="px-8" rounded size="lg" variant="solid">
                    Join
                  </Button>
                }
                placeholder="Enter email here..."
              />
             
            </Card>
            <div className="md:w-1/2 w-full h-[420px] flex flex-col items-start justify-start gap-4 p-0">
              <Heading variant="h3" className="text-secondary p-0 m-0 text-lg md:text-2xl">
                Fill forms to book appointment
              </Heading>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  phone: "", // can be phone or email
                  date: null,
                  time: null,
                  office: "",
                }}
                validateOnBlur
                validateOnChange={false}
                validationSchema={Yup.object({
                  name: Yup.string().trim().required("Name required"),
                  date: Yup.date().required("Pick date"),
                  time: Yup.date().required("Pick time"),
                  email: Yup.string()
                    .trim()
                    .email("Invalid email address")
                    .required("Email address required"),
                  phone: Yup.string().required("Pnone number required"),
                  office: Yup.string().required("Select office"),
                })}
                onSubmit={async (values) => {
                  console.log(values);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  setFieldValue,
                  setFieldError,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <Input
                      required
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      variant="underlined"
                      label="Enter name"
                      error={touched.name ? errors.name : undefined}
                    />
                    <div className="w-full flex flex-row items-start gap-4">
                      <Input
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email ? errors.email : undefined}
                        required
                        label="Enter email"
                        variant="underlined"
                      />
                      <PhoneInput
                        variant="underlined"
                        autoFocus={false}
                        placeholder="Phone Number"
                        name="phone"
                        value={values.phone}
                        onChange={(v) => {
                          setFieldValue("phone", v);
                        }}
                        onBlur={handleBlur}
                        error={touched.phone ? errors.phone : undefined}
                      />

                      {/* <Input
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.phone ? errors.phone : undefined}
                      required
                      label="Phone"
                      variant="underlined"
                    /> */}
                    </div>
                    <div className="w-full flex flex-row items-start gap-4">
                      <DateInput
                        name="date"
                        value={values.date ?? null}
                        required
                        className="border-b-1"
                        label="Pick Date and Time"
                        variant="datetime"
                        onChange={(val) => {
                          setFieldValue("date", val);
                        }}
                        onBlur={handleBlur}
                        error={touched.date ? errors.date : undefined}
                        rangeVariant="start"
                      />
                      <DateInput
                        name="time"
                        value={values.time ?? null}
                        required
                        className="border-b-1"
                        label="Pick Time"
                        variant="timeOnly"
                        onChange={(val) => {
                          setFieldValue("time", val);
                        }}
                        onBlur={handleBlur}
                        error={touched.time ? errors.time : undefined}
                        rangeVariant="start"
                      />
                    </div>
                    <Select
                      // required
                      name="office"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      variant="underlined"
                      label="Select our office"
                      options={[{ id: "1", label: "SpringFiels" }]}
                    />
                    <Button
                      fullWidth
                      type="submit"
                      size="lg"
                      className="px-8 mt-4"
                      rounded
                    >
                      Submit
                    </Button>
                  </form>
                )}
              </Formik>
            </div>
          </Card>
        </div>
        {/* <MapSearch /> */}
        {/* <Chatbot /> */}
      </>
    </div>
  );
};

export default Home;
