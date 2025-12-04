import { ImageWithFallback } from './figma/ImageWithFallback';
import { MagneticText } from './MagneticText';
import { motion } from 'motion/react';

export function Slide3() {
  const sections = [
    { title: 'TOOLS', text: 'Online AI tools for image, video, and audio. Editing in Premiere. Text and timing written by me.' },
    { title: 'WORKFLOW', text: 'Start with a simple emotional intention. Generate. Watch and listen. Write down what I actually feel. Change prompts, pacing, or sound. Repeat.' },
    { title: 'RESEARCH', text: 'Read about AI, affect, and creativity. Use those frameworks to question what my own piece is doing emotionally.' },
  ];

  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pt-4 md:pt-0">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl mb-2 uppercase tracking-tight font-bold">
            <MagneticText text="METHODOLOGY" delay={0.1} />
          </h2>
          <motion.p 
            className="text-base md:text-lg opacity-60 uppercase tracking-widest"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Moving between making, feeling, and adjusting.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column - stacked text sections */}
          <div className="space-y-6 md:space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -40, rotate: (Math.random() - 0.5) * 4 }}
                animate={{ opacity: 1, x: 0, rotate: (Math.random() - 0.5) * 1 }}
                transition={{ delay: 0.3 + index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <h3 className="text-xl md:text-2xl mb-3 md:mb-4 uppercase tracking-wider font-semibold">
                  {section.title}
                </h3>
                <p className="text-sm opacity-70 leading-relaxed tracking-wide group-hover:opacity-90 transition-opacity">
                  {section.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right column - constrained image */}
          <motion.div 
            className="flex items-start justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="max-w-md w-full overflow-hidden group">
              <ImageWithFallback
                src="/notalone/images/tools.png"
                alt="AI tools and workspace"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}