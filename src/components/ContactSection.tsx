import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
} from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import emailjs from "emailjs-com";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ✅ Your actual EmailJS credentials
    const serviceID = "service_tl5xzne";
    const templateID = "template_yyhpawj";
    const publicKey = "C0xYPhTtOhLWOogUy";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        toast.success(
          "✅ Message sent successfully! I’ll get back to you soon.",
        );
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error(
          "❌ Failed to send message. Please try again later.",
        );
      })
      .finally(() => setLoading(false));
  };

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Manoj1003",
      color: "hover:text-purple-400",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/manoj-tm",
      color: "hover:text-blue-400",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "mailto:Manoj.t.m.090301@gmail.com",
      color: "hover:text-pink-400",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "Manoj.t.m.090301@gmail.com",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bangalore, India",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 relative"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd
            love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl text-white mb-6">
                Send a Message
              </h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="text-white/80 mb-2 block">
                    Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    placeholder="Your name"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-white/80 mb-2 block">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    placeholder="your.email@example.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-white/80 mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    placeholder="Tell me about your project or idea..."
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-purple-500 focus:ring-purple-500/20 rounded-xl resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading}
                  className={`w-full px-8 py-4 rounded-xl text-white shadow-lg flex items-center justify-center gap-2 border border-white/20 transition-all ${
                    loading
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-500 to-purple-600 shadow-purple-500/50 hover:shadow-purple-500/70"
                  }`}
                >
                  <Send className="w-5 h-5" />
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 text-blue-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">
                        {info.label}
                      </p>
                      <p className="text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl text-white mb-6">
                Connect With Me
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white ${social.color} transition-all hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20`}
                  >
                    {social.icon}
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-2xl text-white mb-4">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Kannada", "Tamil"].map(
                  (lang, index) => (
                    <motion.span
                      key={lang}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 text-white"
                    >
                      {lang}
                    </motion.span>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}