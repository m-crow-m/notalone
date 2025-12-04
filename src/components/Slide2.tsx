import { MagneticText, ScatteredText } from './MagneticText';
import { motion } from 'motion/react';

export function Slide2() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pt-4 md:pt-0">
        {/* Left side - assignment details */}
        <div className="md:col-span-1 lg:col-span-4 lg:col-start-2 flex flex-col justify-center">
          <div className="mb-6 md:mb-8">
            <h2 className="text-4xl md:text-5xl mb-3 uppercase tracking-tight font-bold">
              <MagneticText text="ASSIGNMENT" delay={0.1} />
            </h2>
            <motion.p 
              className="text-sm opacity-50 mb-4 md:mb-6 uppercase tracking-widest"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Deep Dive and Deep Research case study.
            </motion.p>
          </div>

          <motion.div 
            className="space-y-4 text-sm opacity-70 leading-relaxed max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <p>
              Deep Dive: build an AI informed project and treat it like a case study.
            </p>
            <p>
              Deep Research: form a question about AI, creativity, and emotion, then answer it with sources and reflection.
            </p>
            <p>
              I combined them. The making and the research fed each other.
            </p>
          </motion.div>
        </div>

        {/* Center - research question box */}
        <motion.div 
          className="md:col-span-1 lg:col-span-5 flex items-center"
          initial={{ opacity: 0, x: 50, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="border border-white/30 p-6 md:p-8 bg-white/5 transform hover:rotate-1 transition-transform duration-500">
            <p className="text-base md:text-xl leading-relaxed uppercase tracking-wide">
              <ScatteredText 
                text="Research question: How much human direction does it take for AI generated visual and audio work to create a real emotional response, and where do its limits start to show?" 
                delay={0.5} 
              />
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}