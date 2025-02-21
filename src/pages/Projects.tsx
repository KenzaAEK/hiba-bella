import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Youtube, Globe, PieChart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Global Market Analysis',
      category: 'Research',
      description: 'Comprehensive analysis of emerging markets in Southeast Asia, focusing on e-commerce trends and digital transformation.',
      image: 'https://images.unsplash.com/photo-1460925467805-6a630494045f',
      icon: Globe,
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Marketing',
      description: 'Developed and executed a multi-channel marketing strategy for a sustainable fashion brand, increasing engagement by 150%.',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
      icon: PieChart,
    },
    {
      title: 'YouTube Channel',
      category: 'Content Creation',
      description: 'Educational content focused on international business and marketing, reaching over 10,000 subscribers.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      icon: Youtube,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pastel-sage to-pastel-beige py-24">
        <div className="section-container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">My Projects</h1>
            <p className="paragraph">
              A collection of my work in international trade analysis, digital marketing,
              and content creation. Each project represents a unique challenge and learning experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <button className="text-white flex items-center gap-2 hover:gap-3 transition-all">
                      View Project <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <project.icon size={20} className="text-text-secondary" />
                  <span className="text-sm font-medium text-text-secondary">{project.category}</span>
                </div>
                <h2 className="font-serif text-2xl font-semibold mb-3">{project.title}</h2>
                <p className="text-text-secondary">{project.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-pastel-lavender">
        <div className="section-container text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="heading-lg mb-6">Interested in Collaboration?</h2>
            <p className="paragraph mb-8">
              I'm always open to discussing new projects and opportunities in international trade and marketing.
            </p>
            <a href="/contact" className="button-primary inline-flex items-center gap-2">
              Get in Touch <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;