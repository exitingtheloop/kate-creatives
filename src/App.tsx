import React, { useEffect, useState } from 'react';
import { ChevronRight, Star, ArrowRight, Menu, X, Sparkles, Zap, Palette, Play, Eye, Layers } from 'lucide-react';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';
import Packages from './components/Packages';
import CTASection from './components/CTASection';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPackages, setShowPackages] = useState(false);

  // test : Ensure we always start on home page on refresh/initial load
  useEffect(() => {
    // Reset all page states on component mount
    setShowPortfolio(false);
    setShowContact(false);
    setShowAbout(false);
    setShowPackages(false);
    
    // Always scroll to top on initial load
    window.scrollTo(0, 0);
    
    // Clear any hash or search params that might cause issues
    if (window.location.hash || window.location.search) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  // Reset animations when returning to home
  const handleBackToHome = () => {
    window.scrollTo(0, 0);
    setShowPortfolio(false);
    setShowContact(false);
    setShowAbout(false);
    setShowPackages(false);
    
    // Clear any URL fragments
    window.history.replaceState({}, document.title, '/');
    
    // Reset fade sections
    setTimeout(() => {
      const sections = document.querySelectorAll('.fade-section');
      sections.forEach(section => {
        section.classList.remove('animate-fade-in');
        section.classList.add('opacity-0');
      });
      
      // Re-trigger intersection observer
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      }, observerOptions);

      sections.forEach(section => observer.observe(section));
    }, 100);
  };

  const keywords = ['INNOVATIVE', 'CREATIVE', 'BOLD', 'FUTURISTIC', 'ARTISTIC'];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Keyword carousel
    const keywordInterval = setInterval(() => {
      setCurrentKeyword((prev) => (prev + 1) % keywords.length);
    }, 2000);

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.fade-section');
    sections.forEach(section => observer.observe(section));

    // Parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      
      // Update navbar background based on scroll
      setIsScrolled(scrolled > 50);
      
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Noise overlay animation
      const noiseOverlay = document.querySelector('.noise-overlay') as HTMLElement;
      if (noiseOverlay) {
        noiseOverlay.style.transform = `translateX(${scrolled * 0.1}px) translateY(${scrolled * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(keywordInterval);
    };
  }, []);

  if (showPortfolio) {
    return <Portfolio onBack={handleBackToHome} />;
  }

  if (showContact) {
    return <Contact onBack={handleBackToHome} />;
  }

  if (showAbout) {
    return <About onBack={handleBackToHome} />;
  }

  if (showPackages) {
    return <Packages onBack={handleBackToHome} />;
  }

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden relative">
      {/* Animated Cursor */}
      <div 
        className="fixed w-8 h-8 bg-gradient-to-r from-pink via-white to-pink rounded-full pointer-events-none z-50 mix-blend-screen transition-transform duration-200 ease-out opacity-60"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'scale(1)',
        }}
      />

      {/* Noise Overlay */}
      <div className="noise-overlay fixed inset-0 opacity-[0.02] pointer-events-none z-10 bg-noise"></div>

      {/* Floating Abstract Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Large 3D Abstract Shapes */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-white/5 via-pink/3 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-tl from-pink/4 via-white/2 to-transparent rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-conic from-white/3 via-pink/5 to-white/3 rounded-full blur-2xl animate-spin-very-slow"></div>
        
        {/* 3D Geometric Shapes */}
        <div className="parallax absolute top-1/4 right-1/4 w-32 h-32 border border-white/10 rotate-45 animate-spin-slow" data-speed="0.3"></div>
        <div className="parallax absolute bottom-1/3 left-1/6 w-24 h-24 border-2 border-pink/20 rounded-full animate-pulse-glow" data-speed="0.4"></div>
        <div className="parallax absolute top-3/4 right-1/6 w-16 h-16 bg-gradient-to-br from-white/10 to-pink/10 transform rotate-12 animate-float-gentle" data-speed="0.2"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/3 left-1/3 w-4 h-4 bg-pink/60 rounded-full animate-twinkle shadow-glow-pink"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-gold/60 rounded-full animate-twinkle-delayed shadow-glow-gold"></div>
        <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-pink/60 rounded-full animate-twinkle shadow-glow-pink"></div>
        
        {/* Space-like Stars */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white/60 rounded-full animate-twinkle"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-white/40 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-white/50 rounded-full animate-twinkle"></div>
        <div className="absolute top-1/2 right-10 w-1 h-1 bg-white/30 rounded-full animate-twinkle-delayed"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-white/60 rounded-full animate-twinkle"></div>
        
        {/* Green micro-details */}
        <div className="absolute top-1/4 left-1/3 w-0.5 h-0.5 bg-green-400/40 rounded-full animate-twinkle"></div>
        <div className="absolute bottom-1/2 right-1/4 w-0.5 h-0.5 bg-green-400/30 rounded-full animate-twinkle-delayed"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <img 
              src="https://s3.us-west-1.wasabisys.com/katecreatives/kc-logo.png" 
              alt="Kate Creatives" 
              className="h-10 w-auto transition-all duration-300 hover:scale-105"
            />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-12">
              {['Home', 'About', 'Services', 'Packages', 'Portfolio', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => {
                    if (item === 'About') {
                      window.scrollTo(0, 0);
                      setShowAbout(true);
                    } else if (item === 'Portfolio') {
                      window.scrollTo(0, 0);
                      setShowPortfolio(true);
                    } else if (item === 'Contact') {
                      window.scrollTo(0, 0);
                      setShowContact(true);
                    } else if (item === 'Packages') {
                      window.scrollTo(0, 0);
                      setShowPackages(true);
                    } else {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                  }}
                  className={`transition-all duration-500 font-medium tracking-wide relative group ${
                    isScrolled 
                      ? 'text-gray-300 hover:text-green' 
                      : 'text-white/90 hover:text-green drop-shadow-lg'
                  }`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green to-gold transition-all duration-500 group-hover:w-full shadow-glow-green"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden relative z-50 glass-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 relative">
                <span className={`absolute top-6 left-0 w-full h-0.5 bg-gradient-to-r from-pink to-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } ${isScrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/5' : 'bg-black/90 backdrop-blur-xl border-b border-white/10'}`}>
            <div className="px-6 py-8 space-y-6">
              {['Home', 'About', 'Services', 'Packages', 'Portfolio', 'Contact'].map((item, index) => (
                <button 
                  key={item}
                  onClick={() => {
                    if (item === 'About') {
                      window.scrollTo(0, 0);
                      setShowAbout(true);
                    } else if (item === 'Portfolio') {
                      window.scrollTo(0, 0);
                      setShowPortfolio(true);
                    } else if (item === 'Contact') {
                      window.scrollTo(0, 0);
                      setShowContact(true);
                    } else if (item === 'Packages') {
                      window.scrollTo(0, 0);
                      setShowPackages(true);
                    } else {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }
                    setIsMenuOpen(false);
                  }}
                  className="block text-xl text-white hover:text-green transition-all duration-300 font-medium animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 px-6 sm:px-8 lg:px-4"
        style={{
          backgroundImage: 'url(https://s3.us-west-1.wasabisys.com/katecreatives/herotp.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          {/* Keyword Carousel */}
          <div className="mb-6 sm:mb-8 h-12 sm:h-16 flex items-center justify-center">
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-1000 ease-out"
                style={{ transform: `translateY(-${currentKeyword * (window.innerWidth < 640 ? 3 : 4)}rem)` }}
              >
                {keywords.map((keyword, index) => (
                  <div 
                    key={keyword}
                    className="h-12 sm:h-16 flex items-center justify-center min-w-full"
                  >
                    <span className="text-lg sm:text-2xl font-heading font-bold text-pink tracking-wider">
                      {keyword}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Headline with Staggered Animation */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-tight sm:leading-none text-white">
              <div className="overflow-hidden">
                <span className="block animate-slide-up-hero">KATE</span>
              </div>
              <div className="overflow-hidden">
                <span className="block text-pink animate-slide-up-hero-delayed">CREATIVES</span>
              </div>
            </h1>
          </div>
          
          <div className="overflow-hidden mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light animate-fade-up-hero px-4 sm:px-0">
              Kate Creatives transforms ambitious brands with strategic thinking, stunning visuals, and digital experiences that captivate audiences and drive extraordinary results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center animate-fade-up-hero-delayed mb-16 sm:mb-20">
            <button className="btn-primary group relative overflow-hidden text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 w-full sm:w-auto max-w-xs sm:max-w-none">
              <span className="relative z-10 flex items-center">
                Start Project
                <ChevronRight className="ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform duration-300" size={18} />
              </span>
            </button>
            
            <button className="btn-glass group text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-xs sm:max-w-none">
              <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" size={16} />
              Watch Reel
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-green to-gold rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
        
      </section>

      {/* Morphing Section Transition */}
      <div className="relative h-8 sm:h-32 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".1" fill="url(#gradient1)"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".05" fill="url(#gradient2)"></path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F4C6D6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#F4C6D6" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* About Section */}
      <section id="about" className="py-8 sm:py-32 px-6 fade-section opacity-0 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Centered Section Tag */}
          <div className="text-center mb-6 sm:mb-16">
            <span className="glass-tag">
              ✨ About Kate Creatives
            </span>
          </div>
          
          {/* Bold Two-Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-6 sm:space-y-12 pl-4 sm:pl-8 lg:pl-12">
              {/* Stacked Headings */}
              <div className="mb-6 sm:mb-16">
                <h2 className="text-6xl md:text-8xl font-heading font-black leading-none">
                  <div className="text-white mb-2">DIGITAL</div>
                  <div className="text-pink">
                    PRO
                  </div>
                </h2>
              </div>
              
              {/* Four Feature Points */}
              <div className="space-y-4 sm:space-y-8">
                {[
                  {
                    icon: "⚡",
                    title: "Expertise",
                    desc: "Deep technical knowledge combined with creative vision to deliver exceptional digital experiences."
                  },
                  {
                    icon: "🎯",
                    title: "Range of Services", 
                    desc: "Comprehensive solutions from brand strategy to digital marketing and everything in between."
                  },
                  {
                    icon: "📈",
                    title: "Effectiveness",
                    desc: "Data-driven approach ensuring measurable results and sustainable growth for your business."
                  },
                  {
                    icon: "🤝",
                    title: "Community of Clients",
                    desc: "Kate Creatives is trusted by innovative brands worldwide who value quality, creativity, and strategic thinking."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-gold/30 flex items-center justify-center text-xl group-hover:border-gold/60 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-pink transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - 3D Abstract Visual */}
            <div className="relative flex items-center justify-center min-h-[400px] sm:min-h-[600px] hidden sm:block">
              {/* Ambient Lighting Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-radial from-pink/20 via-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
                <div className="absolute w-80 h-80 bg-gradient-radial from-gold/15 via-pink/10 to-transparent rounded-full blur-2xl animate-float-slow"></div>
              </div>
              
              {/* 3D Abstract Shape */}
              <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                {/* Main Fluid Shape */}
                <div className="absolute w-64 h-64 bg-gradient-to-br from-white/10 via-pink/20 to-gold/10 rounded-full blur-sm animate-float-gentle transform rotate-12"></div>
                <div className="absolute w-48 h-48 bg-gradient-to-tl from-pink/30 via-white/15 to-purple-500/20 rounded-full blur-md animate-float-reverse transform -rotate-12"></div>
                <div className="absolute w-32 h-32 bg-gradient-to-r from-gold/40 via-pink/30 to-white/20 rounded-full blur-lg animate-spin-slow"></div>
                
                {/* Glassy Overlay */}
                <div className="absolute w-72 h-72 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full animate-pulse-glow"></div>
                
                {/* Geometric Accents */}
                <div className="absolute top-8 right-8 w-16 h-16 border-2 border-gold/30 rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-12 left-12 w-12 h-12 border border-pink/40 rounded-full animate-twinkle"></div>
                <div className="absolute top-1/2 left-8 w-8 h-8 bg-gradient-to-br from-green-400/60 to-pink/40 rounded-sm rotate-45 animate-float-gentle"></div>
                
                {/* Floating Particles */}
                <div className="absolute top-16 left-16 w-2 h-2 bg-gold/80 rounded-full animate-twinkle shadow-glow-gold"></div>
                <div className="absolute bottom-20 right-20 w-1.5 h-1.5 bg-pink/80 rounded-full animate-twinkle-delayed shadow-glow-pink"></div>
                <div className="absolute top-1/3 right-12 w-1 h-1 bg-green-400/80 rounded-full animate-twinkle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Morphing Section Transition */}
      <div className="relative h-32 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".1" fill="url(#gradient1)"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".05" fill="url(#gradient2)"></path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F4C6D6" stopOpacity="0.1"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05"/>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#F4C6D6" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Services Section */}
      <section id="services" className="py-8 sm:py-32 px-6 fade-section opacity-0 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-20">
            <span className="glass-tag mb-8">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 sm:mb-8 text-white">
              <span className="text-pink">
                Premium Services
              </span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              Comprehensive solutions designed to elevate your brand and accelerate exponential growth
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                letter: "A",
                title: "Brand Strategy",
                desc: "Comprehensive brand positioning, messaging architecture, and competitive analysis to establish your unique market presence and drive authentic connections.",
                gradient: "from-pink to-white/20"
              },
              {
                letter: "B", 
                title: "Creative Design",
                desc: "Cutting-edge visual identity systems, immersive website experiences, and marketing materials that captivate audiences and tell your brand story.",
                gradient: "from-white/20 to-pink"
              },
              {
                letter: "G",
                title: "Growth Marketing",
                desc: "Performance-driven campaigns across social media, search, and display advertising designed to maximize ROI and scale your business exponentially.",
                gradient: "from-pink to-gold"
              }
            ].map((service, index) => (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink/5 to-white/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-110"></div>
                <div className="glass-card-large group overflow-hidden h-96 flex flex-col">
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink/5 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mr-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-glow-pink`}>
                      <span className="text-2xl font-heading font-black text-white drop-shadow-lg">
                        {service.letter}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-black text-white group-hover:text-pink transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-base leading-relaxed mb-6 flex-1 group-hover:text-gray-300 transition-colors duration-300">
                    {service.desc}
                  </p>
                  
                  <button className="btn-glass group/btn relative overflow-hidden mt-auto">
                    <span className="relative z-10 flex items-center">
                      Start Now
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" size={18} />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Morphing Section Transition */}
      <div className="relative h-32 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" opacity=".1" fill="url(#gradient3)"></path>
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="#F4C6D6" stopOpacity="0.05"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Work Section */}
      <section id="work" className="py-32 px-6 fade-section opacity-0 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="glass-tag mb-8">
              Success Stories
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 text-white">
              Featured Work
            </h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
              Transformative success stories from brands Kate Creatives has helped elevate and scale to new heights
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {[
              {
                title: "TechFlow Solutions",
                category: "SaaS Startup",
                desc: "Kate Creatives delivered a complete rebrand and digital strategy resulting in 300% increase in qualified leads, successful Series A funding, and industry recognition.",
                metrics: ["300% Lead Growth", "Series A Funded", "Award Winning"],
                gradient: "from-blue-500/10 to-purple-500/10"
              },
              {
                title: "EcoLux Fashion",
                category: "Sustainable Fashion",
                desc: "Kate Creatives launched this sustainable fashion brand with integrated e-commerce platform, achieving $2M revenue in first year and 50K loyal customers.",
                metrics: ["$2M Revenue", "50K Customers", "Sustainability Award"],
                gradient: "from-green-500/10 to-emerald-500/10"
              }
            ].map((project, index) => (
              <div 
                key={index} 
                className="group cursor-pointer relative"
                style={{ animationDelay: `${index * 400}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink/10 to-white/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"></div>
                <div className="glass-card-large group overflow-hidden">
                  <div className={`h-80 bg-gradient-to-br ${project.gradient} relative overflow-hidden rounded-2xl mb-8`}
                       style={{
                         backgroundImage: index === 0 
                           ? 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800)'
                           : 'url(https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800)',
                         backgroundSize: 'cover',
                         backgroundPosition: 'center'
                       }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,198,214,0.1)_0%,transparent_50%)]"></div>
                    
                    {/* Hover Reveal Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink/20 to-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-8 right-8 w-16 h-16 border border-white/10 rounded-full animate-spin-slow"></div>
                    <div className="absolute bottom-8 left-8 w-12 h-12 bg-gradient-to-br from-pink/20 to-white/10 rounded-lg rotate-45 animate-pulse-glow"></div>
                    
                    <div className="absolute bottom-6 left-8">
                      <span className="glass-tag text-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-4xl font-heading font-black mb-6 text-white group-hover:text-pink transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 group-hover:text-gray-300 transition-colors duration-300">
                      {project.desc}
                    </p>
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
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <button 
            onClick={() => setShowPortfolio(true)}
            onClickCapture={() => window.scrollTo(0, 0)}
            className="btn-primary group text-xl px-12 py-6 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              View All Projects
              <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform duration-300" size={24} />
            </span>
          </button>
        </div>
      </section>

      
      {/* CTA Section */}
      <section id="contact" className="py-32 px-6 fade-section opacity-0">
        <div className="max-w-6xl mx-auto">
          <CTASection
            title="Let's Build Something Extraordinary Together"
            description="Ready to transform your brand and accelerate exponential growth? Let's create something remarkable."
            buttonText="Get Started Today"
            onButtonClick={() => setShowContact(true)}
            onButtonClickCapture={() => window.scrollTo(0, 0)}
            className="min-h-[400px]"
          />
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
}

export default App;