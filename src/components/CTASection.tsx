import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  onButtonClickCapture?: () => void;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to transform your brand?",
  description = "Let's create something beautiful together.",
  buttonText = "Get Started",
  onButtonClick,
  onButtonClickCapture,
  className = ""
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative text-white p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-12 overflow-hidden transition-all duration-800 max-w-6xl mx-auto ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: '0.5s' }}
    >
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
        <h3 className="text-3xl md:text-4xl font-heading font-black mb-6 text-white leading-tight">{title}</h3>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl">{description}</p>
      </div>
      
      <button
        onClick={onButtonClick}
        onClickCapture={onButtonClickCapture}
        className="btn-primary group text-lg px-12 py-6 relative overflow-hidden flex items-center z-20 shrink-0"
      >
        <span className="relative z-10 flex items-center">
          {buttonText}
          <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={20} />
        </span>
      </button>
    </div>
  );
};

export default CTASection;