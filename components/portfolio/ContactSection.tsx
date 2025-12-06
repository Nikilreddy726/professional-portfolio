'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, User } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const contactInfo = [
    { icon: Mail, label: "Email", value: "nikilreddy317@gmail.com", href: "mailto:nikilreddy317@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8341965070", href: "tel:+918341965070" },
    { icon: MapPin, label: "Location", value: "India", href: null }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((res) => setTimeout(res, 1000));
    alert("Message sent! I will get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-sm tracking-wider uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Let's Connect & Collaborate
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Have a project in mind? Want to work together? Feel free to reach out—I'm always open to new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative rounded-3xl p-8 text-white bg-gradient-to-br from-slate-900 to-slate-800 shadow-xl overflow-hidden"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-40 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-8">
                Reach out through any of the platforms below. I’ll respond as soon as possible.
              </p>

              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {info.href ? (
                      <a href={info.href} className="flex items-center gap-4 group">
                        <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition">
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">{info.label}</div>
                          <div className="font-medium group-hover:text-blue-400 transition">{info.value}</div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-xl">
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm text-slate-400">{info.label}</div>
                          <div className="font-medium">{info.value}</div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* SOCIAL ICONS */}
              <div>
                <p className="text-sm text-slate-400 mb-3">Follow Me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 relative overflow-hidden"
          >
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 pointer-events-none" />

            {/* INPUT – NAME */}
            <div className="relative mb-6">
              <User className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12 w-full pl-12 pr-4 border rounded-xl bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Your Name"
              />
            </div>

            {/* INPUT – EMAIL */}
            <div className="relative mb-6">
              <Mail className="absolute left-4 top-3.5 text-slate-400 w-5 h-5" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12 w-full pl-12 pr-4 border rounded-xl bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Email Address"
              />
            </div>

            {/* TEXTAREA */}
            <div className="relative mb-6">
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 border rounded-xl bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder="Your Message"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={sending}
              className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
            >
              {sending ? "Sending..." : <>Send Message <Send className="w-4 h-4" /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
