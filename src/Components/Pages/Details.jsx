import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ExternalLink, Code, Info, Sparkles } from "lucide-react";
import data from "../../data/list";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const containerRef = useRef();
  const project = data.find((item, index) => index === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Case Study`;
    }
  }, [project]);

  useGSAP(() => {
    if (!project) return;
    const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

    tl.from(".detail-entrance", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      delay: 0.2
    })
    .from(".hero-image", {
      scale: 1.05,
      opacity: 0,
      duration: 1.5
    }, "-=1");

  }, { scope: containerRef });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Project not found</h2>
          <button onClick={() => navigate("/projects")} className="px-6 py-2 bg-white text-black font-bold uppercase text-[10px] tracking-widest">
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <section ref={containerRef} className="min-h-screen pb-32 pt-32 bg-bg selection:bg-white selection:text-black">
      <div className="container mx-auto px-6">
        {/* Back Button & Title */}
        <div className="max-w-4xl mx-auto mb-20">
          <button
            onClick={() => navigate(-1)}
            className="detail-entrance flex items-center gap-3 text-zinc-300 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft size={18} />
            <span className="font-black uppercase tracking-[0.2em] text-[10px]">Back to Collections</span>
          </button>

          <div className="detail-entrance flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div>
              <div className="flex items-center gap-3 text-white font-bold mb-6 text-[10px] uppercase tracking-[0.4em]">
                <Sparkles size={14} className="text-zinc-600" />
                <span>Selected Exploration</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter leading-none mb-6">
                 {project.title}
              </h1>
              <p className="text-xl text-zinc-300 font-medium tracking-tight max-w-2xl">{project.tagline}</p>
            </div>

            <a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="px-10 py-5 bg-white text-black font-extrabold flex items-center gap-3 hover:bg-zinc-200 transition-all uppercase text-[10px] tracking-[0.2em]"
            >
              Live Experience
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Project Visual */}
        <div className="detail-entrance max-w-6xl mx-auto mb-24 relative">
          <div className="hero-image relative rounded-3xl overflow-hidden aspect-video border border-white/5 bg-zinc-900">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Structure */}
        <div className="max-w-4xl mx-auto flex flex-col gap-24">
          
          {/* Detailed Narrative */}
          <div className="detail-entrance flex flex-col md:flex-row gap-12 md:gap-24">
             <div className="md:w-1/3">
                <h3 className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-700 border-b border-zinc-900 pb-4 mb-6">Manifesto</h3>
                <p className="text-sm font-bold text-white tracking-widest leading-relaxed">
                   Redefining digital boundaries through precise engineering.
                </p>
             </div>
              <div className="md:w-2/3">
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-body">
                   {project.desc}
                </p>
              </div>
          </div>

          {/* Technology Detail */}
          <div className="detail-entrance flex flex-col md:flex-row gap-12 md:gap-24">
             <div className="md:w-1/3">
                <h3 className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-700 border-b border-zinc-900 pb-4 mb-6">Architecture</h3>
                <p className="text-sm font-bold text-white tracking-widest leading-relaxed">
                   Built with a high-performance stack for scalability.
                </p>
             </div>
             <div className="md:w-2/3 flex flex-wrap gap-3">
                {project.stack?.map((tech, idx) => (
                  <div key={idx} className="px-6 py-4 bg-zinc-950 border border-white/5 text-zinc-200 font-bold uppercase text-[11px] tracking-widest">
                    {tech}
                  </div>
                ))}
             </div>
          </div>

        </div>

        {/* Closing CTA */}
        <div className="detail-entrance mt-40 pt-20 border-t border-white/5 text-center">
            <p className="text-zinc-700 text-[10px] uppercase font-black tracking-[0.5em] mb-8">End of Transmission</p>
            <button onClick={() => navigate("/projects")} className="text-white font-bold flex items-center gap-4 mx-auto hover:text-zinc-200 transition-colors">
                Explore More Works <ArrowRight size={20} />
            </button>
        </div>
      </div>
    </section>
  );
}
