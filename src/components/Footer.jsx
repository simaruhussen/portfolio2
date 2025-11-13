import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
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
            Andualem Assefa
          </h2>
          <p className="text-sm text-gray-600 tracking-wide">
  Software Developer | Designing efficient, scalable, and user-friendly solutions 💻
</p>

        </div>

        {/* Social Links */}
        <div className="flex gap-8">
          {[
            {
              icon: <FaGithub size={26} />,
              link: "https://github.com/Andu2023",
              label: "GitHub",
            },
            {
              icon: <FaLinkedin size={26} />,
              link: "https://www.linkedin.com/in/andualem-assefa/",
              label: "LinkedIn",
            },
            {
              icon: <FaEnvelope size={26} />,
              link: "mailto:andy2023user@gmail.com",
              label: "Email",
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
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
          Andualem Assefa.
        </span>{" "}
        All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
