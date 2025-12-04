import { ImageWithFallback } from './figma/ImageWithFallback';

export function Slide7() {
  const findings = [
    {
      heading: "What the paper looks at",
      body: "Models like Pika, Suno, and Firefly can produce convincing mood in seconds. Foggy streets, soft beats, whispered reassurance. The question is not if they can fake emotion, but whether that feeling lasts and what happens once we know it came from a machine."
    },
    {
      heading: "Key finding 1 - AI supplies mood, not meaning",
      body: "Research shows AI is strongest at basic affect like fear, calm, or unease. Nuance appears when a human adds context, pacing, and narrative. My project confirmed this. The clips felt empty until I directed timing, structure, and sound as if I were a film director, not a button pusher."
    },
    {
      heading: "Key finding 2 - The label effect",
      body: "People often feel something when they see AI art, but that feeling weakens when they learn it was machine generated. Studies and my own reactions line up here. I often rejected technically impressive clips because they looked 'too AI'. Once the label appears, we downgrade the emotion, even if the pixels stayed the same."
    },
    {
      heading: "Key finding 3 - The human burden",
      body: "The emotional weight does not sit in any single generated frame. It sits in the human work around it: choosing, cutting, looping, degrading, and placing it inside a story. AI can build the house. Deciding if it feels haunted, safe, or like home is still the human burden."
    }
  ];

  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="px-6 md:px-12 lg:px-16 py-12 md:py-14 lg:py-16 min-h-full">
        <div className="max-w-[1800px] mx-auto w-full pb-20 md:pb-24">
          {/* Top section */}
          <div className="mb-8 md:mb-10 ml-0 md:ml-4">
            <p className="text-xs opacity-50 mb-3 tracking-wider uppercase">Research paper</p>
            <h2 className="text-3xl md:text-4xl lg:text-4xl mb-3 max-w-4xl leading-tight">
              Here for You: The Human Burden in AI-Generated Emotional Media
            </h2>
            <p className="text-sm opacity-60">Research by Jaeden Ives-crow</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
            {/* Middle left - Research question */}
            <div className="lg:col-span-5 lg:col-start-1 flex items-start">
              <div className="border-l-2 border-white pl-4 md:pl-6 py-3 md:py-4 bg-white/5">
                <p className="text-sm md:text-base leading-relaxed">
                  <span className="block text-sm opacity-50 mb-3">Research question:</span>
                  How much human direction does it take for AI generated visual and audio work to create a real emotional response, and where do its limits start to show?
                </p>
              </div>
            </div>

            {/* Middle right - Findings */}
            <div className="lg:col-span-6 lg:col-start-7 space-y-6 md:space-y-7">
              {findings.map((finding, index) => (
                <div key={index}>
                  <h3 className="text-sm md:text-base mb-2">{finding.heading}</h3>
                  <p className="text-sm opacity-70 leading-relaxed">
                    {finding.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Image overlay - lower right */}
            <div className="lg:col-span-4 lg:col-start-9 lg:row-start-2 mt-6 md:mt-8">
              <div className="overflow-hidden group transform -rotate-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745356688211-8f58e951ff56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHZpZGVvJTIwc3RpbGx8ZW58MXx8fHwxNzY0ODA2NDU0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="paper notes and diagram placeholder"
                  className="w-full h-[200px] md:h-[220px] object-cover transition-transform duration-700 group-hover:scale-105 border border-white/10"
                />
                <div className="text-xs opacity-30 mt-2 rotate-1">
                  paper notes and diagram placeholder
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section - themes */}
          <div className="mt-10 md:mt-12 ml-0 md:ml-4 pt-6 md:pt-8 border-t border-white/10">
            <p className="text-xs opacity-50">
              Themes: authorship bias, basic affect vs complex emotion, human direction as meaning, ethics of credit and training data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}