import React, { useState } from 'react';
import { ArrowLeft, Send, User, Mail, Phone, MessageSquare, Sparkles, CheckCircle } from 'lucide-react';

interface ContactProps {
  onBack: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
      });
    }, 3000);
  };

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
              Contact
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

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="glass-tag mb-8">
            Get In Touch
          </span>
          
          <h1 className="text-5xl md:text-7xl font-heading font-black mb-8 text-white">
            Let's Create Something <span className="text-pink">Amazing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Ready to transform your brand? Tell us about your project and let's discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="glass-card-large">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:outline-none focus:border-pink/30 transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      <option value="brand-strategy">Brand Strategy</option>
                      <option value="creative-design">Creative Design</option>
                      <option value="web-development">Web Development</option>
                      <option value="growth-marketing">Growth Marketing</option>
                      <option value="digital-consulting">Digital Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:outline-none focus:border-pink/30 transition-colors duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5K - $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="100k+">$100K+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:outline-none focus:border-pink/30 transition-colors duration-300"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months+">6+ months</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div className="mt-8">
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Project Details *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-500" size={20} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="btn-primary group text-lg px-12 py-4 relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Send Message
                    <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                  </span>
                </button>
              </div>
            </form>
          ) : (
            /* Success Message */
            <div className="glass-card-large text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green to-pink rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-3xl font-heading font-black text-white mb-4">
                Message Sent Successfully!
              </h3>
              
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Thank you for reaching out! We've received your message and will get back to you within 24 hours.
              </p>
              
              <div className="flex items-center justify-center space-x-2 text-pink">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">We're excited to work with you!</span>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-white">
              Other Ways to <span className="text-pink">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Prefer a different way to get in touch? We're here and ready to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Us",
                info: "hello@katecreatives.com",
                desc: "Send us an email anytime",
                action: "mailto:hello@katecreatives.com"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Call Us",
                info: "+1 (234) 567-8900",
                desc: "Mon-Fri, 9AM-6PM EST",
                action: "tel:+1234567890"
              },
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Live Chat",
                info: "Available Now",
                desc: "Get instant answers",
                action: "#"
              }
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.action}
                className="glass-card group text-center hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink/20 to-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-pink">
                    {contact.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-pink transition-colors duration-300">
                  {contact.title}
                </h3>
                
                <p className="text-lg text-pink mb-2 font-medium">
                  {contact.info}
                </p>
                
                <p className="text-gray-400 text-sm">
                  {contact.desc}
                </p>
              </a>
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

export default Contact;