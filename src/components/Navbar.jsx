import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import ProfileMenu from "./ProfileMenu";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });

  useEffect(() => {
    if (!userName) {
      const inputName = prompt("Enter your name:");
      if (inputName) {
        setUserName(inputName);
        localStorage.setItem("userName", inputName);
      } else {
        setUserName("Guest");
      }
    }
  }, [userName]);

  const handleChangeName = () => {
    const newName = prompt("Enter new name:");
    if (newName) {
      setUserName(newName);
      localStorage.setItem("userName", newName);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white px-6 py-3 flex items-center justify-between shadow-md z-50">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <div className="h-10 w-12">
          <Link to="/">
            <img src="/images/logo-transparent.png" alt="Logo" />
          </Link>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/news" className="hover:underline">News</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>

      {/* Right: Theme toggle + profile + mobile menu icon */}
      <div className="flex items-center gap-4 relative">
        <DarkModeToggle />

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="md:hidden text-xl"
          aria-label="Toggle Menu"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Profile Icon: */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl"
          aria-label="User Profile"
        >
          <FaUserCircle />
        </button>

        {menuOpen && (
          <ProfileMenu
            userName={userName}
            onClose={() => setMenuOpen(false)}
            onChangeName={handleChangeName}
          />
        )}
      </div>

      <AnimatePresence>
        {navOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute top-[64px] left-0 w-full bg-blue-700 flex flex-col gap-3 py-4 px-6 md:hidden z-40"
          >
            <Link to="/" onClick={() => setNavOpen(false)} className="hover:underline">Home</Link>
            <Link to="/about" onClick={() => setNavOpen(false)} className="hover:underline">About</Link>
            <Link to="/news" onClick={() => setNavOpen(false)} className="hover:underline">News</Link>
            <Link to="/contact" onClick={() => setNavOpen(false)} className="hover:underline">Contact</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
