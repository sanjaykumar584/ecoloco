import { ReactNode } from 'react';

export interface PackageCategory {
  name: string;
  icon: ReactNode;
  description: string;
  image: string;
  featured: boolean;
}