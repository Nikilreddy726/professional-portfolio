'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    institution: "PES University",
    degree: "Master's Degree in Computer Applications",
    period: "Sept 2025 - Present",
    grade: "N/A",
    icon: GraduationCap,
  },
  {
    institution: "JAIN (Deemed-To-Be-University)",
    degree: "Bachelor's Degree in Computer Applications",
    period: "Sept 2022 - May 2025",
    grade: "8.09 CGPA",
    icon: GraduationCap,
  },
  {
    institution: "Sri Chaitanya Junior College",
    degree: "11th & 12th Grade",
    period: "2020 - 2022",
    grade: "82.50%",
    icon: Award,
  },
  {
    institution: "Shree Lakshmi EM High School",
    degree: "10th Grade",
    period: "2019 - 2020",
    grade: "80.05%",
    icon: Award,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">

      {/* Soft glowing orb background */}
      <div className="absolute top-10 -left-20 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            Turning Ideas Into Reality
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm a passionate Computer Science student with a love for building 
            beautiful, functional web applications. I specialize in crafting 
            responsive, user-centric interfaces with modern development practices.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-10 shadow-sm
              hover:shadow-xl transition-all border border-slate-200/60 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Who I Am</h3>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Hey there! I'm <strong className="text-slate-900">K.L Nikil Kumar Reddy</strong>, 
                a Computer Science student who believes that great software begins 
                with clean design and thoughtful execution.
              </p>

              <p>
                My web development journey transformed from curiosity to passion. 
                I build modern, user-friendly applications with performance and 
                experience at the core.
              </p>

              <p>
                When I'm not coding, I explore emerging tech, improve my UI/UX 
                design skills, and contribute to meaningful digital projects.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span>India</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </motion.div>

          {/* Education timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Education</h3>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="relative pl-10 border-l-2 border-slate-200"
                >
                  {/* Animated timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.12, type: "spring" }}
                    className="absolute -left-3 top-0 w-7 h-7 rounded-full
                      bg-gradient-to-br from-blue-600 to-indigo-600
                      flex items-center justify-center shadow-md"
                  >
                    <edu.icon className="w-3 h-3 text-white" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 12px 30px rgba(0,0,0,0.08)" }}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 transition-all"
                  >
                    <h4 className="font-semibold text-slate-900">{edu.institution}</h4>
                    <p className="text-slate-600 text-sm mt-1">{edu.degree}</p>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-xs text-slate-500">{edu.period}</span>

                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
