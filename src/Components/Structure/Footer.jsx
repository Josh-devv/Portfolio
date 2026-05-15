import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Footer() {
  const footerRef = useRef();
  const date = new Date().getFullYear();

  useGSAP(() => {
    gsap.from(".footer-el", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 95%",
      }
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-black py-24 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
          <div className="footer-el flex flex-col gap-6">
            <h2 className="text-3xl font-bold tracking-tighter text-white">Let's <span className="text-zinc-500 italic">collaborate.</span></h2>
            <a 
              href="mailto:sofelajoshua@gmail.com" 
              target="_blank"
              rel="noreferrer"
              className="text-xl md:text-2xl font-medium text-zinc-300 hover:text-white transition-colors border-b border-zinc-900 pb-2"
            >
              sofelajoshua@gmail.com
            </a>
          </div>

          <div className="footer-el flex items-center gap-12">
            {[
              { name: "Twitter", href: "https://twitter.com/sofelajoshua" },
              { name: "Github", href: "https://github.com/josh-devv" },
              { name: "Linkedin", href: "https://www.linkedin.com/in/oluwasegun-sofela-8a062b22b/" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-400 hover:text-white transition-colors interactive"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-el mt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12">
          <p className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.5em]">
            &copy; {date} Joshua Sofela
          </p>
          <p className="text-[10px] text-zinc-600 uppercase font-black tracking-[0.5em]">
            Black & White Series
          </p>
        </div>
      </div>
    </footer>
  );
}