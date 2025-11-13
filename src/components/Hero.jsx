import { styles } from '../styles';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profile from '../assets/profile.jpg';
import { HiDownload } from 'react-icons/hi';
import { useState, useEffect } from 'react';

const Hero = () => {
  const rotatingTexts = [
    ' Full Stack  Developer',
    'React & Angular for Dynamic Frontends',
    'Robust APIs with .NET Core & Django',
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentFullText = rotatingTexts[currentTextIndex];

    const typingInterval = setInterval(() => {
      if (charIndex < currentFullText.length) {
        setDisplayedText((prev) => prev + currentFullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setDisplayedText('');
          setCharIndex(0);
          setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [charIndex, currentTextIndex]);

  return (
    <section
      id="hero"
      className="relative w-full h-auto min-h-screen bg-gray-100 flex items-center justify-center pt-28"
    >
      <div className="max-w-7xl mx-auto pt-28 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text Section */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Hi, I'm Andualem Assefa
            </h2>

            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="h-[2px] w-16 sm:w-20 bg-gray-400 rounded-full"></div>
              <FaStar className="text-yellow-500 text-lg sm:text-xl" />
              <div className="h-[2px] w-16 sm:w-20 bg-gray-400 rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-2 space-y-2 text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed"
          >
            <p className="tracking-wide text-emerald-700 font-semibold text-lg sm:text-xl min-h-[32px]">
              {displayedText}
              <span className="animate-pulse inline-block w-1 h-5 bg-emerald-700 ml-1" />
            </p>
            <p className="tracking-wide">
              Full Stack Software Developer building efficient and user-friendly
            </p>
            <p className="tracking-wide">
              applications using a range of modern technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 w-full sm:w-auto flex justify-center sm:justify-start"
          >
            <a
              href="/AndualemAssefaResume.pdf"
              download="Andualem_Assefa_Resume.pdf"
              className="flex items-center gap-2 rounded-full text-sky-900 bg-white hover:bg-gray-100 px-6 py-3 font-semibold transition-all duration-300 ease-in-out hover:scale-105 shadow-md border border-sky-900"
            >
              Download Resume <HiDownload size={20} />
            </a>
          </motion.div>

        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-52 h-52 sm:w-56 sm:h-56 md:w-[300px] md:h-[300px] bg-slate-300 rounded-full flex items-center justify-center shadow-xl border-4 border-sky-900">
            <img
              src={profile}
              alt="Andualem Assefa"
              className="w-48 h-48 sm:w-52 sm:h-52 md:w-[280px] md:h-[280px] object-contain rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
