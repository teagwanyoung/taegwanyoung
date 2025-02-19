'use client';

import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { resources } from '@/data/resources';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    tl.to(videoRef.current, {
      scale: 1.2,
      duration: 1,
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      id="hero"
      role="banner"
      aria-label="메인 소개"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      style={{ opacity }}
    >
      {/* 배경 비디오 컨테이너 */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="relative w-full h-full"
          style={{ scale }}
        >
          <motion.video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover md:object-center object-[center_center]"
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%'
            }}
          >
            <source src={resources.hero.video} type="video/mp4" />
          </motion.video>
        </motion.div>
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="fixed bottom-0 inset-x-0 z-20 pb-8">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <span className="text-sm text-white/60 mb-2">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/20 rounded-full p-1 mx-auto"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* 소셜 링크 */}
      <motion.div 
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.a
          href={resources.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="sr-only">Instagram</span>
          <i className="fab fa-instagram text-2xl" />
        </motion.a>
      </motion.div>
    </motion.section>
  );
}; 