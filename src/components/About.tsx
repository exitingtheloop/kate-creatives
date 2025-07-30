import React from 'react';
import { ArrowLeft, Award, Users, Target, Zap, CheckCircle, Star } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
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
              About
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
            Our Story
          </span>
          
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-white">
            <span className="text-pink">Digital</span><br />Pro
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Kate Creatives is where strategic thinking meets creative brilliance. We transform ambitious brands through innovative design and data-driven digital experiences.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="glass-card-large">
              <div className="w-16 h-16 bg-gradient-to-br from-pink to-white/20 rounded-2xl flex items-center justify-center mb-8">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-heading font-black text-white mb-6">
                Our Mission
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                To empower ambitious brands with strategic thinking, stunning visuals, and digital experiences that captivate audiences and drive extraordinary results. We believe every brand has a unique story worth telling beautifully.
              </p>
              
              <div className="flex items-center text-pink">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Strategic Brand Transformation</span>
              </div>
            </div>

            {/* Vision */}
            <div className="glass-card-large">
              <div className="w-16 h-16 bg-gradient-to-br from-gold to-pink/20 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="text-3xl font-heading font-black text-white mb-6">
                Our Vision
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                To be the creative catalyst that transforms how brands connect with their audiences in the digital age. We envision a world where every brand interaction is meaningful, memorable, and measurably impactful.
              </p>
              
              <div className="flex items-center text-pink">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span className="font-medium">Future-Forward Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
              Our <span className="text-pink">Values</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "Excellence",
                desc: "We pursue perfection in every pixel, every strategy, and every client interaction."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                desc: "Great work happens when diverse minds come together with shared purpose."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Innovation",
                desc: "We push boundaries and explore new possibilities to stay ahead of the curve."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Results",
                desc: "Beautiful design means nothing without measurable impact on your business."
              }
            ].map((value, index) => (
              <div key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-pink/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-pink">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-pink transition-colors duration-300">
                  {value.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card-large">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
                Our <span className="text-pink">Impact</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Numbers that reflect our commitment to delivering exceptional results.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  number: "150+",
                  label: "Projects Completed",
                  desc: "Successful brand transformations"
                },
                {
                  number: "98%",
                  label: "Client Satisfaction",
                  desc: "Happy clients who return"
                },
                {
                  number: "300%",
                  label: "Average ROI",
                  desc: "Return on marketing investment"
                },
                {
                  number: "24/7",
                  label: "Support",
                  desc: "Always here when you need us"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-heading font-black text-pink mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xl font-heading font-bold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
              Meet the <span className="text-pink">Team</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The creative minds behind Kate Creatives, dedicated to bringing your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Kate Johnson",
                role: "Creative Director & Founder",
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Visionary leader with 10+ years in brand strategy and creative direction."
              },
              {
                name: "Marcus Chen",
                role: "Lead Designer",
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Award-winning designer specializing in digital experiences and visual identity."
              },
              {
                name: "Sarah Williams",
                role: "Strategy Director",
                image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
                bio: "Data-driven strategist focused on measurable growth and brand positioning."
              }
            ].map((member, index) => (
              <div key={index} className="glass-card group text-center hover:scale-105 transition-all duration-300">
                <div 
                  className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink/20 to-white/10 overflow-hidden"
                  style={{
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-pink transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-pink font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
              Recognition & <span className="text-pink">Awards</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry recognition for our commitment to excellence and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: "2024",
                award: "Best Digital Agency",
                organization: "Creative Awards"
              },
              {
                year: "2023",
                award: "Innovation in Design",
                organization: "Design Excellence"
              },
              {
                year: "2023",
                award: "Top Brand Strategy",
                organization: "Marketing Leaders"
              },
              {
                year: "2022",
                award: "Rising Star Agency",
                organization: "Industry Awards"
              }
            ].map((award, index) => (
              <div key={index} className="glass-card text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-gold/30 to-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="w-6 h-6 text-gold" />
                </div>
                
                <div className="text-2xl font-heading font-black text-pink mb-2">
                  {award.year}
                </div>
                
                <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-pink transition-colors duration-300">
                  {award.award}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {award.organization}
                </p>
              </div>
            ))}
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

export default About;