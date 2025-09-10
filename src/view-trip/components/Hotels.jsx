import React from "react";
import { Link } from "react-router-dom";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-5">
        {trip?.tripData?.HotelOptions?.map((hotel, index) => (
          <Link
            to={
              "https://www.google.com/maps/search/?api=1&query=" +
              hotel?.HotelName +
              "," +
              hotel?.address
            }
            target="_blank"
          >
            <div
              key={index}
              className="hover:scale-105 transition-all cursor-pointer"
            >
              <img className="rounded-xl" src="\public\image\images.jpg" />
              <div className="my-2 flex flex-col gap-2">
                <h2 className="font-medium">{hotel?.HotelName}</h2>
                <h2 className="text-xs text-gray-500">📍{hotel?.address}</h2>
                <h2 className="text-sm">💰{hotel?.Price}</h2>
                <h2 className="text-sm">⭐ {hotel?.rating} stars</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Hotels;
