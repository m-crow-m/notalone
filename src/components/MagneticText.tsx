import { motion } from 'motion/react';

interface MagneticTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  delay?: number;
}

export function MagneticText({ text, className = '', as = 'span', delay = 0 }: MagneticTextProps) {
  const words = text.split(' ');
  const Tag = as;
  
  let letterIndex = 0;
  
  return (
    <Tag className={`inline-flex flex-wrap gap-x-3 ${className}`} style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      {words.map((word, wordIndex) => {
        const letters = word.split('');
        
        return (
          <span key={wordIndex} className="inline-flex whitespace-nowrap">
            {letters.map((letter, index) => {
              const currentLetterIndex = letterIndex++;
              // Random variations for each letter
              const randomRotate = (Math.random() - 0.5) * 8; // -4 to 4 degrees
              const randomY = (Math.random() - 0.5) * 6; // -3 to 3 px
              const randomX = (Math.random() - 0.5) * 4; // -2 to 2 px
              
              return (
                <motion.span
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    y: 50 + Math.random() * 30,
                    x: (Math.random() - 0.5) * 100,
                    rotate: (Math.random() - 0.5) * 45,
                    scale: 0.5
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: randomY,
                    x: randomX,
                    rotate: randomRotate,
                    scale: 1
                  }}
                  transition={{
                    duration: 0.6,
                    delay: delay + currentLetterIndex * 0.03,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                  className="inline-block origin-center"
                  style={{
                    marginRight: '-0.02em'
                  }}
                  whileHover={{
                    rotate: randomRotate + (Math.random() - 0.5) * 10,
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </Tag>
  );
}

interface ScatteredTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScatteredText({ text, className = '', delay = 0 }: ScatteredTextProps) {
  const words = text.split(' ');
  
  return (
    <span className={`inline-flex flex-wrap gap-x-2 ${className}`}>
      {words.map((word, wordIndex) => (
        <motion.span
          key={wordIndex}
          initial={{ 
            opacity: 0,
            y: 20 + Math.random() * 20,
            rotate: (Math.random() - 0.5) * 6
          }}
          animate={{ 
            opacity: 1,
            y: (Math.random() - 0.5) * 3,
            rotate: (Math.random() - 0.5) * 2
          }}
          transition={{
            duration: 0.5,
            delay: delay + wordIndex * 0.08,
            ease: [0.23, 1, 0.32, 1]
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
