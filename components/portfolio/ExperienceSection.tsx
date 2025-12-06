'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar } from 'lucide-react';

// Animation Variants
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const staggerParent = {
  animate: {
    transition: { staggerChildren: 0.15 }
  }
};

const experiences = [
  {
    type: "work",
    title: "Web Development Intern",
    company: "Bharat Intern",
    period: "May 2024 - June 2024",
    description: "Gained hands-on experience in modern web development practices and technologies.",
    achievements: [
      "Developed a responsive Netflix clone homepage with React and dynamic UI components",
      "Built RESTful API integrations for seamless data fetching",
      "Created an optimized personal portfolio showcasing front-end expertise",
      "Focused on user experience and performance optimization across all projects",
    ],
  },
];

const certifications = [
  { title: "Introduction to Front-End Development", issuer: "Meta/Coursera", icon: Award },
  { title: "Web Development Training", issuer: "Cognifyz Technologies", icon: Award },
  { title: "Web Development Internship", issuer: "Bharat Intern", icon: Award },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
            My Journey
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            From learning the fundamentals to building real-world applications, here's my professional growth story.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT — WORK EXPERIENCE */}
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
                className="p-2 bg-blue-100 rounded-lg"
              >
                <Briefcase className="w-5 h-5 text-blue-600" />
              </motion.div>
              Work Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{exp.title}</h4>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>

                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-1 text-sm text-slate-500 bg-slate-50 px-3 py-1 rounded-full"
                    >
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </motion.span>
                  </div>

                  <p className="text-slate-600 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-3 text-sm text-slate-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — CERTIFICATIONS */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <motion.div
                initial={{ rotate: -180 }}
                whileInView={{ rotate: 0 }}
                transition={{ duration: 0.4 }}
                className="p-2 bg-indigo-100 rounded-lg"
              >
                <Award className="w-5 h-5 text-indigo-600" />
              </motion.div>
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  initial="initial"
                  whileInView="animate"
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-5 shadow-sm cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="p-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl text-white"
                    >
                      <cert.icon className="w-5 h-5" />
                    </motion.div>

                    <div>
                      <h4 className="font-semibold text-slate-900">{cert.title}</h4>
                      <p className="text-sm text-slate-500">{cert.issuer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="initial"
              whileInView="animate"
              className="mt-10 grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white text-center"
              >
                <div className="text-4xl font-bold mb-1">3+</div>
                <div className="text-blue-100 text-sm">Projects Completed</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-6 text-white text-center"
              >
                <div className="text-4xl font-bold mb-1">3</div>
                <div className="text-indigo-100 text-sm">Certifications</div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
