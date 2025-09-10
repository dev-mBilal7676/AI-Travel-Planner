import { Button } from "@/components/ui/button";
import React from "react";
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  return (
    <div>
      <img
        className="h-full w-full object-cover rounded-xl"
        src="\public\image\pexels-nurseryart-346885.jpg"
      />
      <div className="flex justify-between items-center">
        <div className="my-5 flex flex-col gap-2">
          <h2 className="font-bold text-2xl">
            {trip?.userSelection?.location}
          </h2>
          <div className="flex gap-5">
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md ">
              📅 {trip?.userSelection?.noOfDays} Days
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md ">
              💰{trip?.userSelection?.budget} Budget
            </h2>
            <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-md ">
              🥂No. of Traveler : {trip?.userSelection?.traveler} People
            </h2>
          </div>
        </div>
        <Button className={"bg-gray-900 text-gray-900 border-gray-900"}>
          <IoIosSend />
        </Button>
      </div>
    </div>
  );
}
export default InfoSection;
