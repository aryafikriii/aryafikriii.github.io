"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Bachelor's Degree in Informatics",
    institution: "Universitas Telkom",
    location: "Bandung, Indonesia",
    period: "September 2020 - January 2024",
    gpa: "3.94/4.0",
    highlights: [
      "Graduated with Cum Laude honors",
      "Research focus on Deep Neural Networks and AI/ML",
      "6 IEEE-indexed publications",
      "Top 4 Best Paper Award at ICoDSA 2024",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    degree: "Exchange Student - Biotechnology and Bioinformatics",
    institution: "Multimedia University",
    location: "Malaysia",
    period: "April 2021 - June 2021",
    highlights: [
      "International exchange program",
      "Interdisciplinary studies in biotechnology",
      "Cross-cultural academic experience",
    ],
    color: "from-purple-500 to-pink-500",
  },
];

const certifications = [
  {
    name: "Google Data Analytics Specialization",
    issuer: "Coursera",
    year: "2023",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "IBM Data Science",
    issuer: "Coursera",
    year: "2023",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "IT Support Google Specialization",
    issuer: "Coursera",
    year: "2023",
    color: "from-orange-500 to-red-500",
  },
];

const honors = [
  {
    title: "Top 4 Best Paper",
    event: "IEEE ICoDSA 2024",
    description: "Recognition for outstanding research contribution in Knowledge Graph methods",
  },
  {
    title: "Garuda Academic Research and Excellence Awardee",
    event: "Indonesian Ministry of Education",
    description: "Prestigious scholarship awarded in 2022 & 2023 for research excellence",
  },
];

export default function Education() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Education & Honors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Academic Background
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="card-gradient rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-full">
                  {/* Color Bar */}
                  <div className={`h-1 bg-gradient-to-r ${edu.color} rounded-full mb-4`} />

                  {/* Icon & Period */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${edu.color} p-3 group-hover:scale-110 transition-transform`}>
                      <GraduationCap className="w-full h-full text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </div>

                  {/* Degree */}
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>

                  {/* Institution */}
                  <p className="text-primary dark:text-primary-light font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {edu.location}
                  </p>

                  {/* GPA */}
                  {edu.gpa && (
                    <div className="mb-4 inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg">
                      <span className="text-accent font-bold text-lg">GPA: {edu.gpa}</span>
                    </div>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary mr-2 flex-shrink-0 mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Honors & Awards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Honors & Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {honors.map((honor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="card-gradient rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-yellow-500">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 p-3 flex items-center justify-center">
                        <Award className="w-full h-full text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                        {honor.title}
                      </h4>
                      <p className="text-sm text-primary dark:text-primary-light font-semibold mb-2">
                        {honor.event}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {honor.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, rotate: 2 }}
              >
                <div className="card-gradient rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 text-center h-full flex flex-col">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${cert.color} p-4 mx-auto mb-4 flex items-center justify-center`}>
                    <Award className="w-full h-full text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex-1">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-primary dark:text-primary-light font-semibold mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{cert.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
