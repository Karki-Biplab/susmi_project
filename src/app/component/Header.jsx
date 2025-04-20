'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link'; // If you're using Next.js routing

const Header = () => {
  const [hide, setHide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  let lastScrollY = 0;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setHide(currentScrollY > lastScrollY);
    lastScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`fixed top-0 left-0 w-full bg-[var(--theme-color)] text-[var(--theme-text)] shadow-md z-50 transition-transform duration-300 ${hide ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="w-full py-2 px-4 flex justify-between items-center">
        {/* Logo that reloads the page */}
        <a href="/" className="flex items-center space-x-2 cursor-pointer">
          <img src="/logo.png" alt="Profile" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-bold">Susmita Yogi</h1>
        </a>

        {/* Desktop Nav */}
        <nav className="space-x-4 hidden md:flex">
          <a href="#about" className="hover:underline transition-all">About</a>
          <a href="#projects" className="hover:underline transition-all">Projects</a>
          <a href="#contact" className="hover:underline transition-all">Contact</a>
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="#about" className="block text-sm hover:underline">About</a>
          <a href="#projects" className="block text-sm hover:underline">Projects</a>
          <a href="#contact" className="block text-sm hover:underline">Contact</a>
        </div>
      )}
    </div>
  );
};

export default Header;
