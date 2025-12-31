"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, CheckCircle } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  tech: string[];
  gradient: string;
  github?: string; // Optional: Only for projects with public GitHub
}

const projects: Project[] = [
  {
    id: "bpm-modernization",
    title: "BPM Template Modernization",
    description:
      "Enterprise-scale migration from .NET Framework 4.8 to .NET 8 LTS for Linux containerization",
    features: [
      "Migration to ASP.NET Core 8 LTS with Docker containerization",
      "Architecture modernization with dependency injection and async/await patterns",
      "Configuration migration from XML to JSON",
      "Performance optimization for containerized environments",
    ],
    tech: ["ASP.NET Core 8", "C#", "Docker", "Linux Containers", "Entity Framework Core"],
    gradient: "from-blue-500 to-cyan-500",
    // NO github URL - enterprise/private project
  },
  {
    id: "ai-document-catalog",
    title: "AI-Powered Document Catalog System",
    description:
      "Intelligent metadata extraction using OpenAI Vision API",
    features: [
      "Extracts metadata from PDF documents (invoices, journals, settlements)",
      "Processes up to 3 pages per document with batch processing capability",
      "Automated email notifications with Excel export functionality",
      "Integration with existing document management system",
    ],
    tech: ["ASP.NET MVC", "C#", "OpenAI Vision API", "SQL Server", "Windows Task Scheduler"],
    gradient: "from-purple-500 to-pink-500",
    // NO github URL - enterprise/private project
  },
  {
    id: "sso-authentication",
    title: "Enterprise SSO Authentication System",
    description:
      "Comprehensive single sign-on with LDAP, Azure AD OAuth 2.0, and MFA",
    features: [
      "Multi-provider authentication supporting LDAP and Azure AD OAuth 2.0",
      "Conditional multi-factor authentication with Google Authenticator",
      "Automatic user type detection and RBAC implementation",
      "Secure session management and token-based authentication",
    ],
    tech: ["C#", "ASP.NET MVC", "LDAP", "Azure AD OAuth 2.0", "Google Authenticator", "WCF"],
    gradient: "from-green-500 to-emerald-500",
    // NO github URL - enterprise/private project
  },
  {
    id: "dual-ocr",
    title: "Dual OCR Validation Systems",
    description:
      "Custom computer vision models for KTP extraction and invoice processing",
    features: [
      "Python computer vision model for Indonesian ID card (KTP) data extraction",
      "PDP (Personal Data Protection) compliance implementation",
      "OpenAI API integration for invoice processing automation",
      "Reduced manual data entry errors by 85%",
    ],
    tech: ["Python", "OpenCV", "OpenAI API", "Computer Vision", "OCR"],
    gradient: "from-orange-500 to-red-500",
    // NO github URL - enterprise/private project
  },
  {
    id: "naper",
    title: "NAPER: DNN Fault Protection",
    description:
      "Neural Architecture Performance Enhancement for edge computing",
    features: [
      "36.5% faster inference speed on edge devices",
      "5.6% higher accuracy compared to conventional approaches",
      "Published in IEEE IOLTS 2025",
      "Fault protection mechanisms for resource-constrained environments",
    ],
    tech: ["Python", "PyTorch", "CUDA", "Edge Computing", "Deep Neural Networks"],
    gradient: "from-indigo-500 to-purple-500",
    github: "https://github.com/ARPERS/NAPER", // PUBLIC GitHub repository
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Enterprise-scale applications and research projects showcasing expertise in system modernization, AI integration, and performance optimization
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="card-gradient rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                {/* Gradient Header */}
                <div
                  className={`h-2 bg-gradient-to-r ${project.gradient}`}
                />

                <div className="p-6 flex-1 flex flex-col">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4 flex-1">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-medium text-primary dark:text-primary-light"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-400">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* CRITICAL: Conditional Button Logic */}
                  {/* ONLY show "View Repository" button if project has github URL (NAPER only) */}
                  {/* NEVER show "Live Demo" button for ANY project */}
                  {/* Enterprise projects (no github URL) have NO buttons at all */}
                  {project.github && (
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm font-medium w-full justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>View Repository</span>
                      </motion.a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
