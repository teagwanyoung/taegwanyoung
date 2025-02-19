'use client';

import { useRef, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, Float, Text, PerspectiveCamera } from '@react-three/drei';
import { resources } from '@/data/resources';

function FloatingText() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.4}
      floatIntensity={0.4}
    >
      <Text
        font="/fonts/Pretendard-Bold.woff"
        fontSize={1.8}
        color="white"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.05}
      >
        태관영
      </Text>
    </Float>
  );
}

function AnimatedSphere() {
  return (
    <mesh>
      <sphereGeometry args={[1.2, 84, 84]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={0.85}
        roughness={0.15}
        envMapIntensity={1.2}
      />
    </mesh>
  );
}

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const profileItems = [
    { label: '이름', value: '태관영' },
    { label: '생년월일', value: '1996년 05월 05일' },
    { label: '출신학교', value: '서울예술대학교 연기전공' },
    { label: '신장 / 몸무게', value: '183cm / 74kg' },
  ];

  return (
    <section 
      id="about" 
      role="region"
      aria-label="프로필 정보"
      className="min-h-screen py-24 bg-gradient-to-b from-background to-background-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40">
        <Canvas>
          <Suspense fallback={null}>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <Environment preset="studio" />
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1.2} />
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-20 h-1 bg-accent"
              />
            </div>

            <div className="space-y-6">
              {profileItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col space-y-2"
                >
                  <span className="text-sm text-text-secondary font-medium">{item.label}</span>
                  <span className="text-xl text-white">{item.value}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-accent/50 transition-all duration-300">
                <p className="text-4xl font-bold text-accent">
                  {resources.profile.experience}
                </p>
                <p className="text-sm text-text-secondary mt-2">Years Experience</p>
              </div>
              <div className="p-8 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-accent/50 transition-all duration-300">
                <p className="text-4xl font-bold text-accent">
                  {resources.profile.projects}
                </p>
                <p className="text-sm text-text-secondary mt-2">Projects</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:opacity-75 transition-opacity duration-300" />
            <div className="absolute inset-0">
              <Canvas>
                <Suspense fallback={null}>
                  <Environment preset="studio" />
                  <FloatingText />
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[5, 5, 5]} intensity={1.2} />
                </Suspense>
              </Canvas>
            </div>
            <img
              src={resources.profile.image}
              alt={resources.profile.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 