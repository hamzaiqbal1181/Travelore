import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuthState from "../../hooks/useAuthState";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
// NEW: Importing a sleek icon for our new logo and removing the old LogoImg import
import { IoPaperPlaneOutline } from "react-icons/io5";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

// The NavbarLinks array remains inside this file as requested.
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Places",
    link: "/places",
    submenu: true,
    sublinks: [
      { name: "Historical Places", link: "/places" },
      { name: "Shopping Places", link: "/places" },
      { name: "Local Food Points", link: "/places" },
    ],
  },
  {
    name: "Best Places",
    link: "/bestplacesPage",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "About",
    link: "/about",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleMenu = () => setShowMenu(!showMenu);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  // STYLING UPDATE: Refined the active link style for a cleaner look.
  const getNavLinkClass = ({ isActive }) => {
    const baseClasses =
      "text-gray-700 hover:text-sky-600 transition-colors duration-300 font-medium px-3 py-2 rounded-md";
    return isActive ? `text-sky-600 bg-sky-100 ${baseClasses}` : baseClasses;
  };

  const { user } = useAuthState();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/signin");
  };

  return (
    <>
      {/* STYLING UPDATE: Added a subtle border-b for separation */}
      <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md z-[99999] border-b border-gray-200">
        {/* STYLING UPDATE: Slimmer, more subtle top bar */}
        <div className="from-sky-500 to-sky-600 bg-gradient-to-r text-white">
          <div className="container py-1 sm:block hidden">
            <div className="flex justify-between text-sm font-medium">
              <p>Explore Lahore with Us</p>
              <p>+92 123 4567890</p>
            </div>
          </div>
        </div>

        <div className="container py-2 sm:py-0">
          <div className="flex justify-between items-center h-16">
            {/* === LOGO REDESIGN === */}
            {/* Replacing the old <img> tag with a modern, text-based logo */}
            <div>
              <Link
                to="/"
                onClick={() => window.scrollTo(0, 0)}
                className="flex items-center gap-2 text-2xl font-bold text-gray-800"
              >
                <IoPaperPlaneOutline className="text-sky-500" />
                <span>Travelore</span>
              </Link>
            </div>

            {/* Dextop Navlinks section */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-4">
                {" "}
                {/* Reduced gap */}
                {NavbarLinks.map((item) => (
                  <li
                    key={item.name}
                    className="relative"
                    ref={item.submenu ? dropdownRef : null}
                  >
                    {item.submenu ? (
                      <div className="flex items-center gap-1">
                        {" "}
                        {/* Reduced gap */}
                        <NavLink
                          to={item.link}
                          className={getNavLinkClass}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {item.name}
                        </NavLink>
                        {/* STYLING UPDATE: Made dropdown arrow larger with more space */}
                        <button
                          onClick={() => setDropdownOpen(!isDropdownOpen)}
                          className="p-1 rounded-md hover:bg-gray-100"
                        >
                          <FaCaretDown
                            className={`transition-transform duration-300 text-gray-500 ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                    ) : (
                      <NavLink
                        to={item.link}
                        className={getNavLinkClass}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {item.name}
                      </NavLink>
                    )}
                    {/* STYLING UPDATE: Improved dropdown menu styling */}
                    {item.submenu && isDropdownOpen && (
                      <ul className="absolute top-full left-0 mt-3 w-52 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                        {item.sublinks.map((sublink) => (
                          <li key={sublink.name}>
                            <Link
                              to={sublink.link}
                              onClick={() => {
                                setDropdownOpen(false);
                                window.scrollTo(0, 0);
                              }}
                              className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600 font-medium transition-colors duration-200"
                            >
                              {sublink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* STYLING UPDATE: Modern, solid Call-to-Action button */}
            <div className="flex items-center gap-4">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="bg-red-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-red-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  to="/signin"
                  className="bg-sky-500 text-white px-5 py-2 rounded-full font-semibold hover:bg-sky-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Sign In
                </Link>
              )}
              <div className="md:hidden block">
                {showMenu ? (
                  <HiMenuAlt1
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all size={30}"
                  />
                ) : (
                  <HiMenuAlt3
                    onClick={toggleMenu}
                    className="cursor-pointer transition-all size={30}"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      </div>
    </>
  );
};

export default Navbar;
