// src/components/Places/PlaceCategorySection.jsx

import React from "react";
import PlacesCard from "./PlacesCard";

const PlaceCategorySection = ({ title, places }) => {
  return (
    <section className="mt-8">
      {" "}
      {/* Add some margin-top for spacing between sections */}
      {/* Category Subheading - smaller and lighter than the main heading */}
      <h2 className="mb-8 text-2xl font-semibold border-b-6 border-sky-700 pb-2 w-fit">
        {title}
      </h2>
      {/* Grid for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-0">
        {places.map((item) => (
          <PlacesCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default PlaceCategorySection;
