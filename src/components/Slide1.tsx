import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide1() {
  return (
    <div className="w-full h-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 flex items-start lg:items-center overflow-y-auto">
      <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center pt-4 md:pt-0">
        {/* Left content - offset */}
        <div className="lg:col-span-5 lg:col-start-1">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] mb-6 md:mb-8 -ml-1">
            Here For You
          </h1>
          
          <p className="text-base md:text-lg mb-8 md:mb-12 max-w-md opacity-70">
            Exploring emotional response to AI generated work and how much human direction it takes to make it actually feel like something.
          </p>
          
          <div className="max-w-sm">
            <p className="text-sm opacity-50 leading-relaxed">
              I am a visual communication designer using AI as a material, not a shortcut. This project is a 4 minute video experiment that asks how far AI can go toward meaningful emotional impact, and where the human hand is still doing the heavy lifting.
            </p>
          </div>
        </div>

        {/* Right image - large horizontal */}
        <div className="lg:col-span-6 lg:col-start-7 mt-6 lg:mt-0">
          <div className="relative overflow-hidden group">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1745356688211-8f58e951ff56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHZpZGVvJTIwc3RpbGx8ZW58MXx8fHwxNzY0ODA2NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="video still placeholder"
              className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 text-xs opacity-30">
              video still placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}