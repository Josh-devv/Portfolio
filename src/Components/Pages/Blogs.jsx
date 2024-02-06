import { useEffect, useRef } from 'react';
import useFadeUpEffect from '../Hooks/fadeUp';

export default function Blogs() {
  const element = useRef(null);
  useFadeUpEffect(element);

  useEffect(() => {
    document.title = 'Blogs | Sofela Joshua';

    return () => {
      document.title = 'Sofela Joshua | Frontend Developer';
    };
  }, []);

  return (
    <section ref={element} className="fade translate-y-[100px] pt-10 h-[80vh] opacity-5">
      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Blogs</h2>

        <p className="italic">Nothing Yet!</p>
      </div>
    </section>
  );
}