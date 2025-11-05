import { motion } from "motion/react";
import {
  Award,
  Code,
  Palette,
  Users,
  Zap,
  Globe,
} from "lucide-react";

export function AboutSection() {
  // Split tech stack into 3 rows for different scroll directions
  const techStackRow1 = [
    "Java",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "MySQL",
    "React.js",
  ];

  const techStackRow2 = [
    "Node.js",
    "AWS",
    "Blender",
    "Figma",
    "TOC",
    "Computer Networks",
    "Computer Architecture",
  ];

  const techStackRow3 = [
    "DBMS",
    "Compiler Design",
    "Operating System",
    "UI/UX",
    "DSA",
    "Visual Studio",
    "PyCharm",
    "ServiceNow",
  ];

  const softSkills = [
    {
      icon: <Users className="w-5 h-5" />,
      label: "Collaboration",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      label: "Multitasking",
    },
    {
      icon: <Palette className="w-5 h-5" />,
      label: "Creativity",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      label: "Adaptability",
    },
  ];

  const timeline = [
    {
      year: "2020-2024",
      title: "B.Tech Computer Science",
      institution: "Presidency University",
      description: "Specialized in Fullstack Development",
    },
    {
      year: "2025",
      title: "Employee of the Month",
      institution: "Computacenter",
      description:
        "Recognized for outstanding performance and innovation",
    },
    {
      year: "2025",
      title: "Bravo Award",
      institution: "Computacenter",
      description: "Excellence in IT Support and Automation",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            B.Tech CSE from Presidency University. Multilingual.
            Award-winning IT Analyst, Automation Bot Creator,
            and Fullstack/AI Developer passionate about creating
            futuristic digital experiences.
          </p>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl text-white">
                Tech Stack
              </h3>
            </div>
            
            <div className="space-y-6">
              {/* Row 1 - Left to Right */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: ["-10%", "10%", "-10%"],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...techStackRow1, ...techStackRow1].map((tech, index) => (
                    <motion.div
                      key={`row1-${index}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex-shrink-0 px-5 py-3 rounded-xl bg-white/5 text-white shadow-lg border border-white/20 backdrop-blur-sm cursor-default"
                    >
                      <span className="whitespace-nowrap font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Row 2 - Right to Left */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: ["10%", "-10%", "10%"],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...techStackRow2, ...techStackRow2].map((tech, index) => (
                    <motion.div
                      key={`row2-${index}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex-shrink-0 px-5 py-3 rounded-xl bg-white/5 text-white shadow-lg border border-white/20 backdrop-blur-sm cursor-default"
                    >
                      <span className="whitespace-nowrap font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Row 3 - Left to Right */}
              <div className="relative overflow-hidden">
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: ["-10%", "10%", "-10%"],
                  }}
                  transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...techStackRow3, ...techStackRow3].map((tech, index) => (
                    <motion.div
                      key={`row3-${index}`}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex-shrink-0 px-5 py-3 rounded-xl bg-white/5 text-white shadow-lg border border-white/20 backdrop-blur-sm cursor-default"
                    >
                      <span className="whitespace-nowrap font-medium">{tech}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col items-center gap-3 cursor-default shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300">
                  {skill.icon}
                </div>
                <span className="text-white">
                  {skill.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Awards Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-purple-400" />
            <h3 className="text-2xl text-white">
              Education & Awards
            </h3>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-8 ${
                  index % 2 === 0
                    ? "md:pr-1/2 md:text-right"
                    : "md:pl-1/2 md:ml-auto md:text-left"
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-1/2 -translate-y-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 border-4 border-black shadow-lg shadow-purple-500/50" />

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="ml-8 md:ml-0 backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 shadow-xl hover:shadow-purple-500/20 transition-all"
                >
                  <span className="text-blue-400">
                    {item.year}
                  </span>
                  <h4 className="text-xl text-white mt-1">
                    {item.title}
                  </h4>
                  <p className="text-purple-300">
                    {item.institution}
                  </p>
                  <p className="text-white/70 mt-2 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}