'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

/* -----------------------------------------
   🎨 TECHNOLOGY → COLOR MAP
------------------------------------------ */
const techColors: Record<string, string> = {
  "React": "bg-[#61DAFB]/20 text-[#61DAFB] border-[#61DAFB]/40",
  "Next.js": "bg-black/20 text-black border-black/30",
  "Tailwind": "bg-[#38BDF8]/20 text-[#38BDF8] border-[#38BDF8]/40",
  "Framer Motion": "bg-[#e83ff7]/20 text-[#e83ff7] border-[#e83ff7]/40",
  "JavaScript": "bg-[#F7DF1E]/20 text-[#F7DF1E] border-[#F7DF1E]/40",
  "HTML5": "bg-[#E34F26]/20 text-[#E34F26] border-[#E34F26]/40",
  "CSS3": "bg-[#1572B6]/20 text-[#1572B6] border-[#1572B6]/40",
  "Python": "bg-[#306998]/20 text-[#306998] border-[#306998]/40",
  "Tkinter": "bg-[#FFB400]/20 text-[#FFB400] border-[#FFB400]/40",
  "MySQL": "bg-[#00758F]/20 text-[#00758F] border-[#00758F]/40",
};

/* -----------------------------------------
   🚀 PROJECTS DATA
------------------------------------------ */
const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "A responsive portfolio with animations, SEO optimization & modern UI.",
    tech: ["React", "Next.js", "Tailwind", "Framer Motion"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format",
    github: "#",
    live: "#"
  },
  {
    title: "Netflix Clone - Homepage",
    desc: "A pixel-perfect Netflix UI with API-ready structure & animations.",
    tech: ["React", "CSS3", "JavaScript"],
    img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=900&auto=format",
    github: "#",
    live: "#"
  },
  {
    title: "GUI Supermarket Billing System",
    desc: "A desktop billing app with Tkinter UI & MySQL database integration.",
    tech: ["Python", "Tkinter", "MySQL"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&auto=format",
    github: "#",
    live: null
  }
];

/* -----------------------------------------
   🟦 CARD VARIANTS
------------------------------------------ */
const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.95 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing modern UI, animations and real-world problem solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{
                scale: 1.07,
                rotate: 0.5,
                y: -10,
                boxShadow: "0px 20px 50px rgba(0,0,0,0.15)",
              }}
              className="relative backdrop-blur-xl bg-white/10 border border-white/20 
                         rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl 
                         transition-all cursor-pointer group"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  {p.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{p.desc}</p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`
                        px-3 py-1 text-xs font-medium rounded-full 
                        border backdrop-blur-lg shadow-sm
                        ${techColors[t] || "bg-white/20 text-slate-700 border-white/30"}
                      `}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  {p.github && (
                    <motion.a
                      href={p.github}
                      target="_blank"
                      whileHover={{ scale: 1.2 }}
                      className="p-2 rounded-full bg-white/40 border border-white/20 
                                 backdrop-blur-md hover:bg-white/60 transition"
                    >
                      <Github className="w-5 h-5 text-slate-700" />
                    </motion.a>
                  )}
                  {p.live && (
                    <motion.a
                      href={p.live}
                      target="_blank"
                      whileHover={{ scale: 1.2 }}
                      className="p-2 rounded-full bg-white/40 border border-white/20 
                                 backdrop-blur-md hover:bg-white/60 transition"
                    >
                      <ExternalLink className="w-5 h-5 text-slate-700" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Glow Hover Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-br 
                           from-blue-500/20 to-purple-500/20 opacity-0 pointer-events-none"
                whileHover={{ opacity: 1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
