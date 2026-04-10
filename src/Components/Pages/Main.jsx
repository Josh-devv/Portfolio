import React, { useRef } from 'react';
import Hero from '../Structure/Hero';
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
    <div ref={containerRef} className="flex flex-col bg-bg">
      <Hero />

      {/* Featured Projects Selection */}
      <section className="project-section container mx-auto px-6 py-24 border-t border-white/5">
        <div className="section-eyebrow mb-20">
          <div className="flex items-center gap-3 text-white font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
            <Sparkles size={12} className="text-zinc-600" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none">
            Selected <span className="text-zinc-700">Work.</span>
          </h2>
        </div>

        <div className="project-cards-grid grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {featuredProjects.map((project, idx) => (
            <Link
              key={idx}
              to={`/projects/${idx}`}
              className="project-card block interactive"
            >
              <div className="relative overflow-hidden aspect-[16/10] mb-8 bg-zinc-900 border border-white/5 rounded-2xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-zinc-500">
                    <ArrowRight size={18} />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                   <span className="text-zinc-700 font-mono text-[9px] uppercase font-bold tracking-[0.2em] border border-zinc-900 px-2 py-0.5 rounded">
                    {project.stack?.[0]}
                  </span>
                  <span className="text-zinc-800 text-[9px] uppercase font-bold tracking-[0.2em]">Read Case Study</span>
                </div>
                <p className="text-zinc-500 text-sm font-medium leading-relaxed line-clamp-2">
                  {project.tagline}. {project.desc.slice(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <Link 
            to="/projects" 
            className="flex items-center gap-6 text-white font-bold uppercase text-[10px] tracking-[0.4em] pb-2 border-b-2 border-zinc-900 hover:border-white transition-all interactive"
          >
            All Archive / {data.length} Works 
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Simplified CTA */}
      <section className="bg-zinc-950 py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tight leading-none">
            Let's build <br /> <span className="text-zinc-800 italic">together.</span>
          </h2>
          <a 
            href="https://www.instagram.com/joshtoyourears/" 
            target="_blank"
            rel="noreferrer"
            className="inline-block px-12 py-5 bg-white text-black font-bold uppercase text-[10px] tracking-[0.4em] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all"
          >
            Contact Now
          </a>
        </div>
      </section>
    </div>
  );
}