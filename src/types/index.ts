export interface Project {
  id: string;
  title: string;
  category: 'movie' | 'drama' | 'theater';
  thumbnail: string;
  year: number;
  role: string;
  description: string;
}

export interface Award {
  id: string;
  title: string;
  year: number;
  organization: string;
}

export interface SocialLink {
  platform: 'instagram' | 'youtube' | 'twitter';
  url: string;
} 