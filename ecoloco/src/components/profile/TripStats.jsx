import React from 'react';
import { Plane, Map, Globe2, Compass } from 'lucide-react';

const stats = [
  { icon: Plane, label: 'Trips Taken', value: '24' },
  { icon: Map, label: 'Countries', value: '15' },
  { icon: Globe2, label: 'Miles', value: '47.2k' },
  { icon: Compass, label: 'Wishlist', value: '8' },
];

export function TripStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-2">
            <Icon className="w-5 h-5 text-teal-500" />
            <span className="text-gray-600 text-sm">{label}</span>
          </div>
          <p className="text-xl font-bold mt-2 text-gray-800">{value}</p>
        </div>
      ))}
    </div>
  );
}