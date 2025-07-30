import React, { useState } from 'react';
import { ArrowLeft, Eye, ExternalLink, Calendar, Tag, Award } from 'lucide-react';

interface PortfolioProps {
  onBack: () => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Brand Strategy', 'Web Design', 'E-commerce', 'Marketing'];
  
  const projects = [
    {
      id: 1,
      title: "TechFlow Solutions",
      category: "Brand Strategy",
      year: "2024",
      description: "Complete rebrand and digital strategy for a SaaS startup, resulting in 300% increase in qualified leads and successful Series A funding.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Branding", "Strategy", "Digital"],
      metrics: ["300% Lead Growth", "Series A Funded", "Award Winning"],
      featured: true
    },
    {
      id: 2,
      title: "EcoLux Fashion",
      category: "E-commerce",
      year: "2024",
      description: "Sustainable fashion brand launch with integrated e-commerce platform, achieving $2M revenue in first year.",
      image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["E-commerce", "Fashion", "Sustainability"],
      metrics: ["$2M Revenue", "50K Customers", "Sustainability Award"],
      featured: true
    },
    {
      id: 3,
      title: "FinanceForward",
      category: "Web Design",
      year: "2023",
      description: "Modern fintech platform redesign focusing on user experience and conversion optimization.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Fintech", "UX/UI", "Conversion"],
      metrics: ["45% Conversion Increase", "User Experience Award", "Mobile First"]
    },
    {
      id: 4,
      title: "HealthTech Innovations",
      category: "Brand Strategy",
      year: "2023",
      description: "Healthcare technology startup branding and go-to-market strategy development.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Healthcare", "Startup", "Strategy"],
      metrics: ["Market Entry", "Brand Recognition", "Investor Ready"]
    },
    {
      id: 5,
      title: "ArtSpace Gallery",
      category: "Web Design",
      year: "2023",
      description: "Contemporary art gallery website with virtual exhibition capabilities and artist portfolio management.",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Art", "Gallery", "Virtual"],
      metrics: ["Virtual Tours", "Artist Platform", "Cultural Impact"]
    },
    {
      id: 6,
      title: "GreenEnergy Solutions",
      category: "Marketing",
      year: "2023",
      description: "Renewable energy company digital marketing campaign and lead generation strategy.",
      image: "https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Renewable Energy", "Lead Gen", "Digital Marketing"],
      metrics: ["200% Lead Increase", "Green Certification", "Industry Recognition"]
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 glass-panel">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={onBack}
              className="btn-glass group"
            >
              <ArrowLeft className="sm:mr-2 group-hover:-translate-x-1 transition-transform duration-300" size={20} />
              <span className="hidden sm:inline">Back to Home</span>
            </button>
            
            <div className="text-2xl font-heading font-black">
              Portfolio
            </div>
            
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-conic from-pink/10 via-white/5 to-pink/10 rounded-full blur-3xl animate-spin-very-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-pink/8 to-transparent rounded-full blur-2xl animate-pulse-glow"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="glass-tag mb-8">
            Our Work
          </span>
          
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-white">
            <span className="text-pink">Creative</span> Portfolio
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Explore our collection of transformative projects that have helped brands achieve extraordinary results
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-pink to-white/20 text-white border border-pink/30'
                    : 'bg-white/5 backdrop-blur-xl border border-white/10 text-gray-400 hover:text-white hover:border-pink/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group cursor-pointer relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink/10 to-white/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"></div>
                
                <div className="glass-card-large group overflow-hidden">
                  {/* Project Image */}
                  <div 
                    className="h-80 relative overflow-hidden rounded-2xl mb-8"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,198,214,0.1)_0%,transparent_50%)]"></div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-gradient-to-r from-gold/20 to-pink/20 text-gold rounded-full text-sm font-medium border border-gold/30 flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Year Badge */}
                    <div className="absolute top-6 right-6">
                      <span className="glass-tag text-sm flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {project.year}
                      </span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Eye className="w-6 h-6 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Tag */}
                    <div className="absolute bottom-6 left-6">
                      <span className="glass-tag text-sm flex items-center">
                        <Tag className="w-4 h-4 mr-2" />
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  <div>
                    <h3 className="text-3xl font-heading font-black mb-4 text-white group-hover:text-pink transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-lg leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3">
                      {project.metrics.map((metric, i) => (
                        <span 
                          key={i} 
                          className="metric-tag"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="btn-glass group text-lg px-8 py-4">
              Load More Projects
              <ArrowLeft className="ml-2 rotate-180 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative text-white p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 overflow-hidden transition-all duration-800 max-w-6xl mx-auto min-h-[400px]">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="https://s3.us-west-1.wasabisys.com/katecreatives/cta-bg.mp4" type="video/mp4" />
            </video>
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            
            {/* Content */}
            <div className="flex-1 relative z-20 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-heading font-black mb-6 text-white leading-tight">Let's Build Something Extraordinary Together</h3>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl">Ready to transform your brand and accelerate exponential growth? Let's create something remarkable.</p>
            </div>
            
            <button
              onClick={onBack}
              className="btn-primary group text-lg px-12 py-6 relative overflow-hidden flex items-center z-20 shrink-0"
            >
              <span className="relative z-10 flex items-center">
                Get Started Today
                <ArrowLeft className="ml-3 rotate-180 group-hover:translate-x-2 transition-transform duration-300" size={20} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 border-t border-white/10 bg-gradient-to-t from-gray-900/20 to-transparent overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-pink/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-green/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="text-4xl font-heading font-black text-white mb-6">
                Kate Creatives
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                Transforming ambitious brands with strategic thinking, stunning visuals, and digital experiences that drive extraordinary results.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { name: 'Instagram', icon: '📷' },
                  { name: 'LinkedIn', icon: '💼' },
                  { name: 'Twitter', icon: '🐦' },
                  { name: 'Behance', icon: '🎨' }
                ].map((social) => (
                  <a 
                    key={social.name}
                    href="#" 
                    className="w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-lg hover:bg-white/10 hover:border-pink/30 hover:scale-110 transition-all duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-6">Services</h3>
              <ul className="space-y-4">
                {[
                  'Brand Strategy',
                  'Creative Design', 
                  'Web Development',
                  'Growth Marketing',
                  'Digital Consulting'
                ].map((service) => (
                  <li key={service}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-pink transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-pink/60 rounded-full mr-3 group-hover:bg-pink transition-colors duration-300"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-heading font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-pink mt-1">📧</span>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href="mailto:hello@katecreatives.com" className="text-white hover:text-pink transition-colors duration-300">
                      hello@katecreatives.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-pink mt-1">📱</span>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-pink transition-colors duration-300">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-pink mt-1">📍</span>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">
                      New York, NY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="glass-card mb-16 text-center">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Get the latest insights on design trends, marketing strategies, and creative inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300"
              />
              <button className="btn-glass px-8 py-3 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-gray-500 text-sm">
                <span>© 2025 Kate Creatives. All rights reserved.</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-500 hover:text-pink transition-colors duration-300 text-sm">
                  Privacy Policy
                </a>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <a href="#" className="text-gray-500 hover:text-pink transition-colors duration-300 text-sm">
                  Terms of Service
                </a>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <a href="#" className="text-gray-500 hover:text-pink transition-colors duration-300 text-sm">
                  Cookies
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;