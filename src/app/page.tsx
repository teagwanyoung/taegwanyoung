'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { motion } from 'framer-motion';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { About } from '@/components/sections/About';
import { Gallery } from '@/components/sections/Gallery';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      orientation: 'vertical',
      smoothWheel: true,
      touchInertiaMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Projects />
        <About />
        <Gallery />
        <Contact />
      </motion.div>
    </main>
  );
} 