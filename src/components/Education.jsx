import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "BCA (Bachelor of Computer Applications)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    status: "Currently Pursuing",
  },
  {
    degree: "Computer Science",
    institution: "St Mary's Senior Higher Secondary",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="section-padding overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Education
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto">
            My academic background and qualifications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-6 sm:space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                relative
                overflow-hidden
                glass-card
                border-white/5
                hover:border-brand-primary/30
                transition-colors
                p-5
                sm:p-6
                lg:p-8
              "
            >
              {/* Left Border */}
              <div className="absolute left-0 top-0 h-full w-1 bg-brand-primary/50 group-hover:bg-brand-primary transition-colors"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
                    {item.degree}
                  </h3>

                  <p className="text-sm sm:text-base text-brand-secondary font-medium">
                    {item.institution}
                  </p>
                </div>

                {/* Status */}
                <div className="flex md:justify-end">
                  <span
                    className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      text-xs
                      sm:text-sm
                      text-gray-300
                      whitespace-nowrap
                    "
                  >
                    {item.status}
                  </span>
                </div>
              </div>

              {item.description && (
                <p className="mt-5 text-sm sm:text-base text-gray-400 leading-7">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;