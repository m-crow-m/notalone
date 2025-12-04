import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide5() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pb-16 md:pb-20 pt-4 md:pt-0">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl mb-2">Local model experiments</h2>
          <p className="text-base md:text-lg opacity-60">Trying to get more control and fewer rules.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left column */}
          <div className="lg:col-span-5 lg:col-start-1 space-y-6 md:space-y-8">
            <div>
              <h3 className="text-lg md:text-xl mb-3">What are local models</h3>
              <div className="text-sm opacity-70 leading-relaxed space-y-3">
                <p>
                  Local models run directly on my own machine instead of in the cloud.
                </p>
                <p>
                  They offer more privacy and usually fewer content restrictions.
                </p>
                <p>
                  They are slower and more demanding on hardware, but give more freedom and control.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl mb-3">What I tried</h3>
              <div className="text-sm opacity-70 leading-relaxed space-y-3">
                <p>
                  Installed Comfy UI and local video models on my Mac.
                </p>
                <p>
                  Tried to generate video sequences with more control and fewer content filters.
                </p>
                <p>
                  The goal was to test a workflow where I am not limited by platform rules.
                </p>
              </div>
            </div>

            {/* Rotated image - positioned below left column */}
            <div className="mt-6 md:mt-8">
              <div className="overflow-hidden group transform rotate-2">
                <ImageWithFallback
                  src="/notalone/images/local.png"
                  alt="local model UI"
                  className="w-full h-[220px] md:h-[280px] object-cover transition-transform duration-700 group-hover:scale-105 border border-white/10"
                />
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 lg:col-start-7 space-y-6 md:space-y-8">
            <div>
              <h3 className="text-lg md:text-xl mb-3">What did not work</h3>
              <div className="text-sm opacity-70 leading-relaxed space-y-3">
                <p>
                  My Mac hardware could not really handle it.
                </p>
                <p>
                  Renders were extremely slow and often stuck.
                </p>
                <p>
                  The GPU could not be used the way I needed.
                </p>
                <p>
                  For this project timeline, local models were not realistic.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg md:text-xl mb-3">How I might use them later</h3>
              <div className="text-sm opacity-70 leading-relaxed space-y-3">
                <p>
                  With better hardware or more time, I would return to local models for:
                </p>
                <p className="pl-4">
                  building a consistent visual style over many pieces,
                </p>
                <p className="pl-4">
                  exploring more uncomfortable or unusual emotional content,
                </p>
                <p className="pl-4">
                  and avoiding platform level content restrictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}