import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { Folder } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "Bike E-Catalogue Website",
      description: "Interactive 360° bike viewing experience with AR capabilities. Features dynamic product showcases, advanced filtering, and immersive visualization.",
      technologies: ["React", "Three.js", "WebGL", "AR.js", "CSS3"],
      githubUrl: "https://github.com/Manoj1003",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      featured: true
    },
    {
      title: "Educational Portal",
      description: "Comprehensive educational platform with faculty directory, student portal, course management, and real-time updates.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "MySQL"],
      githubUrl: "https://github.com/Manoj1003",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop"
    },
    {
      title: "Generative AI Automation Bot",
      description: "Intelligent bot for automating company event updates on SharePoint. Uses generative AI to create engaging content and streamline communications.",
      technologies: ["Python", "OpenAI API", "SharePoint API", "Azure", "Gen-AI"],
      githubUrl: "https://github.com/Manoj1003",
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      featured: true
    },
    {
      title: "Portfolio Dashboard",
      description: "Modern, responsive portfolio dashboard with real-time analytics, project showcases, and contact management.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/Manoj1003",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management platform with real-time updates, team chat, and progress tracking.",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "React"],
      githubUrl: "https://github.com/Manoj1003",
      imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop"
    },
    {
      title: "Weather Forecast App",
      description: "Beautiful weather application with 7-day forecasts, location tracking, and interactive weather maps.",
      technologies: ["React", "Weather API", "Mapbox", "CSS3"],
      githubUrl: "https://github.com/Manoj1003",
      liveUrl: "https://example.com",
      imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Folder className="w-10 h-10 text-purple-400" />
            <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A collection of my recent work showcasing fullstack development, AI integration, 
            and creative web solutions. Explore my GitHub for more projects.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Manoj1003"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white backdrop-blur-sm shadow-lg shadow-purple-500/50 border border-white/20"
          >
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
