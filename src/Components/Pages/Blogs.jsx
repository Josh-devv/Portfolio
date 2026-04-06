import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Clock } from 'lucide-react';

export default function Blogs() {
  useEffect(() => {
    document.title = 'Insights | Thoughts & Architecture';
  }, []);

  return (
    <section className="min-h-[80vh] pt-32 pb-20 overflow-hidden flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="glass p-12 md:p-20 rounded-[48px] border border-white/5 max-w-3xl mx-auto shadow-2xl relative"
         >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center text-primary border border-primary/30">
               <BookOpen size={40} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Insights Under <span className="text-gradient">Construction</span></h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-10">
              I'm currently distilling my experiences and architectural patterns into a series of in-depth articles. 
              The technical blog is launching soon.
            </p>

            <div className="flex items-center justify-center gap-4 py-4 px-8 bg-white/5 rounded-full w-fit mx-auto border border-white/5">
               <Clock size={18} className="text-primary animate-pulse" />
               <span className="text-sm font-bold tracking-widest uppercase text-zinc-400">Estimated Arrival: Q3 2026</span>
            </div>

            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
         </motion.div>
      </div>
    </section>
  );
}