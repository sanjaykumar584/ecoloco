import React from 'react';
import { Leaf, Recycle, TreePine, Wind, Bike, Train, Home, Footprints } from 'lucide-react';

const ecoFeatures = [
  { 
    icon: <Home className="w-5 h-5" />, 
    name: 'Eco Lodge Stay',
    description: 'Solar-powered accommodation with rainwater harvesting'
  },
  { 
    icon: <Train className="w-5 h-5" />, 
    name: 'Green Transport',
    description: 'Public transport and electric vehicle transfers'
  },
  { 
    icon: <Leaf className="w-5 h-5" />, 
    name: 'Local Produce',
    description: 'Farm-to-table meals supporting local communities'
  },
  { 
    icon: <Recycle className="w-5 h-5" />, 
    name: 'Zero Waste',
    description: 'Plastic-free initiatives and waste reduction'
  },
];

export default function PackageDesc() {
  return (
    <div className="min-h-screen bg-[#f4f7f4]">
      {/* Hero Section */}
      <div 
        className="h-[50vh] bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60">
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
            <div className="text-white max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <TreePine className="w-5 h-5" />
                <span className="text-sm font-medium bg-green-600/20 px-3 py-1 rounded-full backdrop-blur-sm">
                  Eco-Certified Experience
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-3">Costa Rica Sustainable Adventure</h1>
              <p className="text-lg opacity-90">Explore rainforests and support local conservation efforts in this carbon-neutral journey</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Carbon Footprint Banner */}
            <div className="bg-green-50 border border-green-100 rounded-xl p-6 flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Footprints className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <h3 className="font-semibold text-green-800">Carbon Footprint: 0.8 tonnes CO₂e</h3>
                <p className="text-sm text-green-700">60% lower than average tours - includes carbon offset contribution</p>
              </div>
            </div>

            {/* Eco Features */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Sustainable Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ecoFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-[#f4f7f4] rounded-lg">
                    <div className="bg-green-100 p-2 rounded-lg h-fit">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{feature.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-semibold mb-6">Eco-Adventure Itinerary</h2>
              <div className="space-y-6">
                {[
                  {
                    day: 'Day 1',
                    title: 'Arrival & Local Community',
                    activities: 'Welcome dinner at community-run restaurant, eco-lodge check-in'
                  },
                  {
                    day: 'Day 2',
                    title: 'Rainforest Conservation',
                    activities: 'Guided nature walk, tree planting activity, wildlife observation'
                  },
                  {
                    day: 'Day 3',
                    title: 'Sustainable Agriculture',
                    activities: 'Organic farm visit, traditional cooking class, local market tour'
                  }
                ].map((day, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-green-500">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500" />
                    <h3 className="font-semibold text-lg text-gray-800">{day.day}: {day.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm">{day.activities}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
              <div className="flex items-center gap-2 mb-6">
                <Wind className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-600">Carbon Offset Included</span>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-3xl font-bold">$1,499</span>
                <div className="text-right">
                  <span className="text-sm text-gray-500 block">per person</span>
                  <span className="text-xs text-green-600">10% to local conservation</span>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Travel Dates
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Eco-Conscious Travelers
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                  >
                    Book Eco-Adventure
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-4">
                  <Bike className="w-4 h-4" />
                  <span>Sustainable travel commitment required</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
