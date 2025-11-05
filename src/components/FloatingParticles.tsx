import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export function FloatingParticles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 40,
      color: ["#3b82f6", "#8b5cf6", "#14b8a6", "#ec4899"][Math.floor(Math.random() * 4)],
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, (mousePosition.x - window.innerWidth / 2) / 50, 0],
            y: [0, (mousePosition.y - window.innerHeight / 2) / 50, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
