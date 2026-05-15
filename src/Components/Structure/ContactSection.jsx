import React, { useRef } from 'react';
import { Mail, Send } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";

export default function ContactSection() {
  const sectionRef = useRef();

  useGSAP(() => {
    gsap.from(".contact-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    gsap.from(".contact-content", {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 bg-bg border-t border-white/5 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-12">
            <Mail size={12} />
            <span>Direct Inquiry</span>
          </div>
          
          <h2 className="contact-title text-huge text-white mb-12 leading-[1.1] tracking-tighter">
            Have a project in mind? <br />
            <span className="text-zinc-600 italic">Let’s build something great.</span>
          </h2>
          
          <div className="contact-content mt-16">
            <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl leading-relaxed">
              I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <a 
              href="mailto:sofelajoshua@gmail.com" 
              className="group relative inline-flex items-center gap-8 py-8 border-b-2 border-zinc-900 hover:border-white transition-all duration-500 w-full md:w-auto interactive"
            >
              <span className="text-2xl md:text-5xl font-black tracking-tighter text-white group-hover:translate-x-2 transition-transform duration-500">
                sofelajoshua@gmail.com
              </span>
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                <Send size={24} />
              </div>
            </a>
            
          </div>
        </div>
      </div>
    </section>
  );
}
