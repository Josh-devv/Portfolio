import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3
      });
    };

    const onMouseDown = () => {
      gsap.to(follower, {
        scale: 0.8,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        duration: 0.2
      });
    };

    const onMouseUp = () => {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: 'transparent',
        duration: 0.2
      });
    };

    const handleLinkHover = () => {
      const links = document.querySelectorAll('a, button, .interactive');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          gsap.to(follower, {
            scale: 2.5,
            backgroundColor: 'white',
            mixBlendMode: 'difference',
            borderWidth: 0,
            duration: 0.3
          });
          gsap.to(cursor, {
            scale: 0,
            duration: 0.2
          });
        });
        link.addEventListener('mouseleave', () => {
          gsap.to(follower, {
            scale: 1,
            backgroundColor: 'transparent',
            mixBlendMode: 'normal',
            borderWidth: 1,
            duration: 0.3
          });
          gsap.to(cursor, {
            scale: 1,
            duration: 0.2
          });
        });
      });
    };

    handleLinkHover();
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseenter', onMouseEnter);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseenter', onMouseEnter);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] opacity-0" 
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-[9998] opacity-0" 
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
}
