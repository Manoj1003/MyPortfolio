import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger + close icons
import profileImage from "figma:asset/f03b8ac76c3e9eb8bb812215f9b031a81f81eb74.png";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // auto close after click on mobile
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 60 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 px-6 py-3 
                 rounded-full backdrop-blur-md bg-white/10 border border-white/20 
                 shadow-2xl w-[90%] max-w-4xl"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Left Side — Profile Section */}
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full overflow-hidden border-2 
                          border-purple-400/50 shadow-lg shadow-purple-500/50"
          >
            <img
              src={profileImage}
              alt="Manoj T M"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="bg-gradient-to-r from-blue-400 to-purple-500 
                           bg-clip-text text-transparent font-semibold text-lg"
          >
            Manoj T M
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white/90 hover:text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 right-4 left-4 flex flex-col items-stretch md:hidden 
                     bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg 
                     rounded-xl p-3 space-y-2"
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className={`text-center py-3 rounded-lg transition-all font-medium ${
                activeSection === item.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
            </motion.button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}