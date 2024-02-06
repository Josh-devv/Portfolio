import { useRef } from 'react';
import CV from '../Pages/Workresume.pdf'
import useFadeUpEffect from '../Hooks/fadeUp';

export default function Resume() {
  const element = useRef(null);
  useFadeUpEffect(element);

  return (
    <section ref={element} className="fade translate-y-[100px] opacity-5">
        <embed src={CV} type="application/pdf" className="max-w-7xl mx-auto px-8 xl:px-0 h-[450px] xl:h-screen w-full" />

    </section>
  );
}