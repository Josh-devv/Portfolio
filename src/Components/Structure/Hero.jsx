import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function Hero() {
  return (
    <section className="relative font-display min-h-[90vh] flex items-center justify-center pt-24 lg:pt-20 overflow-hidden bg-gradient-mesh">
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="w-full lg:w-3/5 text-center lg:text-left"
          >
            <motion.div 
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-6"
            >
              <Sparkles size={14} />
              <span>Available for new projects</span>
            </motion.div>
            
            <motion.h1 
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Crafting <span className="text-gradient">Digital Experiences</span> With Precision
            </motion.h1>
            
            <motion.p 
              variants={item}
              className="text-base sm:text-lg lg:text-xl text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Hi, I'm a Frontend Developer passionate about building intuitive, 
              visually stunning, and high-performance user interfaces.
            </motion.p>
            
            <motion.section variants={item} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              
              <Link
                to="/projects"
                className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2"
              >
                View Work
                <FaArrowRight />
              </Link>
              
              {/* SOCIAL ICONS WITH LINKS */}
              <div className="flex flex-wrap justify-center gap-3">
                
                {/* GitHub */}
                <motion.a
                  href="https://github.com/Josh-devv"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white transition"
                >
                  <FaGithub size={18} />
                </motion.a>

                {/* Twitter */}
                <motion.a
                  href="https://x.com/sofelajoshua"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white transition"
                >
                  <FaTwitter size={18} />
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/in/joshua-sofela-8a062b22b/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white transition"
                >
                  <FaLinkedin size={18} />
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:sofelajoshua@gmail.com"
                  whileHover={{ y: -3 }}
                  className="p-3 rounded-xl glass border border-zinc-800 text-zinc-400 hover:text-white transition"
                >
                  <CiMail size={18} />
                </motion.a>

              </div>
            </motion.section>
          </motion.div>

          {/* Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-2/5 relative flex justify-center"
          >
            <svg
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[400px]"
            >
              {/* your rectangles unchanged */}
              <rect x="100" y="100" width="200" height="200" stroke="#4CAF50" strokeWidth="2" fill="none" />
              <rect x="300" y="100" width="200" height="200" stroke="#FF4081" strokeWidth="2" fill="none" />
              <rect x="500" y="100" width="200" height="200" stroke="#03A9F4" strokeWidth="2" fill="none" />
              <rect x="100" y="300" width="200" height="200" stroke="#795548" strokeWidth="2" fill="none" />
              <rect x="300" y="300" width="200" height="200" stroke="#FF9800" strokeWidth="2" fill="none" />
              <rect x="500" y="300" width="200" height="200" stroke="#9C27B0" strokeWidth="2" fill="none" />
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}