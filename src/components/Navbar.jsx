import {  useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-4 fixed top-0 z-20 bg-gray-100 shadow-md">
      <div className="w-full flex justify-between items-center max-w-7xl">
        <Link
          to="/"
          className="flex items-center gap-2 pl-8 sm:pl-52"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <div className="group relative inline-flex items-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-slate-700 opacity-20 blur-lg transition-opacity duration-300 group-hover:opacity-45" />

            <p className="relative px-3 py-1 text-[20px] sm:text-[30px] md:text-[34px] font-semibold uppercase tracking-[0.22em] text-slate-900 transition-all duration-300 ease-out group-hover:scale-105 group-hover:tracking-[0.3em]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-700 drop-shadow-[0_6px_12px_rgba(15,23,42,0.25)]">
                Andualem
              </span>
              <span className="ml-2 align-super text-[16px] sm:text-[18px] md:text-[20px] text-emerald-500 drop-shadow-[0_0_6px_rgba(16,185,129,0.8)] animate-pulse">
                *
              </span>
            </p>
          </div>

        </Link>

        {/* Desktop Nav */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title 
                 ? 'text-emerald-900 underline  '
                  : 'text-gray-700'
              } hover:bg-emerald-100  text-[18px] font-medium cursor-pointer transition duration-200`}
              onClick={() => setActive(link.title)}
            >
              {link.id === 'blog' ? (
                <Link to="/blogs">{link.title}</Link>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Nav */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="text-[28px] text-gray-800 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <FiX /> : <FiMenu />}
          </div>

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 bg-white border border-gray-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-md`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title 
                    ? 'text-emerald-500'
                      : 'text-gray-700'
                  } font-medium cursor-pointer text-[16px] hover:text-emerald-700`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {link.id === 'blog' ? (
                    <Link to="/blogs">{link.title}</Link>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
