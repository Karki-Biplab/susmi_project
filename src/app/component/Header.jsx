'use client';
import { useEffect, useState } from 'react';

const Header = () => {
  const [hide, setHide] = useState(false);
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

  return (
    <div className={`fixed top-0 left-0 w-full bg-[var(--theme-color)] text-[var(--theme-text)] shadow-md z-50 transition-transform duration-300 ${hide ? '-translate-y-full' : 'translate-y-0'}`}>
    <div className="w-full px-3 py-2 flex justify-between items-center">
        {/* Logo or Profile Image */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Profile" className="w-10 h-10 rounded-full" />
          <h1 className="text-xl font-bold">Susmita Yogi</h1>
        </div>

        {/* Navigation */}
        <nav className="space-x-4 hidden md:flex">
          <a href="#about" className="hover:underline transition-all">About</a>
          <a href="#projects" className="hover:underline transition-all">Projects</a>
          <a href="#contact" className="hover:underline transition-all">Contact</a>
        </nav>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button className="text-xl">☰</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
