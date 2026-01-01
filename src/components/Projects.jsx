import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

/**
 * NOTE:
 * - Images reference the public folder at /projects/*.png as placeholders.
 *   Replace with actual imports, e.g.:
 *     import eBetachinImg from '../assets/ebetachin.png'
 *   and then set image: eBetachinImg in the projects array below.
 */

const projectsData = [
  {
    name: 'e-Betachin',
    description:
      'A marketplace and company-admin portal with role-based interfaces for Buyers, Companies and Admins. Features dynamic CRUD, inquiry workflows, advanced search/filters and image galleries.',
    tags: [
      { name: 'react', color: 'text-blue-600' },
      { name: 'tailwind', color: 'text-sky-500' },
      { name: 'django-rest', color: 'text-green-600' },
    ],
    image: '/projects/ebetachin.png',
  },
  {
    name: 'Sebat Travel',
    description:
      'Multilingual travel booking system with OTP authentication, booking flows, and admin management panels for application workflows and booking administration.',
    tags: [
      { name: 'react', color: 'text-blue-600' },
      { name: 'django', color: 'text-green-600' },
      { name: 'i18n', color: 'text-purple-600' },
    ],
    image: '/projects/sebattravel.png',
  },
  {
    name: 'Ethix.dev (Real Estate Showcase)',
    description:
      'Responsive real-estate showcase platform with dashboards for buyers, companies and admins; JWT-secured APIs, PostgreSQL backend, media handling and CI/CD deployments.',
    tags: [
      { name: 'nextjs', color: 'text-sky-500' },
      { name: 'postgres', color: 'text-indigo-600' },
      { name: 'ci/cd', color: 'text-emerald-600' },
    ],
    image: '/projects/ethixdev.png',
  },
  {
    name: 'Device Financing Platform',
    description:
      'Service-rep and customer-facing platforms with device catalog, KYC uploads, loan application flows, eligibility checks and secure JWT-based authentication.',
    tags: [
      { name: 'nextjs', color: 'text-sky-500' },
      { name: 'nodejs', color: 'text-lime-600' },
      { name: 'security', color: 'text-red-500' },
    ],
    image: '/projects/device-finance.png',
  },
  {
    name: 'Inventory Management System',
    description:
      'Inventory tracking system designed for the Ethiopian Federal Police: asset monitoring, reporting, secure role-based access and departmental controls.',
    tags: [
      { name: 'react', color: 'text-blue-600' },
      { name: 'rest-api', color: 'text-green-600' },
      { name: 'reporting', color: 'text-gray-700' },
    ],
    image: '/projects/inventory-system.png',
  },
];

const ProjectCard = ({ index, name, description, tags, image }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <motion.div
        variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 w-full md:w-[500px] hover:shadow-2xl"
      >
        {/* Image: click to zoom */}
        <div className="w-full h-[200px] mb-4 cursor-zoom-in" onClick={() => setIsZoomed(true)}>
          <img src={image} alt={name} className="w-full h-full object-contain rounded-lg" />
        </div>

        <h3 className="text-gray-900 font-bold text-[20px]">{name}</h3>
        <p className="mt-2 text-gray-600 text-[14px]">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            className="fixed inset-0 bg-gray-50 bg-opacity-90 z-50 overflow-auto cursor-zoom-out"
            onClick={() => setIsZoomed(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <motion.img
                src={image}
                alt={name}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.6 }}
                className="max-w-full max-h-[80vh] rounded-xl shadow-2xl object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-gray-900">PROJECTS.</h2>

        {/* Decorative line with star */}
        <div className="flex items-center gap-4 mt-4">
          <div className="h-[2px] w-20 bg-gray-400 rounded-full" />
          <FaStar className="text-yellow-500 text-xl" />
          <div className="h-[2px] w-20 bg-gray-400 rounded-full" />
        </div>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-12 px-4 justify-center">
        {projectsData.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, 'projects');
