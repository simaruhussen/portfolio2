import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Activate section highlight
      for (let i = 0; i < navLinks.length; i++) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(navLinks[i].title);
            break;
          }
        }
      }

      // Navbar scroll style
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 sm:px-12 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <p className="relative font-extrabold text-[24px] sm:text-[32px] uppercase tracking-[0.15em] text-slate-900 select-none">
            <span className="bg-gradient-to-r from-sky-600 via-emerald-500 to-sky-700 bg-clip-text text-transparent hover:brightness-110 transition-all duration-300">
              Andualem
            </span>
            <span className="ml-1 text-sky-600 text-sm animate-ping">&#8250;</span>

          </p>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden sm:flex gap-8 text-[16px] font-medium">
          {navLinks.map((link) => (
            <li key={link.id} className="group relative">
              {link.id === "blog" ? (
                <Link
                  to="/blogs"
                  className={`transition-colors ${
                    active === link.title ? "text-emerald-600" : "text-gray-800"
                  } hover:text-emerald-600`}
                  onClick={() => setActive(link.title)}
                >
                  {link.title}
                </Link>
              ) : (
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.title)}
                  className={`transition-colors ${
                    active === link.title ? "text-emerald-600" : "text-gray-800"
                  } hover:text-emerald-600`}
                >
                  {link.title}
                </a>
              )}
              <span className="absolute bottom-[-3px] left-0 w-0 h-[2px] bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setToggle(!toggle)}
            className="text-[28px] text-gray-800"
          >
            {toggle ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div className="absolute top-[70px] right-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col gap-4 border border-gray-200 sm:hidden">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-[16px] font-medium ${
                  active === link.title ? "text-emerald-600" : "text-gray-800"
                } hover:text-emerald-700`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
              >
                {link.title}
              </a>
            ))}
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
