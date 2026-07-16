import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Samudhra Water Solutions",
    description:
      "A modern business website for a water treatment company showcasing commercial, industrial, and residential water purification solutions with a professional responsive interface.",
    stack: ["Astro", "React", "Tailwind CSS"],
    github: "",
    demo: "https://www.samudhrawatersolutions.in",
    color: "#2563eb",
    image: "/samudhra.png",
  },
  {
    title: "Detailing Cartel",
    description:
      "A premium automotive detailing website featuring ceramic coating, PPF, paint correction, and luxury car care services with a modern responsive design.",
    stack: ["React", "Tailwind CSS"],
    github: "",
    demo: "https://detailingcartel.autos",
    color: "#111827",
    image: "/detailingcartel.png",
  },
  {
    title: "Vaidhyarmandhiram",
    description:
      "A modern Ayurveda hospital website providing treatment information, consultations, healthcare services, and patient resources.",
    stack: ["Astro", "React", "Tailwind CSS", "MongoDB"],
    github:
      "https://github.com/MuhammedSyamS/vaidhyarmandhiram",
    demo: "https://www.vaidhyarmandhiram.com",
    color: "#10b981",
    image: "/vmfavicon.jpeg",
  },
  {
    title: "HighPhaus",
    description:
      "A premium corporate website for a digital agency featuring modern UI, responsive layouts, and optimized user experience.",
    stack: ["React", "Tailwind CSS"],
    github:
      "https://github.com/Shijas786/highphaus-website",
    demo: "https://highphaus.com",
    color: "#f8fafc",
    image: "/highplogo-black.png",
  },
  {
    title: "Style With J",
    description:
      "A fashion designer portfolio website showcasing collections, services, gallery, and elegant branding with responsive design.",
    stack: ["React", "Tailwind CSS"],
    github: "",
    demo: "https://stylewithj.vercel.app"
   
    
  },
  {
    title: "VS Two Wheelers",
    description:
      "A motorcycle dealership website featuring vehicle listings, services, accessories, and customer enquiry features.",
    stack: ["React", "Tailwind CSS"],
    github: "",
    demo: "https://vstwowheerls.vercel.app"
    
   
  },
  {
    title: "Slook",
    description:
      "A complete MERN stack e-commerce platform with authentication, cart system, product management, admin dashboard, and secure checkout.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    github:
      "https://github.com/MuhammedSyamS/E-commerce-2-frontend",
    demo: "https://slook.onrender.com",
    color: "#06b6d4",
    image: "/slook.png",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-bg-card/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Selected Work
          </h2>

          <p className="max-w-3xl mx-auto text-gray-500 text-sm sm:text-base leading-7">
            A collection of real-world projects built for businesses and
            full-stack applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="glass-card group overflow-hidden rounded-3xl border border-white/5 hover:border-brand-primary/30 transition-all duration-500 hover:-translate-y-2"
            >

              <div
                className="relative aspect-[16/9] overflow-hidden flex items-center justify-center"
                style={{
                  backgroundColor: project.color,
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full transition duration-700 group-hover:scale-110 ${
                    project.title === "HighPhaus"
                      ? "object-contain p-8"
                      : "object-cover"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                <span className="absolute top-4 left-4 text-[10px] px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10 uppercase tracking-widest">
                  Real World Project
                </span>
              </div>

                            <div className="relative z-10 -mt-6 flex flex-col px-5 sm:px-6 pb-6">

                <div className="flex items-start justify-between gap-4 mb-5">

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="mt-2 h-1 w-12 bg-brand-primary rounded-full transition-transform duration-500 group-hover:scale-x-150 origin-left"></div>
                  </div>


                  <div className="flex gap-3 shrink-0">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-primary/20 transition-all"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}


                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="w-11 h-11 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all"
                    >
                      <ExternalLink size={18} />
                    </a>

                  </div>

                </div>


                <p className="text-sm sm:text-base text-gray-400 leading-7 mb-6 flex-1">
                  {project.description}
                </p>


                <div className="border-t border-white/10 pt-5">

                  <div className="flex flex-wrap gap-2">

                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;