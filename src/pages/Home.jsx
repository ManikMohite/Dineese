import React, { useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../data/restaurants";

export default function Home() {
  const [q, setQ] = useState("");
  const [cuisine, setCuisine] = useState("All");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [sort, setSort] = useState("relevance");

  const filtered = useMemo(() => {
    let list = restaurants.filter((r) => {
      const inSearch =
        r.name.toLowerCase().includes(q.toLowerCase()) ||
        r.cuisine.join(" ").toLowerCase().includes(q.toLowerCase());
      const inCuisine = cuisine === "All" || r.cuisine.includes(cuisine);
      const availability = !onlyAvailable || r.availableNow;
      return inSearch && inCuisine && availability;
    });

    if (sort === "rating") list = list.slice().sort((a, b) => b.rating - a.rating);
    if (sort === "distance") list = list.slice().sort((a, b) => a.distanceKm - b.distanceKm);

    return list;
  }, [q, cuisine, onlyAvailable, sort]);

  return (
    <div className="space-y-8 bg-background min-h-screen pb-10">
      {/* Header */}
      <div className="text-center space-y-2 pt-6">
        <h1 className="text-4xl font-bold text-textDark tracking-tight">
          Find the Best Places to Eat 🍽️
        </h1>
        <p className="text-textLight">
          Search, filter & reserve your favourite dining spots instantly.
        </p>
      </div>

      {/* Search + Filters */}
      <div className="max-w-3xl mx-auto space-y-4 px-4">
        <SearchBar value={q} onChange={setQ} />
        <Filters
          cuisine={cuisine}
          setCuisine={setCuisine}
          onlyAvailable={onlyAvailable}
          setOnlyAvailable={setOnlyAvailable}
          sort={sort}
          setSort={setSort}
        />
      </div>

      {/* Restaurant Results */}
      <div className="max-w-6xl mx-auto px-4">
        {filtered.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center text-textLight shadow-card">
            No restaurants found 😕<br />Try another search or remove filters.
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r, i) => (
              <RestaurantCard key={r.id} r={r} i={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
