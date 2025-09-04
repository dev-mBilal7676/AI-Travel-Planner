import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">
      <h1 className="font-extrabold text-[50px] text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure with AI:
        </span>
        Personalized Itineraries at Your Fingertips
      </h1>
      <p className="text-[19px] text-gray-500 text-center">
        You personal trip planner and travel curator, create custom itinerarise
        tailored to your interest and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button className="text-gray-900 ">Get Started, it's Free</Button>
      </Link>
    </div>
  );
}

export default Hero;
