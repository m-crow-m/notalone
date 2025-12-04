import { ImageWithFallback } from './figma/ImageWithFallback';
import { MagneticText } from './MagneticText';
import { motion } from 'motion/react';

export function Slide7() {
  const findings = [
    {
      heading: "WHAT THE PAPER LOOKS AT",
      body: "Models like Pika, Suno, and Firefly can produce convincing mood in seconds. Foggy streets, soft beats, whispered reassurance. The question is not if they can fake emotion, but whether that feeling lasts and what happens once we know it came from a machine."
    },
    {
      heading: "KEY FINDING 1 — AI SUPPLIES MOOD, NOT MEANING",
      body: "Research shows AI is strongest at basic affect like fear, calm, or unease. Nuance appears when a human adds context, pacing, and narrative. My project confirmed this. The clips felt empty until I directed timing, structure, and sound as if I were a film director, not a button pusher."
    },
    {
      heading: "KEY FINDING 2 — THE LABEL EFFECT",
      body: "People often feel something when they see AI art, but that feeling weakens when they learn it was machine generated. Studies and my own reactions line up here. I often rejected technically impressive clips because they looked 'too AI'. Once the label appears, we downgrade the emotion, even if the pixels stayed the same."
    },
    {
      heading: "KEY FINDING 3 — THE HUMAN BURDEN",
      body: "The emotional weight does not sit in any single generated frame. It sits in the human work around it: choosing, cutting, looping, degrading, and placing it inside a story. AI can build the house. Deciding if it feels haunted, safe, or like home is still the human burden."
    }
  ];

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-14 lg:py-16 min-h-full">
        <div className="max-w-[1800px] mx-auto w-full pb-20 md:pb-24">
          {/* Top section */}
          <motion.div 
            className="mb-8 md:mb-10 ml-0 md:ml-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs opacity-50 mb-3 tracking-wider uppercase" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.15em' }}>Research paper</p>
            <MagneticText text="HERE FOR YOU: THE HUMAN BURDEN" />
            <p style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.05em', opacity: 0.6 }} className="text-sm mt-2">Research by Jaeden Ives-crow</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
            {/* Middle left - Research question */}
            <motion.div 
              className="lg:col-span-5 lg:col-start-1 flex items-start"
              initial={{ opacity: 0, x: -30, scaleX: 0.9 }}
              animate={{ opacity: 1, x: 0, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.4, type: 'spring' }}
              style={{ transformOrigin: 'left' }}
            >
              <div className="border-l-2 border-white pl-4 md:pl-6 py-3 md:py-4 bg-white/5">
                <p className="text-sm md:text-base leading-relaxed" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                  <span className="block text-sm opacity-50 mb-3" style={{ letterSpacing: '0.1em', textTransform: 'uppercase' }}>Research question:</span>
                  How much human direction does it take for AI generated visual and audio work to create a real emotional response, and where do its limits start to show?
                </p>
              </div>
            </motion.div>

            {/* Middle right - Findings */}
            <div className="lg:col-span-6 lg:col-start-7 space-y-6 md:space-y-7">
              {findings.map((finding, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 25, x: 15 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                >
                  <h3 className="text-sm md:text-base mb-2" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.06em' }}>{finding.heading}</h3>
                  <p className="text-sm opacity-70 leading-relaxed" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                    {finding.body}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Image overlay - lower right */}
            <motion.div 
              className="lg:col-span-4 lg:col-start-9 lg:row-start-2 mt-6 md:mt-8"
              initial={{ opacity: 0, scale: 0.85, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              transition={{ duration: 0.9, delay: 0.8, type: 'spring', damping: 12 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <div className="overflow-hidden group" style={{ transform: 'rotate(-1deg)' }}>
                <ImageWithFallback
                  src="/notalone/images/dough.png"
                  alt="research paper visualization"
                  className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-700 group-hover:scale-105 border border-white/10"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom section - themes and download link */}
          <motion.div 
            className="mt-10 md:mt-12 ml-0 md:ml-4 pt-6 md:pt-8 border-t border-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <p className="text-xs opacity-50 mb-6" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Themes: authorship bias · basic affect vs complex emotion · human direction as meaning · ethics of credit and training data
            </p>
            
            <a 
              href="/notalone/Here for You_ The Human Burden in AI-Generated Emotional Media.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 24px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="12" y2="18"/>
                <line x1="15" y1="15" x2="12" y2="18"/>
              </svg>
              Read Full Research Paper (PDF)
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}