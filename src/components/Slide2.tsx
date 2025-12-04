import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide2() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12 pt-4 md:pt-0">
        {/* Left side - assignment details */}
        <div className="md:col-span-1 lg:col-span-4 lg:col-start-2 flex flex-col justify-center">
          <div className="mb-6 md:mb-8">
            <h2 className="text-4xl md:text-5xl mb-3">Assignment</h2>
            <p className="text-sm opacity-50 mb-4 md:mb-6">
              Deep Dive and Deep Research case study.
            </p>
          </div>

          <div className="space-y-4 text-sm opacity-70 leading-relaxed max-w-md">
            <p>
              Deep Dive: build an AI informed project and treat it like a case study.
            </p>
            <p>
              Deep Research: form a question about AI, creativity, and emotion, then answer it with sources and reflection.
            </p>
            <p>
              I combined them. The making and the research fed each other.
            </p>
          </div>
        </div>

        {/* Center - research question box */}
        <div className="md:col-span-1 lg:col-span-4 flex items-center">
          <div className="border border-white/30 p-6 md:p-8 bg-white/5">
            <p className="text-base md:text-xl leading-relaxed">
              Research question: How much human direction does it take for AI generated visual and audio work to create a real emotional response, and where do its limits start to show?
            </p>
          </div>
        </div>

        {/* Right edge - tall image */}
        <div className="hidden lg:block lg:col-span-3 lg:col-start-10">
          <div className="relative w-full h-full overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763318156213-37e41cd0dfec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMG5vdGVzJTIwcGFwZXJ8ZW58MXx8fHwxNzY0ODA2NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="notes and research placeholder"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-xs opacity-30 rotate-90 origin-bottom-left whitespace-nowrap">
              notes and research placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}