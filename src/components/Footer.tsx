import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/10">
      {/* Animated particles */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent"
          animate={{ x: [0, 100, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent"
          animate={{ x: [0, -100, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/60 text-center md:text-left"
          >
            © 2025 Manoj T M. All rights reserved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-white/60"
          >
            <span>Built with Figma & React</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="#home"
              className="text-white/60 hover:text-white transition-colors"
            >
              Privacy
            </a>
            <span className="text-white/30">•</span>
            <a
              href="#home"
              className="text-white/60 hover:text-white transition-colors"
            >
              Terms
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
