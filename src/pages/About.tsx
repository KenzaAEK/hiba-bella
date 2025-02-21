import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Camera, Youtube, Calendar, Building, Users, Heart, Target, BarChart, CalendarCheck, Languages } from 'lucide-react';


const About = () => {
  const skills = [
    {
      icon: Globe,
      title: 'International Trade',
      description: 'Specializing in global market analysis, international transactions, and client portfolio management.',
    },
    {
      icon: Target,
      title: 'Marketing Strategy & Brand Positioning',
      description: 'Creating data-driven marketing strategies, enhancing brand visibility, and expanding international outreach.',
    },
    {
      icon: Users,
      title: 'Digital Marketing & Social Media',
      description: 'Managing content creation, campaigns, and customer engagement across digital platforms.',
    },
    {
      icon: BarChart,
      title: 'Data Analytics & SPSS',
      description: 'Analyzing data to support strategic decision-making and marketing optimization.',
    },
    {
      icon: CalendarCheck,
      title: 'Project Management & Event Coordination',
      description: 'Leading successful events, managing logistics, and coordinating teams for impactful outcomes.',
    },
    {
      icon: Languages,
      title: 'Languages & Multicultural Communication',
      description: `
        Fluent in multiple languages (English, French, Arabic, Spanish, Chinese, Korean), enhancing international collaboration and cross-cultural communication
      `,
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
      <section className="bg-gradient-to-b from-pastel-lavender to-pastel-beige py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
                alt="Professional headshot"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="heading-xl mb-6">About Me</h1>
              <p className="paragraph mb-6">  
              My fascination with business and global markets began back in high school when I joined the organizational committee of an international cultural exchange event. I was captivated by the challenge of coordinating logistics, promoting the event, and engaging with a diverse group of people. Little did I know, this was the beginning of my journey into international trade, marketing, and business strategy.
              </p>
              <p className="paragraph mb-6">  
              Currently, I’m pursuing my studies in International Trade at ISCID-CO, where I’ve deepened my understanding of global markets, business operations, and strategic marketing. This academic foundation has fueled my passion for exploring how businesses grow and expand internationally while connecting meaningfully with diverse audiences.
              </p>
              <p className="paragraph mb-6">  
              Throughout my academic journey, I’ve become particularly interested in the intersection of marketing, digital branding, and consumer behavior. I believe that business is more than just transactions—it’s about storytelling, connection, and impact. What excites me most is helping companies craft compelling brand strategies, optimize sales funnels, and analyze market trends to find creative, data-driven solutions that drive growth.
              </p>
              <p className="paragraph">
              I am especially passionate about building relationships across borders and positioning businesses to succeed in competitive markets. My goal is to work with teams that value innovation, global strategy, and meaningful brand engagement, turning ambitious ideas into reality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-16">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-pastel-beige p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <skill.icon size={32} className="text-text-primary mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-text-secondary">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* Education Section */}
<section className="py-24 bg-white">
  <div className="section-container">
    <h2 className="heading-lg text-center mb-16">Education</h2>
    <div className="max-w-3xl mx-auto space-y-12">

      {/* Dual Degree Program */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="bg-pastel-beige p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <h3 className="font-serif text-2xl font-semibold mb-2">Dual Degree Program</h3>
        <div className="space-y-6">
          {/* ISCID-CO International Business School */}
          <div>
            <h4 className="font-semibold text-xl">ISCID-CO International Business School</h4>
            <p className="italic text-text-secondary mb-2">Dunkerque, France | 2024–2026</p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Leadership, Data Analysis, Advanced Excel Functions, E-Marketing</li>
              <li>Customs Regulations, Market Research, Production Management</li>
              <li>Intellectual Property, International Negotiation</li>
            </ul>
          </div>

          {/* National School of Commerce and Management */}
          <div>
            <h4 className="font-semibold text-xl">National School of Commerce and Management (ENCG-T)</h4>
            <p className="italic text-text-secondary mb-2">Tangier, Morocco | 2021–2026</p>
            <p className="text-text-secondary">Diplôme des Grandes Écoles de Commerce et de Gestion</p>
          </div>
        </div>
      </motion.div>
      
    </div>
  </div>
</section>
    </motion.div>
  );
};

export default About;