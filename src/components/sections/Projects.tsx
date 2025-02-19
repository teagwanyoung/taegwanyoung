'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components/ProjectCard';
import { resources } from '@/data/resources';
import { useState } from 'react';

export const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // 카테고리별로 프로젝트 분류
  const categories = {
    방송: resources.projects.filter(p => p.category === "방송"),
    영화: resources.projects.filter(p => p.category === "영화"),
    웹드라마: resources.projects.filter(p => p.category === "웹드라마"),
    광고: resources.projects.filter(p => p.category === "광고"),
  };

  const handleProjectClick = (videoUrl?: string) => {
    if (videoUrl) {
      // YouTube URL에서 비디오 ID 추출
      const videoId = videoUrl.split('v=')[1];
      if (videoId) {
        setSelectedVideo(videoId);
      }
    }
  };

  return (
    <section 
      id="projects"
      role="region"
      aria-label="포트폴리오 작품"
      className="py-20 bg-background"
    >
      {/* 비디오 모달 */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-4xl aspect-video">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white hover:text-red-500 transition-colors"
            >
              닫기 ✕
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
        </motion.div>

        {/* 카테고리별 섹션 */}
        {Object.entries(categories).map(([category, projects]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="relative mb-8">
              <h3 className="text-3xl font-bold inline-block relative">
                {category}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></div>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  onClick={() => handleProjectClick(project.videoUrl)}
                  className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                >
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};