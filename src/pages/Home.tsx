import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Play, Info, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Home = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce Growth",
      description: "Building scalable solutions for millions of users",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=225&fit=crop",
      category: "Product Management"
    },
    {
      id: 2,
      title: "Bharat Solutions",
      description: "Innovative products for the Indian market",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=225&fit=crop",
      category: "Strategy"
    },
    {
      id: 3,
      title: "Cinema & Culture",
      description: "Exploring storytelling through different mediums",
      image: "https://images.unsplash.com/photo-1489599810773-6c6c60eb69c9?w=400&h=225&fit=crop",
      category: "Personal"
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>AISHERE - Product Manager & Growth Expert</title>
        <meta name="description" content="Product manager, cinema lover, and growth expert building scalable solutions." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="max-w-2xl">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-netflix-white mb-6 text-shadow"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm Adnan
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-netflix-white mb-8 text-shadow leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Product manager, cinema lover, and growth expert. Currently building scalable solutions 
              at an e-commerce giant, previously crafting innovative products for Bharat.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link 
                to="/cv" 
                className="netflix-button flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold"
              >
                <Play size={20} />
                Learn More
              </Link>
              <a 
                href="mailto:adnanshamim11work@gmail.com"
                className="netflix-button-outline flex items-center justify-center gap-2 px-8 py-3 text-lg font-semibold"
              >
                <Mail size={20} />
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-netflix-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-netflix-white mb-8">Featured Work</h2>
            
            <div className="content-row">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="netflix-card min-w-[300px] w-80 cursor-pointer group"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-netflix-red text-netflix-white px-2 py-1 text-xs font-medium rounded">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-netflix-white mb-2">{project.title}</h3>
                    <p className="text-netflix-muted text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-netflix-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-netflix-white mb-6">
              Ready to Explore?
            </h2>
            <p className="text-lg text-netflix-muted mb-8 leading-relaxed">
              Dive deeper into my work, thoughts, and projects. Let's build something amazing together.
            </p>
            <Link 
              to="/projects" 
              className="netflix-button inline-flex items-center gap-2 px-8 py-3 text-lg font-semibold"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;