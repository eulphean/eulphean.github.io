'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDescription: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const inputStyle = "w-full px-4 py-3 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:border-red-500 transition-colors";
  const labelStyle = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <div className="max-w-2xl mx-auto px-8">
      <h2 className="text-4xl mb-8 text-center font-abril">Discuss Your Next Project</h2>
      
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
          className="w-full py-3 px-6 bg-white hover:bg-gray-200 disabled:bg-gray-600 text-black font-semibold rounded-lg transition-colors duration-200"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-400 text-center">Thanks! I'll get back to you soon.</p>
        )}
        
        {submitStatus === 'error' && (
          <p className="text-red-400 text-center">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}