import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './Structure/Navbar';
import Footer from './Structure/Footer';
import CustomCursor from './Structure/CustomCursor';
import Loader from './Structure/Loader';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RootLayout() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-zinc-300 antialiased selection:bg-primary selection:text-white">
      <CustomCursor />
      <Loader onComplete={() => setIsLoading(false)} />
      
      {/* Mesh Gradient Background Layer */}
      <div className="fixed inset-0 bg-gradient-mesh -z-50 pointer-events-none" />
      
      {/* Decorative Orbs */}
      <div className="fixed top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[160px] animate-pulse-slow pointer-events-none" />
      <div className="fixed bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-secondary/15 rounded-full blur-[160px] animate-float pointer-events-none" />

      <div className={isLoading ? "opacity-0" : "opacity-1 transition-opacity duration-1000"}>
        <Navbar />

        <main className="flex-1 mt-16 md:mt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', duration: 0.6, bounce: 0.2 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      </div>
    </div>
  );
}