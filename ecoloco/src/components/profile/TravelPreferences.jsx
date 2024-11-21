import React from 'react';
import { Utensils, Coffee, Tent, Camera, Music, Mountain } from 'lucide-react';

const preferences = [
  { icon: Mountain, label: 'Adventure Travel', level: 90 },
  { icon: Camera, label: 'Photography', level: 85 },
  { icon: Utensils, label: 'Food Tourism', level: 75 },
  { icon: Music, label: 'Cultural Events', level: 70 },
  { icon: Tent, label: 'Outdoor Activities', level: 65 },
  { icon: Coffee, label: 'Local Experiences', level: 80 },
];

export function TravelPreferences() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Travel Preferences</h2>
      <div className="space-y-4">
        {preferences.map(({ icon: Icon, label, level }) => (
          <div key={label} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon className="w-4 h-4 text-teal-500" />
                <span className="text-sm text-gray-700">{label}</span>
              </div>
              <span className="text-sm text-gray-500">{level}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-teal-500 to-teal-400 transition-all duration-500"
                style={{ width: `${level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}