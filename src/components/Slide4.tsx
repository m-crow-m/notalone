import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide4() {
  const notes = [
    'early outputs too clean, not enough feeling',
    'small changes in timing shifted the mood more than changing the visuals',
    'copy like "Here for you" and "You are not alone" felt soft but also a little suspicious',
    'had to keep rewriting and re timing to avoid it feeling like an empty ad',
  ];

  const timeline = [
    'rough concept and emotional goals',
    'first AI outputs and sound tests',
    'iterative edits based on my own emotional reaction',
    'final pass before critique',
  ];

  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-14 lg:py-16 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full pt-4 md:pt-0">
        {/* Header */}
        <div className="mb-10 md:mb-12 ml-0 md:ml-4 lg:ml-8">
          <h2 className="text-4xl md:text-5xl mb-2">Process</h2>
          <p className="text-base md:text-lg opacity-60">Testing what actually moves me.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
          {/* Left column - notebook style notes */}
          <div className="md:col-span-1 lg:col-span-5 lg:col-start-2">
            <div className="space-y-3">
              {notes.map((note, index) => (
                <div
                  key={index}
                  className="text-sm opacity-70 pl-4 md:pl-6 border-l border-white/20 py-2 leading-relaxed"
                >
                  {note}
                </div>
              ))}
            </div>

            {/* First overlapping image */}
            <div className="mt-10 md:mt-12 overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1678617935593-461661265f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGZyYW1lcyUyMGNvbXBhcmlzb258ZW58MXx8fHwxNzY0ODA2NDU1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="early frame placeholder"
                className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-105 border border-white/10"
              />
              <div className="text-xs opacity-30 mt-2">early frame placeholder</div>
            </div>
          </div>

          {/* Right column - timeline */}
          <div className="md:col-span-1 lg:col-span-4 lg:col-start-8 flex flex-col justify-center">
            <div className="space-y-6 md:space-y-8">
              {timeline.map((step, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex flex-col items-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-white" />
                    {index < timeline.length - 1 && (
                      <div className="w-px h-12 md:h-16 bg-white/20 mt-2" />
                    )}
                  </div>
                  <p className="text-sm opacity-70 leading-relaxed flex-1 pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Second overlapping image */}
            <div className="mt-8 overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1764557222299-5cce88abe80c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwd29ya2Zsb3clMjBwcm9jZXNzfGVufDF8fHx8MTc2NDgwNjQ1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="iteration comparison placeholder"
                className="w-full h-[180px] object-cover transition-transform duration-700 group-hover:scale-105 border border-white/10"
              />
              <div className="text-xs opacity-30 mt-2">iteration comparison placeholder</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}