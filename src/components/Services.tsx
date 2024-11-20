import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaShieldAlt, FaBrain, FaCode } from 'react-icons/fa';

const services = [
  {
    icon: <FaShieldAlt className="text-4xl text-primary" />,
    title: 'Penetration Testing',
    description: 'Comprehensive security assessments to identify and address vulnerabilities in your systems.'
  },
  {
    icon: <FaBrain className="text-4xl text-primary" />,
    title: 'AI Solutions',
    description: 'Custom AI implementations to enhance your security infrastructure and automation needs.'
  },
  {
    icon: <FaCode className="text-4xl text-primary" />,
    title: 'Secure Development',
    description: 'Building robust applications with security best practices integrated from the ground up.'
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Our Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technology to provide comprehensive security solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl 
                         transition duration-300 border border-gray-800"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-orbitron font-bold mt-4 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;