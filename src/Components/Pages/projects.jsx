import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import data from "../../data/list";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Projects() {
  const containerRef = useRef();

  useEffect(() => {
    document.title = "Portfolio | Minimal Digital Archive";
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    gsap.from(".header-reveal", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "expo.out",
      delay: 0.2
    });

    gsap.from(".project-row", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".project-rows-container",
        start: "top 80%"
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen pt-40 pb-32 bg-bg text-white selection:bg-white selection:text-black">
      <div className="container mx-auto px-6">
        
        {/* Editorial Header */}
        <div className="max-w-4xl mb-32">
          <div className="header-reveal flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-[0.4em] text-[10px] mb-8">
            <Sparkles size={12} />
            <span>Project Index</span>
          </div>
          <h2 className="header-reveal text-huge mb-10 leading-[0.95]">
            Digital <span className="text-zinc-600">Archive.</span>
          </h2>
          <p className="header-reveal font-body text-zinc-300 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            Exploring the boundary between aesthetics and technology. 
            Each project is a unique exploration of user interaction and modern engineering.
          </p>
        </div>

        {/* Organized Static Row-based Layout */}
        <div className="project-rows-container flex flex-col border-t border-white/5">
          {data?.map((project, id) => (
            <Link 
              key={id} 
              to={`/projects/${id}`}
              className="project-row border-b border-white/5 py-12 md:py-20 flex flex-col items-start gap-8 px-4 interactive relative overflow-hidden"
            >
              {/* Static background number */}
              <span className="absolute right-8 top-1/2 -translate-y-1/2 text-[15vw] font-black text-white/5 pointer-events-none leading-none tracking-tighter">
                {id < 9 ? `0${id + 1}` : id + 1}
              </span>

              <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-12">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em] font-black">
                      Index // {id < 9 ? `0${id + 1}` : id + 1}
                    </span>
                    <div className="h-px w-10 bg-zinc-700"></div>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 font-body text-[11px] max-w-[450px] line-clamp-2 leading-relaxed italic">
                    {project.desc}
                  </p>
                </div>

                <div className="flex flex-col md:items-end gap-8 h-full justify-between">
                  <p className="text-zinc-400 font-body text-[10px] uppercase tracking-[0.2em] font-black max-w-[250px] md:text-right leading-relaxed mb-4 italic">
                    {project.tagline}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex gap-2">
                       {project.stack?.slice(0, 2).map((s, i) => (
                         <span key={i} className="text-[9px] text-zinc-600 uppercase font-black tracking-widest border border-zinc-700 px-3 py-1 rounded">
                           {s}
                         </span>
                       ))}
                    </div>
                    <div className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-zinc-300">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
