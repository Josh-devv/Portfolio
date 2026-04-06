import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Code } from "lucide-react";
import data from "../../data/list";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Projects() {
  useEffect(() => {
    document.title = "Portfolio | Stunning Digital Experiences";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen font-display py-20 bg-background relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-primary font-medium mb-4"
          >
            <div className="h-[2px] w-8 bg-primary"></div>
            <span>PORTFOLIO Showcase</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            A Collection of Crafted <span className="text-gradient">Digital Masterpieces</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-zinc-400 text-lg leading-relaxed"
          >
            Explore my latest projects where design meets functionality. Focused on creating user-centric 
            interfaces with cutting-edge technology and pixel-perfect implementation.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {data?.map((project, id) => (
            <motion.div
              key={id}
              variants={item}
              className="group relative"
            >
              <Link to={`/projects/${id}`} className="block h-full">
                <div className="glass rounded-[32px] overflow-hidden border border-white/5 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col h-full">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                       <div className="bg-primary/20 backdrop-blur-md border border-primary/30 p-2 rounded-full text-white">
                         <ArrowRight size={20} />
                       </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack?.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-zinc-400 text-sm mb-6 line-clamp-2 leading-relaxed">{project.tagline}</p>
                    
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-tighter text-zinc-500 group-hover:text-white transition-colors">Case Study</span>
                      <div className="flex items-center gap-2 text-primary font-bold text-sm">
                        <span>Details</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
