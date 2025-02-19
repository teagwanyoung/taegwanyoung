'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-white/80 mb-8">
              새로운 프로젝트나 협업 제안을 기다립니다.
              언제든 연락주세요.
            </p>
            <div className="space-y-4">
              <p className="text-white/80">
                <span className="font-bold text-white">Email:</span> tku0505@naver.com
              </p>
              <p className="text-white/80">
                <span className="font-bold text-white">Phone:</span> 010-2698-1632
              </p>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white mb-2">이름</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2">이메일</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2">메시지</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-lg focus:outline-none focus:border-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}; 