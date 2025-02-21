import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building, Users, Heart,  } from 'lucide-react';


const Experience = () => {

  const experiences = [
    {
      category: 'Professional Experience',
      items: [
        {
          title: 'Marketing and International Outreach',
          company: 'Berdic',
          period: 'Jun 2023 - Present',
          description:
            'During my internship at Berdic, I played a dynamic role in enhancing the company’s marketing efforts, refining brand positioning, and shaping international outreach strategies. By identifying new market opportunities and streamlining product promotion tactics, I contributed to increasing brand visibility and engaging with potential clients on a broader scale. This hands-on experience deepened my understanding of how businesses build relationships across borders and position themselves in competitive markets.',
          achievements: [
            'Identified new market opportunities and expanded client outreach.',
            'Enhanced brand positioning through targeted marketing strategies.',
            'Developed promotional tactics that increased brand visibility.',
            'Collaborated with cross-functional teams to refine product promotion.',
          ],
        },
        {
          title: 'International Trade and Client Portfolio Management',
          company: 'BMCE',
          period: 'Jan 2023 - May 2023',
          description:
            'At BMCE, I worked on international transactions, client portfolio management, and logistics coordination, gaining a comprehensive view of business operations within international trade. This role allowed me to refine my analytical skills and explore strategies for market positioning and global growth, while focusing on sales optimization and consumer engagement.',
          achievements: [
            'Managed international transactions and client portfolios.',
            'Analyzed market trends to identify growth opportunities.',
            'Optimized sales funnels and developed brand strategies.',
            'Collaborated on logistics coordination for global operations.',
          ],
        },
        {
          title: 'Junior Sales Manager - Quality Project',
          company: 'Martur Fompak',
          period: 'Sep 2022 - Dec 2022',
          description:
            'In my role as Junior Sales Manager at Martur Fompak, I balanced sales objectives with marketing strategies while ensuring alignment with ISO 9001 standards. I collaborated with the sales and quality assurance teams to improve processes, enhance customer experiences, and boost product demand through strategic campaigns.',
          achievements: [
            'Led the sales team to meet revenue goals while adhering to quality standards.',
            'Implemented ISO 9001 standards across sales and marketing processes.',
            'Coordinated process improvements with the quality assurance team.',
            'Developed promotional materials and customer outreach strategies.',
          ],
        },
      ],
    },
    {
      category: 'Leadership & Activities',
      items: [
        {
          title: 'Event Coordinator',
          company: 'Aide Sans Frontières Club',
          period: 'Mar 2023 - Present',
          description:
            'As an Event Coordinator, I led the organization of the charity concert "Concert L\'khir," bringing together over 500 participants to raise funds for humanitarian projects. I oversaw all event logistics, managed a team of volunteers, coordinated with performers, and developed a comprehensive promotional strategy to maximize attendance and impact.',
          achievements: [
            'Managed event logistics, including venue selection and vendor coordination.',
            'Led a team of volunteers handling ticket sales, guest coordination, and setup.',
            'Secured sponsorships and funding from local businesses and individuals.',
            'Developed and executed a promotional strategy across social media platforms.',
            'Boosted event attendance through targeted marketing and community engagement.',
          ],
        },
      ],
    },
    {
      category: 'Volunteer Work',
      items: [
        {
          title: 'Social Media Manager',
          company: 'Dakotah (Burger Restaurant in Tangier)',
          period: 'Jan 2024 - Present',
          description:
            'Working with Dakotah, I enhanced the restaurant’s digital presence by creating engaging content and implementing targeted social media campaigns. My role involved developing promotional materials, managing customer engagement, and analyzing analytics to refine marketing strategies and drive customer loyalty.',
          achievements: [
            'Created visually appealing content showcasing signature dishes and promotions.',
            'Managed and executed social media campaigns to boost restaurant visibility.',
            'Engaged with customers to foster community and improve brand loyalty.',
            'Analyzed social media metrics to optimize content strategies and increase engagement.',
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
      <section className="bg-gradient-to-b from-pastel-sage to-pastel-beige py-24">
        <div className="section-container">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="heading-xl mb-6">Experience & Achievements</h1>
            <p className="paragraph">
            A showcase of my professional journey across international trade analysis, digital marketing, 
            and content creation. Each project highlights my dedication to delivering impactful results, 
            overcoming unique challenges, and continuously expanding my skill set through hands-on experience and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-pastel-peach/30">
        <div className="section-container">
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


    </motion.div>
  );
};

export default Experience ;