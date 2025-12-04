import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide3() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pt-4 md:pt-0">
        {/* Header - shifted down and right */}
        <div className="ml-0 md:ml-12 lg:ml-20 mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl mb-2">Methodology</h2>
          <p className="text-base md:text-lg opacity-60">Moving between making, feeling, and adjusting.</p>
        </div>

        <div className="relative">
          {/* Three column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 ml-0 md:ml-6 lg:ml-12 mb-8">
            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Tools</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Online AI tools for image, video, and audio. Editing in Premiere. Text and timing written by me.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Workflow</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Start with a simple emotional intention. Generate. Watch and listen. Write down what I actually feel. Change prompts, pacing, or sound. Repeat.
              </p>
            </div>

            <div>
              <h3 className="text-xl md:text-2xl mb-3 md:mb-4">Research</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Read about AI, affect, and creativity. Use those frameworks to question what my own piece is doing emotionally.
              </p>
            </div>
          </div>

          {/* Image below grid */}
          <div className="ml-0 md:ml-6 lg:ml-12 mt-10 md:mt-16 max-w-full md:w-[480px] overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1757310998437-b2e8a7bd2e97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGludGVyZmFjZSUyMHVpfGVufDF8fHx8MTc2NDgwNjQ1NHww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="process UI placeholder"
              className="w-full h-[200px] md:h-[280px] object-cover transition-transform duration-700 group-hover:scale-105 border border-white/10"
            />
            <div className="text-xs opacity-30 mt-2">
              process UI placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}