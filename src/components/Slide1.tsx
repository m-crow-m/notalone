import { ImageWithFallback } from './figma/ImageWithFallback';
import { MagneticText, ScatteredText } from './MagneticText';
import { motion } from 'motion/react';

export function Slide1() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center pt-4 md:pt-0">
        {/* Left content - offset */}
        <div className="lg:col-span-5 lg:col-start-1">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] mb-6 md:mb-8 -ml-1 uppercase tracking-tighter font-bold">
            <MagneticText text="HERE FOR YOU" delay={0.2} />
          </h1>
          
          <motion.p 
            className="text-base md:text-lg mb-8 md:mb-12 max-w-md opacity-70 uppercase tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ScatteredText text="Exploring emotional response to AI generated work and how much human direction it takes to make it actually feel like something." delay={0.7} />
          </motion.p>
          
          <motion.div 
            className="max-w-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-sm opacity-50 leading-relaxed tracking-wide">
              I am a visual communication designer using AI as a material, not a shortcut. This project is a 4 minute video experiment that asks how far AI can go toward meaningful emotional impact, and where the human hand is still doing the heavy lifting.
            </p>
          </motion.div>
        </div>

        {/* Right image - large horizontal */}
        <motion.div 
          className="lg:col-span-6 lg:col-start-7 mt-6 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative overflow-hidden group">
            <ImageWithFallback
              src="/notalone/images/faces.png"
              alt="AI generated faces"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}