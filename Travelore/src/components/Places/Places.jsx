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
      "The Lahore Fort is a giant storybook of red sandstone and white marble. Built over centuries, primarily by Mughal emperors, it's a breathtaking mix of powerful defensive walls and exquisite palaces. From Akbar’s imposing gates to Shah Jahan’s shimmering Sheesh Mahal (Palace of Mirrors), it showcases imperial power and artistry. The Lahore Fort is a giant storybook of red sandstone and white marble. Built over centuries, primarily by Mughal emperors, it's a breathtaking mix of powerful defensive walls and exquisite palaces.",
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
      "Minar-e-Pakistan, located in Lahore, commemorates the Lahore Resolution of 1940, when the demand for a separate nation for Muslims in India was made. This iconic tower, built in 1966, stands 70 meters tall and showcases a blend of Islamic and modern architectural styles. Surrounded by a beautiful park, Minar-e-Pakistan serves as a national symbol of pride and unity for Pakistanis, attracting countless visitors each year who come to admire its significance and beauty",
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
      "The Badshahi Mosque, built in 1673, is a grand Mughal masterpiece located in Lahore, Pakistan. It is renowned for its stunning red sandstone and intricate marble inlay, representing the zenith of Mughal architecture. With a capacity to accommodate over 55,000 worshippers, it's one of the largest mosques in the world and a symbol of religious and cultural heritage. The mosque features a beautiful courtyard, soaring minarets, and rich history, making it a must-visit landmark.",
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
      "Shalimar Garden in Lahore, built during the Mughal era, is a stunning example of Persian garden design. Established in the 17th century by Emperor Shah Jahan, it features magnificent terraced levels, flowing water channels, and vibrant flora. The garden symbolizes the grandeur of Mughal architecture and serves as a peaceful retreat. Its historical significance and beauty attract numerous visitors each year, making it a cherished heritage site.",
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
      "Sheesh Mehal in Lahore, also known as the Sheesh Mahal, is a stunning example of Mughal architecture. It was constructed in the 17th century for the Mughal Emperor Shah Jahan. The palace is adorned with intricate mirror work, reflecting beautiful patterns and designs. It served as a serenity retreat for the royal family, showcasing the grandeur of its time. Its unique beauty and historical significance make Sheesh Mehal a captivating destination for visitors today.",
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
      "Often called a mole on the cheek of Lahore, the Wazir Khan Mosque is a jewel box of vibrant color. Built in the 17th century during Emperor Shah Jahan's reign by his governor, Wazir Khan, it is a masterpiece of Mughal architecture. Its most unique feature is the breathtaking kashi-kari (faience tile work) that covers nearly every surface, inside and out. These intricate floral and calligraphic mosaics make it one of the most ornately decorated mosques in the world.",
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
      "Lahore Railway Station, built in 1860, is a historical landmark showcasing stunning Indo-Saracenic architecture. This bustling hub connects travelers to various destinations across Pakistan. The station features a remarkable clock tower and vibrant platforms, reflecting the city’s cultural heritage. Its location near the heart of Lahore makes it accessible, attracting both locals and tourists. As one of the busiest railway stations, it plays a pivotal role in the transportation network of the region.",
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
      "Zoo Lahore, established in 1872, is one of the oldest zoos in the world, located in Lahore, Pakistan. It covers 38 acres and houses over 1,500 animals from various species. The zoo aims to promote conservation and education, providing an enjoyable experience for visitors. With attractions like the elephant pond and children's petting area, it serves as an engaging venue for families and wildlife enthusiasts.",
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
      "Shahi Hammam in Lahore, a historic Mughal bathhouse, showcases exquisite architecture and intricate tile work, reflecting the grandeur of the Mughal era. Established in the 16th century, it served as a lavish relaxation site for royalty. This unique structure features heated water systems, beautifully decorated domes, and serene ambiance, making it a significant cultural landmark. Today, Shahi Hammam stands as a testament to Lahore's rich heritage, attracting visitors who admire its beauty and historical importance.",
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
      "Delhi Gate in Lahore, a historical monument, dates back to the Mughal era. It served as a crucial entry point to the city, linking the Walled City with the main road. The gate features stunning Mughal architecture, with intricate carvings and large bastions, reflecting the era's grandeur. Today, it stands as a symbol of Lahore's rich history and cultural heritage, attracting numerous visitors who admire its beauty and significance.",
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
      "The Lahore Museum, established in 1865, boasts an extensive collection showcasing Pakistan's rich history, artifacts, and art. Its stunning architecture and diverse exhibits attract history enthusiasts and tourists alike. Highlights include Gandhara sculptures, Mughal art, and traditional textiles, all reflecting the region's cultural heritage.",
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
      "Bagh-e-Jinnah, located in Lahore, is a historic park famous for its vibrant gardens and rich history. Established during British colonial rule, it served as a recreational space for locals and visitors alike. The park is home to numerous historical monuments, including the Allama Iqbal Memorial, which honors the famous poet and philosopher. Its lush landscapes and serene atmosphere make it a perfect place for relaxation and cultural gatherings.",
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
      "Anarkali Bazaar in Lahore has a rich history and is known for its vibrant culture. It offers a unique shopping experience with a variety of goods, from traditional clothing to exquisite handicrafts. This bustling market, named after the legendary Anarkali, provides a glimpse into the city's heritage. Visitors enjoy the lively atmosphere, delicious street food, and the chance to interact with local vendors. Anarkali Bazaar captures the essence of Lahore's charm and is a must-visit destination.",
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
      "Liberty Market in Lahore is a vibrant market known for its unique blend of shopping and food experiences. Established during the British colonial period, it features a variety of shops, including clothing, accessories, and handicrafts. The market attracts locals and tourists alike, offering a lively atmosphere and a taste of local culture. With its bustling streets, it's a popular destination for evening strolls and social gatherings",
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
      "Packages Mall, located in Lahore, is a major shopping destination. Opened in 2017, it features a wide array of local and international brands, dining options, and entertainment facilities. The mall spans several floors, providing a unique shopping experience for visitors. With its modern architecture and vibrant atmosphere, Packages Mall attracts both locals and tourists, making it one of the busiest shopping centers in the city.",
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
      "Emporium Mall in Lahore is a prominent shopping center that opened in 2009. It stands out for its expansive retail space, housing numerous local and international brands under one roof. With diverse dining options and entertainment facilities, the mall caters to families and individuals alike. The contemporary architecture adds to its appeal, making it a popular destination for shopping and leisure. Its strategic location enhances accessibility, attracting visitors from various parts of the city.",
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
      "Fortress Square in Lahore is a historic shopping and entertainment venue, renowned for its unique blend of modern architecture and rich cultural heritage. Established in 2015, it has become a popular destination for both locals and tourists, featuring a wide array of shops, restaurants, and recreational areas. The square hosts various events and activities, making it a vibrant hub for social interaction and relaxation. Its strategic location also offers picturesque views of the surrounding landscape and nearby landmarks.",
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
      "Ichhra Bazaar in Lahore has a rich history and is a vibrant marketplace known for its unique blend of traditional and contemporary items. Dating back to the Mughal era, the bazaar is famous for textiles, handicrafts, and street food that captures the essence of local culture. With its bustling atmosphere, Ichhra Bazaar attracts both locals and tourists, offering an immersive shopping experience that reflects Lahore's heritage.",
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
      "Shah Alam Market in Lahore has a rich history, established in the late 19th century. Known for its vibrant atmosphere, it offers a diverse range of products, including textiles, electronics, and traditional handicrafts. Its unique architecture reflects Mughal influences, making it a cultural landmark as well. The market is a bustling hub of commerce and a popular destination for both locals and tourists, where shoppers can find everything from souvenirs to everyday items",
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
      "Pace Shopping Mall in Lahore has a rich history, opening its doors in 1999. It stands out for its unique blend of shopping, entertainment, and dining options, attracting visitors of all ages. The mall features a variety of local and international brands, along with a food court that offers diverse cuisines. Its modern architecture and vibrant atmosphere make it a popular destination for families and tourists alike, making it an integral part of Lahore's shopping scene.",
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
      "Xinhua Mall in Lahore is a vibrant shopping destination, established to cater to diverse retail needs. Featuring multiple brands, dining options, and entertainment facilities, it offers a unique experience. This modern mall promotes a blend of shopping and leisure, attracting visitors from various backgrounds. Its strategic location enhances accessibility, making it a popular spot for both locals and tourists seeking quality goods and services.",
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
      "Hafeez Center in Lahore has a rich history as a leading technology hub. Established in the late 1990s, it has become a one-stop shopping destination for electronics, computers, and mobile devices. The center features numerous shops offering diverse products and services, attracting customers from all over the city. Its modern architecture and vibrant atmosphere make it a popular hotspot for tech enthusiasts and a symbol of Lahore's evolving commercial landscape.",
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
      "Al-Fatah Lahore is a renowned shopping destination that offers a variety of products, including clothing, electronics, and home goods. Established in the late 1990s, it quickly gained popularity for its modern retail experience and diverse selection. The store features a spacious layout that is easy to navigate, making it a preferred choice for shoppers in the region. Al-Fatah has become synonymous with quality and value, attracting customers from all walks of life.",
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
      "Y-Block Market in Lahore has a rich history, showcasing unique architectural styles and a vibrant shopping atmosphere. Established in the early 1990s, it has evolved into a popular destination for locals and tourists alike, offering diverse shops ranging from trendy boutiques to local crafts. The market also features a variety of eateries that serve delicious cuisine, making it a perfect spot for social gatherings. Its lively ambiance and rich cultural significance make Y-Block Market a must-visit location in Lahore.",
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
      "Gawalmandi Food Street in Lahore is a vibrant culinary destination known for its rich history and diverse street food. Established decades ago, it offers a variety of local delicacies, including chaats, kebabs, and sweet treats. The lively atmosphere attracts locals and tourists alike, making it a hub for food enthusiasts seeking authentic taste experiences. It is particularly famous for its late-night offerings, providing a unique cultural experience in the heart of Lahore.",
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
      "Fort Road Food Street in Lahore is a vibrant culinary destination, rich in history and culture. It features an array of stalls serving traditional Pakistani street food, attracting locals and tourists alike. The street is known for its lively atmosphere, where visitors enjoy diverse flavors, from spicy kebabs to sweet desserts. Fort Road's unique charm lies in its blend of heritage and contemporary dining, making it a must-visit spot for food enthusiasts and history lovers.",
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
      "Lakshmi Chowk in Lahore is a vibrant historical marketplace known for its cultural significance and culinary delights. Established during British colonial rule, it has evolved into a lively hub for shopping and dining. The area is characterized by its unique blend of traditional and modern architecture, drawing both locals and tourists. Visitors can explore a variety of shops, food stalls, and eateries, making it a popular destination for authentic Pakistani cuisine and experience local culture.",
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
      "Butt Karahi in Lahore is a famous dish known for its unique, rich flavor and spicy aroma. Originating from the bustling streets of Lahore, this dish features tender meat, usually chicken or mutton, cooked in a vast, deep karahi (wok) with a blend of spices. It is typically served with naan or rice, making it a popular choice among locals and visitors alike. The culinary experience at Butt Karahi combines delicious food with vibrant, sociable dining atmosphere.",
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
      "Phajje de Paye, a traditional dish from Lahore, boasts a rich history in Punjabi cuisine. Made with slow-cooked trotters, it is known for its unique flavors and aromatic spices. Often served with naan or rice, this hearty meal is a favorite at local eateries, especially during winter. Its preparation involves simmering the trotters in a flavorful broth, resulting in a dish that is both nutritious and satisfying. This beloved cultural delicacy attracts food lovers seeking an authentic taste of Lahore",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.95420950337!2d74.31838631511486!3d31.58120498136952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191b452e697c5b%3A0x6b803023026338e!2sWazir%20Khan%20Mosque!5e0!3m2!1sen!2s!4v1672586000012!5m2!1sen!2s",
  },
  {
    id: 30,
    img: Img4, // Placeholder
    title: "Al-Fazal Foods",
    location: "Lahore",
    description:
      "Al-Fazal Foods, based in Lahore, has a rich history that dates back to its establishment in the early 2000s. Known for its quality products and commitment to customer satisfaction, it offers a wide range of food items, including spices, grains, and ready-to-eat meals. The company has built a reputation for excellence in flavors and freshness, making it a popular choice for families and restaurants alike.",
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
      "Amritsari Hareesa from Lahore has a rich history, renowned for its unique taste and quality. This traditional dish, made from lentils and meat, is slow-cooked with special spices, resulting in a flavorful, creamy texture. Served hot, it is often enjoyed with naan and garnished with fresh herbs and lemon. Its origins can be traced back to the Mughal era, making it a beloved culinary staple in Pakistani cuisine.",
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
      "Goga Naqeebia in Lahore has a rich history as a popular social spot known for its delicious food and warm atmosphere. It serves traditional Pakistani cuisine and is a favored gathering place for locals and visitors alike. The establishment combines cultural heritage with culinary delight, making it a unique dining experience. Goga Naqeebia's reputation has grown over the years, symbolizing the vibrant food scene in Lahore",
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
      "Waris Nihari in Lahore has a rich history, renowned for its unique and flavorful preparation. This traditional dish, made with slow-cooked meat and spices, is typically enjoyed for breakfast. It originated from Delhi, India, and migrated to Lahore, where it has since become a beloved culinary staple. Served with naan and garnished with ginger and cilantro, Waris Nihari embodies a fusion of culture and taste, attracting food lovers from all walks of life.",
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
      "Yasir Broast in Lahore has a rich history, known for its delicious broasted chicken. Established in the late 1990s, this eatery quickly gained popularity for its unique cooking style, combining pressure cooking and frying. The result is tender, crispy chicken that has become a favorite among locals and visitors alike. With its simple menu and focus on quality, Yasir Broast is a beloved spot for tasty meals and a must-visit for food lovers in the city",
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
      "Benazir Kulfa in Lahore has a rich history that reflects the city's diverse culture. Known for its unique kulfi, a traditional frozen dessert, it offers a delightful experience for locals and visitors alike. This iconic spot attracts food lovers who enjoy its simple, yet delicious offerings. The vibrant atmosphere and historical significance of Benazir Kulfa make it a must-visit destination, capturing the true essence of Lahore and its gastronomic traditions",
    type: "Food",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.585573420847!2d74.33535931511413!3d31.53597498138321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f63c8c7a7f%3A0x8681c37b98d1976a!2sPace%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1672586000005!5m2!1sen!2s",
  },
  {
    id: 36,
    img: Img12, // Placeholder
    title: "Arif Chatkhara",
    location: "Lahore",
    description:
      "Arif Chatkhara in Lahore is famous for its unique blend of traditional flavors and modern twists on classic dishes. Known for its lively atmosphere, it attracts food lovers from all over. Each item on the menu is designed to offer a memorable dining experience, making it a go-to spot for both locals and tourists. With an emphasis on fresh ingredients and innovative recipes, Arif Chatkhara continues to hold a special place in the hearts of its patrons",
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
