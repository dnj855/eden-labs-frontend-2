// types/global.d.ts
interface Window {
  Cal?: {
    ns?: {
      [key: string]: any;
    };
    loaded?: boolean;
    q?: any[];
    (action: string, ...args: any[]): void;
  };
}

export interface navigationItem {
  path: string;
  name: string;
}

export interface blogPost {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  published_date: string;
  image: string;
  tags: string[];
  path: string;
  body: {
    toc: {
      links: Array<{
        id: string;
        depth: number;
        text: string;
        children?: Array<{
          id: string;
          depth: number;
          text: string;
        }>;
      }>;
    };
  };
  featured?: boolean;
  date?: string;
  slug?: string;
}