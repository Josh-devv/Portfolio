import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Briefcase, BookOpen } from 'lucide-react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navContainerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Body scroll lock
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isNavOpen]);

  useGSAP(() => {
    if (isNavOpen) {
      gsap.fromTo(".mobile-menu-item", 
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.05, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [isNavOpen]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen size={18} /> },
  ];

  return (
    <nav 
      ref={navContainerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Restored Former Logo (B&W Edit) */}
        <Link to="/" className="flex items-center gap-3 group interactive">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black font-black text-2xl shadow-lg group-hover:scale-105 transition-transform">
            J
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            Josh<span className="text-zinc-400">.</span>
          </span>
        </Link>

        {/* Minimal Desktop Nav */}
        <ul className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-[10px] uppercase font-bold tracking-[0.3em] transition-all hover:text-white interactive ${
                    isActive ? 'text-white underline underline-offset-8 decoration-2' : 'text-zinc-300'
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white interactive"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Full-screen Mobile Nav Overlay */}
      {isNavOpen && (
        <div className="fixed inset-0 bg-black z-[999] md:hidden flex flex-col pt-32 pb-16 px-8 sm:px-12 h-screen w-full overflow-y-auto">
          {/* Close Button Header */}
          <div className="absolute top-0 left-0 right-0 h-24 flex items-center justify-between px-6 border-b border-white/5 bg-black">
             <span className="text-[10px] uppercase font-bold tracking-[0.5em] text-zinc-500">Navigation</span>
             <button 
                className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center interactive" 
                onClick={() => setIsNavOpen(false)}
                aria-label="Close Menu"
              >
                <X size={20} />
              </button>
          </div>

          <ul className="flex flex-col gap-8 mt-12">
            {navLinks.map((link) => (
              <li key={link.name} className="mobile-menu-item">
                <Link
                  to={link.path}
                  onClick={() => setIsNavOpen(false)}
                  className={`text-5xl font-black tracking-tighter transition-colors block ${
                    location.pathname === link.path ? 'text-white' : 'text-zinc-300'
                  }`}
                >
                  {link.name}<span className="text-zinc-600">.</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-6 pt-12 border-t border-white/5">
             <div className="flex flex-col gap-2">
                <p className="text-[10px] uppercase font-black tracking-[0.4em] text-zinc-600">Connection Points</p>
                <div className="flex flex-wrap gap-8 mt-2">
                   <a href="https://github.com/Josh-devv" target="_blank" rel="noreferrer" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors">Github</a>
                   <a href="mailto:sofelajoshua@gmail.com" target="_blank" rel="noreferrer" className="text-sm font-bold text-zinc-300 hover:text-white transition-colors">Email</a>
                </div>
             </div>
             <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-zinc-700">&copy; 2024 Joshua Sofela • Premium Archive</p>
          </div>
        </div>
      )}
    </nav>
  );
}