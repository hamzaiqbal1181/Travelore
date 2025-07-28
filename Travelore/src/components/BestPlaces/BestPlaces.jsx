import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
// --- NEW: Import animation tools from Framer Motion ---
import { motion, AnimatePresence } from "framer-motion";
import Location from "../location/Location";

// --- Keep all your image imports ---
import ImgQilla from "../../assets/bestplaces/qilla.jpg";
import ImgMinar from "../../assets/bestplaces/minar.jpg";
import ImgMasjid from "../../assets/bestplaces/masjid.jpg";
import ImgKhan from "../../assets/bestplaces/khan.jpg";
import ImgStation from "../../assets/bestplaces/station.jpg";
import ImgDehli from "../../assets/bestplaces/dehli.jpg";
import ImgAnarkali from "../../assets/places/anarkali.jpg";
import ImgIchra from "../../assets/places/ichara.jpg";
import ImgGawal from "../../assets/places/gawal.jpg";
import ImgLakshmi from "../../assets/places/lakshmi.jpg";

// --- Your new, enhanced data array from Step 2 goes here ---
// ... (paste the updated array from above)
// Add a rating and description to each object
const topRatedPlaces = [
  {
    id: "bp1",
    img: ImgQilla,
    title: "Lahore Fort",
    location: "Lahore",
    // rating: 4.8,
    description:
      "The Lahore Fort is a giant storybook of red sandstone and white marble. Built over centuries, primarily by Mughal emperors, it's a breathtaking mix of powerful defensive walls and exquisite palaces. From Akbar’s imposing gates to Shah Jahan’s shimmering Sheesh Mahal (Palace of Mirrors), it showcases imperial power and artistry. The Lahore Fort is a giant storybook of red sandstone and white marble. Built over centuries, primarily by Mughal emperors, it's a breathtaking mix of powerful defensive walls and exquisite palaces.",
  },
  {
    id: "bp2",
    img: ImgMinar,
    title: "Minar-e-Pakistan",
    location: "Lahore",
    // rating: 4.7,
    description:
      "Minar-e-Pakistan, located in Lahore, commemorates the Lahore Resolution of 1940, when the demand for a separate nation for Muslims in India was made. This iconic tower, built in 1966, stands 70 meters tall and showcases a blend of Islamic and modern architectural styles. Surrounded by a beautiful park, Minar-e-Pakistan serves as a national symbol of pride and unity for Pakistanis, attracting countless visitors each year who come to admire its significance and beauty.",
  },
  {
    id: "bp3",
    img: ImgMasjid,
    title: "Badshahi Mosque",
    location: "Lahore",
    // rating: 4.9,
    description:
      "The Badshahi Mosque, built in 1673, is a grand Mughal masterpiece located in Lahore, Pakistan. It is renowned for its stunning red sandstone and intricate marble inlay, representing the zenith of Mughal architecture. With a capacity to accommodate over 55,000 worshippers, it's one of the largest mosques in the world and a symbol of religious and cultural heritage. The mosque features a beautiful courtyard, soaring minarets, and rich history, making it a must-visit landmark.",
  },
  // ... add rating and description to the other 3 places as well
  {
    id: "bp4",
    img: ImgKhan,
    title: "Wazir Khan Mosque",
    location: "Lahore",
    // rating: 4.8,
    description:
      "AOften called a mole on the cheek of Lahore, the Wazir Khan Mosque is a jewel box of vibrant color. Built in the 17th century during Emperor Shah Jahan's reign by his governor, Wazir Khan, it is a masterpiece of Mughal architecture. Its most unique feature is the breathtaking kashi-kari (faience tile work) that covers nearly every surface, inside and out. These intricate floral and calligraphic mosaics make it one of the most ornately decorated mosques in the world.",
  },
  {
    id: "bp5",
    img: ImgStation,
    title: "Railway Station",
    location: "Lahore",
    // rating: 4.5,
    description:
      "Lahore Railway Station, built in 1860, is a historical landmark showcasing stunning Indo-Saracenic architecture. This bustling hub connects travelers to various destinations across Pakistan. The station features a remarkable clock tower and vibrant platforms, reflecting the city’s cultural heritage. Its location near the heart of Lahore makes it accessible, attracting both locals and tourists. As one of the busiest railway stations, it plays a pivotal role in the transportation network of the region.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6660646360588!2d74.31284847442842!3d31.588204043789645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b622e82346f%3A0x35bdc71e324cb4ec!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1753000472161!5m2!1sen!2s",
  },
  {
    id: "bp6",
    img: ImgDehli,
    title: "Dehli Gate",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Delhi Gate in Lahore, a historical monument, dates back to the Mughal era. It served as a crucial entry point to the city, linking the Walled City with the main road. The gate features stunning Mughal architecture, with intricate carvings and large bastions, reflecting the era's grandeur. Today, it stands as a symbol of Lahore's rich history and cultural heritage, attracting numerous visitors who admire its beauty and significance.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6660646360588!2d74.31284847442842!3d31.588204043789645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b622e82346f%3A0x35bdc71e324cb4ec!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1753000472161!5m2!1sen!2s",
  },
  {
    id: "bp7",
    img: ImgAnarkali,
    title: "Anarkali Bazaar",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Anarkali Bazaar in Lahore has a rich history and is known for its vibrant culture. It offers a unique shopping experience with a variety of goods, from traditional clothing to exquisite handicrafts. This bustling market, named after the legendary Anarkali, provides a glimpse into the city's heritage. Visitors enjoy the lively atmosphere, delicious street food, and the chance to interact with local vendors. Anarkali Bazaar captures the essence of Lahore's charm and is a must-visit destination",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6660646360588!2d74.31284847442842!3d31.588204043789645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b622e82346f%3A0x35bdc71e324cb4ec!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1753000472161!5m2!1sen!2s",
  },
  {
    id: "bp8",
    img: ImgIchra,
    title: "Ichra Bazaar",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Ichhra Bazaar in Lahore has a rich history and is a vibrant marketplace known for its unique blend of traditional and contemporary items. Dating back to the Mughal era, the bazaar is famous for textiles, handicrafts, and street food that captures the essence of local culture. With its bustling atmosphere, Ichhra Bazaar attracts both locals and tourists, offering an immersive shopping experience that reflects Lahore's heritage.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6660646360588!2d74.31284847442842!3d31.588204043789645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b622e82346f%3A0x35bdc71e324cb4ec!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1753000472161!5m2!1sen!2s",
  },
  {
    id: "bp9",
    img: ImgLakshmi,
    title: "Lakshmi Chowk",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Lakshmi Chowk in Lahore is a vibrant historical marketplace known for its cultural significance and culinary delights. Established during British colonial rule, it has evolved into a lively hub for shopping and dining. The area is characterized by its unique blend of traditional and modern architecture, drawing both locals and tourists. Visitors can explore a variety of shops, food stalls, and eateries, making it a popular destination for authentic Pakistani cuisine and experience local culture.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6660646360588!2d74.31284847442842!3d31.588204043789645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b622e82346f%3A0x35bdc71e324cb4ec!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1753000472161!5m2!1sen!2s",
  },
  {
    id: "bp10",
    img: ImgGawal,
    title: "Gawalmandi Food Street",
    location: "Lahore",
    // rating: 4.6,
    description:
      "Lakshmi Chowk in Lahore is a vibrant historical marketplace known for its cultural significance and culinary delights. Established during British colonial rule, it has evolved into a lively hub for shopping and dining. The area is characterized by its unique blend of traditional and modern architecture, drawing both locals and tourists. Visitors can explore a variety of shops, food stalls, and eateries, making it a popular destination for authentic Pakistani cuisine and experience local culture.",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3398.6660646360588!2d74.31284847442842!3d31.588204043789645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b622e82346f%3A0x35bdc71e324cb4ec!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1753000472161!5m2!1sen!2s",
  },
];

const BestPlaces = () => {
  // --- NEW: State to track which place is currently active/featured ---
  const [activePlace, setActivePlace] = useState(topRatedPlaces[0]);

  return (
    <div className="bg-gray-100 text-black py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Top Rated Destinations
          </h2>
          <p className="text-gray-500 mt-2">
            Click on a place to see more details.
          </p>
        </div>

        {/* --- NEW: Main gallery layout --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Featured Display */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={activePlace.id} // The key tells Framer Motion to re-animate when it changes
                src={activePlace.img}
                alt={activePlace.title}
                className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-3xl font-bold">{activePlace.title}</h3>
              <div className="flex items-center gap-4 text-gray-600 mt-2">
                <div className="flex items-center gap-1">
                  <IoLocationSharp className="text-sky-600" />
                  <span>{activePlace.location}</span>
                </div>
                {/* <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span className="font-bold">{activePlace.rating}</span>
                </div> */}
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {activePlace.description}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Thumbnail List */}
          <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2">
            {topRatedPlaces.map((place) => (
              <motion.div
                key={place.id}
                onClick={() => setActivePlace(place)} // --- NEW: Click handler to change the active place ---
                className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 border-2
                  ${
                    activePlace.id === place.id
                      ? "bg-white shadow-lg border-sky-500" // Style for the active thumbnail
                      : "bg-gray-200 hover:bg-white border-transparent" // Style for inactive thumbnails
                  }`}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={place.img}
                  alt={place.title}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-bold text-lg">{place.title}</h4>
                  <p className="text-sm text-gray-600">{place.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <Location place={activePlace} />
        </div>
      </div>
    </div>
  );
};

export default BestPlaces;
