"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Database,
  Cloud,
  Brain,
  Layout,
  Server,
} from "lucide-react";

type Category = "All" | "Backend" | "Frontend" | "Database" | "Cloud & DevOps" | "AI/ML";

interface Tech {
  name: string;
  category: Exclude<Category, "All">;
  icon: string;
  color: string;
}

const categories: { name: Category; icon: any }[] = [
  { name: "All", icon: Code2 },
  { name: "Backend", icon: Server },
  { name: "Frontend", icon: Layout },
  { name: "Database", icon: Database },
  { name: "Cloud & DevOps", icon: Cloud },
  { name: "AI/ML", icon: Brain },
];

const techStack: Tech[] = [
  // Backend
  { name: "C#", category: "Backend", icon: "csharp", color: "from-purple-500 to-purple-700" },
  { name: ".NET Core", category: "Backend", icon: "dotnet", color: "from-indigo-500 to-indigo-700" },
  { name: "ASP.NET", category: "Backend", icon: "dotnet", color: "from-blue-500 to-blue-700" },
  { name: "Python", category: "Backend", icon: "python", color: "from-blue-400 to-yellow-500" },
  { name: "Entity Framework", category: "Backend", icon: "dotnet", color: "from-violet-500 to-violet-700" },

  // Frontend
  { name: "React", category: "Frontend", icon: "react", color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", category: "Frontend", icon: "nextjs", color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", category: "Frontend", icon: "typescript", color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", category: "Frontend", icon: "javascript", color: "from-yellow-400 to-yellow-600" },

  // Database
  { name: "SQL Server", category: "Database", icon: "mssql", color: "from-red-500 to-red-700" },
  { name: "MySQL", category: "Database", icon: "mysql", color: "from-blue-400 to-blue-600" },
  { name: "PostgreSQL", category: "Database", icon: "postgresql", color: "from-blue-600 to-blue-800" },

  // Cloud & DevOps
  { name: "Azure", category: "Cloud & DevOps", icon: "azure", color: "from-blue-500 to-blue-700" },
  { name: "Docker", category: "Cloud & DevOps", icon: "docker", color: "from-blue-400 to-cyan-500" },
  { name: "Git", category: "Cloud & DevOps", icon: "git", color: "from-orange-500 to-red-600" },
  { name: "GitHub", category: "Cloud & DevOps", icon: "github", color: "from-gray-700 to-gray-900" },
  { name: "Selenium", category: "Cloud & DevOps", icon: "selenium", color: "from-green-500 to-green-700" },

  // AI/ML
  { name: "PyTorch", category: "AI/ML", icon: "pytorch", color: "from-orange-500 to-red-600" },
  { name: "TensorFlow", category: "AI/ML", icon: "tensorflow", color: "from-orange-400 to-orange-600" },
  { name: "OpenCV", category: "AI/ML", icon: "opencv", color: "from-green-500 to-blue-500" },
  { name: "scikit-learn", category: "AI/ML", icon: "sklearn", color: "from-orange-400 to-blue-500" },
  { name: "OpenAI", category: "AI/ML", icon: "openai", color: "from-green-400 to-cyan-500" },
];

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredTech =
    selectedCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === selectedCategory);

  return (
    <section id="tech-stack" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology expertise spanning backend development, frontend frameworks, databases, cloud infrastructure, and AI/ML
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === cat.name
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span>{cat.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Tech Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {filteredTech.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5, y: -5 }}
                className="group"
              >
                <div className="card-gradient rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 flex flex-col items-center text-center h-full">
                  {/* Tech Icon/Badge */}
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${tech.color} p-4 mb-4 group-hover:scale-110 transition-transform flex items-center justify-center`}
                  >
                    <span className="text-white font-bold text-lg">
                      {tech.name.substring(0, 2).toUpperCase()}
                    </span>
                  </div>

                  {/* Tech Name */}
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {tech.name}
                  </h3>

                  {/* Category Badge */}
                  <span className="mt-2 px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary dark:text-primary-light">
                    {tech.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Count Display */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-gray-600 dark:text-gray-400"
        >
          Showing {filteredTech.length} {selectedCategory !== "All" && selectedCategory.toLowerCase()}
          {filteredTech.length !== 1 ? " technologies" : " technology"}
        </motion.div>
      </div>
    </section>
  );
}
