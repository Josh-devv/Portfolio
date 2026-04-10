import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
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
  const progressRef = useRef();

  useGSAP(() => {
    // Scroll progress bar
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        scrub: 0.1,
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
      }
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black text-zinc-500 antialiased selection:bg-white selection:text-black">
      {/* Editorial Progress Bar */}
      <div ref={progressRef} className="fixed top-0 left-0 right-0 h-[2px] bg-white z-[100] origin-left scale-x-0" />
      
      <CustomCursor />
      <Loader onComplete={() => setIsLoading(false)} />
      
      {/* Clean Background */}
      <div className="fixed inset-0 bg-black -z-50 pointer-events-none" />
      
      <div className={isLoading ? "opacity-0" : "opacity-1 transition-opacity duration-1000"}>
        <Navbar />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
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