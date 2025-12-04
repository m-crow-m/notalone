import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { MagneticText } from './MagneticText';
import { motion } from 'motion/react';

export function Slide5() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pb-16 md:pb-20 pt-4 md:pt-0">
        {/* Header */}
        <motion.div 
          className="mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <MagneticText text="LOCAL MODEL EXPERIMENTS" />
          <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.05em', opacity: 0.6 }} className="text-base md:text-lg mt-3">Trying to get more control and fewer rules.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left column */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-1 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div>
              <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }} className="text-lg md:text-xl mb-3">What are local models</h3>
              <div className="text-sm opacity-70 leading-relaxed space-y-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                <p>Local models run directly on my own machine instead of in the cloud.</p>
                <p>They offer more privacy and usually fewer content restrictions.</p>
                <p>They are slower and more demanding on hardware, but give more freedom and control.</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }} className="text-lg md:text-xl mb-3">What I tried</h3>
              <div className="text-sm opacity-70 leading-relaxed space-y-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                <p>Installed Comfy UI and local video models on my Mac.</p>
                <p>Tried to generate video sequences with more control and fewer content filters.</p>
                <p>The goal was to test a workflow where I am not limited by platform rules.</p>
              </div>
            </motion.div>

            {/* Rotated image - positioned below left column */}
            <motion.div 
              className="mt-6 md:mt-8"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 2 }}
              transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
              whileHover={{ scale: 1.03, rotate: 0 }}
            >
              <div 
                className="overflow-hidden group cursor-pointer"
                style={{ transform: 'rotate(2deg)' }}
                onClick={() => setIsLightboxOpen(true)}
              >
                <ImageWithFallback
                  src="/notalone/images/local.png"
                  alt="local model UI"
                  className="w-full h-[220px] md:h-[280px] object-cover transition-transform duration-700 group-hover:scale-105 border border-white/10"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div 
            className="lg:col-span-5 lg:col-start-7 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div>
              <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }} className="text-lg md:text-xl mb-3">What did not work</h3>
              <div className="text-sm opacity-70 leading-relaxed space-y-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                <p>My Mac hardware could not really handle it.</p>
                <p>Renders were extremely slow and often stuck.</p>
                <p>The GPU could not be used the way I needed.</p>
                <p>For this project timeline, local models were not realistic.</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h3 style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }} className="text-lg md:text-xl mb-3">How I might use them later</h3>
              <div className="text-sm opacity-70 leading-relaxed space-y-3" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                <p>With better hardware or more time, I would return to local models for:</p>
                <p className="pl-4">building a consistent visual style over many pieces,</p>
                <p className="pl-4">exploring more uncomfortable or unusual emotional content,</p>
                <p className="pl-4">and avoiding platform level content restrictions.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Lightbox overlay - moved outside grid */}
        {isLightboxOpen && (
          <motion.div 
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="max-w-5xl max-h-[90vh] w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <img 
                src="/notalone/images/local.png" 
                alt="local model UI - full view"
                className="w-full h-auto object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}