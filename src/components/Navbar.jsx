import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleNavClick = (title) => {
    setActive(title);
    setToggle(false);
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive('');
            setToggle(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#915eff]/60 transition">
            <span className="text-white font-bold text-[15px] tracking-wider">
              CG
            </span>
          </div>

          <div className="flex flex-col leading-none">
            <p className="text-white text-[17px] sm:text-[18px] font-bold tracking-wide group-hover:text-[#915eff] transition-colors">
              Christopher Gordon
            </p>

            <span className="hidden sm:block text-secondary text-[11px] tracking-[0.2em] uppercase mt-1">
              Web Developer · Creative Builder
            </span>
          </div>
        </Link>

        <ul className="list-none hidden md:flex flex-row gap-8">
          {navLinks.map((navLink) => (
            <li
              key={navLink.id}
              className={`${
                active === navLink.title ? 'text-white' : 'text-secondary'
              } relative hover:text-white text-[15px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => handleNavClick(navLink.title)}
            >
              <a href={`#${navLink.id}`} className="py-2">
                {navLink.title}
              </a>

              {active === navLink.title && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#915eff] rounded-full" />
              )}
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            type="button"
            onClick={() => setToggle((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-white/10 transition"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="w-[24px] h-[24px] object-contain"
            />
          </button>

          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 bg-primary/95 backdrop-blur-md absolute top-16 right-4 min-w-[190px] z-50 rounded-xl border border-white/10 shadow-card`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((navLink) => (
                <li
                  key={navLink.id}
                  className={`${
                    active === navLink.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px] hover:text-white transition-colors`}
                  onClick={() => handleNavClick(navLink.title)}
                >
                  <a href={`#${navLink.id}`}>{navLink.title}</a>
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