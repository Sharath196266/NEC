/*
 * Responsive Team Section Component
 *
 * FEATURES:
 * - Responsive grid layout (1 column mobile, 2 tablet, 3+ desktop)
 * - Clean, professional design with rounded images
 * - Soft shadows and modern card styling
 * - Easy to add new team members
 */

import React from 'react';
import { motion } from 'framer-motion';

// STEP 2: Import team member photos here
import rakshaAravindPhoto from './images/rakshi.jpg';
import sharathPhoto from './images/shn77.jpg';
import hemanthPhoto from './images/hemanth.jpg';
import poornaPhoto from './images/poorna.jpg';
import sinchanaPhoto from './images/sinchana.jpg';
import chithraPhoto from './images/chitra.jpg';
import nishchithaPhoto from './images/nisch.jpg';
import chaiPhoto from './images/chai.jpg'
import rakshithaPhoto from './images/rakshitha.jpg';
import adiPhoto from './images/adithya.jpg';
import prajwalPhoto from './images/prajwal.jpg';
import reshmaPhoto from './images/reshma.jpg';
import jahnaviPhoto from './images/jahnavi.jpg';
import sharanuPhoto from './images/xharanu.jpg';

const TeamSection = () => {
  // STEP 3: Add your team members here
  const teamMembers = [
    {
      name: 'Raksha Aravind',
      role: 'President',
      image: rakshaAravindPhoto,
      description: 'Visionary leader driving innovation and fostering an entrepreneurial culture.',
      linkedIn: 'https://www.linkedin.com/in/raksha-aravind-403204280'
    },
    {
      name: 'Sinchana S S',
      role: 'President',
      image: sinchanaPhoto,
      description: 'Strategic leader ensuring smooth operations and impactful initiatives.',
      linkedIn: "https://www.linkedin.com/in/sinchana-s-s-491645276"
    },
    {
      name: 'Poornesha G',
      role: 'Marketing & Outreach',
      image: poornaPhoto,
      description: 'Creative communicator building strong connections with students and partners.',
      linkedIn: "https://www.linkedin.com/in/poornesha-g-467962308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: 'Chithra H P',
      role: 'Marketing & Outreach',
      image: chithraPhoto,
      description: 'Innovative strategist expanding our reach and engagement footprint.',
      linkedIn: "https://www.linkedin.com/in/chithra-h-p-91731325a"
    },
    {
      name: 'Nishchitha H C',
      role: 'Events & Operations',
      image: nishchithaPhoto,
      description: 'Organized planner ensuring events run flawlessly and deliver value.',
      linkedIn: "https://www.linkedin.com/in/nishchitha-h-c-33bb2633a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  
    },
    {
      name: 'Sharanu R Kabane',
      role: 'Events & Operations',
      image: sharanuPhoto,
      description: 'Dynamic coordinator managing impactful entrepreneurship events.',
      linkedIn: "https://www.linkedin.com/in/sharanu-kabane-95198029b/?originalSubdomain=in"
    },
    {
      name: 'Adithya B R',
      role: 'Finance & Sponsorship',
      image: adiPhoto,
      description: 'Analytical thinker managing budgets and building sponsor relations.',
      linkedIn: "https://www.linkedin.com/in/adithya826/"
    },
    {
      name: 'M S Hemanth',
      role: 'Finance & Sponsorship',
      image: hemanthPhoto,
      description: 'Focused financial planner ensuring sustainable funding and growth.',
      linkedIn: "https://www.linkedin.com/in/m-s-hemanth-429b15259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: 'Jahnavi S',
      role: 'Content & Design',
      image: jahnaviPhoto,
      description: 'Creative designer crafting visually engaging and brand-consistent materials.',
      linkedIn: "https://www.linkedin.com/in/jahnavis062/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: 'Reshma M',
      role: 'Content & Design',
      image: reshmaPhoto,
      description: 'Storyteller delivering impactful content to inspire and inform.',
      linkedIn: "https://www.linkedin.com/in/reshma-m-14035a280/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: 'Prajwal K L',
      role: 'Social Media & PR',
      image: prajwalPhoto,
      description: 'Social media strategist amplifying our presence and community impact.',
      linkedIn: "https://www.linkedin.com/in/prajwal-k-l-523a59343/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: 'G P Chaithanya',
      role: 'Social Media & PR',
      image: chaiPhoto,
      description: 'Public relations expert shaping our brand\'s voice and image.',
      linkedIn: "https://www.linkedin.com/in/g-p-chaithanya-b89b12259/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: 'Sharath H N',
      role: 'Technical & IT',
      image: sharathPhoto,
      description: 'Tech enthusiast driving innovation and digital transformation.',
      linkedIn: "https://www.linkedin.com/in/sharath7hn/"
    },
    {
      name: 'Rakshitha B M',
      role: 'Technical & IT',
      image: rakshithaPhoto,
      description: 'Problem solver ensuring seamless technical operations and tools.',
      linkedIn: "https://www.linkedin.com/in/rakshitha-b-m-2b8477280/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-indigo-600">Team</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate leaders driving innovation and entrepreneurship forward
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
        >
          {teamMembers.map((member, index) => {
            const CardContent = (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
              >
                {/* Profile Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-indigo-100 shadow-md"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback initials */}
                    <div 
                      className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center border-4 border-indigo-100 shadow-md"
                      style={{ display: 'none' }}
                    >
                      <span className="text-white text-lg md:text-xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold text-sm md:text-base mb-3">
                    {member.role}
                  </p>
                  {member.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );

            // Wrap with <a> if LinkedIn exists
            return member.linkedIn ? (
              <a
                key={index}
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {CardContent}
              </a>
            ) : (
              CardContent
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
