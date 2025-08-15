'use client'

import { useState, useEffect } from 'react';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  trigger?: boolean;
}

export default function FadeIn({ 
  children, 
  delay = 0, 
  duration = 1000,
  className = '',
  trigger = true
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, trigger]);

  return (
    <div 
      className={`transition-opacity ease-in-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}