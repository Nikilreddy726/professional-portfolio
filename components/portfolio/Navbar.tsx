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

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // SCROLL FIX — Close menu FIRST then scroll
  const scrollToSection = (href: string) => {
    setIsOpen(false); // close menu instantly

    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50); // small delay ensures menu is closed
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
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
            className="flex items-center gap-3"
          >
            <img
              src="/logo1.png"
              alt="Logo"
              className="h-12 w-auto object-contain drop-shadow-lg"
            />
          </motion.a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-sm text-slate-700 hover:text-blue-600 font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}

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
          </div>

          {/* MOBILE MENU BUTTON */}
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
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="block text-slate-700 py-2 px-3 text-lg hover:text-blue-600 transition"
                  >
                    {link.name}
                  </a>
                ))}

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
                  Download Resume
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
