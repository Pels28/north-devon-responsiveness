"use client";
import React from "react";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { Image } from "@nextui-org/react";
import Button from "@/components/Button";

import Forms from "@/components/forms";

import AhodwoMapSearch from "../../../components/AhodwoMapSearch";
import useEmblaCarousel from "embla-carousel-react";
import styles from "../card.module.css";

const Vancancies = () => {
  const [value, setValue] = React.useState("fruit");
  const [emblaRef] = useEmblaCarousel({ dragFree: true });
  return (
    <>
     <div className="w-screen">
      <section className="h-[575px] overflow-hidden relative bg-[url('/images/portraitVacancy.jpg')] bg-no-repeat bg-center bg-cover">
        <p className="md:text-9xl text-7xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
          Vacancies
        </p>
      </section>

      {/* New section with the left text and image on the right */}
      <section className="flex justify-center items-center space-x-8 mt-8 px-32">
        {/* Text on the left */}
        <div className="flex-1">
          <Heading variant="h4">Are you based in the UK?</Heading>
          <p>
            Are you a Nurse or a Midwife who relocated to the UK on the
            occupational shortage list as a carer or a Senior career?.
          </p>
          <br />
          <p>
            NDR is introducing an ONLINE OET CLASS tailored around your needs.
            Tap on button to Register
          </p>
          <br />
          <Button rounded size="lg">
            {" "}
            Register{" "}
          </Button>
        </div>

        {/* Image with shadowed card on the right */}
        <div className={`flex-1 ${styles.card} mt-10`}>
          <Card
             className={`w-full md:w-[585.99px] h-[494px] ${styles.card} ${styles.innercard}`}
             bordered={false}
             padded={true}
          >
            <div className="relative md:w-full h-[400px] md:h-full overflow-hidden rounded">
                <Image
                isZoomed
                isBlurred
                src="/images/vancanciesbg.jpg"
                alt="Your Image Alt Text"
                layout="fill"
                objectFit="cover"
                className=" rounded object-cover w-full h-[400px] md:h-full"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Horizontal Scroll Cards */}
      <section
          id="horizontal-scroll"
          className="w-full pl-10 py-10 space-y-6 md:py-24 md:pl-32"
        >
          <Heading variant="h2">Our Vacancies Available</Heading>
          <br />
          <div
            className="embla w-full overflow-x-hidden p-4 pl-0"
            ref={emblaRef}
          >
          <div className="embla__container">
            <div className="embla__slide">
              {" "}
              <div className="flex-shrink-0 w-[370.3px]">
                <Card className="w-full h-[320px] bg-gray">
                  <div className="flex flex-col h-full justify-between">
                    <Heading variant="h4">
                      Banking & non-banking Professionals
                    </Heading>
                    <p>
                      The worlds leading financial services firm,  is
                      hiring banking & non-banking Professionals at various
                      levels. Those roles are oepn to all, including applicants
                      based outside the UK.
                    </p>
                    <div className="w-1/2">
                      <Button 
                      onClick={() =>
                        (window.location.href = "/appointment")
                      }
                      className="mt-5" rounded size="lg" fullWidth>
                        Apply
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="embla__slide">
              {" "}
              <div className="flex-shrink-0 w-[370.3px]">
                <Card className="w-full h-[320px] bg-gray">
                  <div className="flex flex-col h-full justify-between">
                    <Heading variant="h4">
                      Physician Assistant
                    </Heading>
                    <p>
                      For our Local Health care service in Ghana
                      <h5>REQUIREMENT</h5>
                      <ul className="bullet-list">
                        <li>CV</li>
                        <li>School Certificate</li>
                        <li>License with medical and Dental Council with your registration number</li>
                      </ul>
                    </p>
                    <div className="w-1/2">
                    <Button 
                      onClick={() =>
                        (window.location.href = "/appointment")
                      }
                      className="mt-5" rounded size="lg" fullWidth>
                        Apply
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            <div className="embla__slide">
              {" "}
              <div className="flex-shrink-0 w-[370.3px]">
                <Card className="w-full h-[320px] bg-gray">
                  <div className="flex flex-col h-full justify-between">
                    <Heading variant="h4">
                      Banking & non-banking Professionals
                    </Heading>
                    <p>
                      The worlds leading financial services firm, is
                      hiring banking & non-banking Professionals at various
                      levels. Those roles are oepn to all, including applicants
                      based outside the UK.
                    </p>
                    <div className="w-1/2">
                    <Button 
                      onClick={() =>
                        (window.location.href = "/appointment")
                      }
                      className="mt-5" rounded size="lg" fullWidth>
                        Apply
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            {/* <div className="embla__slide">
              <div className="flex-shrink-0 w-[370.3px]">
                <Card className="w-full h-[320px] bg-gray">
                  <div className="flex flex-col h-full justify-between">
                    <Heading variant="h3">Are you based in the UK?</Heading>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                    <div className="w-1/2">
                      <Button className="mt-5" rounded size="lg" fullWidth>
                        Button
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* forms */}
      <section className="w-screen flex flex-col items-start justify-start md:justify-center md:items-center space-x-4 mt-8 md:pb-16">
          <Card
            className="w-full md:h-[749px] bg-gray md:grid md:grid-cols-2 md:gap-8"
            bordered={false}
          >
            <div className="col-span-1 p-4 md:p-8">
              <Heading variant="h2">Our Standardized Test</Heading>
              <br />
              <p>
              We are into 5 standardized tests which are OET,GMAT,GRE,TOFEL and
              IELT. Our State of the Art Training Center offers the best
              Classroom and online tuition and learning experience which leads
              to excellence performance.
            </p>
            <br />

            <p>
              GRE (Graduate Record Examination) is a general test that is often
              required for admission to graduate programs (master&apos;s and
              doctoral degrees) in various disciplines. Individuals interested
              in pursuing graduate education, including business, humanities,
              social sciences, natural sciences, and engineering, commonly take
              the GRE.
            </p>
            <br />

            <p>
              GMAT (Graduate Management Admission) is specifically designed for
              individuals applying to graduate management programs, such as MBA.
              However, it is generally taken by individuals who aspire to pursue
              a graduate degree in business or management.
            </p>
            <br />
            <p>
              IELTS (International English Language Testing System) - Measures
              English language proficiency for non-native English speakers.
            </p>
            <br />
            <p>
              OET (Occupational English Test) - Assesses English language skills
              of healthcare professionals.
            </p>
            <br />
            <p>
              TOEFL (Test of English as a Foreign Language) - Another common
              test for English language proficiency, often required for
              admission to English-speaking universities.
            </p>
          </div>

          <div className="col-span-1 flex justify-center p-4 items-center">
              <Card className="w-full md:h-[500px] bg-white  md:p-10">
                <Heading variant="h4" className="mb-3">

                Fill forms to register for a standardized test
              </Heading>
              <Forms />
              <br />
              <Button rounded size="md" className="text-center mb-5">
                Proceed to payment
              </Button>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ marginRight: '10px' }}>Our Educational Partner</p>
                <Image src="/images/british-council.png" className="w-[200px] h-[100px]" />
              </div>

              
            </Card>
          </div>
        </Card>
      </section>

      <section className="flex justify-center items-center md:space-x-4 mt-8 md:px-32 pb-32">
      
        <AhodwoMapSearch className="hidden md:flex"/>

        {/* Two Vertical Cards on the right */}
        <div className="flex-shrink-0 space-y-5">
            <Card className=" h-[290px] w-[430px] bg-primary pt-10 px-14 flex flex-col items-start justify-start gap-10 text-white">
              <div>
              <Heading variant="h2" className="mb-3">
                Kumasi Training Center
              </Heading>
              <p>
                NorthDevon Training center,
                <br />
                Ahodwo Roundabout, 3rd floor,
                <br />
                Nyarko Plaza
              </p>
              <br />
            </div>

            <div className="mb-8 mt-0">
              <Heading variant="h3" className="mb-3">
                Work Hours
              </Heading>
              <p>Monday - Friday: 9:30am - 5:30pm</p>
            </div>
          </Card>

          {/* Vertical Card 2 */}

          <Image
            isZoomed
            isBlurred
            rounded="md"
            className="w-[430px] h-[239px]"
            src="/images/Training center.jpg"
            alt="Your Image Alt Text"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
      </div>
    </>
  );
};

export default Vancancies;
