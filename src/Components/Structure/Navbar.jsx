import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Home, User, Briefcase, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'About', path: '/about', icon: <User size={18} /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen size={18} /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass rounded-2xl md:rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'border-primary/20 shadow-2xl scale-[0.98]' : 'border-white/5'
        }`}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white transition-transform group-hover:rotate-12">
              <Sparkles size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tighter">
              JOSH<span className="text-primary italic">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors hover:text-white ${
                      isActive ? 'text-white' : 'text-zinc-400'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 bg-primary/20 rounded-full border border-primary/30"
                        transition={{ type: 'spring', duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Contact Button (Desktop) */}
          <div className="hidden md:block">
            <a 
              href="https://www.instagram.com/joshtoyourears/"
              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full transition-transform hover:scale-105 active:scale-95"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 p-6 md:hidden"
          >
            <div className="glass rounded-[32px] overflow-hidden border border-primary/20 shadow-2xl">
              <ul className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsNavOpen(false)}
                      className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-lg font-bold transition-colors ${
                        location.pathname === link.path ? 'bg-primary/10 text-primary' : 'text-zinc-400'
                      }`}
                    >
                      {link.icon}
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="p-8 border-t border-white/5 bg-white/5">
                 <a 
                   href="mailto:sofelajoshua@gmail.com"
                   className="w-full py-4 bg-primary text-white rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-primary/20"
                 >
                   Hire Me Now
                 </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}