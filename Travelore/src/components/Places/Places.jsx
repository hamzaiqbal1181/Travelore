// src/components/Places/Places.jsx

import React, { useState } from "react";
import PlaceCategorySection from "./PlaceCategorySection";
import PlacePopup from "./PlacePopup";

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

// --- COMPLETE DATA ARRAY WITH ALL 36 ITEMS AND MAP URLs ---
const AllPlacesData = [
  // --- Historical Places (12) ---
  {
    id: 1,
    img: Img1,
    title: "Lahore Fort",
    location: "Lahore",
    description:
      "A citadel in the city of Lahore, Punjab, Pakistan. It is located in the northern part of Lahore's Walled City and is a UNESCO World Heritage Site. The fortress is spread over 20 hectares and contains several palaces, gardens, and mosques built by various Mughal emperors.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.442918882519!2d74.31193931511516!3d31.59473998137266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5c23d83d61%3A0x4649446e582f34be!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1672585000001!5m2!1sen!2s",
  },
  {
    id: 2,
    img: Img2,
    title: "Minar-e-Pakistan",
    location: "Lahore",
    description:
      "A national monument located in Lahore, Pakistan. The tower was built between 1960 and 1968 on the site where the All-India Muslim League passed the Lahore Resolution on 23 March 1940.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.531518342418!2d74.3082833151152!3d31.59251848137356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5a50e58ebd%3A0x8671b12b5b3e7789!2sMinar-e-Pakistan!5e0!3m2!1sen!2s!4v1672584000000!5m2!1sen!2s",
  },
  {
    id: 3,
    img: Img3,
    title: "Badshahi Mosque",
    location: "Lahore",
    description:
      "A Mughal-era congregational mosque in Lahore, commissioned by Emperor Aurangzeb in 1671 and completed in 1673. It is an iconic landmark and a major tourist attraction.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.494793853924!2d74.31138631511514!3d31.59368298137311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5c697a5b3d%3A0x2e08a54d5571a44c!2sBadshahi%20Mosque!5e0!3m2!1sen!2s!4v1672585000002!5m2!1sen!2s",
  },
  {
    id: 4,
    img: Img4,
    title: "Shalimar Garden",
    location: "Lahore",
    description:
      "A Mughal garden complex located in Lahore. The gardens date from the period when the Mughal Empire was at its artistic and aesthetic zenith.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.970222051283!2d74.3831883151154!3d31.58028998136696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191a8a25c5673d%3A0x1d47343e7a68a44!2sShalimar%20Bagh!5e0!3m2!1sen!2s!4v1672586000001!5m2!1sen!2s",
  },
  {
    id: 5,
    img: Img5,
    title: "Sheesh Mehal",
    location: "Lahore",
    description:
      "Located within the Shah Burj block in Lahore Fort. Also known as the 'Palace of Mirrors', it is among the most well-known tourist sites in Lahore.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.442918882519!2d74.31193931511516!3d31.59473998137266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5c23d83d61%3A0x4649446e582f34be!2sLahore%20Fort!5e0!3m2!1sen!2s!4v1672585000001!5m2!1sen!2s",
  },
  {
    id: 6,
    img: Img6,
    title: "Wazir Khan Mosque",
    location: "Lahore",
    description:
      "A 17th-century mosque located in the city of Lahore. The mosque is known for its intricate faience tile work known as kashi-kari.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8906164223413!2d74.3197283151149!3d31.58300898137021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b452e697c5b%3A0x6b803023026338e!2sWazir%20Khan%20Mosque!5e0!3m2!1sen!2s!4v1672585000003!5m2!1sen!2s",
  },
  {
    id: 7,
    img: Img7,
    title: "Railway Station",
    location: "Lahore",
    description:
      "The main railway station in Lahore, built during British rule. It is one of the oldest and busiest railway stations in Pakistan.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.162791694553!2d74.32997831511476!3d31.57530498136816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b3c75534e55%3A0x4842a5141679032d!2sLahore%20Junction%20railway%20station!5e0!3m2!1sen!2s!4v1672585000004!5m2!1sen!2s",
  },
  {
    id: 8,
    img: Img8,
    title: "Lahore Zoo",
    location: "Lahore",
    description:
      "One of the oldest zoos in the world, founded in 1872. It houses a collection of about 1378 animals of 135 species.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.825852503258!2d74.32170831511442!3d31.5564889813759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e5b7a5796f%3A0x49332085333ed204!2sLahore%20Zoo!5e0!3m2!1sen!2s!4v1672585000005!5m2!1sen!2s",
  },
  {
    id: 9,
    img: Img9,
    title: "Shahi Hammam",
    location: "Lahore",
    description:
      "A Persian-style bathhouse built in Lahore in 1635 C.E. during the reign of Emperor Shah Jahan. It is the last remaining Mughal-era hammam in Lahore.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.916867373851!2d74.32194931511488!3d31.58223698136997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b44d9f6a27d%3A0x7a837a7836b281b!2sShahi%20Hammam%20(Wazir%20Khan%20Hammam)!5e0!3m2!1sen!2s!4v1672585000006!5m2!1sen!2s",
  },
  {
    id: 10,
    img: Img10,
    title: "Dehli Gate",
    location: "Lahore",
    description:
      "One of the thirteen gates of the Walled City of Lahore. The gate was named after Delhi as it faces east, in the general direction of that city.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.914909307406!2d74.32230131511488!3d31.58229198136994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b44d701135d%3A0x26b64f9b8723c316!2sDelhi%20Gate!5e0!3m2!1sen!2s!4v1672585000007!5m2!1sen!2s",
  },
  {
    id: 11,
    img: Img11,
    title: "Lahore Museum",
    location: "Lahore",
    description:
      "Showcasing artifacts from the Gandhara and Indus Valley civilizations. It is Pakistan's most visited museum and one of the major museums in South Asia.Showcasing artifacts from the Gandhara and Indus Valley civilizations. It is Pakistan's most visited museum and one of the major museums in South Asia.Showcasing artifacts from the Gandhara and Indus Valley civilizations. It is Pakistan's most visited museum and one of the major museums in South Asia.Showcasing artifacts from the Gandhara and Indus Valley civilizations. It is Pakistan's most visited museum and one of the major museums in South Asia.Showcasing artifacts from the Gandhara and Indus Valley civilizations. It is Pakistan's most visited museum and one of the major museums in South Asia.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.668516087541!2d74.31682331511451!3d31.56070798137683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e4a2e557b7%3A0x334a179374020124!2sLahore%20Museum!5e0!3m2!1sen!2s!4v1672585000008!5m2!1sen!2s",
  },
  {
    id: 12,
    img: Img12,
    title: "Bagh-e-Jinnah",
    location: "Lahore",
    description:
      "A historical park in the city of Lahore. It was formerly known as Lawrence Gardens. It contains a botanical garden, a mosque, and a library.",
    type: "Historical",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.774577543818!2d74.32420031511446!3d31.55793098137537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e67d264f7b%3A0x80d8a5438a5b252e!2sBagh-e-Jinnah!5e0!3m2!1sen!2s!4v1672585000009!5m2!1sen!2s",
  },

  // --- Shopping Places (12) ---
  {
    id: 13,
    img: Img1, // Placeholder
    title: "Anarkali Bazaar",
    location: "Lahore",
    description:
      "One of the oldest surviving markets in South Asia, dating back at least 200 years. It is known for its traditional clothing, handicrafts, and street food.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.48598150438!2d74.31464131511459!3d31.5658099813753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e38c01c0c3%3A0xac9530a6e257973!2sAnarkali%20Bazar%20Lahore!5e0!3m2!1sen!2s!4v1672585000010!5m2!1sen!2s",
  },
  {
    id: 14,
    img: Img10, // Placeholder
    title: "Liberty Market",
    location: "Lahore",
    description:
      "A popular, upscale market for clothing, shoes, and jewelry. It is a major shopping hub, especially for formal and bridal wear.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.626511679075!2d74.3328243151141!3d31.534898981383565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f434241e7f%3A0x2e04b20e633a6b57!2sLiberty%20Market!5e0!3m2!1sen!2s!4v1672585000011!5m2!1sen!2s",
  },
  {
    id: 15,
    img: Img4, // Placeholder
    title: "Packages Mall",
    location: "Lahore",
    description:
      "A modern, state-of-the-art shopping mall with a wide variety of local and international brands, a large food court, and a multiplex cinema.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.731422792186!2d74.37521131511406!3d31.53225898138448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905d455555555%3A0x952540191873995!2sPackages%20Mall!5e0!3m2!1sen!2s!4v1672585000012!5m2!1sen!2s",
  },
  {
    id: 16,
    img: Img1, // Placeholder
    title: "Emporium Mall",
    location: "Lahore",
    description:
      "One of the largest shopping malls in Pakistan, featuring over 200 brands, a hypermarket, a cinema, and a large food court.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.819448135891!2d74.26415231511364!3d31.50155098140359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f67a2418b1%3A0x13a2936750059b06!2sEmporium%20Mall%20by%20Nishat%20Group!5e0!3m2!1sen!2s!4v1672585000013!5m2!1sen!2s",
  },
  {
    id: 17,
    img: Img2, // Placeholder
    title: "Fortress Square",
    location: "Lahore",
    description:
      "A mall with a cinema, food court, and various shops, located in Fortress Stadium.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.116524317424!2d74.3486303151143!3d31.54848198138133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391905008535a299%3A0x442ca61971701548!2sFortress%20Square!5e0!3m2!1sen!2s!4v1672586000002!5m2!1sen!2s",
  },
  {
    id: 18,
    img: Img3, // Placeholder
    title: "Ichhra Bazaar",
    location: "Lahore",
    description:
      "Known for traditional clothing and affordable prices. It's one of the oldest and busiest markets in Lahore.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.75471848512!2d74.30514131511406!3d31.53163198138472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190289a96e3fab%3A0x1e35a9b7033481e1!2sIchhra%20Bazar!5e0!3m2!1sen!2s!4v1672586000003!5m2!1sen!2s",
  },
  {
    id: 19,
    img: Img5, // Placeholder
    title: "Shah Alam Market",
    location: "Lahore",
    description:
      "A major wholesale market in the Walled City, known for a vast range of goods from textiles to electronics.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.1309833722955!2d74.31688531511476!3d31.57625198136829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b480b06536b%3A0x334a179374020124!2sShah%20Alam%20Market!5e0!3m2!1sen!2s!4v1672586000004!5m2!1sen!2s",
  },
  {
    id: 20,
    img: Img6, // Placeholder
    title: "Pace Shopping Mall",
    location: "Lahore",
    description:
      "One of the pioneering shopping malls in Lahore, offering a mix of local brands and eateries.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.585573420847!2d74.33535931511413!3d31.53597498138321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f63c8c7a7f%3A0x8681c37b98d1976a!2sPace%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1672586000005!5m2!1sen!2s",
  },
  {
    id: 21,
    img: Img7, // Placeholder
    title: "Xinhua Mall",
    location: "Lahore",
    description:
      "A modern shopping destination that offers a mix of local and international brands, a food court, and entertainment options.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.407788417939!2d74.33966931511421!3d31.54044598138249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f98f6c5897%3A0x139ba8a5f5713c5!2sXinhua%20Mall!5e0!3m2!1sen!2s!4v1672586000006!5m2!1sen!2s",
  },
  {
    id: 22,
    img: Img8, // Placeholder
    title: "Hafeez Center",
    location: "Lahore",
    description:
      "The central hub for electronics, computers, and mobile phones in Lahore. A massive market for tech enthusiasts.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.586617300445!2d74.33519831511414!3d31.53594898138323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f63d001255%3A0x60565597973d803a!2sHafeez%20Center!5e0!3m2!1sen!2s!4v1672586000007!5m2!1sen!2s",
  },
  {
    id: 23,
    img: Img9, // Placeholder
    title: "Al-Fatah",
    location: "Lahore",
    description:
      "A high-end department store with various branches, offering everything from groceries to electronics and imported goods.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.626511679075!2d74.3328243151141!3d31.534898981383565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f434241e7f%3A0x2e04b20e633a6b57!2sLiberty%20Market!5e0!3m2!1sen!2s!4v1672585000011!5m2!1sen!2s",
  },
  {
    id: 24,
    img: Img11, // Placeholder
    title: "Y-Block Market",
    location: "Lahore",
    description:
      "A trendy market in DHA with high-end fashion boutiques, designer stores, and chic cafes.",
    type: "Shopping",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.184305886617!2d74.3601553151139!3d31.5200389813886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919058b767a652d%3A0x89d892839218e87!2sY%20Block%20Market!5e0!3m2!1sen!2s!4v1672586000008!5m2!1sen!2s",
  },

  // --- Food Points (12) ---
  {
    id: 25,
    img: Img3, // Placeholder
    title: "Gawalmandi Food Street",
    location: "Lahore",
    description:
      "The first and most famous food street in Lahore, offering a wide array of traditional Lahori dishes.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.443916964205!2d74.3168283151146!3d31.56693898137552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e3b12384a5%3A0x4a4746279f3237a3!2sFort%20Road%20Food%20Street!5e0!3m2!1sen!2s!4v1672586000009!5m2!1sen!2s",
  },
  {
    id: 26,
    img: Img3, // Placeholder
    title: "Fort Road Food Street",
    location: "Lahore",
    description:
      "Enjoy local cuisine with a stunning view of the Badshahi Mosque and Lahore Fort.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.558316886498!2d74.31013731511508!3d31.59185098137337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5b08103f6f%3A0x838a201c3b7e77a!2sFort%20Road%20Food%20Street!5e0!3m2!1sen!2s!4v1672586000010!5m2!1sen!2s",
  },
  {
    id: 27,
    img: Img10, // Placeholder
    title: "Lakshmi Chowk",
    location: "Lahore",
    description:
      "Famous for traditional Lahori breakfast, cinemas, and a variety of savory dishes.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.730302302832!2d74.32168931511448!3d31.55914898137562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e5788e079f%3A0x633add4235e16f2b!2sLakshmi%20Chowk!5e0!3m2!1sen!2s!4v1672586000011!5m2!1sen!2s",
  },
  {
    id: 28,
    img: Img1, // Placeholder
    title: "Butt Karahi",
    location: "Lahore",
    description:
      "A legendary spot for authentic chicken and mutton karahi, known for its rich and spicy flavor.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.730302302832!2d74.32168931511448!3d31.55914898137562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e5788e079f%3A0x633add4235e16f2b!2sLakshmi%20Chowk!5e0!3m2!1sen!2s!4v1672586000011!5m2!1sen!2s",
  },
  {
    id: 29,
    img: Img2, // Placeholder
    title: "Phajje de Paye",
    location: "Lahore",
    description:
      "An iconic place for Siri Paye, a traditional delicacy of goat or lamb trotters, slow-cooked to perfection.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.95420950337!2d74.31838631511486!3d31.58120498136952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b452e697c5b%3A0x6b803023026338e!2sWazir%20Khan%20Mosque!5e0!3m2!1sen!2s!4v1672586000012!5m2!1sen!2s",
  },
  {
    id: 30,
    img: Img4, // Placeholder
    title: "Cooco's Den",
    location: "Lahore",
    description:
      "A rooftop restaurant with stunning, artistic interiors and breathtaking views of the old city and Badshahi Mosque.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.558316886498!2d74.31013731511508!3d31.59185098137337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b5b08103f6f%3A0x838a201c3b7e77a!2sFort%20Road%20Food%20Street!5e0!3m2!1sen!2s!4v1672586000010!5m2!1sen!2s",
  },
  {
    id: 31,
    img: Img5, // Placeholder
    title: "Amritsari Hareesa",
    location: "Lahore",
    description:
      "The go-to place for the savory winter dish, Hareesa, a slow-cooked blend of wheat, barley, meat, and spices.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.730302302832!2d74.32168931511448!3d31.55914898137562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e5788e079f%3A0x633add4235e16f2b!2sLakshmi%20Chowk!5e0!3m2!1sen!2s!4v1672586000011!5m2!1sen!2s",
  },
  {
    id: 32,
    img: Img6, // Placeholder
    title: "Goga Naqeebia",
    location: "Lahore",
    description:
      "Famous for their delicious and fluffy 'pathooray', a type of fried bread, often served with channay (chickpea curry).",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.75471848512!2d74.30514131511406!3d31.53163198138472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190289a96e3fab%3A0x1e35a9b7033481e1!2sIchhra%20Bazar!5e0!3m2!1sen!2s!4v1672586000003!5m2!1sen!2s",
  },
  {
    id: 33,
    img: Img7, // Placeholder
    title: "Waris Nihari",
    location: "Lahore",
    description:
      "Serving one of the best Niharis in Lahore for decades. Nihari is a slow-cooked stew of meat and spices.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.48598150438!2d74.31464131511459!3d31.5658099813753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904e38c01c0c3%3A0xac9530a6e257973!2sAnarkali%20Bazar%20Lahore!5e0!3m2!1sen!2s!4v1672585000010!5m2!1sen!2s",
  },
  {
    id: 34,
    img: Img8, // Placeholder
    title: "Yasir Broast",
    location: "Lahore",
    description:
      "A popular spot for fried chicken (broast), burgers, and other fast food items, loved by locals.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.09252321458!2d74.35121931511394!3d31.522227981387813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190586e3557e8b%3A0xb35e7293b1236173!2sDogar%20Restaurant!5e0!3m2!1sen!2s!4v1672585000033!5m2!1sen!2s",
  },
  {
    id: 35,
    img: Img9, // Placeholder
    title: "Benazir Kulfa",
    location: "Lahore",
    description:
      "The perfect place to enjoy a rich, creamy kulfa dessert, a traditional South Asian ice cream.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.585573420847!2d74.33535931511413!3d31.53597498138321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f63c8c7a7f%3A0x8681c37b98d1976a!2sPace%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1672586000005!5m2!1sen!2s",
  },
  {
    id: 36,
    img: Img12, // Placeholder
    title: "Dogar Restaurant",
    location: "Lahore",
    description:
      "Known for its BBQ and traditional Pakistani dishes. A popular spot for families and groups looking to enjoy authentic flavors in a casual dining environment.",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.09252321458!2d74.35121931511394!3d31.522227981387813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190586e3557e8b%3A0xb35e7293b1236173!2sDogar%20Restaurant!5e0!3m2!1sen!2s!4v1672585000033!5m2!1sen!2s",
  },
];

const Places = () => {
  // State to manage the selected place for the popup
  const [selectedPlace, setSelectedPlace] = useState(null);

  const historicalPlaces = AllPlacesData.filter(
    (place) => place.type === "Historical"
  );
  const shoppingPlaces = AllPlacesData.filter(
    (place) => place.type === "Shopping"
  );
  const foodPoints = AllPlacesData.filter((place) => place.type === "Food");

  // Handler to open the popup
  const handleLocationClick = (place) => {
    setSelectedPlace(place);
  };

  // Handler to close the popup
  const handleClosePopup = () => {
    setSelectedPlace(null);
  };

  return (
    <>
      <div className="bg-gray-50 py-10">
        <div className="container mx-auto">
          <h1 className="my-8 ml-10 border-l-8 border-sky-700 py-2 pl-2 text-3xl font-bold">
            Places to Visit
          </h1>

          {/* Pass the handler function to each section */}
          <PlaceCategorySection
            title="Historical Places"
            places={historicalPlaces}
            onLocationClick={handleLocationClick}
          />
          <PlaceCategorySection
            title="Famous Shopping Places"
            places={shoppingPlaces}
            onLocationClick={handleLocationClick}
          />
          <PlaceCategorySection
            title="Best Food Points"
            places={foodPoints}
            onLocationClick={handleLocationClick}
          />
        </div>
      </div>

      {/* Conditionally render the popup here */}
      {selectedPlace && (
        <PlacePopup place={selectedPlace} onClose={handleClosePopup} />
      )}
    </>
  );
};

export default Places;
