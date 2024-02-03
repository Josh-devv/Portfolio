import { useEffect } from 'react';

export default function useFadeUpEffect(elementRef) {
  useEffect(() => {
    const fadeUp = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;
      entry.target.classList.remove('translate-y-[100px]');
      entry.target.classList.remove('opacity-5');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(fadeUp, {
      root: null,
      threshold: 0,
    });

    sectionObserver.observe(elementRef.current);
  }, [elementRef]);
}