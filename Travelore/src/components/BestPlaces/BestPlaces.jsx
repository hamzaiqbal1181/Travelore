import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import ImgQilla from "../../assets/bestplaces/qilla.jpg";
import ImgMinar from "../../assets/bestplaces/minar.jpg"; // Or whatever its name is
import ImgMasjid from "../../assets/bestplaces/masjid.jpg";
import ImgKhan from "../../assets/bestplaces/khan.jpg";
import ImgStation from "../../assets/bestplaces/station.jpg";
import ImgDehli from "../../assets/bestplaces/dehli.jpg";

// --- NEW DATA STRUCTURE ---
// We've added a "rating" to make this component's data unique.
// We are using ONLINE placeholder images for now. This is a crucial test.
const topRatedPlaces = [
  {
    id: "bp1",
    img: ImgQilla, // Use the variable here
    title: "Lahore Fort",
    location: "Lahore",
    type: "Historical",
  },
  {
    id: "bp2",
    img: ImgMinar, // Use the variable here
    title: "Minar-e-Pakistan",
    location: "Lahore",
    type: "Historical",
  },
  {
    id: "bp3",
    img: ImgMasjid, // Use the variable here
    title: "Badshahi Mosque",
    location: "Lahore",
    type: "Historical",
  },
  {
    id: "bp4",
    img: ImgKhan, // Use the variable here
    title: "Wazir Khan Mosque",
    location: "Lahore",
    type: "Historical",
  },
  {
    id: "bp5",
    img: ImgStation, // Use the variable here
    title: "Railway Station",
    location: "Lahore",
    type: "Historical",
  },
  {
    id: "bp6",
    img: ImgDehli, // Use the variable here
    title: "Dehli Gate",
    location: "Lahore",
    type: "Historical",
  },
];

const BestPlaces = () => {
  return (
    // --- NEW STYLE: Dark theme ---
    <div className="bg-gray-50 text-black py-16">
      <div className="container mx-auto px-4">
        {/* --- NEW STYLE: Centered Title --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Top Rated Destinations</h2>
          <p className="text-gray-400 mt-2">
            Handpicked selections of the most beloved places.
          </p>
        </div>

        {/* --- NEW STYLE: Cards with Hover Overlay --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topRatedPlaces.map((place) => (
            <div
              key={place.id}
              className="relative group overflow-hidden rounded-xl shadow-2xl"
            >
              <img
                src={place.img}
                alt={place.title}
                className="w-full h-96 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* This is the overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{place.title}</h3>
                  <div className="flex items-center text-gray-300 mb-2">
                    <IoLocationSharp className="mr-1" />
                    <p>{place.location}</p>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <FaStar className="mr-1" />
                    <p className="font-bold">{place.type}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestPlaces;
