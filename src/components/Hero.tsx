import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
            Where <span className="text-primary">Intelligence</span> Meets Security
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Advancing the frontier of cybersecurity and artificial intelligence through
            ethical hacking and innovative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold 
                     shadow-lg hover:bg-red-700 transition duration-300"
          >
            Explore Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;