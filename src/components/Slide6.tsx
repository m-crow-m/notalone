import { ImageWithFallback } from './figma/ImageWithFallback';
import { MagneticText } from './MagneticText';
import { motion } from 'motion/react';

export function Slide6() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pt-4 md:pt-0">
        {/* Header */}
        <motion.div 
          className="mb-10 md:mb-12 ml-0 md:ml-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagneticText text="THE FINAL PIECE" />
          <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.05em', opacity: 0.6 }} className="text-base md:text-lg mt-3">A 4 minute AI driven video experiment.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-1 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="text-sm opacity-70 leading-relaxed space-y-4" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                The video itself is not about showing off what AI can do visually.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                It is a test. I use AI generated visuals and sound, then guide them with timing, text, and structure to see if they can actually carry emotional weight.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 0.7, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                The real work lives in the direction, not the raw generations.
              </motion.p>
            </div>

            {/* Pull quote */}
            <motion.div 
              className="border-l-2 border-white pl-4 md:pl-6 py-4 bg-white/5"
              initial={{ opacity: 0, x: -20, scaleX: 0.8 }}
              animate={{ opacity: 1, x: 0, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
              style={{ transformOrigin: 'left' }}
            >
              <p className="text-sm md:text-base italic opacity-80" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                Question: when this feels emotional, is it the AI, or is it the human decisions around it?
              </p>
            </motion.div>
          </motion.div>

          {/* Right content - image and button */}
          <motion.div 
            className="lg:col-span-6 lg:col-start-7 mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.5, type: 'spring', damping: 15 }}
          >
            <motion.div 
              className="relative overflow-hidden group"
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <ImageWithFallback
                src="/notalone/images/creature.png"
                alt="AI generated creature from video"
                className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}