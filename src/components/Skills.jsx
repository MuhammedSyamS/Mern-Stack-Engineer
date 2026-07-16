import React from "react";
import { motion } from "framer-motion";
import {
  FiLayout,
  FiServer,
  FiTerminal,
  FiShield,
  FiSettings,
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend",
    icon: <FiLayout className="text-brand-secondary" />,
    skills: [
      "Astro",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
      "Responsive Web Design",
      "State Management",
    ],
  },

  {
    title: "Backend & Databases",
    icon: <FiServer className="text-brand-primary" />,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose ORM",
      "REST APIs",
      "CRUD Operations",
    ],
  },

  {
    title: "APIs & Security",
    icon: <FiShield className="text-red-400" />,
    skills: [
      "RESTful API Design",
      "JWT Authentication",
      "bcrypt.js",
      "Role-Based Access Control (RBAC)",
    ],
  },

  {
    title: "Tools & Deployment",
    icon: <FiTerminal className="text-gray-400" />,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Render",
      "Vercel",
      "Cloudinary",
      "Multer",
      "npm",
    ],
  },

  {
    title: "Core Engineering",
    icon: <FiSettings className="text-brand-secondary" />,
    skills: [
      "Performance Optimization",
      "Cross-Browser Compatibility",
      "Agile/Scrum Methodologies",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technical Skills
          </h2>

          <p className="text-sm sm:text-base text-gray-500 italic">
            "Technologies and engineering practices used across my real-world projects."
          </p>
        </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="glass-card group border border-white/5 hover:border-brand-primary/30 transition-all duration-300"
            >

              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>


              <h3 className="text-xl font-bold mb-6 text-left">
                {category.title}
              </h3>


              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="
                    px-3 py-1.5
                    bg-white/5
                    border border-white/10
                    rounded-full
                    text-xs sm:text-sm
                    text-gray-400
                    hover:text-white
                    hover:border-brand-primary/50
                    transition-all
                    cursor-default
                    "
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;