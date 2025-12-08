'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // ACTIVE SECTION LOGIC
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top >= -200 && top <= 200) {
            setActiveSection(link.href.replace('#', ''));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll + close mobile
  const scrollToSection = (href: string) => {
    setIsOpen(false);

    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <img
              src="/logo1.png"
              alt="Logo"
              className="h-12 w-auto drop-shadow-lg"
            />
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`relative text-sm font-medium transition ${
                    isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'
                  }`}
                  whileHover={{ scale: 1.06 }}
                >
                  {link.name}

                  {/* ACTIVE UNDERLINE */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all
                    ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                  />
                </motion.a>
              );
            })}

            {/* Resume Button */}
            <motion.div whileHover={{ scale: 1.08 }}>
              <Button
                size="sm"
                className="rounded-full bg-slate-900 text-white px-5"
                onClick={() =>
                  window.open(
                    'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69319df5ab85c6b5ebfde9b3/8a8e586fd_NIKILREDDYRESUME.pdf',
                    '_blank'
                  )
                }
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </motion.div>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden bg-white/90 backdrop-blur-xl rounded-xl mt-3 shadow-md"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`block py-2 px-3 text-lg transition 
                        ${isActive ? 'text-blue-600 font-semibold' : 'text-slate-700'}
                      `}
                      whileHover={{ x: 12 }}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full mt-4"
                  onClick={() =>
                    window.open(
                      'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_69319df5ab85c6b5ebfde9b3/8a8e586fd_NIKILREDDYRESUME.pdf',
                      '_blank'
                    )
                  }
                >
                  <Download className="w-4 h-10 mr-2" />
                  Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
