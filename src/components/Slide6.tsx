import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

export function Slide6() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pt-4 md:pt-0">
        {/* Header */}
        <div className="mb-10 md:mb-12 ml-0 md:ml-4">
          <h2 className="text-4xl md:text-5xl mb-2">The final piece</h2>
          <p className="text-base md:text-lg opacity-60">A 4 minute AI driven video experiment.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="lg:col-span-5 lg:col-start-1 space-y-6 md:space-y-8">
            <div className="text-sm opacity-70 leading-relaxed space-y-4">
              <p>
                The video itself is not about showing off what AI can do visually.
              </p>
              <p>
                It is a test. I use AI generated visuals and sound, then guide them with timing, text, and structure to see if they can actually carry emotional weight.
              </p>
              <p>
                The real work lives in the direction, not the raw generations.
              </p>
            </div>

            {/* Pull quote */}
            <div className="border-l-2 border-white pl-4 md:pl-6 py-4 bg-white/5">
              <p className="text-sm md:text-base italic opacity-80">
                Question: when this feels emotional, is it the AI, or is it the human decisions around it?
              </p>
            </div>
          </div>

          {/* Right content - image and button */}
          <div className="lg:col-span-6 lg:col-start-7 mt-6 lg:mt-0">
            <div className="relative overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705713394592-44383f54185d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2NDgwNjQ1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="final still placeholder"
                className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 right-4 text-xs opacity-30">
                final still placeholder
              </div>
            </div>

            {/* Play button */}
            <button className="mt-4 md:mt-6 flex items-center gap-3 px-5 md:px-6 py-2.5 md:py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 group">
              <Play className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              <span className="text-sm">Play video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}