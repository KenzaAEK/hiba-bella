import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-16"
    >
      {/* Hero Section */}
      <section className="h-screen flex items-center bg-gradient-to-b from-pastel-peach to-pastel-beige">
        <div className="section-container">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="heading-xl mb-6"
            >
              International Trade & Marketing Student
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="paragraph mb-8"
            >
              Exploring the intersection of global commerce, digital marketing, and creative content creation.
              Join me on my journey through international business and beyond.
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <Link to="/projects" className="button-primary flex items-center gap-2">
                View My Work
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="button-primary bg-white">
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <h2 className="heading-lg mb-12 text-center">Featured Work</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.1 }}
                className="bg-pastel-beige rounded-lg overflow-hidden"
              >
                <img
                  src={`https://images.unsplash.com/photo-${item === 1 ? '1516321318423-f06f85e504b3' : 
                    item === 2 ? '1460925467805-6a630494045f' : 
                    '1454165804606-c3d57bc86b40'}`}
                  alt="Project preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-2">
                    {item === 1 ? 'Global Market Analysis' :
                     item === 2 ? 'Digital Marketing Campaign' :
                     'International Trade Study'}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {item === 1 ? 'Research on emerging markets and their impact on global trade.' :
                     item === 2 ? 'Social media strategy for an international brand.' :
                     'Comprehensive analysis of trade relations between key markets.'}
                  </p>
                  <Link to="/projects" className="text-text-primary font-medium hover:text-text-secondary flex items-center gap-1">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;