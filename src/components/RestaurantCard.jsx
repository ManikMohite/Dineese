import React from "react";
import { Link } from "react-router-dom";

export default function RestaurantCard({ r }) {
  return (
    <Link
      to={`/restaurant/${r.id}`}
      className="rounded-xl overflow-hidden bg-surface shadow-card hover:shadow-cardHover transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="relative h-48 w-full">
        <img
          src={r.photos[0]}
          alt={r.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white/90 text-red-500 text-sm px-2 py-1 rounded-md font-semibold">
          ★ {r.rating}
        </div>
      </div>

      <div className="p-4 space-y-1">
        <h3 className="font-semibold text-lg text-textDark">{r.name}</h3>
        <p className="text-sm text-textLight">
          {r.cuisine.join(" • ")} • {r.price} • {r.distanceKm} km
        </p>

        {r.availableNow ? (
          <span className="inline-block text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
            ✅ Available Now
          </span>
        ) : (
          <span className="inline-block text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
            ⏱ Wait {r.waitMins} min
          </span>
        )}
      </div>
    </Link>
  );
}
