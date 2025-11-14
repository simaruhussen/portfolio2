import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { SectionWrapper } from '../hoc';
import { FaLinkedinIn, FaPhone, FaStar } from 'react-icons/fa';
import { slideIn } from '../utils/motion';
import { FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({ name: '', email: '', message: '' });

    let formIsValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!form.name) {
      newErrors.name = 'Name is required.';
      formIsValid = false;
    }

    if (!form.email) {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address.';
      formIsValid = false;
    }

    if (!form.message) {
      newErrors.message = 'Message is required.';
      formIsValid = false;
    }

    if (!formIsValid) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      console.warn('EmailJS environment variables are missing.');
      toast.error('Email service temporarily unavailable. Please try again later.');
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: 'Andualem',
          from_email: form.email,
          to_email: 'andy2023user@gmail.com',
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        setLoading(false);
        toast.success('Thank you. I will get back to you as soon as possible.');
        setForm({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast.error('Feature not available. Please try again later.');
      });
  };

  return (
    <div className="xl:mt-6 max-w-7xl mx-auto px-4 md:px-20">
      <motion.div className="text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-sky-950">CONTACT ME.</h2>

        {/* Decorative line with star */}
        <div className="flex items-center gap-4 mt-4">
          <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
          <FaStar className="text-yellow-500 text-xl" />
          <div className="h-[2px] w-20 bg-gray-400 rounded-full"></div>
        </div>
      </motion.div>

      <div className="mt-10 flex flex-col lg:flex-row gap-10">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex-1 text-black">
          <h4 className="text-xl font-semibold text-gray-800 text-center mb-4">Send  &nbsp;&nbsp; Message</h4>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-2">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="bg-gray-100 py-3 px-4 rounded-lg border border-gray-300 outline-none"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </label>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-2">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="bg-gray-100 py-3 px-4 rounded-lg border border-gray-300 outline-none"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </label>

            <label className="flex flex-col">
              <span className="text-gray-700 font-medium mb-2">Your Message</span>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="bg-gray-100 py-3 px-4 rounded-lg border border-gray-300 outline-none"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </label>

            <button
              type="submit"
              className="bg-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-sky-700 transition duration-300 flex items-center gap-2 justify-center"
            >
              {loading ? 'Sending...' : 'Send  Message'}
              <FiSend size={18} />
            </button>
          </form>
        </div>

        {/* Info Card */}
        <div className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 flex-1 flex flex-col gap-5 transition-shadow duration-300">
          <h4 className="text-xl font-semibold text-gray-800">Get in Touch</h4>

          <div className="flex items-center gap-3 text-gray-700">
            <FaLinkedinIn className="text-blue-500 text-xl" />
            <a
              href="https://www.linkedin.com/in/andualem-assefa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 transition-colors duration-300"
            >
              andualem-assefa
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FiMail className="text-red-500 text-xl" />
            <a
              href="mailto:andy2023user@gmail.com"
              className="hover:text-red-600 transition-colors duration-300"
            >
              andy2023user@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-green-600 text-xl" />
            <span>Addis Ababa, Ethiopia</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaGithub className="text-black text-xl" />
            <a
              href="https://github.com/Andu2023"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-800 transition-colors duration-300"
            >
              @Andu
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaPhone className="text-black text-xl" />
            <a
              href="tel:+251938698149"
              className="hover:text-green-600 transition-colors duration-300"
            >
              +251938698149
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
