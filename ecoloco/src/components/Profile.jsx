import React from 'react';
import { MapPin, Globe, Instagram, Twitter, Link as LinkIcon } from 'lucide-react';
import { TripStats } from './profile/TripStats';
import { UpcomingTrips } from './profile/UpcomingTrips';
import { TravelPreferences } from './profile/TravelPreferences';

function Profile() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="relative mb-8">
          <div className="h-48 bg-gradient-to-r from-teal-500 to-emerald-400 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80"
              alt="Cover"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="absolute -bottom-16 left-8 flex items-end space-x-6">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-xl border-4 border-white shadow-lg object-cover"
            />
            <div className="pb-4">
              <h1 className="text-2xl font-bold text-white">Sarah Walker</h1>
              <p className="text-teal-50">Travel Photographer & Blogger</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Based in Tokyo, Japan</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Globe className="w-4 h-4" />
                  <a href="#" className="text-teal-600 hover:underline">wanderlust.blog</a>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <a href="#" className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 text-gray-600 hover:text-teal-600 transition-colors">
                  <LinkIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Travel Style</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  'Solo Travel',
                  'Photography',
                  'Backpacking',
                  'Cultural',
                  'Adventure',
                  'Food',
                  'Nature',
                  'Urban',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <TravelPreferences />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            <TripStats />
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-4">About</h2>
              <p className="text-gray-600 leading-relaxed">
                Full-time traveler and storyteller, capturing the world through my lens.
                Specializing in adventure photography and cultural documentation. Featured in
                National Geographic and BBC Travel. Leading photography workshops around the globe
                and sharing travel tips through my blog.
              </p>
            </div>
            <UpcomingTrips />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile