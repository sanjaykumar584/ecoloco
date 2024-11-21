import React from 'react';
import { GitCommit, Star, FileEdit } from 'lucide-react';

const activities = [
  {
    icon: GitCommit,
    title: 'Pushed to main branch',
    project: 'weather-app',
    time: '2h ago',
  },
  {
    icon: Star,
    title: 'Starred repository',
    project: 'react-components',
    time: '4h ago',
  },
  {
    icon: FileEdit,
    title: 'Updated documentation',
    project: 'api-docs',
    time: '6h ago',
  },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map(({ icon: Icon, title, project, time }) => (
          <div key={title} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Icon className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{title}</p>
              <p className="text-sm text-gray-500">{project}</p>
            </div>
            <span className="text-xs text-gray-400">{time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}