import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp, Award, Play, Star } from 'lucide-react';
import Layout from '../components/Layout';
import ProfileSelector from '../components/ProfileSelector';

interface Experience {
  company: string;
  location?: string;
  role: string;
  period: string;
  achievements?: string[];
  skills?: string[];
  image?: string;
  featured?: boolean;
}

const CV = () => {
  const [selectedProfile, setSelectedProfile] = useState<string>('');
  const [showAll, setShowAll] = useState(false);

  const experiences: Experience[] = [
    {
      company: "Noon",
      role: "Growth Intern",
      period: "Jan 2025 - Present",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      featured: true,
      skills: ["Growth Strategy", "A/B Testing", "Data Analytics", "UI/UX Optimization"],
      achievements: [
        "🚀 Increased AOV by 10% through strategic discount optimization and real-time competitive benchmarking",
        "📈 Elevated add-to-cart actions by 25% through targeted UI optimizations and personalized product popup",
        "💯 Boosted user retention by 10% by building a framework to automate reengagement and identify at-risk users",
        "💰 Drove a 7% order uplift through sale planning, coordinated marketing efforts, and targeted promotions"
      ]
    },
    {
      company: "STAGE",
      role: "Product Management Intern",
      period: "Nov 2023 - Aug 2024",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
      featured: true,
      skills: ["Product Management", "Payment Systems", "UX Design", "Data Analytics"],
      achievements: [
        "💳 Improved Trial conversion by 20% through development of UPI Autopay integration for multiple Payment Gateways",
        "📊 Boosted monthly revenue ₹25L through enhancing a recommendation engine using data driven insights",
        "⭐ Increased Play Store rating from 3.8 to 4.7 and NPS by 10% through UX improvements and feature prioritization",
        "🔧 Spearheaded the integration of Juspay SmartConnect, resulting in a 5% uptick in the Payment Success rate",
        "📋 Created 5+ incident response guides that cut downtime by 30% and reduced resolution time by 25%",
        "📈 Accelerated revenue growth by 30% QoQ through A/B testing of payment flows & ambassador integration"
      ]
    },
    {
      company: "CoffeeBeans",
      role: "Product Management Intern",
      period: "Aug 2023 - Sep 2023",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=225&fit=crop",
      skills: ["AI/ML", "MVP Development", "Hiring Tech", "Algorithm Design"],
      achievements: [
        "🤖 Reduced hiring costs by 20% through launching an MVP of a Gen AI platform for candidate screening",
        "⚡ Boosted candidate screening efficiency by 70% over manual processes using predictive matching algorithms",
        "🎯 Reduced interview false positives by 10% by implementing comprehensive KPIs for candidate evaluation"
      ]
    },
    {
      company: "Marketing Consultant",
      role: "Freelance",
      period: "Jun 2022 - Dec 2022",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop",
      skills: ["Content Strategy", "YouTube Growth", "A/B Testing", "Brand Development"],
      achievements: [
        "📺 Grew subscribers by 150% for multiple channels through successful YouTube content strategies and campaigns",
        "🎯 Increased the Click Through Rate(CTR) by 25% through A/B testing on thumbnails, using hooks and titles",
        "📱 Boosted views by 45% and shares by 30% through branded visual content and cross-functional collaboration"
      ]
    }
  ];

  const getPersonalizedContent = (profileType: string) => {
    switch (profileType) {
      case 'recruiter':
        return {
          title: "Talent Profile",
          subtitle: "Skills-focused experience overview",
          highlight: "Key achievements and growth metrics"
        };
      case 'lurker':
        return {
          title: "Professional Journey",
          subtitle: "Casual browse through my career",
          highlight: "What I've been working on"
        };
      case 'hiring-manager':
        return {
          title: "Leadership & Impact",
          subtitle: "Team building and strategic initiatives",
          highlight: "How I drive business results"
        };
      default:
        return {
          title: "About Me",
          subtitle: "Professional experience and achievements",
          highlight: "My career journey so far"
        };
    }
  };

  const content = getPersonalizedContent(selectedProfile);
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 2);

  if (!selectedProfile) {
    return (
      <Layout>
        <Helmet>
          <title>Profile Selection - AISHERE</title>
        </Helmet>
        <ProfileSelector onProfileSelect={setSelectedProfile} />
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>{content.title} - AISHERE</title>
        <meta name="description" content="Adnan Shamim's professional experience and achievements" />
      </Helmet>

      {/* Profile Header */}
      <section className="pt-20 pb-8 bg-netflix-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <button 
                onClick={() => setSelectedProfile('')}
                className="text-netflix-muted hover:text-netflix-white transition-colors text-sm"
              >
                ← Change Profile
              </button>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-netflix-white mb-4">
              {content.title}
            </h1>
            <p className="text-lg text-netflix-muted mb-2">
              {content.subtitle}
            </p>
            <div className="inline-flex items-center gap-2 bg-netflix-red px-4 py-2 rounded-full text-netflix-white font-medium">
              <Star size={16} />
              {content.highlight}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-netflix-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-netflix-white mb-8">
              Professional Experience
            </h2>

            <div className="grid gap-8">
              {displayedExperiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="netflix-card p-0 overflow-hidden group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="md:flex">
                    {/* Image Section */}
                    <div className="md:w-1/3 relative">
                      <img 
                        src={exp.image} 
                        alt={exp.company}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                      {exp.featured && (
                        <div className="absolute top-4 left-4">
                          <div className="bg-netflix-red text-netflix-white px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1">
                            <Award size={12} />
                            FEATURED
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-2 text-netflix-white">
                          <Calendar size={16} />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-netflix-white mb-1">
                            {exp.company}
                          </h3>
                          <p className="text-netflix-red font-semibold mb-2">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      {/* Skills */}
                      {exp.skills && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {exp.skills.map((skill, idx) => (
                              <span 
                                key={idx}
                                className="bg-netflix-black text-netflix-white px-3 py-1 text-xs font-medium rounded-full border border-netflix-gray"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      {exp.achievements && (
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <TrendingUp size={16} className="text-netflix-red mt-0.5 flex-shrink-0" />
                              <p className="text-netflix-muted text-sm leading-relaxed">
                                {achievement}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Show More Button */}
            {!showAll && experiences.length > 2 && (
              <div className="text-center mt-12">
                <motion.button
                  onClick={() => setShowAll(true)}
                  className="netflix-button inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={20} />
                  Show More Experience
                </motion.button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-netflix-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-netflix-red mb-2">4+</div>
              <div className="text-netflix-muted">Companies</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-netflix-red mb-2">2+</div>
              <div className="text-netflix-muted">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-netflix-red mb-2">25%+</div>
              <div className="text-netflix-muted">Avg Growth Impact</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-netflix-red mb-2">₹25L+</div>
              <div className="text-netflix-muted">Revenue Generated</div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CV;