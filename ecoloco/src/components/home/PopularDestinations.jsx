import React from 'react';
import { Leaf } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Costa Rica Eco Lodge',
    image: 'https://images.unsplash.com/photo-1596392301391-e8622b210bd4?auto=format&fit=crop&w=800&q=80',
    price: '899',
    ecoFeatures: ['Solar Powered', 'Zero Waste'],
  },
  {
    id: 2,
    title: 'Norwegian Fjords',
    image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?auto=format&fit=crop&w=800&q=80',
    price: '1,299',
    ecoFeatures: ['Green Transport', 'Local Food'],
  },
  {
    id: 3,
    title: 'New Zealand Trek',
    image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=800&q=80',
    price: '1,499',
    ecoFeatures: ['Conservation Area', 'Guided Hikes'],
  },
];

export const PopularDestinations = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Eco-Friendly Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={destination.image}
              alt={destination.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{destination.title}</h3>
                <div className="flex gap-2 mb-2">
                  {destination.ecoFeatures.map((feature, index) => (
                    <span key={index} className="inline-flex items-center bg-green-600/90 text-white text-xs px-2 py-1 rounded">
                      <Leaf className="w-3 h-3 mr-1" />
                      {feature}
                    </span>
                  ))}
                </div>
                <p className="text-white">
                  From <span className="text-xl font-bold">${destination.price}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};