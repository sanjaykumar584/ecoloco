import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const trips = [
  {
    destination: 'Kyoto, Japan',
    dates: 'Apr 15 - Apr 28',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
  },
  {
    destination: 'Santorini, Greece',
    dates: 'Jun 3 - Jun 10',
    image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=600&q=80',
  },
];

export function UpcomingTrips() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Trips</h2>
      <div className="space-y-4">
        {trips.map(({ destination, dates, image }) => (
          <div key={destination} className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <img
              src={image}
              alt={destination}
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-teal-500" />
                <h3 className="font-medium text-gray-900">{destination}</h3>
              </div>
              <div className="flex items-center space-x-2 mt-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span>{dates}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}