import { motion } from "motion/react";
import { ExternalLink, Github, Play } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  demoUrl,
  imageUrl,
  featured
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`backdrop-blur-md bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hover:shadow-purple-500/30 transition-all cursor-pointer ${
        featured ? "md:col-span-2 border-purple-500/30" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 border-none text-white shadow-lg">
              Featured
            </Badge>
          </div>
        )}

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent flex items-center justify-center gap-4"
        >
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-6 h-6 text-white" />
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-6 h-6 text-white" />
            </motion.a>
          )}
          {demoUrl && (
            <motion.a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 border border-white/20 hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <Play className="w-6 h-6 text-white" />
            </motion.a>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl md:text-2xl text-white mb-2">{title}</h3>
        <p className="text-white/70 mb-4 line-clamp-2">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white text-xs hover:from-blue-500/30 hover:to-purple-500/30 transition-all"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
