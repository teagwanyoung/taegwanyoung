'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { resources } from '@/data/resources';
import { FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="contact"
      role="region"
      aria-label="연락처"
      className="py-32 bg-gradient-to-b from-black to-background"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold"
            >
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '100px' } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            새로운 프로젝트나 협업 제안을 기다립니다.
            인스타그램 DM으로 편하게 연락주세요.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="flex flex-col items-center space-y-4">
              <a
                href={resources.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center"
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-700 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200" />
                <div className="relative flex items-center justify-center bg-black rounded-full p-6">
                  <FaInstagram className="w-12 h-12 text-white group-hover:scale-110 transition duration-200" />
                </div>
              </a>
              <span className="text-gray-400">@taegwanyoung</span>
            </div>

            <div className="space-y-2 text-center">
              <p className="text-gray-300">
                <span className="font-medium text-white">Email:</span> tku0505@naver.com
              </p>
              <p className="text-gray-300">
                <span className="font-medium text-white">Phone:</span> 010-2698-1632
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 