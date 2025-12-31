"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, FileText } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    label: "Years Experience",
    value: "1+",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    label: "IEEE Publications",
    value: "6",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: GraduationCap,
    label: "GPA",
    value: "3.94",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Award,
    label: "Projects Completed",
    value: "15+",
    color: "from-orange-500 to-red-500",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="card-gradient rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Professional Journey
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Software Developer at <span className="font-semibold text-primary">MedcoEnergi E&P Indonesia</span> with 1+ years of enterprise application development experience, specializing in system modernization and digital transformation within the oil & gas industry.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My expertise encompasses comprehensive authentication systems, AI-powered OCR solutions, legacy system migration, and standardized development frameworks using <span className="font-semibold">ASP.NET Core</span>, <span className="font-semibold">C#</span>, <span className="font-semibold">Python</span>, and enterprise integration platforms.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I consistently deliver innovative solutions including single sign-on authentication systems with multi-factor authentication, computer vision-based document processing, and automated testing frameworks that enhance business processes and operational efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Academic Excellence
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Computer Science graduate from <span className="font-semibold">Telkom University</span> with a stellar <span className="font-semibold text-accent">GPA of 3.94/4.0</span>, demonstrating strong academic foundation and dedication to excellence.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Research contributions to Deep Neural Networks optimization for edge computing, achieving <span className="font-semibold text-secondary">36.5% faster inference</span> while maintaining <span className="font-semibold text-secondary">5.6% higher accuracy</span>. Published <span className="font-semibold">6 IEEE-indexed research papers</span> advancing efficient DNN optimization.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "ASP.NET Core",
                "C#",
                "Python",
                "AI/ML",
                "PyTorch",
                "Azure",
                "Docker",
                "React",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-medium text-primary dark:text-primary-light"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
