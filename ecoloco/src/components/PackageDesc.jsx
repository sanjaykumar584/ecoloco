import React from 'react';
import { Calendar, Users, MapPin, Clock, Plane, Hotel, Utensils, Car } from 'lucide-react';

const amenities = [
  { icon: <Plane className="w-5 h-5" />, name: 'Round-trip flights' },
  { icon: <Hotel className="w-5 h-5" />, name: '4-star accommodation' },
  { icon: <Utensils className="w-5 h-5" />, name: 'All meals included' },
  { icon: <Car className="w-5 h-5" />, name: 'Airport transfers' },
];

export default function PackageDesc() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2068&auto=format&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40">
          <div className="container mx-auto px-4 h-full flex items-end pb-8">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-2">Bali Paradise Escape</h1>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Bali, Indonesia
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  7 Days
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Package Overview</h2>
              <p className="text-gray-600 mb-6">
                Experience the magic of Bali with our carefully curated 7-day package. 
                Immerse yourself in the island's rich culture, pristine beaches, and 
                stunning landscapes while enjoying premium accommodations and services.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                    {amenity.icon}
                    <span className="text-sm font-medium">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-4">Itinerary Highlights</h2>
              <div className="space-y-4">
                {['Day 1', 'Day 2', 'Day 3'].map((day, index) => (
                  <div key={index} className="border-l-2 border-blue-500 pl-4 ml-2">
                    <h3 className="font-semibold text-lg">{day}</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {index === 0 && 'Arrival & Welcome Dinner'}
                      {index === 1 && 'Ubud Cultural Tour & Rice Terraces'}
                      {index === 2 && 'Beach Hopping & Sunset Cruise'}
                    </p>
                  </div>
                ))}
                <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                  View full itinerary →
                </button>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold">$1,299</span>
                <span className="text-sm text-gray-500">per person</span>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Travel Dates
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Calendar className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Travelers
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                      {[1, 2, 3, 4, 5].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                      ))}
                    </select>
                    <Users className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Book Now
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Free cancellation up to 48 hours before the trip
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
