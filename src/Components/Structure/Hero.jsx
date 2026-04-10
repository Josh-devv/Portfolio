import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowRight, FaInstagram } from "react-icons/fa";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.from(".hero-badge", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    })
    .from(".hero-title span", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    }, "-=0.6")
    .from(".hero-desc", {
      y: 20,
      opacity: 0,
      duration: 0.8,
    }, "-=0.8")
    .from(".hero-btns-container > *", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1
    }, "-=0.6");

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[75vh] flex items-center pt-24 pb-12 overflow-hidden bg-bg">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-950 border border-white/5 text-zinc-400 text-[10px] uppercase font-bold tracking-[0.2em] mb-8 rounded-full">
            <Sparkles size={12} />
            <span>Available for new projects</span>
          </div>
          
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter text-white">
            <span className="inline-block">Crafting Digital</span> <br className="hidden md:block"/>
            <span className="inline-block">Experiences </span>
            <span className="inline-block text-zinc-600">With Precision</span>
          </h1>
          
          <p className="hero-desc text-base sm:text-lg text-zinc-500 mb-10 max-w-xl mx-auto leading-relaxed font-medium">
            Hi, I'm a Frontend Developer passionate about building intuitive, 
            visually stunning, and high-performance user interfaces.
          </p>
          
          <div className="hero-btns-container flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-10 py-4 bg-white text-black font-bold flex items-center justify-center gap-3 hover:bg-zinc-200 transition-colors uppercase text-[10px] tracking-widest shadow-xl"
            >
              Explore Projects
              <FaArrowRight size={14} />
            </Link>
            
            <div className="flex items-center gap-6">
              {[
                { icon: <FaGithub size={20} />, href: "https://github.com/Josh-devv", label: "GitHub" },
                { icon: <FaTwitter size={20} />, href: "https://x.com/sofelajoshua", label: "Twitter" },
                { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/joshua-sofela-8a062b22b/", label: "LinkedIn" },
                { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/joshtoyourears/", label: "Instagram" }
              ].map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-600 hover:text-white transition-colors p-2 interactive" 
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}