import React, { useRef } from 'react';
import Hero from '../Structure/Hero';
import data from '../../data/list';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, LayoutDashboard } from 'lucide-react';
import { FaCode } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Main() {
  const featuredProjects = data.slice(0, 3);
  const containerRef = useRef();

  useGSAP(() => {
    // Reveal animations for services
    gsap.from(".service-card", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".services-grid",
        start: "top 85%",
      }
    });

    // Reveal for projects header
    gsap.from(".projects-header", {
      x: -50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".projects-header",
        start: "top 90%",
      }
    });

    // Reveal for project cards
    gsap.from(".project-card", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".projects-grid",
        start: "top 80%",
      }
    });

    // Reveal for CTA
    gsap.from(".cta-content", {
      scale: 0.9,
      opacity: 0,
      duration: 1.5,
      ease: "elastic.out(1, 0.75)",
      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="flex flex-col gap-16 sm:gap-20 pb-16 sm:pb-20">
      <Hero />

      {/* Services */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 services-grid">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            { 
              icon: <LayoutDashboard className="text-primary" size={32} />, 
              title: "UI/UX Design", 
              desc: "Creating intuitive and aesthetically pleasing interfaces focused on user experience." 
            },
            { 
              icon: <FaCode className="text-secondary" size={32} />, 
              title: "Frontend Engineering", 
              desc: "Building scalable, performant architectures using modern React and TypeScript." 
            },
            { 
              icon: <Sparkles className="text-accent" size={32} />, 
              title: "Animation & Motion", 
              desc: "Bringing static layouts to life with smooth, professional motion design." 
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="service-card p-6 sm:p-8 glass rounded-[28px] sm:rounded-[32px] border border-white/5 hover:border-primary/20 transition-all group interactive"
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-zinc-900/50 w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-zinc-500 text-sm sm:text-base leading-relaxed font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="container font-display mx-auto px-4 sm:px-6 py-16 sm:py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent rounded-[32px] sm:rounded-[64px]">
        
        <div className="projects-header flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-primary mb-3 uppercase tracking-[0.2em] text-[10px] sm:text-xs">
              <Sparkles size={14} />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
          </div>

          <Link 
            to="/projects" 
            className="flex items-center gap-2 text-primary font-bold group text-sm sm:text-base interactive"
          >
            <span>View All Projects</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project, idx) => (
            <div
              key={idx}
              className="project-card glass rounded-[28px] sm:rounded-[40px] overflow-hidden border border-white/5 flex flex-col group interactive"
            >
              <div className="h-48 sm:h-56 lg:h-64 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-6 sm:p-10 flex-1 flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-zinc-500 text-sm mb-6 italic font-medium">
                  {project.tagline}
                </p>

                <Link 
                  to={`/projects/${idx}`}
                  className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between group/btn"
                >
                  <span className="text-xs uppercase font-bold tracking-widest text-zinc-600 group-hover/btn:text-white">
                    Case Study
                  </span>

                  <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center group-hover/btn:bg-primary transition-all">
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center cta-section">
        <div className="cta-content glass p-8 sm:p-12 lg:p-16 rounded-[32px] sm:rounded-[48px] border border-primary/20 relative overflow-hidden group">
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
              <Sparkles size={28} />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8">
              Ready to transform your <br /> 
              <span className="text-gradient">digital presence?</span>
            </h2>

            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mb-8 sm:mb-12">
              I'm currently available for freelance opportunities or 
              collaborative full-time roles.
            </p>

            <a 
              href="https://www.instagram.com/joshtoyourears/"
              className="magnetic-btn px-8 sm:px-12 py-4 sm:py-5 bg-white text-black text-base sm:text-xl font-bold rounded-2xl sm:rounded-3xl hover:scale-105 transition inline-block interactive"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}