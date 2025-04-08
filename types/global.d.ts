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

interface navigationItem {
  path: string;
  name: string;
}