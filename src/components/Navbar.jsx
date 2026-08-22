import { Link, NavLink } from "react-router";
import { useState } from "react";
import woordlarkLogo from "../assets/woodlarks-nest-logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive, isPending }) =>
    isPending ? "" : isActive ? "underline underline-offset-2" : "";

  const links = [
    { to: "/portfolio", label: "Portfolio" },
    { to: "/our-story", label: "Our Story" },
    { to: "/custom-piece", label: "Start a Custom Piece" },
  ];

  return (
    <header className="sticky top-0 w-full z-100 shadow-xl">
      <div className="flex justify-between items-center h-27 md:h-23 px-5 md:px-11 bg-offwhite">
        <div className="flex items-center">
          <Link to="/" aria-label="Homepage" onClick={() => setMenuOpen(false)}>
            <img
              src={woordlarkLogo}
              alt="Woodlark's Nest Logo"
              className="h-18"
            />
          </Link>
          <p className="ml-3"></p>
        </div>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden md:block">
          <ul className="flex text-wood-brown text-xl gap-6 font-lato">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className={navLinkClass}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Icon for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 cursor-pointer"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-9 bg-[#3C3B3B] transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-9 bg-[#3C3B3B] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-9 bg-[#3C3B3B] transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <nav className="md:hidden pt-2 pb-4 bg-offwhite px-5">
          <ul className="flex flex-col text-wood-brown text-xl gap-2 font-lato">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={navLinkClass}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
