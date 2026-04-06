import { Sparkles} from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { motion } from 'framer-motion';

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="relative mt-20 pb-12 overflow-hidden">
      {/* Decorative Line */}
      <div className="container mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Brand/Logo Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
              <Sparkles size={16} fill="currentColor" />
              </div>
              <span className="text-lg font-bold tracking-tighter text-white">
                JOSH<span className="text-primary italic">.</span>
              </span>
            </div>
            <p className="text-sm text-zinc-500 text-center md:text-left max-w-xs leading-relaxed">
              Crafting premium digital experiences with modern technologies and a passion for pixel-perfect design.
            </p>
          </div>

          {/* Copyright Section */}
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm text-zinc-500 flex items-center gap-2">
              Made with  {/*<Heart size={14} className="text-secondary fill-secondary/20" /> */}by Joshua Sofela
            </p>
            <p className="text-xs text-zinc-600 font-medium tracking-wide uppercase">
              &copy; {date} ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Social Links Section */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            {[
              { icon: <FaGithub size={20} />, href: "https://github.com/josh-devv" },
              { icon: <FaTwitter size={20} />, href: "https://x.com/sofelajoshua" },
              { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/oluwasegun-sofela-8a062b22b/" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className="p-3 rounded-xl glass border border-zinc-900 text-zinc-500 hover:text-white transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="mt-12 text-center">
          <p className="text-[10px] text-zinc-700 uppercase tracking-widest font-bold">
            Powered by React • Tailwind • Framer Motion • Vercel
          </p>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-primary/5 blur-[100px] rounded-full -z-10"></div>
    </footer>
  );
}