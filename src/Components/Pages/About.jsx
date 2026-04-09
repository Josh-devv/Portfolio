/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDownload,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import { CiFileOn, CiMail } from "react-icons/ci";
import { LuLayers3 } from "react-icons/lu";
import { GoZap } from "react-icons/go";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import CV from "../Pages/Workresume.pdf";
import cv2 from "../Pages/CV.pdf";
import me from "../Pages/me.jpg";

export default function About() {
  const containerRef = useRef();

  useEffect(() => {
    document.title = "About Me | Crafting with Passion";
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".about-left", {
      x: -50,
      opacity: 0,
      duration: 1.2,
      delay: 0.2
    })
    .from(".about-right-content > *", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    }, "-=0.8");

    // Magnetic effect for profile cards
    const magneticItems = document.querySelectorAll('.magnetic-item');
    magneticItems.forEach(item => {
      item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        gsap.to(item, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)"
        });
      });
    });
  }, { scope: containerRef });

  const technologies = [
    { name: "React", level: "Expert", icon: <FaCode className="text-primary" /> },
    { name: "Typescript", level: "Advanced", icon: <FaCode className="text-accent" /> },
    { name: "Next.js", level: "Advanced", icon: <LuLayers3 className="text-secondary" /> },
    { name: "Tailwind CSS", level: "Expert", icon: <GoZap className="text-yellow-400" /> },
    { name: "GSAP", level: "Intermediate", icon: <GoZap className="text-green-400" /> },
    { name: "Git", level: "Advanced", icon: <FaGithub className="text-zinc-400" /> },
  ];

  return (
    <section ref={containerRef} className="min-h-screen font-display pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-16 items-start">

          {/* LEFT COLUMN */}
          <div className="about-left w-full lg:w-1/3 sticky lg:top-32">
            <div className="relative group max-w-sm mx-auto lg:mx-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

              <div className="relative aspect-square rounded-[28px] sm:rounded-[32px] overflow-hidden glass border border-white/10">
                <img
                  src={me}
                  alt="Sofela Joshua"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>

            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
              <Link
                to="/about/resume"
                className="magnetic-item flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 glass rounded-2xl sm:rounded-3xl border border-white/5 hover:border-primary/30 transition-all group interactive"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <CiFileOn size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold">Résumé</span>
              </Link>

              <a
                href={cv2}
                download="Sofela_Joshua_CV"
                className="magnetic-item flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 glass rounded-2xl sm:rounded-3xl border border-white/5 hover:border-secondary/30 transition-all group interactive"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                  <FaDownload size={18} />
                </div>
                <span className="text-xs sm:text-sm font-bold">Download</span>
              </a>
            </div>

            <a
              href="mailto:sofelajoshua@gmail.com"
              className="mt-4 flex items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 glass rounded-2xl sm:rounded-3xl border border-white/5 hover:border-accent/30 transition-all group w-full interactive"
            >
              <CiMail size={16} className="text-accent" />
              <span className="text-xs sm:text-sm font-bold text-zinc-400 group-hover:text-white transition-colors break-all">
                sofelajoshua@gmail.com
              </span>
            </a>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-right-content w-full lg:w-2/3">
            <div className="mb-10 sm:mb-12">
              <div className="flex items-center gap-2 text-primary font-bold mb-3 sm:mb-4 uppercase tracking-[0.2em] text-[10px] sm:text-xs">
                <div className="h-px w-6 sm:w-8 bg-primary"></div>
                <span>About Me</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                I'm <span className="text-gradient">Sofela Joshua</span>, a Frontend Developer crafting modern web experiences.
              </h1>

              <div className="space-y-5 sm:space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-3xl">
                <p>
                  As a Computer Science student and a driven Frontend Developer with over a year of deep immersion in the field,
                  I specialize in crafting interactive, high-performance, and visually stunning user interfaces.
                </p>

                <p>
                  My journey is fueled by a passion for solving complex problems through elegant code and modern tools.
                  I don't just build websites; I build digital solutions that prioritize both aesthetic excellence and
                  functional precision.
                </p>

                <div className="flex items-start sm:items-center gap-3 sm:gap-4 p-3 sm:p-4 glass rounded-2xl border border-primary/10">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                    <FaGraduationCap size={18} />
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-zinc-300">
                    Currently studying Computer Science • Focused on Software Engineering & UI/UX
                  </p>
                </div>
              </div>
            </div>

            {/* TECH */}
            <section className="mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 italic">
                <FaCode className="text-primary" /> Core Technologies
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 sm:p-5 glass rounded-xl sm:rounded-2xl border border-white/5 hover:border-primary/20 transition-all group interactive"
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-zinc-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {tech.icon}
                      </div>

                      <div>
                        <h4 className="font-bold text-sm sm:text-base text-white">{tech.name}</h4>
                        <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest font-bold mt-1">
                          {tech.level}
                        </p>
                      </div>
                    </div>

                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* SOCIAL */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3 italic">
                digital Footprint
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { name: "Twitter", icon: <FaTwitter size={16} />, href: "https://twitter.com/sofelajoshua" },
                  { name: "Github", icon: <FaGithub size={16} />, href: "https://github.com/josh-devv" },
                  { name: "Linkedin", icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/oluwasegun-sofela-8a062b22b/" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 glass rounded-xl sm:rounded-2xl border border-white/5 transition-all group interactive"
                  >
                    <div className="p-2 rounded-lg bg-zinc-900 group-hover:bg-primary/20 transition-colors">
                      {social.icon}
                    </div>
                    <span className="font-bold text-xs sm:text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
}