import { RevealOnScroll } from "../shared/RevealOnScroll";

interface ServiceProcessTimelineProps {
  timeline: {
    step: string;
    title: string;
    description: string;
  }[];
}

export function ServiceProcessTimeline({
  timeline,
}: ServiceProcessTimelineProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] rounded-full bg-gradient-to-r from-[#502D6D] to-[#FCB116]" />
            <span className="font-syne text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] bg-gradient-to-r from-[#502D6D] via-[#8A3DA8] to-[#FCB116] bg-clip-text text-transparent">
              Methodology
            </span>
            <span className="w-5 h-[2px] rounded-full bg-gradient-to-r from-[#FCB116] to-[#502D6D]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#151515] mt-4">
            How We Execute This Service
          </h2>
          <p className="text-base text-[#544643] mt-3">
            A battle-tested 4-step workflow tailored for predictability, speed, and precision.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timeline.map((item, idx) => (
            <RevealOnScroll key={item.step} delay={idx * 0.1}>
              <div className="h-full p-7 rounded-3xl bg-[#EFF0EF] border border-[#C6C2C1] relative group hover:border-[#544643] hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#151515] text-[#F7F8F8] font-extrabold text-lg flex items-center justify-center mb-6 shadow-sm border border-[#544643]">
                  {item.step}
                </div>
                <h4 className="text-lg font-bold text-[#151515] mb-3 group-hover:text-[#C86A28] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-[#544643] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
