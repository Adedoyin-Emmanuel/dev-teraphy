"use client";
import React from "react";
import Text from "../components/text";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarIcon, Clock } from "lucide-react";

const Appointments = () => {
  return (
    <div className="w-full my-2">
      <h1 className="text-[20px] font-extrabold text-capitalize">
        Your appointments
      </h1>
      <Text>Pending appointments</Text>

      <section className="appointments my-4">
        <Card className="max-w-sm rounded overflow-hidden p-4 mb-4">
          <div className="flex items-center mb-4">
            <img
              className="w-12 h-12 rounded-full"
              src={"https://api.dicebear.com/7.x/big-smile/svg?seed=emmysoft"}
              alt={`Profile picture of Emma`}
            />
            <div className="ml-4">
              <div className="font-bold text-xl">Adedoyin Emmanuel</div>
              <div className="text-gray-600 text-sm">Test appointment</div>
            </div>
          </div>
          <div className="flex items-center text-gray-600 text-sm mb-2">
            <CalendarIcon className="w-4 h-4 mr-1" />
            2024/06/14
          </div>
          <div className="flex items-center text-gray-600 text-sm mb-4">
            <Clock className="w-4 h-4 mr-1" />
            12.00OPm
          </div>
          <p className="text-gray-700 text-base mb-4">
            This a test appointment
          </p>

          <Button className="w-full">
            View details
          </Button>
        </Card>
      </section>
    </div>
  );
};

export default Appointments;
