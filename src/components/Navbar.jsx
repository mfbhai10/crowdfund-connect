import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import ProfileMenu from "./ProfileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="bg-blue-600 text-white px-6 py-3 flex items-center justify-between shadow-md">
      {/* Left side: Logo + Links */}
      <div className="flex items-center gap-6">
        <div className="h-10 w-12">
          <Link to="/">
            <img src="/images/logo-transparent.png" alt="Logo" />
          </Link>
        </div>
        <div className="hidden md:flex gap-4">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/news" className="hover:underline">
            News
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>

      {/* Right side: Theme + Profile */}
      <div className="flex items-center gap-4 relative">
        <DarkModeToggle />
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
    </nav>
  );
};

export default Navbar;
