'use client';

import { motion } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl?: string;
  year: number;
  role: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg bg-background-secondary"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-lg font-bold mb-1">{project.title}</h4>
        <p className="text-sm text-gray-300">{project.role} ({project.year})</p>
        {project.videoUrl && (
          <div className="mt-2 text-sm text-red-400">
            클릭하여 영상 보기
          </div>
        )}
      </div>
    </motion.div>
  );
}; 