import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Slide1 } from './components/Slide1';
import { Slide2 } from './components/Slide2';
import { Slide3 } from './components/Slide3';
import { Slide4 } from './components/Slide4';
import { Slide5 } from './components/Slide5';
import { Slide6 } from './components/Slide6';
import { Slide7 } from './components/Slide7';
import { Slide8 } from './components/Slide8';

const slides = [
  { id: 0, label: 'Intro', component: Slide1 },
  { id: 1, label: 'Assignment', component: Slide2 },
  { id: 2, label: 'Methodology', component: Slide3 },
  { id: 3, label: 'Process', component: Slide4 },
  { id: 4, label: 'Local models', component: Slide5 },
  { id: 5, label: 'Final piece', component: Slide6 },
  { id: 6, label: 'Research', component: Slide7 },
  { id: 7, label: 'Reflection', component: Slide8 },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length && !isAnimating) {
      setIsAnimating(true);
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: direction > 0 ? 15 : -15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-50%' : '50%',
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -10 : 10,
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Exit button - top left */}
      <button
        onClick={() => window.location.href = 'index.html'}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-[100] w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white hover:bg-gray-100 shadow-lg transition-all duration-200 group cursor-pointer overflow-hidden"
        style={{ borderRadius: '9999px !important' }}
        aria-label="Return to video page"
      >
        <span className="text-black text-2xl md:text-3xl font-bold leading-none select-none">×</span>
      </button>
      
      {/* Main slide container */}
      <div className="w-full h-full relative" style={{ perspective: '2000px' }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: 'spring', 
                stiffness: 200, 
                damping: 25,
                mass: 0.8
              },
              opacity: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
              scale: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
              rotateY: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
            }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed left-3 md:left-6 bottom-6 md:bottom-8 z-50 group disabled:opacity-20 disabled:cursor-not-allowed transition-opacity hover:opacity-100 opacity-60"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:-translate-x-1" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlide === slides.length - 1}
        className="fixed right-3 md:right-6 bottom-6 md:bottom-8 z-50 group disabled:opacity-20 disabled:cursor-not-allowed transition-opacity hover:opacity-100 opacity-60"
        aria-label="Next slide"
      >
        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-1" />
      </button>

      {/* Slide navigation */}
      <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 md:gap-3">
        {slides.map((slide, index) => {
          const isActive = currentSlide === slide.id;
          const isPast = currentSlide > slide.id;
          
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(slide.id)}
              className="group flex items-center justify-end gap-2 md:gap-3 transition-all relative"
              aria-label={`Go to ${slide.label}`}
            >
              <span className="text-xs opacity-0 group-hover:opacity-60 transition-opacity duration-200 whitespace-nowrap hidden md:inline">
                {slide.label}
              </span>
              
              {/* Progress dot with animated fill */}
              <div className="relative w-6 md:w-10 h-1.5 md:h-2 flex items-center">
                {/* Background track */}
                <div className="absolute inset-0 bg-white/10 rounded-full" />
                
                {/* Fill progress */}
                <motion.div
                  initial={false}
                  animate={{
                    scaleX: isActive ? 1 : (isPast ? 1 : 0),
                    opacity: isActive ? 1 : (isPast ? 0.4 : 0),
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className="absolute inset-0 bg-white rounded-full origin-left"
                />
                
                {/* Active indicator pulse */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute right-0 w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full"
                  />
                )}
                
                {/* Hover state */}
                <motion.div
                  initial={false}
                  whileHover={{ scaleX: 1, opacity: 0.6 }}
                  className="absolute inset-0 bg-white rounded-full origin-left"
                  style={{ scaleX: 0 }}
                />
              </div>
            </button>
          );
        })}
      </nav>

      {/* Animated progress line at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 h-[1px] bg-white/5">
        <motion.div
          initial={false}
          animate={{
            scaleX: (currentSlide + 1) / slides.length,
          }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          className="h-full bg-white/40 origin-left"
        />
      </div>
    </div>
  );
}