/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDownload,
  FaCode,
  FaGraduationCap,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaTerminal
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFigma, SiVite, SiPostman } from "react-icons/si";
import { CiFileOn } from "react-icons/ci";
import { GoZap } from "react-icons/go";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import cv2 from "../Pages/CV.pdf";
import me from "../Pages/me.jpg";

export default function About() {
  const containerRef = useRef();
  const profileImgRef = useRef();

  useEffect(() => {
    document.title = "About | Sofela Joshua";
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".about-entrance", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.2
    });

    // Tech reveals
    gsap.from(".tech-group", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: ".toolkit-section",
        start: "top 85%"
      }
    });

  }, { scope: containerRef });

  const techToolkit = [
    { 
      category: "Frontend", 
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> }
      ]
    },
    { 
      category: "Styling", 
      skills: [
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#38BDF8]" /> },
        { name: "GSAP", icon: <GoZap className="text-[#88CE02]" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> }
      ]
    },
    { 
      category: "Workflow", 
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: "Terminal", icon: <FaTerminal className="text-zinc-500" /> }
      ]
    }
  ];

  return (
    <section ref={containerRef} className="min-h-screen pt-32 pb-24 bg-bg overflow-hidden relative selection:bg-white selection:text-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* LEFT: Portrait & Essentials */}
          <div className="about-entrance w-full lg:w-[35%] lg:sticky lg:top-32">
            <div ref={profileImgRef} className="relative group rounded-3xl overflow-hidden border border-white/5 bg-zinc-900 aspect-[4/5] mb-8 lg:mb-10 shadow-2xl">
              <img
                src={me}
                alt="Sofela Joshua"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Link to="/about/resume" className="flex flex-col items-center justify-center p-6 glass rounded-2xl border border-white/5 hover:border-white/20 transition-all group interactive">
                <CiFileOn size={24} className="text-zinc-500 group-hover:text-white transition-colors mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 group-hover:text-white">Résumé</span>
              </Link>
              <a href={cv2} download className="flex flex-col items-center justify-center p-6 glass rounded-2xl border border-white/5 hover:border-white/20 transition-all group interactive">
                <FaDownload size={20} className="text-zinc-500 group-hover:text-white transition-colors mb-2" />
                <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-400 group-hover:text-white">CV</span>
              </a>
            </div>
            
            <a href="https://www.instagram.com/joshtoyourears/" target="_blank" rel="noreferrer" className="mt-4 flex items-center justify-center gap-3 p-5 glass rounded-2xl border border-white/5 hover:border-white/20 transition-all group interactive w-full">
              <span className="text-[11px] font-bold text-zinc-500 group-hover:text-white transition-colors tracking-tight">Connect on Instagram</span>
            </a>
          </div>

          {/* RIGHT: Content & Toolkit */}
          <div className="w-full lg:w-[65%] mt-12 lg:mt-0">
            <div className="about-entrance mb-16 lg:mb-20">
              <div className="flex items-center gap-3 text-zinc-600 font-bold mb-6 uppercase tracking-[0.4em] text-[10px]">
                <div className="h-px w-10 bg-zinc-800"></div>
                <span>About</span>
              </div>
              <h1 className="text-large text-white mb-8 tracking-tight leading-[1.1]">
                Bridging Design & Engineering with <span className="text-zinc-700 italic">Vision.</span>
              </h1>
              <div className="space-y-6 text-zinc-500 text-base md:text-lg leading-relaxed max-w-2xl font-medium">
                <p>Hi, I'm <span className="text-white font-bold tracking-tight">Sofela Joshua</span>, a Frontend Developer and Computer Science student focused on building high-performance, aesthetically stunning digital environments.</p>
                <p>I specialize in building complex React ecosystems where speed and visual impact are balanced. My approach is centered on clean architecture and deep user interaction.</p>
                <div className="inline-flex items-center gap-4 p-4 mt-4 glass rounded-2xl border border-white/5 w-full sm:w-auto">
                   <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center text-white flex-shrink-0">
                      <FaGraduationCap size={18} />
                   </div>
                   <p className="text-[10px] sm:text-xs font-bold text-zinc-300 uppercase tracking-widest">B.Sc Computer Science</p>
                </div>
              </div>
            </div>

            {/* TECHNICAL TOOLKIT */}
            <section className="toolkit-section mb-20">
              <h2 className="about-entrance text-xl md:text-2xl font-bold text-white mb-10 tracking-tight flex items-center gap-4">
                <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
                   <FaCode size={14} />
                </div>
                Technical Toolkit
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {techToolkit.map((group, idx) => (
                  <div key={idx} className="tech-group space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-black text-zinc-700 border-b border-zinc-900 pb-3 mb-6">{group.category}</h4>
                    <div className="flex flex-col gap-3">
                      {group.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center justify-between p-4 glass rounded-2xl border border-white/0 hover:border-white/10 hover:bg-zinc-950 transition-all group interactive">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center grayscale group-hover:grayscale-0 transition-opacity">
                                 {skill.icon}
                              </div>
                              <span className="text-sm font-bold text-zinc-500 group-hover:text-white transition-colors">{skill.name}</span>
                           </div>
                           <Sparkles size={12} className="text-zinc-900 group-hover:text-zinc-500 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SOCIAL */}
            <section className="about-entrance">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-10 tracking-tight flex items-center gap-4">
                Social Echoes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: "Twitter", icon: <FaTwitter size={18} />, href: "https://twitter.com/sofelajoshua" },
                  { name: "Github", icon: <FaGithub size={18} />, href: "https://github.com/josh-devv" },
                  { name: "Linkedin", icon: <FaLinkedin size={18} />, href: "https://www.linkedin.com/in/oluwasegun-sofela-8a062b22b/" },
                ].map((social, idx) => (
                  <a key={idx} href={social.href} target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 md:p-6 glass rounded-2xl border border-white/5 hover:border-white/20 hover:bg-zinc-950 transition-all group interactive">
                    <div className="p-3 rounded-xl bg-zinc-900 text-zinc-600 group-hover:text-white transition-all shadow-lg">
                      {social.icon}
                    </div>
                    <span className="text-[10px] uppercase font-black tracking-[0.2em]">{social.name}</span>
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