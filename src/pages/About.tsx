import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, Camera, Youtube, Calendar, Building, Users, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Globe, title: 'International Trade', description: 'Specializing in global market analysis and cross-border commerce' },
    { icon: BookOpen, title: 'Marketing Strategy', description: 'Creating data-driven marketing campaigns and brand strategies' },
    { icon: Camera, title: 'Content Creation', description: 'Producing engaging visual content for digital platforms' },
    { icon: Youtube, title: 'Video Production', description: 'Managing a growing YouTube channel focused on business insights' },
  ];

  const experiences = [
    {
      category: 'Professional Experience',
      items: [
        {
          title: 'Digital Marketing Intern',
          company: 'Global Commerce Solutions',
          period: 'Jun 2023 - Present',
          description: 'Leading social media strategy and content creation, resulting in 150% increase in engagement.',
          achievements: [
            'Developed and executed multi-channel marketing campaigns',
            'Analyzed market trends and competitor strategies',
            'Created weekly content for company blog and newsletter',
            'Collaborated with international teams across different time zones'
          ]
        },
        {
          title: 'Marketing Research Assistant',
          company: 'University Business Department',
          period: 'Jan 2023 - May 2023',
          description: 'Assisted in research projects focusing on international market trends.',
          achievements: [
            'Conducted primary research with 200+ participants',
            'Analyzed data using advanced statistical methods',
            'Contributed to two published research papers',
            'Presented findings at student research symposium'
          ]
        }
      ]
    },
    {
      category: 'Leadership & Activities',
      items: [
        {
          title: 'President',
          company: 'International Business Club',
          period: 'Sep 2023 - Present',
          description: 'Leading a student organization of 50+ members focused on global business education.',
          achievements: [
            'Organized 5 networking events with industry professionals',
            'Managed annual budget of $10,000',
            'Increased membership by 40% through targeted outreach',
            'Established mentorship program connecting students with alumni'
          ]
        },
        {
          title: 'Event Coordinator',
          company: 'Marketing Society',
          period: 'Mar 2023 - Present',
          description: 'Coordinating professional development events and workshops.',
          achievements: [
            'Successfully planned and executed 8 major events',
            'Managed team of 6 volunteers',
            'Secured sponsorships worth $5,000',
            'Achieved 95% positive feedback from attendees'
          ]
        }
      ]
    },
    {
      category: 'Volunteer Work',
      items: [
        {
          title: 'FLOPPPP Digital Marketing Volunteer',
          company: 'Local Non-Profit Organization',
          period: 'Jan 2024 - Present',
          description: 'Providing pro-bono digital marketing services to help local businesses.',
          achievements: [
            'Created social media strategy for 3 small businesses',
            'Conducted workshops on digital marketing basics',
            'Helped businesses increase online presence by 200%',
            'Mentored 5 business owners in social media management'
          ]
        }
      ]
    }
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
                As an International Trade & Marketing student, I'm passionate about understanding global markets
                and creating compelling digital content. My journey combines academic excellence with practical
                experience in digital marketing and content creation.
              </p>
              <p className="paragraph">
                When I'm not analyzing market trends or crafting marketing strategies, you can find me creating
                content for my YouTube channel, where I share insights about international business and marketing
                with a growing community of aspiring professionals.
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

      {/* Experience Section */}
      <section className="py-24 bg-pastel-peach/30">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-16">Experience & Achievements</h2>
          <div className="space-y-16">
            {experiences.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-2xl font-serif font-semibold mb-8 flex items-center gap-3">
                  {category.category === 'Professional Experience' && <Building className="text-text-primary" />}
                  {category.category === 'Leadership & Activities' && <Users className="text-text-primary" />}
                  {category.category === 'Volunteer Work' && <Heart className="text-text-primary" />}
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.title}
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                      className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-2 text-text-secondary mb-2">
                        <Calendar size={16} />
                        <span className="text-sm">{item.period}</span>
                      </div>
                      <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                      <p className="text-text-secondary mb-4">{item.company}</p>
                      <p className="text-text-secondary mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-pastel-lavender mt-1">•</span>
                            <span className="text-text-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-white">
        <div className="section-container">
          <h2 className="heading-lg text-center mb-16">Education</h2>
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-pastel-beige p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="font-serif text-2xl font-semibold mb-2">Bachelor of Science in International Trade</h3>
              <p className="text-text-secondary mb-4">Expected Graduation 2025</p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Major in International Business Relations</li>
                <li>Minor in Digital Marketing</li>
                <li>GPA: 3.8/4.0</li>
                <li>Relevant Coursework: Global Market Analysis, Digital Marketing Strategy, International Economics</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;