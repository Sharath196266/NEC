/*
 * GECH E-CELL NEC Portfolio Component
 * 
 * Dependencies:
 * - React
 * - Framer Motion (npm install framer-motion)
 * - Tailwind CSS (configured in your project)
 * 
 * Integration:
 * 1. Install dependencies: npm install framer-motion
 * 2. Ensure Tailwind CSS is configured
 * 3. Replace TODO items with your specific details
 * 4. Replace placeholder images with actual team photos and logos
 * 
 * TODO Items to Replace:
 * - College contact email
 * - Team member names and photos
 * - Actual logo SVG
 * - Event dates and venues
 * - Social media handles
 * - Sponsor contact details
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GECH_E_CELL_Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'events', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Color palette
  const colors = {
    primary: '#6366F1', // Indigo
    accent: '#F59E0B',  // Amber
    neutral: '#6B7280', // Gray
    highlight: '#10B981' // Emerald
  };
  

  // Team data
  const teamMembers = [
  // Presidents
  { 
    name: 'Raksha Aravind', 
    role: 'President', 
    image: '/api/placeholder/150/150', 
    description: 'Visionary leader driving innovation and fostering an entrepreneurial culture.' 
  },
  { 
    name: 'Sinchana S S', 
    role: 'President', 
    image: '/api/placeholder/150/150', 
    description: 'Strategic leader ensuring smooth operations and impactful initiatives.' 
  },

  // Marketing and Outreach
  { 
    name: 'Poornesha G', 
    role: 'Marketing & Outreach', 
    image: '/api/placeholder/150/150', 
    description: 'Creative communicator building strong connections with students and partners.' 
  },
  { 
    name: 'Chithra H P', 
    role: 'Marketing & Outreach', 
    image: '/api/placeholder/150/150', 
    description: 'Innovative strategist expanding our reach and engagement footprint.' 
  },

  // Events and Operations
  { 
    name: 'Nishchitha H C', 
    role: 'Events & Operations', 
    image: '/api/placeholder/150/150', 
    description: 'Organized planner ensuring events run flawlessly and deliver value.' 
  },
  { 
    name: 'Sharanu R Kabane', 
    role: 'Events & Operations', 
    image: '/api/placeholder/150/150', 
    description: 'Dynamic coordinator managing impactful entrepreneurship events.' 
  },

  // Finance and Sponsorship
  { 
    name: 'Adithya B R', 
    role: 'Finance & Sponsorship', 
    image: '/api/placeholder/150/150', 
    description: 'Analytical thinker managing budgets and building sponsor relations.' 
  },
  { 
    name: 'M S Hemanth', 
    role: 'Finance & Sponsorship', 
    image: '/api/placeholder/150/150', 
    description: 'Focused financial planner ensuring sustainable funding and growth.' 
  },

  // Content and Design
  { 
    name: 'Jahnavi S', 
    role: 'Content & Design', 
    image: '/api/placeholder/150/150', 
    description: 'Creative designer crafting visually engaging and brand-consistent materials.' 
  },
  { 
    name: 'Reshma M', 
    role: 'Content & Design', 
    image: '/api/placeholder/150/150', 
    description: 'Storyteller delivering impactful content to inspire and inform.' 
  },

  // Social Media and PR
  { 
    name: 'Prajwal K L', 
    role: 'Social Media & PR', 
    image: '/api/placeholder/150/150', 
    description: 'Social media strategist amplifying our presence and community impact.' 
  },
  { 
    name: 'G P Chaithanya', 
    role: 'Social Media & PR', 
    image: '/api/placeholder/150/150', 
    description: 'Public relations expert shaping our brand’s voice and image.' 
  },

  // Technical and IT
  { 
    name: 'Sharath H N', 
    role: 'Technical & IT', 
    image: '/api/placeholder/150/150', 
    description: 'Tech enthusiast driving innovation and digital transformation.' 
  },
  { 
    name: 'Rakshitha B M', 
    role: 'Technical & IT', 
    image: '/api/placeholder/150/150', 
    description: 'Problem solver ensuring seamless technical operations and tools.' 
  }
];


  // Events data
  const events = [
  {
    title: 'Business Workshop',
    date: 'Week 1',
    goal: 'Introduce fundamentals of starting a business',
    outcomes: 'Students gain basic entrepreneurial skills and frameworks'
  },
  {
    title: 'Talk by Local Entrepreneur',
    date: 'Week 2',
    goal: 'Inspire students with real-world startup journeys',
    outcomes: 'Networking opportunities, practical startup insights'
  },
  {
    title: 'Pitch Competition & Idea Presentation',
    date: 'Week 3',
    goal: 'Encourage innovative thinking and public speaking skills',
    outcomes: 'Refined ideas, feedback from judges, potential collaborations'
  },
  {
    title: 'Entrepreneurship News Update',
    date: 'Week 4',
    goal: 'Keep students informed on startup ecosystem developments',
    outcomes: 'Awareness of funding trends, policies, and market shifts'
  },
  {
    title: 'Marketing Strategies Session',
    date: 'Week 5',
    goal: 'Equip students with core marketing and branding skills',
    outcomes: 'Hands-on marketing plan creation and strategy building'
  },
  {
    title: 'Panel Discussion: Startup Challenges',
    date: 'Week 6',
    goal: 'Discuss common hurdles faced by new entrepreneurs',
    outcomes: 'Practical solutions and insights from multiple perspectives'
  },
  {
    title: 'Speed Networking Meetup',
    date: 'Week 7',
    goal: 'Foster connections between founders, students, and mentors',
    outcomes: 'New partnerships, potential collaborations, peer learning'
  },
  {
    title: 'Innovation Spotlight',
    date: 'Week 8',
    goal: 'Highlight creative and impactful business ideas',
    outcomes: 'Increased visibility for student innovations'
  },
  {
    title: 'Guest Lecture by Startup Mentor',
    date: 'Week 9',
    goal: 'Provide mentorship and career guidance from experts',
    outcomes: 'Personalized advice, industry insights, inspiration'
  },
  {
    title: 'Hackathon / Ideathon Progress Update',
    date: 'Week 10',
    goal: 'Showcase ongoing project milestones',
    outcomes: 'Peer feedback, mentor input, motivation boost'
  },
  {
    title: 'Industry Insights Session',
    date: 'Week 11',
    goal: 'Explore trends in technology and business landscapes',
    outcomes: 'Awareness of opportunities in emerging sectors'
  },
  {
    title: 'Business Basics Workshop',
    date: 'Week 12',
    goal: 'Teach how to create a simple yet effective business plan',
    outcomes: 'Completed draft business plans from participants'
  },
  
];



  // Social media templates
  const socialTemplates = {
    instagram: `🚀 GECH E-CELL is redefining innovation! 

From classroom concepts to market-ready startups 💡
Join 2000+ student entrepreneurs changing the game 🎯

#GECHECell #StudentStartups #Innovation #NEC2024 #Entrepreneurship`,
    
    linkedin: `Proud to announce GECH E-CELL's participation in the National Entrepreneurship Challenge! 

Our mission: Transform engineering students into successful entrepreneurs through:
• Comprehensive incubation programs
• Industry mentor networks  
• Funding facilitation
• Real-world project exposure

Join us in building India's entrepreneurial future. 

#Entrepreneurship #StudentInnovation #NEC2024 #StartupEcosystem`,
    
    twitter: `🎯 GECH E-CELL: Where engineering meets entrepreneurship!

📈 50+ startups incubated
💰 ₹2Cr+ funding facilitated  
🤝 200+ mentor connections
🏆 NEC 2024 participants

Building tomorrow's innovators today! 🚀

#GECHECell #NEC2024 #StudentStartups`
  };

  // PDF Export function
  const exportToPDF = () => {
    // TODO: Implement actual PDF generation using html2pdf or similar
    // For now, using browser print
    window.print();
  };

  // Animated Logo Component
  const AnimatedLogo = () => (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="text-indigo-600"
    >
      <motion.circle
        cx="30"
        cy="30"
        r="25"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      <motion.path
        d="M20 25 L25 30 L40 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
      <motion.text
        x="30"
        y="45"
        textAnchor="middle"
        className="text-xs font-bold fill-current"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        E-CELL
      </motion.text>
    </motion.svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <AnimatedLogo />
              <div>
                <h1 className="text-xl font-bold text-gray-900">GECH E-CELL</h1>
                <p className="text-xs text-gray-600">Innovate. Incubate. Impact.</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Team', 'Events', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeSection === item.toLowerCase()
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200"
            >
              <div className="px-4 py-2 space-y-1">
                {['Home', 'About', 'Team', 'Events', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <AnimatedLogo />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              GECH <span className="text-indigo-600">E-CELL</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-gray-600 mb-4 font-medium"
            >
              Think, Build, Lead.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto"
            >
              Government Engineering College Hassan's premier entrepreneurship hub, 
              transforming engineering minds into innovative business leaders.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore Our Vision
              </button>
              <button
                onClick={exportToPDF}
                className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-2xl font-semibold hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Download NEC Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-indigo-600">Mission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our mission is to cultivate an entrepreneurial mindset through workshops, mentorship, competitions, and collaborations.
We aim to give every student the opportunity to explore ideas, gain practical experience, and convert concepts into real-world solutions. This is how we turn vision into action </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision Statement</h3>
              <p className="text-lg text-gray-600 mb-8">
                Our vision is to be the driving force of innovation and entrepreneurship at Government Engineering College Hassan, inspiring students to think creatively, build purposefully, and lead impactful ventures.
This vision is our long-term dream — to see GECH E-Cell become a hub where bold ideas turn into meaningful projects that transform lives. </p>
              
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Core Objectives</h4>
              <ul className="space-y-3">
                {[
                  'Empower 2000+ students to think creatively and solve real-world problems',
                  'Provide resources and guidance to help students turn ideas into successful projects',
                  'Connect students with industry experts, alumni, and peer mentors for growth',
                  'Encourage students to develop impactful, sustainable solutions for society',
                  'Make GECH a place where every student can innovate, collaborate, and lead'
                ].map((objective, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{objective}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-3xl"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Brand Identity</h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Tagline</h5>
                  <p className="text-indigo-600 font-medium text-lg">             Think, Build, Lead.</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Logo Concept</h5>
                  <p className="text-gray-600">
                   A bold, modern emblem combining the letters “G” and “C” in a unified circle to represent GECH E-Cell’s mission to **Think, Build, and Lead** through innovation and collaboration.
 </p>
                </div>
                
                <div>
  <h5 className="font-semibold text-gray-900 mb-3">Color Palette</h5>
  <div className="grid grid-cols-2 gap-3">
    <div className="flex items-center space-x-2">
      <div className="w-6 h-6 bg-black rounded-full"></div>
      <span className="text-sm">Primary #000000</span>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-6 h-6 bg-white border border-gray-300 rounded-full"></div>
      <span className="text-sm">Accent #FFFFFF</span>
    </div>
  </div>


                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
               <span className="text-indigo-600">Team Dynamite </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate leaders driving innovation and entrepreneurship at GECH
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    {/* TODO: Replace with actual team photos */}
                    <span className="text-2xl font-bold text-indigo-600">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Annual <span className="text-indigo-600">Event Calendar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A year-long journey of innovation, learning, and entrepreneurial growth
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {events.map((event, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-white to-indigo-50 p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-indigo-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    {event.date}
                  </span>
                  <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <p className="text-gray-700 mb-3 font-medium">{event.goal}</p>
                <p className="text-gray-600 text-sm">{event.outcomes}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* Social Media Strategy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Digital <span className="text-indigo-600">Outreach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Amplifying our impact through strategic social media engagement
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(socialTemplates).map(([platform, template], index) => (
              <motion.div
                key={platform}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerItem}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-3xl shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 capitalize">{platform}</h3>
                  <div className={`w-4 h-4 rounded-full ${
                    platform === 'instagram' ? 'bg-pink-500' :
                    platform === 'linkedin' ? 'bg-blue-600' : 'bg-blue-400'
                  }`}></div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-sm text-gray-700 mb-4 whitespace-pre-line">
                  {template}
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(template)}
                  className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition-colors"
                >
                  Copy Template
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Content Strategy</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📚</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Educational</h4>
                <p className="text-sm text-gray-600">Startup tips, industry insights, skill development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🎉</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Events</h4>
                <p className="text-sm text-gray-600">Live coverage, highlights, behind-the-scenes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Success Stories</h4>
                <p className="text-sm text-gray-600">Alumni achievements, startup spotlights</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Community</h4>
                <p className="text-sm text-gray-600">Team features, student spotlights, culture</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
     <section id="contact" className="py-20 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Join the <span className="text-amber-300">Innovation</span>
      </h2>
      <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
        Ready to transform your ideas into reality? Connect with GECH E-CELL today.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">📧</span>
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-indigo-200">pranamadithya15@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">📱</span>
            </div>
            <div>
              <p className="font-semibold">Contact Person</p>
              <p className="text-indigo-200">B R Adithya || 8618236719</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-xl">📍</span>
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-indigo-200">Government Engineering College, Hassan, Karnataka</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl"
      >
        <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-amber-300 resize-none"
          ></textarea>
          <button className="w-full px-6 py-3 bg-amber-500 text-indigo-900 font-bold rounded-xl hover:bg-amber-400 transition-colors">
            Send Message
          </button>
        </div>
      </motion.div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <AnimatedLogo />
              <div>
                <h3 className="text-xl font-bold">GECH E-CELL</h3>
                <p className="text-gray-400 text-sm">Think, Build, Lead.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              © 2024 Government Engineering College Hassan Entrepreneurship Cell. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Script Section - Hidden but accessible for copy-paste */}
      <div className="hidden">
        {/* 
        ===== GECH E-CELL NEC VIDEO SCRIPT (3-4 MINUTES) =====
        
        [SCENE 1: OPENING - ANIMATED LOGO & CAMPUS SHOTS]
        [0:00-0:15]
        NARRATOR (Energetic, youthful voice):
        "In the heart of Karnataka, where engineering meets entrepreneurship, a revolution is brewing. Welcome to GECH E-CELL - where we don't just dream, we build the future."
        
        [B-ROLL: Drone shots of GECH campus, students collaborating, animated logo reveal]
        
        [SCENE 2: MISSION & VISION]
        [0:15-0:45]
        NARRATOR:
        "Our mission is simple yet powerful: Transform 2000+ engineering minds into innovative business leaders. We're not just an entrepreneurship cell - we're a launchpad for India's next unicorns."
        
        [B-ROLL: Students in workshops, brainstorming sessions, prototype development]
        
        [SCENE 3: IMPACT STATISTICS]
        [0:45-1:15]
        NARRATOR:
        "In just one year, we've facilitated over 2 crores in funding, incubated 50+ startups, and connected students with 200+ industry mentors. But numbers tell only half the story."
        
        [B-ROLL: Animated statistics, success metrics, funding ceremonies]
        
        [SCENE 4: STUDENT TESTIMONIAL]
        [1:15-1:45]
        STUDENT FOUNDER (Confident, authentic):
        "I came to GECH with just an idea. Through E-CELL's incubation program, I learned to validate, build, and scale. Today, my startup employs 15 people and has raised 50 lakhs. GECH E-CELL didn't just support my dream - they made it inevitable."
        
        [B-ROLL: Student working on laptop, team meetings, product demos]
        
        [SCENE 5: EVENTS & PROGRAMS MONTAGE]
        [1:45-2:30]
        NARRATOR:
        "From StartUp Spark workshops to our flagship Pitch Perfect competition, from hackathons that run through the night to demo days that attract national investors - every event is designed to push boundaries and create opportunities."
        
        [B-ROLL: Fast-paced montage of events, competitions, workshops, networking sessions]
        
        [SCENE 6: TEAM & COMMUNITY]
        [2:30-3:00]
        NARRATOR:
        "Behind every success story is our passionate team of student leaders, supported by industry mentors and faculty champions. We're not just building startups - we're building a community that will shape India's entrepreneurial landscape."
        
        [B-ROLL: Team meetings, mentor sessions, community gatherings, collaborative spaces]
        
        [SCENE 7: CALL TO ACTION & CLOSING]
        [3:00-3:30]
        NARRATOR:
        "The National Entrepreneurship Challenge isn't just a competition for us - it's a platform to showcase how GECH E-CELL is redefining what's possible when engineering excellence meets entrepreneurial vision. Join us. The future is waiting."
        
        [B-ROLL: Students celebrating, graduation ceremonies, success celebrations]
        
        [FINAL FRAME: GECH E-CELL logo with tagline]
        TEXT ON SCREEN: "GECH E-CELL - Innovate. Incubate. Impact."
        NARRATOR: "GECH E-CELL. Where innovation becomes impact."
        
        ===== END SCRIPT =====
        
        SUGGESTED B-ROLL SHOTS:
        - Campus aerial views and architecture
        - Students collaborating in modern spaces
        - Whiteboard sessions and brainstorming
        - Prototype development and testing
        - Pitch presentations and competitions
        - Mentor-student interactions
        - Team celebrations and achievements
        - Technology and innovation labs
        - Networking events and conferences
        - Success stories and testimonials
        
        MUSIC SUGGESTIONS:
        - Upbeat, modern, inspiring background track
        - Build energy throughout the video
        - Softer during testimonial section
        - Crescendo for the call-to-action ending
        
        TECHNICAL NOTES:
        - 1080p minimum resolution
        - Professional lighting for interviews
        - Stable shots with smooth transitions
        - Color grading to match brand palette
        - Clear audio with professional microphones
        - Subtitles for accessibility
        */}
      </div>
    </div>
  );
};

export default GECH_E_CELL_Portfolio;