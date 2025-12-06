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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-slate-200/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* 🔥 Animated Logo */}
          <motion.a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className="flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.08 }}
          >
            <img
              src="/logo1.png"
              alt="Nikil Logo"
              className="h-12 w-auto object-contain drop-shadow-lg hover:drop-shadow-2xl transition-all"
            />
          </motion.a>

          {/* 🔷 Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="text-[15px] text-slate-600 hover:text-slate-900 font-medium relative group"
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}

            {/* Resume Button */}
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white rounded-full px-6 shadow-md hover:shadow-xl transition-all"
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
            </motion.div>
          </div>

          {/* 📱 Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </motion.button>
        </div>

        {/* 📱 Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="block text-slate-600 hover:text-slate-900 py-2 text-lg"
                    whileHover={{ x: 10 }}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <Button
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-full mt-4 shadow-lg hover:shadow-xl transition-all"
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
