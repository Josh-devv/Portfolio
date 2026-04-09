import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef();
  const visualRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-badge", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5
    })
    .from(".hero-title span", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
    }, "-=0.8")
    .from(".hero-desc", {
      y: 30,
      opacity: 0,
      duration: 1,
    }, "-=0.8")
    .from(".hero-btns", {
      y: 30,
      opacity: 0,
      duration: 1,
    }, "-=0.8")
    .from(".hero-social a", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=0.6")
    .from(visualRef.current, {
      scale: 0.8,
      rotate: 10,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out"
    }, "-=1.5");

    // Magnetic effect for buttons
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });

    // Parallax for SVG elements
    gsap.to(".parallax-rect", {
      y: (i) => (i + 1) * 20,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative font-display min-h-[90vh] flex items-center justify-center pt-24 lg:pt-20 overflow-hidden bg-gradient-mesh">
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="hero-badge inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-6">
              <Sparkles size={14} />
              <span>Available for new projects</span>
            </div>
            
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight flex flex-wrap justify-center lg:justify-start gap-x-4">
              <span className="inline-block">Crafting</span> 
              <span className="inline-block text-gradient">Digital</span> 
              <span className="inline-block text-gradient">Experiences</span> 
              <span className="inline-block">With</span> 
              <span className="inline-block">Precision</span>
            </h1>
            
            <p className="hero-desc text-base sm:text-lg lg:text-xl text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0">
              Hi, I'm a Frontend Developer passionate about building intuitive, 
              visually stunning, and high-performance user interfaces.
            </p>
            
            <section className="hero-btns flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              
              <Link
                to="/projects"
                className="magnetic-btn w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 group hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] transition-shadow"
              >
                View Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="hero-social flex flex-wrap justify-center gap-3">
                <a
                  href="https://github.com/Josh-devv"
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn p-3 rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white transition"
                >
                  <FaGithub size={18} />
                </a>

                <a
                  href="https://x.com/sofelajoshua"
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn p-3 rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white transition"
                >
                  <FaTwitter size={18} />
                </a>

                <a
                  href="https://www.linkedin.com/in/joshua-sofela-8a062b22b/"
                  target="_blank"
                  rel="noreferrer"
                  className="magnetic-btn p-3 rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white transition"
                >
                  <FaLinkedin size={18} />
                </a>

                <a
                  href="mailto:sofelajoshua@gmail.com"
                  className="magnetic-btn p-3 rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white transition"
                >
                  <CiMail size={18} />
                </a>
              </div>
            </section>
          </div>

          {/* Visual */}
          <div ref={visualRef} className="lg:w-2/5 relative flex justify-center hero-visual">
            <svg
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[400px]"
            >
              <rect className="parallax-rect" x="100" y="100" width="200" height="200" stroke="#a855f7" strokeWidth="2" fill="none" rx="20" />
              <rect className="parallax-rect" x="300" y="100" width="200" height="200" stroke="#ec4899" strokeWidth="2" fill="none" rx="20" />
              <rect className="parallax-rect" x="500" y="100" width="200" height="200" stroke="#3b82f6" strokeWidth="2" fill="none" rx="20" />
              <rect className="parallax-rect" x="100" y="300" width="200" height="200" stroke="#ec4899" strokeWidth="2" fill="none" rx="20" />
              <rect className="parallax-rect" x="300" y="300" width="200" height="200" stroke="#3b82f6" strokeWidth="2" fill="none" rx="20" />
              <rect className="parallax-rect" x="500" y="300" width="200" height="200" stroke="#a855f7" strokeWidth="2" fill="none" rx="20" />
              
              <circle cx="400" cy="300" r="100" fill="url(#grad1)" opacity="0.2" className="animate-pulse" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#a855f7', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#ec4899', stopOpacity:1}} />
                </linearGradient>
              </defs>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}