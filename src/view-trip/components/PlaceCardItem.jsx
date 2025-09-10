import React from "react";
import { Link } from "react-router-dom";

export default function PlaceCardItem({ item }) {
  return (
    <Link
      to={"https://www.google.com/maps/search/?api=1&query=" + item?.PlaceName} target="_blank"
    >
      <div className="border rounded-xl p-3 mt-2 flex hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src="\public\image\images.jpg"
          className="h-[130px] w-[130px] rounded-xl"
        />
        <div>
          <h2 className="font-bold text-lg ml-4">{item.PlaceName}</h2>
          <p className="text-sm ml-4 text-gray-400">{item["Place Detail"]}</p>
          <h2 className="mt-2 ml-4">🕙{item["Time Travel"]}</h2>
          <h2 className="mt-2 ml-4">🎟️{item["Ticket Price"]}</h2>
        </div>
      </div>
    </Link>
  );
}
