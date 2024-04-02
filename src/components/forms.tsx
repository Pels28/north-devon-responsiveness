import React, { useState } from "react";
import Input from "./forms/Input";
import { useRef } from "react";
import Select from "./forms/Select";
import emailjs from '@emailjs/browser';

const Forms = () => {
  const formRef = useRef(null);


  const [location, setLocation] = useState("");
  const [testType, setTestType] = useState("");
  const [tuitionType, setTuitionType] = useState("");
  const [amount, setAmount] = useState("");

  const handleLocationChange = (event: string) => {
    setLocation(event);
    console.log(event);
    calculateAmount(event, testType, tuitionType);
  };

  const handleTestTypeChange = (event: string) => {
    setTestType(event);
    console.log(event);
    calculateAmount(location, event, tuitionType);
  };

  const handleTuitionTypeChange = (event: string) => {
    setTuitionType(event);
    calculateAmount(location, testType, event);
  };

  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (formRef.current) {
      console.log('Form ref:', formRef.current);

      emailjs
        .sendForm('service_19tqhbc', 'template_a356uy4', formRef.current, {
          publicKey: 'kEyzLMiuBxbWQOY2S',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setLocation('');
            setTestType('');
            setTuitionType('');
            setAmount('');
            //formRef.current.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };
  

  const calculateAmount = (
    selectedLocation: React.SetStateAction<string>,
    selectedTestType: React.SetStateAction<string>,
    selectedTuitionType: React.SetStateAction<string>
  ) => {
    let calculatedAmount = 0;

    if (
      (selectedLocation === "Ghana" || selectedLocation === "Abroad") &&
      (selectedTestType === "GMAT" ||
        selectedTestType === "GRE" ||
        selectedTestType === "TOFEL" ||
        selectedTestType === "IELT")
    ) {
      switch (selectedTuitionType) {
        case "OnlineP":
          calculatedAmount = 1300;
          break;
        case "OnlineN":
          calculatedAmount = 600;
          break;
        case "ClassP":
          calculatedAmount = 1600;
          break;
        case "ClassN":
          calculatedAmount = 800;
          break;
        default:
          calculatedAmount = 0;
      }
    } else if (selectedLocation === "Abroad" && selectedTestType === "OET") {
      switch (selectedTuitionType) {
        case "OnlineP":
        case "ClassP":
          calculatedAmount = 250;
          break;
        case "OnlineN":
        case "ClassN":
          calculatedAmount = 170;
          break;
        default:
          calculatedAmount = 0;
      }
    }

    setAmount(
      selectedLocation === "Abroad" && calculatedAmount !== 0
        ? `£ ${calculatedAmount}`
        : `GH₵ ${calculatedAmount}`
    );
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <>
        <section className="grid grid-cols-2 gap-4">
          <Input label="Name" type="text" name="user_name" required />


          <Input label="Email" type="email" name="user_email" required />
        </section>

        {/* Add some space between the sections */}
        <div className="mb-[20px]"></div>

        <section className="grid grid-cols-2 gap-4">
          <Input label="Contact" type="tel" name="user_contact" required />


          <Select
            onValueChange={(val) => {
              if (Array.isArray(val)) {
                // val is an array, handle the case where it's an array
                if (val.length > 0 && val[0]?.id === "gh") {
                  handleLocationChange("Ghana");
                }
              } else {
                // val is not an array, handle the case where it's a single object
                if (val?.id === "gh") {
                  handleLocationChange("Ghana");
                }
              }
            }}
            // onChange={handleLocationChange}
            name="location"
            label="Select Location"
            options={[
              { id: "gh", label: "Ghana", value: "Ghana" },
              { id: "intl", label: "Abroad", value: "Abroad" },
            ]}
          />

          <Select
            onChange={(e) => {
              handleTestTypeChange(e?.target.value ?? "");
            }}
            name="test_type"
            label="Select test type"
            options={[
              { id: "OET", label: "OET", value: "OET" },
              { id: "GMAT", label: "GMAT", value: "GMAT" },
              { id: "GRE", label: "GRE", value: "GRE" },
              { id: "TOFEL", label: "TOFEL", value: "TOFEL" },
              { id: "IELT", label: "IELT", value: "IELT" },
            ]}
          />

          <Select
            onChange={(e) => {
              handleTuitionTypeChange(e?.target.value ?? "");
            }}
            name="tuition_type"
            label="Type of tuition"
            options={[
              {
                id: "OnlineP",
                label: "Online - Prestige (3 weeks)",
                value: "OnlineP",
              },
              {
                id: "OnlineN",
                label: "Online - Normal (2 months)",
                value: "OnlineN",
              },
              {
                id: "ClassP",
                label: "Class - Prestige (3 weeks)",
                value: "ClassP",
              },
              {
                id: "ClassN",
                label: "Class - Normal (2 months)",
                value: "ClassN",
              },
            ]}
          />
          <div>
            <Input
              placeholder="Amount to be paid"
              type="text"
              name="Amount"
              value={amount}
              readonly
              size="lg"
            />
          </div>
        </section>
      </>
    </form>
  );
};

export default Forms;
