'use client'

import { useState, useEffect } from 'react';

type AnimatedHighlightWordProps = {
  word: string;
  delay?: number;
  speed?: number;
  className?: string;
  restartDelay?: number;
}

export default function AnimatedHighlightWord({ 
  word, 
  delay = 0,
  speed = 100,
  className = '',
  restartDelay = 2000
}: AnimatedHighlightWordProps) {
  const [highlightedChars, setHighlightedChars] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnimation(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!startAnimation) return;

    if (highlightedChars < word.length) {
      const timer = setTimeout(() => {
        setHighlightedChars(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // Animation completed, restart after delay
      const restartTimer = setTimeout(() => {
        setHighlightedChars(0);
      }, restartDelay);

      return () => clearTimeout(restartTimer);
    }
  }, [startAnimation, highlightedChars, word.length, speed, restartDelay]);

  return (
    <span className={className}>
      {word.split('').map((char, index) => (
        <span
          key={index}
          className={`transition-colors duration-200 ${
            index < highlightedChars ? 'text-red-500' : ''
          }`}
        >
          {char}
        </span>
      ))}
    </span>
  );
}