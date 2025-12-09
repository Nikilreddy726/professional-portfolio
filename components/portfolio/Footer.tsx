'use client';
import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-slate-950 text-white pt-24 pb-10 overflow-hidden">

      {/* WAVE TOP BORDER */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full" viewBox="0 0 1440 90" fill="none">
          <path
            fill="url(#footerGradient)"
            d="M0 40 C300 120 600 -40 900 40 C1100 90 1300 40 1440 10 V0 H0 V40 Z"
          />
          <defs>
            <linearGradient id="footerGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-600/5 blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* COLUMN 1 — LOGO + TAGLINE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-4"
        >
          <img
            src="/logo2.png"
            alt="NKR Logo"
            className="h-20 w-auto drop-shadow-lg hover:scale-105 transition"
          />

          <p className="text-slate-400 text-sm leading-relaxed">
            Crafting meaningful digital experiences with creativity,
            precision, and modern UI engineering.
          </p>
        </motion.div>

        {/* COLUMN 2 — QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-slate-400">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:text-white transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* COLUMN 3 — SOCIALS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>

          <div className="flex gap-4">
            {[Github, Linkedin, Mail].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.15, rotate: 5 }}
                className="p-3 bg-white/10 rounded-xl border border-white/20 
                           hover:bg-white/20 transition backdrop-blur"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* BOTTOM SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-14 text-center text-slate-500 text-sm"
      >
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">
          K. L. Nikil Kumar Reddy
        </span>
        . All rights reserved.
      </motion.div>

      {/* SCROLL TO TOP BUTTON 
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.15, y: -4 }}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 
                   shadow-lg hover:shadow-purple-500/40 transition text-white"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>*/}

    </footer>
  );
}
