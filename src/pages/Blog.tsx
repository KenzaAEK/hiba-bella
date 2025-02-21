import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of International E-commerce',
      excerpt: 'Exploring emerging trends in cross-border online retail and their impact on global trade.',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1460925467805-6a630494045f',
      category: 'E-commerce',
    },
    {
      title: 'Digital Marketing Strategies for Global Brands',
      excerpt: 'How international brands can adapt their digital marketing approach for different markets.',
      date: 'March 10, 2024',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a',
      category: 'Marketing',
    },
    {
      title: 'Sustainable Supply Chain Management',
      excerpt: 'Implementing sustainable practices in international supply chain operations.',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3',
      category: 'Supply Chain',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Featured Post */}
      <section className="bg-gradient-to-b from-pastel-peach to-pastel-beige py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-medium text-text-secondary mb-4 block">Featured Post</span>
              <h1 className="heading-xl mb-6">The Future of International E-commerce</h1>
              <p className="paragraph mb-6">
                Discover how emerging technologies and changing consumer behaviors are reshaping
                the landscape of international e-commerce and what it means for global trade.
              </p>
              <div className="flex items-center gap-6 text-text-secondary mb-8">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>5 min read</span>
                </div>
              </div>
              <button className="button-primary flex items-center gap-2">
                Read Article <ArrowRight size={20} />
              </button>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1460925467805-6a630494045f"
                alt="E-commerce"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <h2 className="heading-lg mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-text-secondary mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">{post.title}</h3>
                <p className="text-text-secondary mb-4">{post.excerpt}</p>
                <Link
                  to="#"
                  className="text-text-primary font-medium hover:text-text-secondary flex items-center gap-1"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;