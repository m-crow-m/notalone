import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide8() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start md:items-end pb-20 md:pb-28 lg:pb-32 overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pt-4 md:pt-0">
        {/* Header - positioned low and left */}
        <div className="mb-12 md:mb-16 ml-0 md:ml-2">
          <h2 className="text-4xl md:text-5xl mb-2">Reflection</h2>
          <p className="text-base md:text-lg opacity-60">What I actually learned from this.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Three text blocks - off center */}
          <div className="md:col-span-2 lg:col-span-10 lg:col-start-2 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <h3 className="text-lg md:text-xl mb-3 md:mb-4">What worked</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                I built a clear emotional tone using AI as material.
                Iteration and human direction mattered more than any single model.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl mb-3 md:mb-4">What fell short</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Some moments still feel thin or scripted.
                AI can imitate mood, but the depth feels limited.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl mb-3 md:mb-4">Next steps</h3>
              <p className="text-sm opacity-70 leading-relaxed">
                Gather more viewer feedback.
                Revisit local models when my hardware catches up.
                Keep using AI as a collaborator, not as a replacement for sensitivity or intention.
              </p>
            </div>
          </div>

          {/* Quiet minimal image - positioned separately */}
          <div className="md:col-span-1 lg:col-span-4 lg:col-start-3 mt-8 md:mt-12">
            <div className="overflow-hidden group opacity-60">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739647153034-1ce7efe3fc02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWlldCUyMGNvbnRlbXBsYXRpdmV8ZW58MXx8fHwxNzY0ODA2NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="reflection image placeholder"
                className="w-full h-[180px] md:h-[200px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="text-xs opacity-30 mt-2">
                reflection image placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}