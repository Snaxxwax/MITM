import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-orbitron text-xl font-bold text-primary mb-4">
              Mind in the Machine
            </h3>
            <p className="text-gray-400">
              Advancing the frontier of cybersecurity and artificial intelligence.
            </p>
          </div>
          <div>
            <h4 className="font-orbitron text-lg font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-orbitron text-lg font-bold text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {[
                { Icon: FaGithub, link: '#' },
                { Icon: FaLinkedin, link: '#' },
                { Icon: FaTwitter, link: '#' }
              ].map(({ Icon, link }, index) => (
                <a
                  key={index}
                  href={link}
                  className="text-gray-400 hover:text-primary transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Mind in the Machine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;