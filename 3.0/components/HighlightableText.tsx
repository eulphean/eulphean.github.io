'use client'

import { useIsMobile } from '../hooks/useIsMobile';

type HighlightableTextProps = {
  text: string;
  highlightWords: string[];
  className?: string;
}

export default function HighlightableText({ 
  text, 
  highlightWords, 
  className = '' 
}: HighlightableTextProps) {
  const isMobile = useIsMobile();
  const words = text.split(' ');

  const renderWords = () => {
    return words.map((word, index) => {
      const isHighlightable = highlightWords.some(highlightWord => 
        word.toLowerCase().includes(highlightWord.toLowerCase())
      );
      
      if (isHighlightable) {
        return (
          <span 
            key={index}
            className={isMobile 
              ? "text-red-500" 
              : "hover:text-red-500 transition-colors duration-300 ease-in-out cursor-pointer"
            }
          >
            {word}
          </span>
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