import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub size={26} />,
      link: "https://github.com/simaruhussen",
      label: "GitHub",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <FaLinkedin size={26} />,
      // Replace this placeholder with your actual LinkedIn URL if available
      link: "https://www.linkedin.com/in/simaruhussen",
      label: "LinkedIn",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      icon: <FaEnvelope size={26} />,
      link: "mailto:simaruhussen@gmail.com",
      label: "Email",
      target: "_self",
      rel: undefined,
    },
  ];

  return (
    <motion.footer
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full bg-gradient-to-b from-gray-50 to-white text-gray-800 border-t border-gray-200 shadow-inner"
    >
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Developer Info */}
        <div className="text-center sm:text-left space-y-2">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-sky-600 to-emerald-500 bg-clip-text text-transparent">
            Simaru Hussen
          </h2>
          <p className="text-sm text-gray-600 tracking-wide">
            Full Stack Developer — React · Next.js · Django · Node.js
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target={item.target}
              rel={item.rel}
              whileHover={{ scale: 1.15, y: -3 }}
              className="text-gray-500 hover:text-sky-600 transition-colors duration-300"
              aria-label={item.label}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Bottom Section */}
      <div className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-gray-700 hover:text-sky-600 transition-colors">
          Simaru Hussen
        </span>
        . All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
