import React from 'react';
import { ArrowLeft, Check, Star, Zap, Target, Crown } from 'lucide-react';

interface PackagesProps {
  onBack: () => void;
}

const Packages: React.FC<PackagesProps> = ({ onBack }) => {
  const packages = [
    {
      name: "STARTER PACKAGE",
      price: "$2,500",
      period: "/mo",
      description: "Kickstart your brand with our Starter Package! Enjoy social media management on Facebook and Instagram, plus SEO optimization and logo design. Perfect for growing businesses!",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      borderGradient: "from-green-500/30 to-emerald-500/30",
      features: [
        "Social Media Management (2 platforms, 8 posts/month)",
        "Basic SEO Optimization",
        "Branding and Design",
        "Meeting Report",
        "Email Marketing (1 campaign/month)",
        "Website (1 landing page incl. Copy + design)",
        "Content Marketing"
      ],
      popular: false
    },
    {
      name: "GROWTH PACKAGE",
      price: "$4,500",
      period: "/mo",
      description: "Transform your brand with our Growth Package: custom logo, full brand guidelines, a 5-page website, social media management, and advanced SEO to elevate your presence!",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-pink/20 to-purple-500/20",
      borderGradient: "from-pink/30 to-purple-500/30",
      features: [
        "Social Media Management (4 platforms, 12 posts/month)",
        "Advanced SEO Strategy",
        "Branding and Design",
        "Analytics and Reporting",
        "Email Marketing",
        "Website (5 Pages)",
        "Content Marketing",
        "PPC Campaign Management (Meta or Google)"
      ],
      popular: true
    },
    {
      name: "PREMIUM PACKAGE",
      price: "$8,000",
      period: "/mo",
      description: "Elevate your brand with our Premium Package: complete brand strategy, a tailored brand kit, social media management for 5 platforms, and a full website design!",
      icon: <Crown className="w-8 h-8" />,
      gradient: "from-gold/20 to-yellow-500/20",
      borderGradient: "from-gold/30 to-yellow-500/30",
      features: [
        "Social Media Management (up to 5 platforms, 16 posts/month)",
        "Comprehensive SEO Strategy with Backlink Building",
        "Branding and Design",
        "Weekly Analytics Reports + Strategy Calls",
        "Email Marketing",
        "Website (10+ Pages)",
        "Content Marketing",
        "CRM Setup and Integration",
        "PPC Campaign Management"
      ],
      popular: false
    }
  ];

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
              Packages
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
            Choose Your Plan
          </span>
          
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-white">
            <span className="text-pink">Premium</span> Packages
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light mb-12">
            Comprehensive solutions designed to transform your brand and accelerate exponential growth
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`group relative ${pkg.popular ? 'lg:-mt-8' : ''}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-pink to-purple-500 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-pink/5 to-white/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"></div>
                
                <div className={`glass-card-large group overflow-hidden h-full flex flex-col relative ${
                  pkg.popular ? 'border-pink/30 bg-white/10' : ''
                }`}>
                  {/* Background Pattern */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${pkg.gradient} rounded-full blur-3xl`}></div>
                  
                  {/* Header */}
                  <div className="text-center mb-8 relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {pkg.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-heading font-black text-white mb-4 group-hover:text-pink transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-5xl font-heading font-black text-pink">
                        {pkg.price}
                      </span>
                      <span className="text-xl text-gray-400 ml-2">
                        {pkg.period}
                      </span>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
                      {pkg.description}
                    </p>
                  </div>
                  
                  {/* Features */}
                  <div className="flex-1 mb-8">
                    <ul className="space-y-4">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-pink to-green rounded-full flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300 leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full ${
                    pkg.popular 
                      ? 'btn-primary' 
                      : 'btn-glass'
                  } group/btn relative overflow-hidden`}>
                    <span className="relative z-10 flex items-center justify-center">
                      Get Started
                      <ArrowLeft className="ml-2 rotate-180 group-hover/btn:translate-x-2 transition-transform duration-300" size={18} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
              Frequently Asked <span className="text-pink">Questions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to know about our packages and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I upgrade or downgrade my package?",
                answer: "Yes! You can upgrade or downgrade your package at any time. Changes will take effect at the start of your next billing cycle."
              },
              {
                question: "What's included in the setup process?",
                answer: "Each package includes a comprehensive onboarding process, strategy session, and setup of all included services within the first 30 days."
              },
              {
                question: "Do you provide monthly reports?",
                answer: "All packages include detailed monthly reports. Growth and Premium packages also include weekly analytics and strategy calls."
              },
              {
                question: "Is there a contract commitment?",
                answer: "We offer flexible month-to-month agreements with no long-term contracts required. However, we recommend a minimum 3-month commitment for best results."
              }
            ].map((faq, index) => (
              <div key={index} className="glass-card group">
                <h3 className="text-xl font-heading font-bold text-white mb-4 group-hover:text-pink transition-colors duration-300">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card-large">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
              Ready to <span className="text-pink">Get Started?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Choose the package that fits your needs and let's transform your brand together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group text-lg px-8 py-4">
                <span className="relative z-10 flex items-center">
                  Schedule Consultation
                  <ArrowLeft className="ml-3 rotate-180 group-hover:translate-x-2 transition-transform duration-300" size={20} />
                </span>
              </button>
              <button className="btn-glass group text-lg px-8 py-4">
                Contact Us
              </button>
            </div>
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

export default Packages;