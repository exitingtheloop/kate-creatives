import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle, User, Mail, Building, Users, Target, Clock, Zap, TrendingUp, Bot } from 'lucide-react';

interface AIAuditProps {
  onBack: () => void;
}

interface FormData {
  // Step 1: Business Basics
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  
  // Step 2: Business Overview
  businessDescription: string;
  industry: string;
  
  // Step 3: Current Challenges
  challenges: string[];
  painPoints: string;
  
  // Step 4: Team & Tools
  teamSize: string;
  currentTools: string[];
  techStack: string;
  
  // Step 5: Time Management
  timeConsumingTasks: string[];
  dailyHours: string;
  
  // Step 6: Automation Goals
  automationGoals: string[];
  priority: string;
  
  // Step 7: Growth & Budget
  growthGoals: string;
  budget: string;
  timeline: string;
}

const AIAudit: React.FC<AIAuditProps> = ({ onBack }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const totalSteps = 7;

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    businessDescription: '',
    industry: '',
    challenges: [],
    painPoints: '',
    teamSize: '',
    currentTools: [],
    techStack: '',
    timeConsumingTasks: [],
    dailyHours: '',
    automationGoals: [],
    priority: '',
    growthGoals: '',
    budget: '',
    timeline: ''
  });

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
        break;
      case 2:
        if (!formData.businessDescription.trim()) newErrors.businessDescription = 'Business description is required';
        if (!formData.industry) newErrors.industry = 'Industry selection is required';
        break;
      case 3:
        if (formData.challenges.length === 0) newErrors.challenges = 'Please select at least one challenge';
        if (!formData.painPoints.trim()) newErrors.painPoints = 'Please describe your main pain points';
        break;
      case 4:
        if (!formData.teamSize) newErrors.teamSize = 'Team size is required';
        if (formData.currentTools.length === 0) newErrors.currentTools = 'Please select at least one tool category';
        break;
      case 5:
        if (formData.timeConsumingTasks.length === 0) newErrors.timeConsumingTasks = 'Please select at least one time-consuming task';
        if (!formData.dailyHours) newErrors.dailyHours = 'Please select daily hours spent on repetitive tasks';
        break;
      case 6:
        if (formData.automationGoals.length === 0) newErrors.automationGoals = 'Please select at least one automation goal';
        if (!formData.priority) newErrors.priority = 'Priority selection is required';
        break;
      case 7:
        if (!formData.growthGoals.trim()) newErrors.growthGoals = 'Growth goals are required';
        if (!formData.budget) newErrors.budget = 'Budget range is required';
        if (!formData.timeline) newErrors.timeline = 'Timeline is required';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleArrayChange = (field: keyof FormData, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    
    try {
      // Submit to Make.com webhook
      const response = await fetch('https://hook.us2.make.com/fmocaj3lpidmf8v75qr4fwgseullexve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrors({ submit: 'Failed to submit audit. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-green to-pink rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-heading font-black text-white mb-6">
            Audit <span className="text-pink">Submitted!</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Thank you for completing our AI Audit! We'll analyze your responses and send personalized automation recommendations to your email in a few minutes.
          </p>
          
          <div className="glass-card mb-8">
            <h3 className="text-xl font-heading font-bold text-white mb-4">What happens next?</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink text-sm font-bold">1</span>
                </div>
                <p className="text-gray-300">Our AI experts analyze your business needs and challenges</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink text-sm font-bold">2</span>
                </div>
                <p className="text-gray-300">We create a personalized automation roadmap for your business</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink text-sm font-bold">3</span>
                </div>
                <p className="text-gray-300">You receive detailed recommendations via email in a few minutes</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-pink/20 rounded-full flex items-center justify-center mt-1">
                  <span className="text-pink text-sm font-bold">4</span>
                </div>
                <p className="text-gray-300">Implement the recommended automation solutions to transform your business</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={onBack}
            className="btn-primary group text-lg px-8 py-4"
          >
            <span className="relative z-10 flex items-center">
              Back to Home
              <ArrowLeft className="ml-3 rotate-180 group-hover:translate-x-2 transition-transform duration-300" size={20} />
            </span>
          </button>
        </div>
      </div>
    );
  }

  const progressPercentage = (currentStep / totalSteps) * 100;

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
              Free AI Audit
            </div>
            
            <div className="text-sm text-gray-400">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="w-full bg-white/10 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-pink to-green h-2 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Step 1: Business Basics */}
          {currentStep === 1 && (
            <div className="glass-card-large">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-green rounded-full flex items-center justify-center mr-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-black text-white">Business Basics</h2>
                  <p className="text-gray-400">Let's start with some basic information about you and your business</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="text-red-400 text-sm mt-2">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="text-red-400 text-sm mt-2">{errors.lastName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Company Name</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300"
                    placeholder="Enter your company name (optional)"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Business Overview */}
          {currentStep === 2 && (
            <div className="glass-card-large">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-green rounded-full flex items-center justify-center mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-black text-white">Business Overview</h2>
                  <p className="text-gray-400">Tell us about your business and industry</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">What does your business do? *</label>
                  <textarea
                    value={formData.businessDescription}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessDescription: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300 resize-none"
                    placeholder="Describe your business, products, or services..."
                  />
                  {errors.businessDescription && <p className="text-red-400 text-sm mt-2">{errors.businessDescription}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Industry *</label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:outline-none focus:border-pink/30 transition-colors duration-300 [&>option]:text-black [&>option]:bg-white"
                  >
                    <option value="">Select your industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail/E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="consulting">Consulting</option>
                    <option value="education">Education</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="marketing">Marketing/Advertising</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.industry && <p className="text-red-400 text-sm mt-2">{errors.industry}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Current Challenges */}
          {currentStep === 3 && (
            <div className="glass-card-large">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-green rounded-full flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-black text-white">Current Challenges</h2>
                  <p className="text-gray-400">What are your biggest business challenges right now?</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">Select your main challenges: *</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Manual data entry',
                      'Customer service bottlenecks',
                      'Lead generation',
                      'Email management',
                      'Inventory management',
                      'Scheduling conflicts',
                      'Report generation',
                      'Social media management',
                      'Invoice processing',
                      'Quality control',
                      'Team communication',
                      'Document management'
                    ].map((challenge) => (
                      <label key={challenge} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.challenges.includes(challenge)}
                          onChange={(e) => handleArrayChange('challenges', challenge, e.target.checked)}
                          className="w-5 h-5 bg-white/5 border border-white/20 rounded focus:ring-pink/30 text-pink"
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{challenge}</span>
                      </label>
                    ))}
                  </div>
                  {errors.challenges && <p className="text-red-400 text-sm mt-2">{errors.challenges}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Describe your main pain points: *</label>
                  <textarea
                    value={formData.painPoints}
                    onChange={(e) => setFormData(prev => ({ ...prev, painPoints: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300 resize-none"
                    placeholder="What specific problems are slowing down your business?"
                  />
                  {errors.painPoints && <p className="text-red-400 text-sm mt-2">{errors.painPoints}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Team & Tools */}
          {currentStep === 4 && (
            <div className="glass-card-large">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-green rounded-full flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-black text-white">Team & Tools</h2>
                  <p className="text-gray-400">Tell us about your team size and current tools</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Team Size *</label>
                  <select
                    value={formData.teamSize}
                    onChange={(e) => setFormData(prev => ({ ...prev, teamSize: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:outline-none focus:border-pink/30 transition-colors duration-300 [&>option]:text-black [&>option]:bg-white"
                  >
                    <option value="">Select team size</option>
                    <option value="1">Just me (Solo)</option>
                    <option value="2-5">2-5 employees</option>
                    <option value="6-20">6-20 employees</option>
                    <option value="21-50">21-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="100+">100+ employees</option>
                  </select>
                  {errors.teamSize && <p className="text-red-400 text-sm mt-2">{errors.teamSize}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">What tools do you currently use? *</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'CRM (Salesforce, HubSpot)',
                      'Email Marketing (Mailchimp)',
                      'Project Management (Asana, Trello)',
                      'Accounting (QuickBooks)',
                      'Social Media Tools',
                      'Analytics (Google Analytics)',
                      'Communication (Slack, Teams)',
                      'E-commerce Platform',
                      'Design Tools (Adobe, Canva)',
                      'Automation Tools (Zapier)',
                      'Database Management',
                      'Custom Software'
                    ].map((tool) => (
                      <label key={tool} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.currentTools.includes(tool)}
                          onChange={(e) => handleArrayChange('currentTools', tool, e.target.checked)}
                          className="w-5 h-5 bg-white/5 border border-white/20 rounded focus:ring-pink/30 text-pink"
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{tool}</span>
                      </label>
                    ))}
                  </div>
                  {errors.currentTools && <p className="text-red-400 text-sm mt-2">{errors.currentTools}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Current Tech Stack (Optional)</label>
                  <textarea
                    value={formData.techStack}
                    onChange={(e) => setFormData(prev => ({ ...prev, techStack: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300 resize-none"
                    placeholder="List any specific software, platforms, or technologies you use..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Time Management */}
          {currentStep === 5 && (
            <div className="glass-card-large">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-green rounded-full flex items-center justify-center mr-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-black text-white">Time Management</h2>
                  <p className="text-gray-400">What tasks consume most of your time?</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">What tasks take up most of your time? *</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Data entry and processing',
                      'Email management',
                      'Customer support',
                      'Scheduling and calendar management',
                      'Social media posting',
                      'Report generation',
                      'Invoice and billing',
                      'Lead qualification',
                      'Content creation',
                      'Inventory updates',
                      'Meeting coordination',
                      'Document organization'
                    ].map((task) => (
                      <label key={task} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.timeConsumingTasks.includes(task)}
                          onChange={(e) => handleArrayChange('timeConsumingTasks', task, e.target.checked)}
                          className="w-5 h-5 bg-white/5 border border-white/20 rounded focus:ring-pink/30 text-pink"
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{task}</span>
                      </label>
                    ))}
                  </div>
                  {errors.timeConsumingTasks && <p className="text-red-400 text-sm mt-2">{errors.timeConsumingTasks}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">How many hours per day do you spend on repetitive tasks? *</label>
                  <select
                    value={formData.dailyHours}
                    onChange={(e) => setFormData(prev => ({ ...prev, dailyHours: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:outline-none focus:border-pink/30 transition-colors duration-300 [&>option]:text-black [&>option]:bg-white"
                  >
                    <option value="">Select hours per day</option>
                    <option value="1-2">1-2 hours</option>
                    <option value="3-4">3-4 hours</option>
                    <option value="5-6">5-6 hours</option>
                    <option value="7-8">7-8 hours</option>
                    <option value="8+">More than 8 hours</option>
                  </select>
                  {errors.dailyHours && <p className="text-red-400 text-sm mt-2">{errors.dailyHours}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 6: Automation Goals */}
          {currentStep === 6 && (
            <div className="glass-card-large">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-green rounded-full flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-black text-white">Automation Goals</h2>
                  <p className="text-gray-400">What would you like to automate in your business?</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-4">What would you like to automate? *</label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {[
                      'Customer onboarding',
                      'Email marketing campaigns',
                      'Lead nurturing',
                      'Data backup and sync',
                      'Social media scheduling',
                      'Invoice generation',
                      'Appointment booking',
                      'Inventory management',
                      'Customer support tickets',
                      'Report generation',
                      'Task assignment',
                      'Quality assurance checks'
                    ].map((goal) => (
                      <label key={goal} className="flex items-center space-x-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={formData.automationGoals.includes(goal)}
                          onChange={(e) => handleArrayChange('automationGoals', goal, e.target.checked)}
                          className="w-5 h-5 bg-white/5 border border-white/20 rounded focus:ring-pink/30 text-pink"
                        />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">{goal}</span>
                      </label>
                    ))}
                  </div>
                  {errors.automationGoals && <p className="text-red-400 text-sm mt-2">{errors.automationGoals}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">What's your top priority? *</label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData(prev => ({ ...prev, priority: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:outline-none focus:border-pink/30 transition-colors duration-300 [&>option]:text-black [&>option]:bg-white"
                  >
                    <option value="">Select your top priority</option>
                    <option value="save-time">Save time on repetitive tasks</option>
                    <option value="reduce-errors">Reduce human errors</option>
                    <option value="improve-customer">Improve customer experience</option>
                    <option value="increase-revenue">Increase revenue</option>
                    <option value="scale-operations">Scale operations</option>
                    <option value="reduce-costs">Reduce operational costs</option>
                  </select>
                  {errors.priority && <p className="text-red-400 text-sm mt-2">{errors.priority}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Step 7: Growth & Budget */}
          {currentStep === 7 && (
            <div className="glass-card-large">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-pink to-green rounded-full flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-black text-white">Growth & Investment</h2>
                  <p className="text-gray-400">Tell us about your growth goals and budget</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">What are your growth goals for the next 12 months? *</label>
                  <textarea
                    value={formData.growthGoals}
                    onChange={(e) => setFormData(prev => ({ ...prev, growthGoals: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink/30 transition-colors duration-300 resize-none"
                    placeholder="Describe your growth objectives, revenue targets, expansion plans..."
                  />
                  {errors.growthGoals && <p className="text-red-400 text-sm mt-2">{errors.growthGoals}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Budget for automation solutions? *</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:outline-none focus:border-pink/30 transition-colors duration-300 [&>option]:text-black [&>option]:bg-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1k">Under $1,000/month</option>
                    <option value="1k-5k">$1,000 - $5,000/month</option>
                    <option value="5k-10k">$5,000 - $10,000/month</option>
                    <option value="10k-25k">$10,000 - $25,000/month</option>
                    <option value="25k+">$25,000+/month</option>
                  </select>
                  {errors.budget && <p className="text-red-400 text-sm mt-2">{errors.budget}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">When would you like to implement automation? *</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                    className="w-full px-4 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white focus:outline-none focus:border-pink/30 transition-colors duration-300 [&>option]:text-black [&>option]:bg-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediately">Immediately</option>
                    <option value="1-month">Within 1 month</option>
                    <option value="2-3-months">2-3 months</option>
                    <option value="3-6-months">3-6 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                  {errors.timeline && <p className="text-red-400 text-sm mt-2">{errors.timeline}</p>}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`btn-glass group ${currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform duration-300" size={20} />
              Previous
            </button>

            {currentStep < totalSteps ? (
              <button
                onClick={handleNext}
                className="btn-primary group"
              >
                Next
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-primary group relative"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Audit
                    <Bot className="ml-2 group-hover:scale-110 transition-transform duration-300" size={20} />
                  </>
                )}
              </button>
            )}
          </div>

          {errors.submit && (
            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
              <p className="text-red-400">{errors.submit}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAudit;