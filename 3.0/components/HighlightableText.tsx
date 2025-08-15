'use client'

import AnimatedHighlightWord from './AnimatedHighlightWord';

type HighlightableTextProps = {
  text: string;
  highlightWords: string[];
  className?: string;
  animationDelay?: number;
}

export default function HighlightableText({ 
  text, 
  highlightWords, 
  className = '',
  animationDelay = 0
}: HighlightableTextProps) {
  const words = text.split(' ');

  const renderWords = () => {
    return words.map((word, index) => {
      const isHighlightable = highlightWords.some(highlightWord => 
        word.toLowerCase().includes(highlightWord.toLowerCase())
      );
      
      if (isHighlightable) {
        const wordDelay = animationDelay + (index * 100); // Stagger each word slightly
        
        return (
          <AnimatedHighlightWord
            key={index}
            word={word}
            delay={wordDelay}
            speed={80}
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
    </span>
  );
}