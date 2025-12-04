import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide3() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pt-4 md:pt-0">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-4xl md:text-5xl mb-2">Methodology</h2>
          <p className="text-base md:text-lg opacity-60">Moving between making, feeling, and adjusting.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left column - stacked text sections */}
          <div className="space-y-6 md:space-y-8">
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

          {/* Right column - constrained image */}
          <div className="flex items-start justify-center md:justify-end">
            <div className="max-w-md w-full overflow-hidden group">
              <ImageWithFallback
                src="/notalone/images/tools.png"
                alt="AI tools and workspace"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}