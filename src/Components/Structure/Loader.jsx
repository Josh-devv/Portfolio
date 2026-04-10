import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".loader-container", {
          yPercent: -100,
          duration: 1,
          ease: "expo.inOut",
          onComplete
        });
      }
    });

    tl.to({}, {
      duration: 2,
      onUpdate: function() {
        const val = Math.round(this.progress() * 100);
        setProgress(val);
      }
    });

    tl.fromTo(".loader-text", 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.5 }, 
      0
    );

  }, [onComplete]);

  return (
    <div className="loader-container fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden">
      <div className="flex flex-col items-center">
        <h2 className="loader-text text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
          {progress}<span className="text-zinc-800">%</span>
        </h2>
        <div className="w-64 h-px bg-zinc-900 overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-8 text-[10px] text-zinc-600 uppercase font-bold tracking-[0.5em] animate-pulse">
          Establishing Connection
        </p>
      </div>
    </div>
  );
}
