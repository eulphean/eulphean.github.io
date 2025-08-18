'use client'

import { useState, useEffect, useRef } from 'react';
import Typewriter from './Typewriter';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [titleAnimationTrigger, setTitleAnimationTrigger] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleAnimationTrigger(false);
            setTimeout(() => setTitleAnimationTrigger(true), 100);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', projectDescription: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = "w-full px-4 py-3 text-base sm:px-6 sm:py-4 sm:text-lg bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors";
  const labelStyle = "block text-sm sm:text-base font-semibold text-gray-300 mb-2 sm:mb-3";

  return (
    <div ref={formRef} className="max-w-sm md:max-w-xl lg:max-w-2xl max-mx-auto px-4 sm:px-8 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 text-center font-inter font-black tracking-wide min-h-[60px] sm:min-h-[80px] md:min-h-[120px] lg:min-h-[144px] flex items-center justify-center">
        <Typewriter 
          text="How Can I Help?"
          speed={200}
          trigger={titleAnimationTrigger}
          highlightWords={['Help']}
        />
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className={labelStyle}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputStyle}
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelStyle}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputStyle}
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="projectDescription" className={labelStyle}>
            Project Description
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            required
            rows={5}
            className={inputStyle}
            placeholder="Tell me about your project, space, and vision..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-8 bg-white hover:bg-gray-200 disabled:bg-gray-600 text-black font-semibold rounded-lg transition-colors duration-200"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-400 text-center text-lg">Thanks! I'll get back to you soon.</p>
        )}
        
        {submitStatus === 'error' && (
          <p className="text-red-400 text-center text-lg">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}