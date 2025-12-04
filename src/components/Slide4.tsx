import { ImageWithFallback } from './figma/ImageWithFallback';
import { MagneticText } from './MagneticText';
import { motion } from 'motion/react';

export function Slide4() {
  const notes = [
    'EARLY OUTPUTS TOO CLEAN, NOT ENOUGH FEELING',
    'SMALL CHANGES IN TIMING SHIFTED THE MOOD MORE THAN CHANGING THE VISUALS',
    'COPY LIKE "HERE FOR YOU" AND "YOU ARE NOT ALONE" FELT SOFT BUT ALSO A LITTLE SUSPICIOUS',
    'HAD TO KEEP REWRITING AND RE TIMING TO AVOID IT FEELING LIKE AN EMPTY AD',
  ];

  const timeline = [
    'ROUGH CONCEPT AND EMOTIONAL GOALS',
    'FIRST AI OUTPUTS AND SOUND TESTS',
    'ITERATIVE EDITS BASED ON MY OWN EMOTIONAL REACTION',
    'FINAL PASS BEFORE CRITIQUE',
  ];

  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-14 lg:py-16 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pt-4 md:pt-0">
        {/* Header */}
        <div className="mb-10 md:mb-12 ml-0 md:ml-4 lg:ml-8 mt-8 md:mt-12">
          <h2 className="text-4xl md:text-5xl mb-2 uppercase tracking-tight font-bold">
            <MagneticText text="PROCESS" delay={0.1} />
          </h2>
          <motion.p 
            className="text-base md:text-lg opacity-60 uppercase tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Testing what actually moves me.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Left column - notebook style notes */}
          <div className="md:col-span-1 lg:col-span-5 lg:col-start-2">
            <div className="space-y-3">
              {notes.map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30, rotate: (Math.random() - 0.5) * 3 }}
                  animate={{ opacity: 1, x: 0, rotate: (Math.random() - 0.5) * 1.5 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xs opacity-70 pl-4 md:pl-6 border-l border-white/20 py-2 leading-relaxed tracking-wider"
                >
                  {note}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right column - timeline */}
          <div className="md:col-span-1 lg:col-span-4 lg:col-start-8 flex flex-col justify-center">
            <div className="space-y-6 md:space-y-8">
              {timeline.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-col items-center mt-1">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.12, duration: 0.3, type: 'spring' }}
                    />
                    {index < timeline.length - 1 && (
                      <motion.div 
                        className="w-px bg-white/20 mt-2"
                        initial={{ height: 0 }}
                        animate={{ height: '4rem' }}
                        transition={{ delay: 0.5 + index * 0.12, duration: 0.4 }}
                      />
                    )}
                  </div>
                  <p className="text-xs opacity-70 leading-relaxed flex-1 pt-0.5 tracking-wider">
                    {step}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Images side by side below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12 ml-0 md:ml-4 lg:ml-8">
          <motion.div 
            className="overflow-hidden group"
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ImageWithFallback
              src="/notalone/images/process1.png"
              alt="Process image 1"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
            />
          </motion.div>
          <motion.div 
            className="overflow-hidden group"
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <ImageWithFallback
              src="/notalone/images/process 2.png"
              alt="Process image 2"
              className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}