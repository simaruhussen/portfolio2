import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { HiDownload } from "react-icons/hi";

/* === Local experience & education data (from CV) === */
const experiences = [
  {
    title: "Full-Stack — e-Betachin",
    company: "e-Betachin",
    date: "",
    points: [
      "Developed a responsive React + Tailwind frontend for Buyers, Companies and Admins with dynamic CRUD and inquiry workflows.",
      "Built advanced search, image carousels and role-based interfaces to support different user types."
    ],
  },
  {
    title: "Full-Stack — Travel Booking Platform",
    company: "Sebat Travel",
    date: "",
    points: [
      "Delivered a multilingual travel booking site (React / Django) with OTP-secured authentication and dynamic booking card flows.",
      "Implemented admin panel features for application and workflow management."
    ],
  },
  {
    title: "Full-Stack — Device Financing Platforms",
    company: "Bejae Solutions",
    date: "",
    points: [
      "Developed a Next.js + Tailwind frontend for service reps with real-time device catalog, advanced filtering and inventory/status updates.",
      "Built a secure Node.js backend with JWT login, 2FA/email OTP, role-based access, IP whitelisting and session management.",
      "Implemented end-to-end customer onboarding, KYC uploads, eligibility checks, loan application flows and repayment modules."
    ],
  },
  {
  title: "Full-Stack — ReviewSummarizer.ai",
  company: "EthixDev",
  date: "",
  points: [
    "Developed a responsive React + Tailwind frontend with product pages and review management UIs that aggregate customer reviews, surface AI-generated summaries, sentiment badges and key highlights, and support search, filters and pagination to save users time.",
    "Built a Node.js API with JWT authentication, Prisma ORM and MySQL; integrated OpenAI to generate concise summaries and extract sentiment, persisted summaries and metadata (with versioning) and provided admin controls for re-summarization and audit.",
  ],
}


  
  
  
 
];

const education = [
  {
    university: "Debre Markos University",
    year: "",
    field: "Bachelor of Science in Software Engineering",
  },
];

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="w-80 md:w-96 bg-white text-gray-800 p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-start justify-between transition-transform pt-4"
  >
    <div>
      <h3 className="text-lg font-semibold text-sky-950">{experience.title}</h3>
      {experience.company && <p className="text-sm text-gray-500 mb-3">{experience.company}</p>}
    </div>
    <ul className="list-disc list-inside space-y-2 text-sm">
      {experience.points.map((point, i) => (
        <li key={i} className="text-gray-700 font-serif">
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const EducationCard = ({ edu, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    className="w-full max-w-xs sm:max-w-sm md:max-w-md bg-white text-gray-800 p-6 rounded-xl shadow-md border border-gray-200 flex flex-col items-start justify-between transition-transform"
  >
    <div>
      <h3 className="text-lg font-semibold">{edu.university}</h3>
      {edu.year && <p className="text-sm text-gray-500 mb-2">{edu.year}</p>}
    </div>
    <p className="text-sm text-gray-700 mt-2">{edu.field}</p>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="w-full flex flex-col items-center mt-6 px-4 md:px-20">
      <div className="w-full max-w-6xl flex justify-between items-center mb-6 px-4 max-sm:gap-5 ">
        <h2
          className="text-3xl font-extrabold text-gray-900 tracking-wide 
                 font-sans bg-gradient-to-r from-sky-600 to-emerald-500 
                 bg-clip-text"
        >
          Resume
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6"
        >
          {/* Update the href to point to your actual resume file in public/ */}
          <a
            href="/simaruhussen.pdf"
            target="_blank" rel="noreferrer"
            download="simaruhussen.pdf"
            className="flex items-center sm:max-w-fit px-4 sm:px-6 py-2 sm:py-3 gap-2 rounded-full text-sky-900 bg-white hover:bg-gray-100 font-semibold transition-all duration-300 ease-in-out hover:scale-105 shadow-md border border-sky-900 "
          >
            Download Resume <HiDownload size={20} />
          </a>
        </motion.div>
      </div>

      {/* Card Container */}
      <motion.div variants={fadeIn("", "", 0.1, 1)} className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl w-full">
        {/* Experience Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Experience</h2>
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} experience={experience} />
          ))}
        </div>

        {/* Education Section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">Education</h2>
        <div className="flex justify-center gap-10 max-sm:gap-5">
          {education.map((edu, index) => (
            <EducationCard key={index} index={index} edu={edu} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
