import React from "react";
import Img1 from "../../assets/places/fort.jpg";
import Img2 from "../../assets/places/Minar-e-Pakistan.jpg";
import Img3 from "../../assets/places/mosque.jpg";
import BlogCard from "./BlogCard";
const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in Lahore",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
    author: "Someone",
    date: "May 12, 2025",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in Lahore",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
    author: "Someone",
    date: "May 12, 2025",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Lahore",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi blanditiis veniam suscipit, consequatur assumenda recusandae nostrum reiciendis eaque inventore sed repellat tenetur id quia deleniti veritatis pariatur dignissimos voluptatum maiores, praesentium neque. Expedita eos animi voluptas sit enim officia commodi quaerat cupiditate necessitatibus placeat. Et adipisci in minus, est reprehenderit optio soluta voluptate dolorum. Ipsa neque dolorem voluptate expedita incidunt autem facere qui nam magni impedit et, laboriosam nesciunt deserunt molestiae? Illum ex quasi quam aut cum voluptate enim fugiat amet laboriosam quas debitis, consequuntur vel est dolorem molestiae recusandae corrupti distinctio, ipsam sunt vero id deleniti minus autem eaque! Ad optio asperiores quibusdam earum autem cupiditate alias in eius, perspiciatis accusamus recusandae tempora facilis modi placeat dolore natus minima excepturi temporibus impedit quis? Repudiandae minus temporibus vel ipsum dolorum quos! Quia ullam neque possimus ipsam illo odio necessitatibus dolorum sed tenetur harum saepe impedit veniam in praesentium eum asperiores quaerat ducimus illum beatae sapiente vero, eligendi autem reiciendis recusandae. Voluptatibus vero quo a deleniti eveniet. Laboriosam, molestias vitae quos maiores alias dolorum iste quae dolor possimus perspiciatis ipsum. Neque harum ducimus fugit id? Recusandae perferendis dicta quo nobis enim non velit culpa harum officia accusantium sint, aspernatur doloribus! Sed, perspiciatis. Error expedita eligendi beatae? Soluta mollitia ut ullam assumenda ex nulla a inventore? Obcaecati, excepturi. Blanditiis veritatis quia soluta distinctio corporis atque. Vero illum quod aliquam beatae possimus animi, in, fuga incidunt inventore sunt reiciendis dolore magni obcaecati? Commodi deleniti quasi ex est vel omnis ipsam enim laborum dignissimos. Ut porro, excepturi quibusdam corrupti vitae minus eaque iste ipsam quo sit. Earum, recusandae! Ipsa, accusantium! Quo non, voluptatem molestiae maiores voluptas repellat cupiditate optio voluptates atque culpa dignissimos unde earum eos et corporis laudantium pariatur. Facere beatae, rem suscipit unde fugiat, atque accusamus in repellat earum dolor nulla?",
    author: "Someone",
    date: "May 12, 2025",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div>
        <div className="container">
          <h1 className="my-8 ml-10 border-l-8 border-sky-700 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item, index) => (
              <BlogCard key={index} {...item} />
              // <BlogCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsComp;
