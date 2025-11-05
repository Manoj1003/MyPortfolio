import { motion } from "motion/react";
import { Briefcase, Award, Trophy, Rocket } from "lucide-react";
import { Badge } from "./ui/badge";

export function ExperienceSection() {
  const experiences = [
    {
      period: "2024 - 2025",
      role: "IT Analyst",
      company: "Computacenter",
      achievements: [
        "Employee of the Month Award - Outstanding performance and innovation",
        "Bravo Award - Excellence in IT Support and Automation",
        "Developed Generative AI Bot for SharePoint event automation",
        "Led automation initiatives reducing manual work by 40%"
      ],
      technologies: ["Python", "SharePoint", "Azure", "Gen-AI", "PowerShell"],
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      period: "2025",
      role: "Hackathon",
      company: "Computacenter Internal Hackathon",
      achievements: [
        "First place in company-wide hackathon",
        "Built Generative AI automation bot",
        "Streamlined internal communications workflow",
        "Presented solution to senior leadership"
      ],
      technologies: ["Gen-AI", "Python", "SharePoint API", "Azure"],
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      period: "2023",
      role: "Web Development Intern",
      company: "YHills",
      achievements: [
        "Developed responsive web applications",
        "Collaborated with design team on UI/UX improvements",
        "Implemented modern web technologies and frameworks",
        "Optimized website performance and SEO"
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Bootstrap"],
      icon: <Rocket className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-10 h-10 text-blue-400" />
            <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            My professional journey in technology, innovation, and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transform -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              } md:w-full`}
            >
              {/* Timeline Node */}
              <div className={`hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${exp.color} p-1 shadow-2xl z-10`}>
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-white">
                  {exp.icon}
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl hover:shadow-purple-500/30 transition-all ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                {/* Header */}
                <div className={`flex items-start gap-4 mb-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className={`md:hidden p-4 rounded-2xl bg-gradient-to-r ${exp.color}`}>
                    {exp.icon}
                  </div>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <Badge className={`mb-2 bg-gradient-to-r ${exp.color} border-none text-white shadow-lg`}>
                      {exp.period}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl text-white mb-1">{exp.role}</h3>
                    <p className="text-lg text-purple-300">{exp.company}</p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.achievements.map((achievement, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-white/80 flex items-start gap-2"
                      >
                        <span className={`${index % 2 === 0 ? "md:order-2" : ""} text-purple-400 flex-shrink-0`}>
                          •
                        </span>
                        <span className="flex-1">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
