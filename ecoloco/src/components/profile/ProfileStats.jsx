import React from 'react';
import { Users, Calendar, Award, Bookmark } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Followers', value: '2.4k' },
  { icon: Calendar, label: 'Joined', value: 'Mar 2024' },
  { icon: Award, label: 'Projects', value: '34' },
  { icon: Bookmark, label: 'Saved', value: '128' },
];

export function ProfileStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {stats.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-2">
            <Icon className="w-5 h-5 text-indigo-500" />
            <span className="text-gray-600 text-sm">{label}</span>
          </div>
          <p className="text-xl font-bold mt-2 text-gray-800">{value}</p>
        </div>
      ))}
    </div>
  );
}