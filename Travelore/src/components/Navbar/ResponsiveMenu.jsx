import React from "react";
import { TbMapSearch } from "react-icons/tb";
import { Link } from "react-router-dom";
// You are already importing the correct, shared list of links here.
import { NavbarLinks } from "./Navbar";

// --- FIX #1: DELETED the entire local 'navbarlinks' array. ---
// We will use the imported NavbarLinks array instead to keep all links in one place.
/*
const navbarlinks = [
  { name: "Home", link: "/" },
  { name: "Places", link: "/places" },
  { name: "Best Places", link: "/bestplacespage" },
  { name: "Blogs", link: "/blogs" },
  { name: "About", link: "/about" },
];
*/

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <>
      <div
        className={`${
          showMenu ? "left-0" : "-left-[100%]"
        } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-50 px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
      >
        <div className="Navbar-card">
          {/* top section  */}
          <div>
            <div className="flex items-center justify-start gap-4">
              <TbMapSearch size={50} className="text-gray-500" />
              <div className="text-gray-500">
                <h1>Welcome!</h1>
                <h1 className="text-sm text-slate-500">Let's Explore</h1>
              </div>
            </div>
          </div>
          {/* navlinks section */}
          <div className="text-black mt-12">
            <ul className="space-y-4 text-xl">
              {/* --- FIX #2: Changed 'navbarlinks' to 'NavbarLinks' to use the imported array --- */}
              {NavbarLinks.map(({ name, link }) => (
                // --- FIX #3: Added the unique key prop to the <li> element ---
                <li key={name}>
                  <Link
                    to={link}
                    onClick={() => setShowMenu(false)}
                    className="mb-5 inline-block"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMenu;
