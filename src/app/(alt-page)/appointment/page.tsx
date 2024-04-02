// AppointmentPage.js
import Card from '@/components/Card';
import AppointmentForm from '@/components/AppointmentForm';
import { Button } from '@nextui-org/react';
import React from 'react';


function appointmentPage() {
  return (
    <>
      <section>
        <Card
          className="w-full h-[960px] bg-gray"
          bordered={false}>

          <AppointmentForm />
          <div className ="flex justify-center  items-center">
             <Button
          type="submit"
          size="lg"
          className="px-28 mt-8 mb-8"
          rounded
          color="primary"
        >
          Submit
        </Button>

          </div>
         

        </Card>
       
      </section></>

  );
}

export default appointmentPage;
