"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ExternalLink, Award } from "lucide-react";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link: string;
  award?: string;
}

const publications: Publication[] = [
  {
    title: "NAPER: Fault Protection for Real-Time Resource-Constrained Deep Neural Networks",
    authors: "R.A. Rajagede, M.H. Santriaji, M.A. Fikriansyah, H.H. Nuha, Y. Fu, Y. Solihin",
    venue: "IEEE IOLTS 2025",
    year: "2025",
    link: "https://doi.org/10.1109/IOLTS65288.2025.11116827",
  },
  {
    title: "Beyond Benchmarks: Assessing Knowledge Graph Completion Methods on Non-Benchmark Employee Data",
    authors: "M.A. Fikriansyah, et al.",
    venue: "IEEE ICoDSA 2024",
    year: "2024",
    link: "https://doi.org/10.1109/ICoDSA62899.2024.10652136",
    award: "Top 4 Best Paper",
  },
  {
    title: "Public Transportation Ontology-Based Question Answering System in Bandung City using Naïve Bayes via Telegram Bot",
    authors: "M.A. Fikriansyah, et al.",
    venue: "IEEE ICoDSA 2024",
    year: "2024",
    link: "https://ieeexplore.ieee.org/abstract/document/10652020",
  },
  {
    title: "A Deep Dive into Electra: Transfer Learning for Fine-Grained Text Classification on SST-2",
    authors: "M.A. Fikriansyah, et al.",
    venue: "IEEE ISRITI 2023",
    year: "2023",
    link: "https://doi.org/10.1109/ISRITI60336.2023.10467579",
  },
  {
    title: "Comparative Analysis of Transformer Models in Object Detection and Relationship Determination on COCO Dataset",
    authors: "M.A. Fikriansyah, et al.",
    venue: "JURNAL MEDIA INFORMATIKA BUDIDARMA 2023",
    year: "2023",
    link: "https://doi.org/10.30865/mib.v8i1.7158",
  },
  {
    title: "Integrity Protection for Encrypted DNN Inference",
    authors: "M.A. Fikriansyah, et al.",
    venue: "STAIRS 2023",
    year: "2023",
    link: "https://ecai2023.eu/conf-data/ecai2023/files/STAIRS/stairs2023_09.pdf",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-900">
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
            Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            6 IEEE-indexed research papers advancing Deep Neural Networks optimization, Knowledge Graphs, and AI/ML applications
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ x: 5, scale: 1.01 }}
              className="group"
            >
              <div className="card-gradient rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary hover:border-secondary">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary p-3 group-hover:scale-110 transition-transform">
                      <FileText className="w-full h-full text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                        {pub.title}
                      </h3>
                      {pub.award && (
                        <span className="flex-shrink-0 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border border-yellow-300 dark:border-yellow-700">
                          <Award className="w-3 h-3 mr-1" />
                          {pub.award}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {pub.authors}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="font-semibold text-secondary dark:text-secondary-light">
                        {pub.venue}
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">•</span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {pub.year}
                      </span>
                      <span className="text-gray-500 dark:text-gray-500">•</span>
                      <motion.a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary dark:text-primary-light hover:underline font-medium"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        View Paper
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 card-gradient rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="text-4xl font-bold gradient-text mb-2">6</div>
            <div className="text-gray-600 dark:text-gray-400">Total Publications</div>
          </div>
          <div className="text-center p-6 card-gradient rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="text-4xl font-bold gradient-text mb-2">5</div>
            <div className="text-gray-600 dark:text-gray-400">IEEE Conferences</div>
          </div>
          <div className="text-center p-6 card-gradient rounded-xl shadow-lg border border-gray-200 dark:border-gray-800">
            <div className="text-4xl font-bold gradient-text mb-2">1</div>
            <div className="text-gray-600 dark:text-gray-400">Best Paper Award</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
