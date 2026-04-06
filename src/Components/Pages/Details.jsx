import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Code, Info, Sparkles } from "lucide-react";
import data from "../../data/list";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = data.find((item, index) => index === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Case Study`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <button onClick={() => navigate("/projects")} className="text-primary hover:underline">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen pb-20 pt-10">
      <div className="container mx-auto px-6">
        {/* Back Button & Title */}
        <div className="max-w-5xl mx-auto mb-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-xs">Back to Gallery</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <div className="flex items-center gap-3 text-primary font-bold mb-4 text-xs uppercase tracking-[0.2em]">
                <Sparkles size={14} />
                <span>Featured Project</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-white">{project.title}</h1>
              <p className="text-xl text-zinc-400 mt-4 max-w-2xl">{project.tagline}</p>
            </div>

            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.5)] transition-all"
            >
              <span>Visit Live Project</span>
              <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>

        {/* Project Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto relative group mb-20"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-[48px] blur-3xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
          <div className="relative rounded-[40px] overflow-hidden glass border border-white/10 aspect-video shadow-2xl">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Overview Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6 text-white text-xl font-bold italic">
               <Info className="text-primary" />
               <h2>Project Overview</h2>
            </div>
            <div className="glass p-8 rounded-[32px] border border-white/5 space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>{project.desc}</p>
              <div className="pt-8 border-t border-white/5 flex flex-col gap-4">
                 <h4 className="text-white font-bold flex items-center gap-2">
                   <Sparkles size={16} className="text-yellow-500" /> Key Features
                 </h4>
                 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                   {["Responsive Design", "Interactive UI", "Optimized Performance", "Accessibility Ready"].map(feature => (
                     <li key={feature} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                        <span>{feature}</span>
                     </li>
                   ))}
                 </ul>
              </div>
            </div>
          </motion.div>

          {/* Sidebar / Stack Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6 text-white text-xl font-bold italic">
               <Code className="text-secondary" />
               <h2>Technology Stack</h2>
            </div>
            <div className="glass p-8 rounded-[32px] border border-white/5 flex flex-col gap-4">
              {project.stack?.map((tech, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                  <span className="font-bold text-zinc-300">{tech}</span>
                  <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(236,72,153,0.5)]"></div>
                </div>
              ))}
              
              <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                 <p className="text-xs font-bold text-zinc-300 uppercase tracking-widest text-center">Implementation Focus</p>
                 <p className="text-sm text-center mt-2 italic text-zinc-400">Clean architecture with modern design patterns.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
