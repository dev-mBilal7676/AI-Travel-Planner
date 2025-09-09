import React from "react";

function Hotels({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-xl mt-5">Hotel Recommendation</h2>
      <div>
        {trip?.tripData?.hotel?.map((item, index) => (
          <div>
            <img className="rounded-lg" src="\public\image\images.jpg" />
          </div>
        ))}
      </div>
    </div>
  );
}
export default Hotels;
