import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cv2 from '../Pages/CV.pdf';

export default function Resume() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Sofela Joshua | Technical Resume';
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header & Back Button */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12"
          >
             <div className="flex flex-col md:flex-row items-center gap-6">
                <button 
                  onClick={() => navigate(-1)}
                  className="w-12 h-12 rounded-2xl glass border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/30 transition-all group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <div className="text-center md:text-left">
                  <h1 className="text-4xl font-bold flex items-center gap-3">
                    Technical <span className="text-gradient">Résumé</span>
                  </h1>
                  <p className="text-zinc-500 font-medium mt-2">Curated Professional & Academic Milestones</p>
                </div>
             </div>

             <a 
               href={cv2} 
               download="Sofela_Joshua_Resume"
               className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.5)] transition-all"
             >
               <Download size={18} />
               <span>Download PDF</span>
             </a>
          </motion.div>

          {/* Interactive Resume View */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group h-[80vh] md:h-[90vh] glass rounded-[40px] overflow-hidden border border-white/10 shadow-2xl"
          >
             <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
                {/* Fallback for devices without PDF support or just to look cool */}
                <div className="text-center z-0">
                  <FileText size={100} className="text-zinc-800 mx-auto animate-pulse" />
                  <p className="text-zinc-700 mt-4 font-bold tracking-widest uppercase">Secure PDF Portal</p>
                </div>
                
                <embed 
                  src={cv2} 
                  type="application/pdf" 
                  className="relative z-10 w-full h-full rounded-[40px]" 
                />
             </div>
          </motion.div>

          <p className="text-center text-zinc-600 text-xs font-bold mt-12 tracking-widest uppercase">
            Built with React & Framer Motion • Last updated: April 2026
          </p>
        </div>
      </div>
    </section>
  );
}