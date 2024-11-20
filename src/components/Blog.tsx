import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const blogPosts = [
  {
    title: 'Advanced Penetration Testing Techniques',
    excerpt: 'Exploring modern approaches to ethical hacking and system security assessment.',
    date: '2024-01-15'
  },
  {
    title: 'AI in Cybersecurity',
    excerpt: 'How artificial intelligence is revolutionizing threat detection and prevention.',
    date: '2024-01-10'
  },
  {
    title: 'Secure Code Review Best Practices',
    excerpt: 'Essential guidelines for maintaining code security in modern applications.',
    date: '2024-01-05'
  }
];

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            Latest Insights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated with our latest thoughts on cybersecurity and AI
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-secondary p-6 rounded-lg shadow-lg hover:shadow-xl 
                         transition duration-300 cursor-pointer"
            >
              <time className="text-primary text-sm">{post.date}</time>
              <h3 className="font-orbitron font-bold text-xl mt-2 mb-3">
                {post.title}
              </h3>
              <p className="text-gray-400">{post.excerpt}</p>
              <button className="mt-4 text-primary hover:text-red-400 
                               transition duration-300 font-medium">
                Read More →
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;