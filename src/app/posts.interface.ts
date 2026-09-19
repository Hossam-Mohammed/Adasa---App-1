import type { Auther } from './auther.interface.js';
import type { Categories } from './categories.interface.js';

export interface Posts {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: Auther;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}
