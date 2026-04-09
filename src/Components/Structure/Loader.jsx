import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Loader({ onComplete }) {
  const containerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });

    tl.to(".loader-text", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out"
    })
    .to(".loader-progress", {
      width: "100%",
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=0.5")
    .to(".loader-text", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power4.in"
    })
    .to(containerRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "expo.inOut"
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[100] bg-bg flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="relative overflow-hidden mb-4">
        <h2 className="loader-text text-3xl font-bold tracking-tighter opacity-0 translate-y-10">
          JOSHUA <span className="text-primary">SOFELA</span>
        </h2>
      </div>
      
      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="loader-progress w-0 h-full bg-primary" />
      </div>

      <div className="absolute bottom-10 text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold">
        Crafting Digital Experiences
      </div>
    </div>
  );
}
