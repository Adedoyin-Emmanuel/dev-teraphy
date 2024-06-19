"use client";
import React from "react";
import Text from "../components/text";
import AppointmentCard from "@/app/components/appointment-card";

const Appointments = () => {
  return (
    <div className="w-full my-2">
      <h1 className="text-[20px] font-extrabold text-capitalize">
        Your appointments
      </h1>
      <Text>Pending appointments</Text>

      <section className="my-5 grid lg:grid-cols-3">
        <AppointmentCard
          title="Test appointment"
          name="Adedoyin Emmanuel"
          date="09/14/2005"
          time="12:00Pm"
          summary="I just want an appointment please"
        />

        <AppointmentCard
          title="Test appointment"
          name="Adedoyin Emmysoft"
          date="09/14/2005"
          time="12:00Pm"
          summary="I just want an appointment please"
        />

        <AppointmentCard
          title="Test appointment"
          name="Adedoyin Adeniyi"
          date="09/14/2005"
          time="12:00Pm"
          summary="I just want an appointment please"
        />
      </section>
    </div>
  );
};

export default Appointments;
