import React, { useRef } from 'react';
import Hero from '../Structure/Hero';
import ContactSection from '../Structure/ContactSection';
import data from '../../data/list';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

export default function Main() {
  const featuredProjects = data.slice(0, 4);
  const containerRef = useRef();

  useGSAP(() => {
    gsap.from(".section-eyebrow", {
      y: 20,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".project-section",
        start: "top 85%",
      }
    });

    gsap.from(".project-card", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".project-cards-grid",
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col bg-bg overflow-hidden">
      <Hero />

      {/* Featured Projects Selection */}
      <section className="project-section container mx-auto px-6 py-16 md:py-32 border-t border-white/5">
        <div className="section-eyebrow mb-12 md:mb-20">
          <div className="flex items-center gap-3 text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
            <Sparkles size={12} className="text-zinc-600" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-huge leading-none">
            Selected <span className="text-zinc-700">Work.</span>
          </h2>
        </div>

        <div className="project-cards-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {featuredProjects.map((project, idx) => (
            <Link
              key={idx}
              to={`/projects/${idx}`}
              className="project-card group block interactive"
            >
              <div className="relative overflow-hidden aspect-[16/10] mb-6 md:mb-8 bg-zinc-900 border border-white/5 rounded-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-large text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="hidden sm:flex w-10 h-10 rounded-full border border-white/5 items-center justify-center text-zinc-500 flex-shrink-0">
                    <ArrowRight size={18} />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-zinc-700 font-mono text-[9px] uppercase font-bold tracking-[0.2em] border border-zinc-900 px-2 py-0.5 rounded">
                    {project.stack?.[0]}
                  </span>
                  <span className="text-zinc-800 text-[9px] uppercase font-black tracking-[0.2em] hidden sm:block">Full Case Study</span>
                </div>
                <p className="text-zinc-500 text-sm md:text-base font-medium leading-relaxed line-clamp-2 md:line-clamp-3">
                  {project.tagline}. {project.desc}
                </p>
                <div className="sm:hidden flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-widest mt-2">
                   View Project <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 md:mt-32 flex justify-center">
          <Link 
            to="/projects" 
            className="flex items-center gap-6 text-white font-bold uppercase text-[10px] tracking-[0.4em] pb-2 border-b-2 border-zinc-900 hover:border-white transition-all interactive"
          >
            Archive / All Works 
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}