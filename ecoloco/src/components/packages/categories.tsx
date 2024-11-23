import React from 'react';
import { 
  CompassIcon, 
  MountainIcon, 
  ChurchIcon, 
  WavesIcon, 
  SnowflakeIcon, 
  TreesIcon, 
  PalmtreeIcon 
} from 'lucide-react';
import { PackageCategory } from '../types';

export const categories: PackageCategory[] = [
  {
    name: "Adventure",
    icon: <CompassIcon className="w-6 h-6" />,
    description: "Thrilling experiences for the daring soul",
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    name: "Religious",
    icon: <ChurchIcon className="w-6 h-6" />,
    description: "Spiritual journeys to sacred destinations",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    name: "Hill Station",
    icon: <MountainIcon className="w-6 h-6" />,
    description: "Serene escapes in mountain retreats",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    name: "Coastal",
    icon: <WavesIcon className="w-6 h-6" />,
    description: "Beautiful beaches and coastal getaways",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    name: "Snow",
    icon: <SnowflakeIcon className="w-6 h-6" />,
    description: "Winter wonderlands and snow adventures",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    name: "Forest",
    icon: <TreesIcon className="w-6 h-6" />,
    description: "Immersive forest and wildlife experiences",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    name: "Islands",
    icon: <PalmtreeIcon className="w-6 h-6" />,
    description: "Tropical paradise destinations",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80",
    featured: false
  }
];