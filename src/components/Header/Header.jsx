import ShinyText from "./shinyText";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/aboutNefer", label: "About" },
  { to: "/ourMembers", label: "Members" },
];

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-pink-950/95 backdrop-blur-md border-b border-yellow-600/20">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div className="flex justify-between items-center h-14 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <img
              className="w-8 md:w-12 transition-transform duration-300 hover:scale-110"
              src="./images/logo-2.png"
              alt="NEFER Logo"
            />
            <div className="sm:hidden">
              <ShinyText
                text="NEFER®"
                disabled={false}
                speed={3}
                className="text-white text-xl font-bold tracking-wider"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-200 hover:text-white hover:bg-pink-900/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Brand Name - Hidden on mobile */}
          <div className="hidden sm:block">
            <ShinyText
              text="NEFER®"
              disabled={false}
              speed={3}
              className="text-white text-2xl md:text-3xl font-bold tracking-wider"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-200 hover:text-white hover:bg-pink-900/50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-pink-800/50 bg-pink-950/95 py-3">
          <div className="flex flex-col items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`w-[90%] max-w-xs text-center py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-yellow-400 bg-pink-900/50"
                      : "text-gray-200 hover:text-white hover:bg-pink-900/30"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
