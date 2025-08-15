'use client'

import { useState, useEffect } from 'react';
import AnimatedHighlightWord from './AnimatedHighlightWord';

type TypewriterProps = {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
  trigger?: boolean;
  highlightWords?: string[];
}

export default function Typewriter({ 
  text, 
  speed = 500, 
  className = '', 
  onComplete,
  trigger = true,
  highlightWords = []
}: TypewriterProps) {
  const [displayedWords, setDisplayedWords] = useState<string[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = text.split(' ');

  useEffect(() => {
    if (!trigger) {
      setDisplayedWords([]);
      setCurrentWordIndex(0);
      return;
    }
  }, [trigger]);

  useEffect(() => {
    if (!trigger) return;
    
    if (currentWordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedWords(prev => [...prev, words[currentWordIndex]]);
        setCurrentWordIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentWordIndex, words, speed, onComplete, trigger]);

  const renderWords = () => {
    return displayedWords.map((word, index) => {
      const isHighlightable = highlightWords.some(highlightWord => 
        word.toLowerCase().includes(highlightWord.toLowerCase())
      );
      
      if (isHighlightable) {
        const wordDelay = index * speed; // Calculate delay based on when this word appeared
        
        return (
          <AnimatedHighlightWord
            key={index}
            word={word}
            delay={wordDelay + 250} // Small additional delay after word appears
            speed={75}
          />
        );
      }
      
      return <span key={index}>{word}</span>;
    }).reduce((prev, curr, index) => {
      return index === 0 ? [curr] : [...prev, ' ', curr];
    }, [] as React.ReactNode[]);
  };

  return (
    <span className={className}>
      {renderWords()}
      {currentWordIndex < words.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}