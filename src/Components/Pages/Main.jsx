import { useRef } from 'react';
import Hero from '../Structure/Hero';
import fadeUp from '../Hooks/fadeUp'

export default function Main() {
  const element = useRef(null);
  fadeUp(element);

  return (
    <section ref={element} className="fade  translate-y-[100px] opacity-5">
      <Hero />

     
    </section>
  );
}