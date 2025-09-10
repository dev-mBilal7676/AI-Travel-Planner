import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlaceToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Places to Visit</h2>
      <div>
        {trip.tripData?.Itinerary.map((item, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-medium text-lg">{item.Day}</h2>

            <div className="grid grid-cols-2 gap-5">
              <div className="">
                <h2 className="font-medium text-sm text-orange-600">
                  {item.Time}
                </h2>
                <PlaceCardItem item={item} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default PlaceToVisit;
