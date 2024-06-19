import React from "react";
import { Card } from "@/components/ui/card";
import { CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppointmentCardProps {
  className?: string;
  name: string;
  title: string;
  summary: string;
  date: string;
  time: string;
}

const AppointmentCard = ({
  className,
  name,
  title,
  summary,
  date,
  time,
}: AppointmentCardProps) => {
  return (
    <Card className={`max-w-sm rounded overflow-hidden p-4 mb-4 ${className}`}>
      <div className="flex items-center mb-4">
        <img
          className="w-12 h-12 rounded-full"
          src={`https://api.dicebear.com/7.x/big-smile/svg?seed=${name}`}
          alt={`Profile picture of ${name}`}
        />
        <div className="ml-4">
          <div className="font-bold text-xl">{name}</div>
          <div className="text-gray-600 text-sm">{title}</div>
        </div>
      </div>
      <div className="flex items-center text-gray-600 text-sm mb-2">
        <CalendarIcon className="w-4 h-4 mr-1" />
        {date}
      </div>
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <Clock className="w-4 h-4 mr-1" />
        {time}
      </div>
      <p className="text-gray-700 text-base mb-4">{summary}</p>

      <Button className="w-full">View details</Button>
    </Card>
  );
};

export default AppointmentCard;
