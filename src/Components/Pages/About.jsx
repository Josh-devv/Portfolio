/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import { Sparkles, ArrowDown, Code, Globe, Zap, Cpu, Mail } from "lucide-react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFigma, SiVite } from "react-icons/si";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function About() {
  const containerRef = useRef();

  useEffect(() => {
    document.title = "About | Sofela Joshua";
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.from(".reveal-text", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
      delay: 0.2
    })
    .from(".reveal-sub", {
      opacity: 0,
      y: 20,
      duration: 1,
    }, "-=1")
    .from(".arsenal-item", {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 1
    }, "-=0.5");

    // Scroll parallax for big text
    gsap.to(".big-name", {
      xPercent: -20,
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        start: "top top",
        end: "bottom top"
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="min-h-screen bg-bg pt-40 pb-32 overflow-hidden selection:bg-white selection:text-black">
      
      {/* Background Decor */}
      <div className="fixed overflow-hidden pointer-events-none inset-0 -z-10 opacity-[0.03]">
        <h1 className="big-name text-[35vw] font-black whitespace-nowrap text-white leading-none tracking-tighter uppercase translate-y-1/2">
          Sofela Joshua • Sofela Joshua
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="max-w-5xl mb-32">
          <div className="reveal-sub flex items-center gap-3 text-zinc-400 font-bold uppercase tracking-[0.5em] text-[10px] mb-8">
            <Sparkles size={12} />
            <span>The Identity</span>
          </div>
          <h2 className="reveal-text text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter mb-12 leading-[0.85] text-white italic">
            Thinking <br /> <span className="text-zinc-600 not-italic">Differently.</span>
          </h2>
          <div className="reveal-sub grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mt-20">
             <p className="text-2xl md:text-3xl font-bold text-zinc-200 tracking-tight leading-snug">
                Crafting high-performance digital environments for the global web.
             </p>
             <div className="space-y-6 text-zinc-400 text-lg leading-relaxed font-medium">
                <p>
                   I'm a Software Developer and Computer Science student passionate about the intersection of aesthetics and logic. 
                   I don't just build websites; I engineer experiences that prioritize technical excellence and visual impact.
                </p>
                <div className="flex items-center gap-4 text-white text-[10px] uppercase font-black tracking-widest">
                   <div className="w-12 h-px bg-zinc-800"></div>
                   Scroll To Exploration <ArrowDown size={14} />
                </div>
             </div>
          </div>
        </div>

        {/* Core Manifesto Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 py-32 border-t border-white/5 mt-32">
           <div className="reveal-sub">
              <h3 className="text-zinc-600 text-[10px] uppercase font-black tracking-[0.4em] mb-8">Concept</h3>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-300">
                    <Globe size={18} />
                 </div>
                 <h4 className="text-xl font-bold text-white">Global Reach</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                 Building for broad scalability and accessibility using modern standard protocols.
              </p>
           </div>
           
           <div className="reveal-sub">
              <h3 className="text-zinc-600 text-[10px] uppercase font-black tracking-[0.4em] mb-8">Architecture</h3>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-300">
                    <Cpu size={18} />
                 </div>
                 <h4 className="text-xl font-bold text-white">Clean Engineering</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                 Prioritizing clean code architecture to ensure maintainable and high-performance React ecosystems.
              </p>
           </div>

           <div className="reveal-sub">
              <h3 className="text-zinc-600 text-[10px] uppercase font-black tracking-[0.4em] mb-8">Interaction</h3>
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-300">
                    <Zap size={18} />
                 </div>
                 <h4 className="text-xl font-bold text-white">Fluid Motion</h4>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                 Integrating GSAP and native CSS animations to bring static interfaces to life.
              </p>
           </div>
        </div>

        {/* Technical Arsenal (Redesigned) */}
        <div className="py-32 border-t border-white/5">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">Digital Arsenal.</h2>
              <p className="text-zinc-400 text-sm uppercase font-bold tracking-[0.3em]">Tier 01 Toolkit</p>
           </div>
           
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "React Ecosystem", icon: <Code />, tags: ["Next.js", "Vite", "Query"] },
                { name: "Logic & Types", icon: <SiTypescript />, tags: ["TypeScript", "JS-ES20", "Node"] },
                { name: "Visual Layer", icon: <SiTailwindcss />, tags: ["Tailwind", "GSAP", "SASS"] },
                { name: "Creative Suite", icon: <SiFigma />, tags: ["Figma", "Photoshop", "AI"] }
              ].map((item, idx) => (
                <div key={idx} className="arsenal-item p-10 bg-zinc-950 border border-white/5 hover:border-white/10 transition-colors">
                   <div className="text-zinc-500 mb-8 transform scale-150 origin-left">
                      {item.icon}
                   </div>
                   <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-tight">{item.name}</h4>
                   <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[9px] text-zinc-800 uppercase font-black tracking-widest border border-zinc-900 px-2 py-0.5">
                           {tag}
                        </span>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Social Echoes */}
        <div className="py-32 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
           <p className="text-zinc-600 text-[10px] uppercase font-black tracking-[0.5em]">Sofela Joshua &copy; Archive</p>
           <div className="flex items-center gap-12">
              {[
                { name: "Twitter", href: "https://twitter.com/sofelajoshua", icon: <FaTwitter /> },
                { name: "Github", href: "https://github.com/josh-devv", icon: <FaGithub /> },
                { name: "Email", href: "mailto:sofelajoshua@gmail.com", icon: <Mail /> }
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-400 hover:text-white transition-colors flex items-center gap-3 text-xs uppercase font-bold tracking-[0.2em] interactive"
                >
                  {social.icon} {social.name}
                </a>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}