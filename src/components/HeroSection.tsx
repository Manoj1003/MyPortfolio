import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import profileImage from "figma:asset/f03b8ac76c3e9eb8bb812215f9b031a81f81eb74.png";
import { ResumeViewer } from "./ResumeViewer";

export function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const roles = [
    "Fullstack Developer",
    "AI Enthusiast",
    "Web Developer",
    "Problem Solver",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, charIndex));
        charIndex++;
      } else {
        setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [roleIndex]);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1724715060079-8ce6c4af6e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBnYWxheHklMjBuZWJ1bGElMjBzcGFjZXxlbnwxfHx8fDE3NjIyNTczNTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Galaxy Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-purple-900/30 to-black/70" />
      </div>

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-500/30 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-purple-500/30 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1.5 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow blur-xl opacity-50" />
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm shadow-2xl shadow-purple-500/50">
              <img
                src={profileImage}
                alt="Manoj T M"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Animated Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight pb-2">
              Hi, I'm Manoj
            </h1>
            <div className="h-12 md:h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl text-white/90">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl">
              Computer Science Engineer crafting futuristic web
              experiences with AI & modern technologies
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowResume(true)}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white backdrop-blur-sm shadow-lg shadow-purple-500/50 flex items-center gap-2 border border-white/20"
            >
              <Download className="w-5 h-5" />
              View Resume
            </motion.button>

            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all shadow-lg flex items-center gap-2"
            >
              Explore Projects
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all shadow-lg flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8"
          >
            <ArrowDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </div>
      </div>

      {/* Resume Viewer Modal */}
      <ResumeViewer isOpen={showResume} onClose={() => setShowResume(false)} />
    </section>
  );
}