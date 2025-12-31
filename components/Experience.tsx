"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  achievements: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Software Developer",
    company: "Medco E&P Indonesia",
    location: "South Jakarta, Indonesia",
    period: "June 2024 - Present",
    current: true,
    achievements: [
      "Designed and implemented comprehensive SSO authentication system integrating LDAP, Azure AD OAuth 2.0, and Google Authenticator with conditional multi-factor authentication flows",
      "Built dual OCR validation systems: custom Python computer vision model for KTP data extraction (PDP compliance) and OpenAI API-integrated invoice processing system",
      "Successfully led migration of 15+ legacy ASP.NET WebForms VB applications to modern ASP.NET MVC 4.8 C# architecture with performance optimization",
      "Developed standardized enterprise project templates (ASP.NET MVC, WCF Services, Console Applications)",
      "Created comprehensive automated testing framework using Selenium with continuous integration practices",
    ],
    tech: ["C#", "ASP.NET MVC", "WCF", "Azure AD", "LDAP", "Python", "OpenAI API", "SQL Server", "Docker", "Selenium"],
  },
  {
    title: "Research Assistant",
    company: "University of Central Florida",
    location: "Orlando, Florida (Remote)",
    period: "November 2022 - May 2024",
    current: false,
    achievements: [
      "Co-developed NAPER (Neural Architecture Performance Enhancement in Resource-constrained environments), achieving 36.5% faster inference with 5.6% higher accuracy",
      "Contributed to 6 IEEE-indexed research papers advancing efficient DNN optimization for edge computing",
      "Delivered 2 presentations at international conferences sharing findings with global research community",
      "Implemented methodologies for bit flip attack analysis in DNNs with fault protection mechanisms",
    ],
    tech: ["Python", "PyTorch", "TensorFlow", "CUDA", "Edge Computing"],
  },
  {
    title: "Laboratory Assistant - IoT Studio",
    company: "Telkom University",
    location: "Bandung, Indonesia",
    period: "May 2023 - January 2024",
    current: false,
    achievements: [
      "Developed and coordinated NodeMCU Study Group program with structured learning paths",
      "Created comprehensive documentation becoming standard references for new members",
      "Managed laboratory finances and inventory as Treasurer",
    ],
    tech: ["NodeMCU", "IoT", "Arduino", "ESP8266"],
  },
  {
    title: "Data Collection Analyst",
    company: "Telkom University (Career & Alumni)",
    location: "Bandung, Indonesia",
    period: "July 2023 - August 2023",
    current: false,
    achievements: [
      "Engineered automated web scraping solution collecting data from 5,000+ alumni using Python and Selenium",
      "Processed and structured 50,000+ data points of alumni career information",
      "Created interactive dashboards visualizing career trajectories and employment trends",
    ],
    tech: ["Python", "Selenium", "Pandas", "Data Visualization"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
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
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 md:px-8">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card-gradient rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800"
                  >
                    {/* Current Badge */}
                    {exp.current && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
                        Current Position
                      </span>
                    )}

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-primary dark:text-primary-light font-semibold mb-1">
                      {exp.company}
                    </p>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {exp.location}
                    </p>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span className="text-primary mr-2 flex-shrink-0 mt-1">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary dark:text-primary-light"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 items-center justify-center">
                  <div className="w-12 h-12 bg-white dark:bg-gray-900 border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
