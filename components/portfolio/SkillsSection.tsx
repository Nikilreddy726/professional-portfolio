'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    color: "from-blue-500 to-blue-600",
    skills: [
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "React", level: 70 },
      { name: "Responsive Design", level: 90 },
    ],
  },
  {
    title: "Backend & Database",
    color: "from-indigo-500 to-indigo-600",
    skills: [
      { name: "Python", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "SQLite", level: 70 },
      { name: "RESTful APIs", level: 65 },
    ],
  },
  {
    title: "Tools & Technologies",
    color: "from-violet-500 to-violet-600",
    skills: [
      { name: "Git", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Netlify", level: 85 },
      { name: "Tkinter", level: 70 },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "UI/UX Design",
  "Performance Optimization",
  "SEO Best Practices",
  "Version Control",
  "Continuous Learning",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-slate-50 relative overflow-hidden">

      {/* Floating Glow Background */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
            My Skills
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            What I Bring to the Table
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            A blend of technical expertise and creativity to build powerful and elegant digital experiences.
          </p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 
                         hover:shadow-xl hover:-translate-y-1 transition-all 
                         duration-300 relative overflow-hidden"
            >
              {/* Neon Glow Border */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 hover:opacity-10 transition-opacity bg-gradient-to-r ${category.color}`} />

              {/* Category Title */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-6 shadow`}>
                <Sparkles className="w-4 h-4 animate-pulse" />
                {category.title}
              </div>

              {/* Skill Bars */}
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium text-sm">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Core Competencies</h3>

          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.08, boxShadow: "0 0 12px rgba(0,0,255,0.2)" }}
                className="px-5 py-2.5 bg-white rounded-full text-slate-700 font-medium 
                           text-sm shadow-sm border border-slate-200 hover:border-blue-300 
                           transition-all"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
