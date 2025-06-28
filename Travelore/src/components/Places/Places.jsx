// src/components/Places/Places.jsx

import React from "react";
// NEW: Import the new section component
import PlaceCategorySection from "./PlaceCategorySection";

// --- ALL YOUR IMAGE IMPORTS ---
import Img1 from "../../assets/places/fort.jpg";
import Img2 from "../../assets/places/Minar-e-Pakistan.jpg";
import Img3 from "../../assets/places/mosque.jpg";
import Img4 from "../../assets/places/shalimar.jpg";
import Img5 from "../../assets/places/sheesh.jpg";
import Img6 from "../../assets/places/wazir.jpg";
import Img7 from "../../assets/places/railway.jpg";
import Img8 from "../../assets/places/zoo.jpg";
import Img9 from "../../assets/places/hammam.jpg";
import Img10 from "../../assets/places/gate.jpg";
import Img11 from "../../assets/places/museum.jpg";
import Img12 from "../../assets/places/bagh.jpg";
// NOTE: You will need to add more image imports for Shopping and Food places
// I am reusing existing images as placeholders.
// Example: import AnarkaliImg from "../../assets/places/anarkali.jpg";

// --- NEW EXPANDED DATA ARRAY ---
const AllPlacesData = [
  // --- Historical Places (12) ---
  {
    id: 1,
    img: Img1,
    title: "Lahore Fort",
    location: "Lahore",
    description: "A citadel in the city of Lahore, Punjab, Pakistan.",
    type: "Historical",
  },
  {
    id: 2,
    img: Img2,
    title: "Minar-e-Pakistan",
    location: "Lahore",
    description: "A national monument located in Lahore, Pakistan.",
    type: "Historical",
  },
  {
    id: 3,
    img: Img3,
    title: "Badshahi Mosque",
    location: "Lahore",
    description: "A Mughal-era congregational mosque in Lahore.",
    type: "Historical",
  },
  {
    id: 4,
    img: Img4,
    title: "Shalimar Garden",
    location: "Lahore",
    description: "A Mughal garden complex located in Lahore.",
    type: "Historical",
  },
  {
    id: 5,
    img: Img5,
    title: "Sheesh Mehal",
    location: "Lahore",
    description: "Located within the Shah Burj block in Lahore Fort.",
    type: "Historical",
  },
  {
    id: 6,
    img: Img6,
    title: "Wazir Khan Mosque",
    location: "Lahore",
    description: "17th-century mosque located in the city of Lahore.",
    type: "Historical",
  },
  {
    id: 7,
    img: Img7,
    title: "Railway Station",
    location: "Lahore",
    description:
      "The main railway station in Lahore, built during British rule.",
    type: "Historical",
  },
  {
    id: 8,
    img: Img8,
    title: "Lahore Zoo",
    location: "Lahore",
    description: "One of the oldest zoos in the world, founded in 1872.",
    type: "Historical",
  },
  {
    id: 9,
    img: Img9,
    title: "Shahi Hammam",
    location: "Lahore",
    description: "A Persian-style bathhouse built in Lahore, Pakistan.",
    type: "Historical",
  },
  {
    id: 10,
    img: Img10,
    title: "Dehli Gate",
    location: "Lahore",
    description: "One of the thirteen gates of the Walled City of Lahore.",
    type: "Historical",
  },
  {
    id: 11,
    img: Img11,
    title: "Lahore Museum",
    location: "Lahore",
    description:
      "Showcasing artifacts from the Gandhara and Indus Valley civilizations.",
    type: "Historical",
  },
  {
    id: 12,
    img: Img12,
    title: "Bagh-e-Jinnah",
    location: "Lahore",
    description: "A historical park in the city of Lahore, Pakistan.",
    type: "Historical",
  },

  // --- Shopping Places (12) ---
  {
    id: 13,
    img: Img1,
    title: "Anarkali Bazaar",
    location: "Lahore",
    description: "One of the oldest surviving markets in South Asia.",
    type: "Shopping",
  },
  {
    id: 14,
    img: Img10,
    title: "Liberty Market",
    location: "Lahore",
    description: "A popular, upscale market for clothing and goods.",
    type: "Shopping",
  },
  {
    id: 15,
    img: Img4,
    title: "Packages Mall",
    location: "Lahore",
    description: "A modern shopping mall with international brands.",
    type: "Shopping",
  },
  {
    id: 16,
    img: Img1,
    title: "Emporium Mall",
    location: "Lahore",
    description: "One of the largest shopping malls in Pakistan.",
    type: "Shopping",
  },
  {
    id: 17,
    img: Img2,
    title: "Fortress Square",
    location: "Lahore",
    description: "A mall with a cinema, food court, and various shops.",
    type: "Shopping",
  },
  {
    id: 18,
    img: Img3,
    title: "Ichhra Bazaar",
    location: "Lahore",
    description: "Known for traditional clothing and affordable prices.",
    type: "Shopping",
  },
  {
    id: 19,
    img: Img5,
    title: "Shah Alam Market",
    location: "Lahore",
    description: "A major wholesale market in the Walled City.",
    type: "Shopping",
  },
  {
    id: 20,
    img: Img6,
    title: "Pace Shopping Mall",
    location: "Lahore",
    description: "One of the pioneering shopping malls in Lahore.",
    type: "Shopping",
  },
  {
    id: 21,
    img: Img7,
    title: "Xinhua Mall",
    location: "Lahore",
    description: "Offers a mix of local and international brands.",
    type: "Shopping",
  },
  {
    id: 22,
    img: Img8,
    title: "Hafeez Center",
    location: "Lahore",
    description: "The central hub for electronics and mobile phones.",
    type: "Shopping",
  },
  {
    id: 23,
    img: Img9,
    title: "Al-Fatah",
    location: "Lahore",
    description: "A high-end department store with various branches.",
    type: "Shopping",
  },
  {
    id: 24,
    img: Img11,
    title: "Y-Block Market",
    location: "Lahore",
    description: "A trendy market in DHA with boutiques and cafes.",
    type: "Shopping",
  },

  // --- Food Points (12) ---
  {
    id: 25,
    img: Img3,
    title: "Gawalmandi Food Street",
    location: "Lahore",
    description: "The first and most famous food street in Lahore.",
    type: "Food",
  },
  {
    id: 26,
    img: Img3,
    title: "Fort Road Food Street",
    location: "Lahore",
    description: "Enjoy local cuisine with a view of Badshahi Mosque.",
    type: "Food",
  },
  {
    id: 27,
    img: Img10,
    title: "Lakshmi Chowk",
    location: "Lahore",
    description: "Famous for traditional Lahori breakfast and cinema.",
    type: "Food",
  },
  {
    id: 28,
    img: Img1,
    title: "Butt Karahi",
    location: "Lahore",
    description: "A legendary spot for authentic chicken and mutton karahi.",
    type: "Food",
  },
  {
    id: 29,
    img: Img2,
    title: "Phajje de Paye",
    location: "Lahore",
    description: "An iconic place for Siri Paye, a traditional delicacy.",
    type: "Food",
  },
  {
    id: 30,
    img: Img4,
    title: "Cooco's Den",
    location: "Lahore",
    description: "A rooftop restaurant with stunning views of the old city.",
    type: "Food",
  },
  {
    id: 31,
    img: Img5,
    title: "Amritsari Hareesa",
    location: "Lahore",
    description: "The go-to place for the savory winter dish, Hareesa.",
    type: "Food",
  },
  {
    id: 32,
    img: Img6,
    title: "Goga Naqeebia",
    location: "Lahore",
    description: "Famous for their delicious and fluffy pathooray.",
    type: "Food",
  },
  {
    id: 33,
    img: Img7,
    title: "Waris Nihari",
    location: "Lahore",
    description: "Serving one of the best Niharis in Lahore for decades.",
    type: "Food",
  },
  {
    id: 34,
    img: Img8,
    title: "Yasir Broast",
    location: "Lahore",
    description: "A popular spot for fried chicken and fast food.",
    type: "Food",
  },
  {
    id: 35,
    img: Img9,
    title: "Benazir Kulfa",
    location: "Lahore",
    description: "The perfect place to enjoy a rich, creamy kulfa dessert.",
    type: "Food",
  },
  {
    id: 36,
    img: Img12,
    title: "Dogar Restaurant",
    location: "Lahore",
    description:
      "Known for its BBQ and traditional Pakistani dishes.Known for its BBQ and traditional Pakistani dishesKnown for its BBQ and traditional Pakistani dishesv Known for its BBQ and traditional Pakistani dishesKnown for its BBQ and traditional Pakistani dishesKnown for its BBQ and traditional Pakistani dishes",
    type: "Food",
  },
];

const Places = () => {
  // NEW: Filter the data into separate arrays for each category
  const historicalPlaces = AllPlacesData.filter(
    (place) => place.type === "Historical"
  );
  const shoppingPlaces = AllPlacesData.filter(
    (place) => place.type === "Shopping"
  );
  const foodPoints = AllPlacesData.filter((place) => place.type === "Food");

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto">
        {/* Main Heading */}
        <h1 className="my-8 ml-10 border-l-8 border-sky-700 py-2 pl-2 text-3xl font-bold">
          Places to Visit
        </h1>

        {/* NEW: Use the reusable component for each category */}
        <PlaceCategorySection
          title="Historical Places"
          places={historicalPlaces}
        />

        <PlaceCategorySection
          title="Famous Shopping Places"
          places={shoppingPlaces}
        />

        <PlaceCategorySection title="Best Food Points" places={foodPoints} />
      </div>
    </div>
  );
};

export default Places;
