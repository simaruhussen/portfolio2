import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';

// icon imports
import { FaLayerGroup, FaCode, FaTools, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiVisualstudiocode } from '@react-icons/all-files/si/SiVisualstudiocode';
import {
  SiNextdotjs,
  SiDjango,
  SiTailwindcss,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiDocker,
  SiGit,
  SiGithubactions,
} from 'react-icons/si';

const sectionIcons = {
  Frameworks: <FaLayerGroup className="text-teal-600 w-6 h-6 mr-2" />,
  Languages: <FaCode className="text-blue-600 w-6 h-6 mr-2" />,
  'Tools & Skills': <FaTools className="text-green-600 w-6 h-6 mr-2" />,
};

/* === Embedded technology data (taken from CV) === */
const frameworks = [
  { name: 'React', icon: <FaReact className="w-8 h-8" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" /> },
  { name: 'Node.js / Express', icon: <FaNodeJs className="w-8 h-8" /> },
  { name: 'Django', icon: <SiDjango className="w-8 h-8" /> },
  
 
];

const languages = [
  { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" /> },
  { name: 'Python', icon: <FaPython className="w-8 h-8" /> },
  
  { name: 'SQL (Postgres)', icon: <SiPostgresql className="w-8 h-8" /> },
];

const tools = [
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" /> },
  { name: 'Docker', icon: <SiDocker className="w-8 h-8" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" /> },
  { name: 'Git / GitHub', icon: <SiGit className="w-8 h-8" /> },
  { name: 'GitHub Actions (CI/CD)', icon: <SiGithubactions className="w-8 h-8" /> },
  { name: 'VS Code', icon: <SiVisualstudiocode className="w-8 h-8" /> },
];

const TechSection = ({ title, items }) => (
  <div className="mb-12 w-full">
    <motion.div variants={textVariant()} className="flex items-center mb-6">
      {sectionIcons[title]}
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
    </motion.div>

    <div className="flex flex-row flex-wrap justify-start gap-6">
      {items.map((item) => (
        <div
          key={item.name}
          className="w-28 sm:w-32 h-28 sm:h-32 flex flex-col items-center justify-center bg-[#f9f9f9] p-3 rounded-lg shadow-md border border-gray-200 hover:scale-105 transition-transform duration-300"
          role="listitem"
          aria-label={item.name}
        >
          <div className="mb-2 text-gray-800">{item.icon}</div>
          <p className="text-xs sm:text-sm text-center text-gray-700">{item.name}</p>
        </div>
      ))}
    </div>
  </div>
);

const Tech = () => {
  return (
    <div className="w-full flex justify-center items-center mt-6 px-4 pt-6 md:px-20 pb-4">
      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="bg-white rounded-2xl shadow-lg p-8 max-w-6xl w-full"
      >
        <TechSection title="Frameworks" items={frameworks} />
        <TechSection title="Languages" items={languages} />
        <TechSection title="Tools & Skills" items={tools} />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
