import { MagneticText } from './MagneticText';
import { motion } from 'motion/react';

export function Slide8() {
  const reflections = [
    {
      title: "WHAT WORKED",
      body: "I built a clear emotional tone using AI as material. Iteration and human direction mattered more than any single model."
    },
    {
      title: "WHAT FELL SHORT",
      body: "Some moments still feel thin or scripted. AI can imitate mood, but the depth feels limited."
    },
    {
      title: "NEXT STEPS",
      body: "Gather more viewer feedback. Revisit local models when my hardware catches up. Keep using AI as a collaborator, not as a replacement for sensitivity or intention."
    }
  ];

  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start md:items-end pb-20 md:pb-28 lg:pb-32 overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pt-4 md:pt-0">
        {/* Header - positioned low and left */}
        <motion.div 
          className="mb-12 md:mb-16 ml-0 md:ml-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, type: 'spring' }}
        >
          <MagneticText text="REFLECTION" />
          <motion.p 
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.05em', opacity: 0.6 }} 
            className="text-base md:text-lg mt-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 0.6, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            What I actually learned from this.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Three text blocks - off center */}
          <div className="md:col-span-2 lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {reflections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotate: (index - 1) * 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.5 + index * 0.2,
                  type: 'spring',
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  transition: { type: 'spring', stiffness: 400 }
                }}
                style={{ 
                  background: 'rgba(255,255,255,0.02)',
                  padding: '1.5rem',
                  borderLeft: '2px solid rgba(255,255,255,0.1)'
                }}
              >
                <h3 
                  className="text-lg md:text-xl mb-3 md:mb-4"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.1em' }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm opacity-70 leading-relaxed"
                  style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
                >
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          className="mt-16 md:mt-20 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <p 
            className="text-xs opacity-40"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.2em', textTransform: 'uppercase' }}
          >
            Thank you
          </p>
        </motion.div>
      </div>
    </div>
  );
}