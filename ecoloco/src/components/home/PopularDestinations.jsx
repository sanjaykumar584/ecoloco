import React from 'react';
import { Leaf } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Munnar',
    image: 'https://lp-cms-production.imgix.net/2019-06/GettyImages-560611321_full.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4',
    price: '21000-24000',
    ecoFeatures: ['Trekking','Tea Tour','Cycling'],
  },
  {
    id: 2,
    title: 'Gokarna',
    image: 'https://www.nativeplanet.com/img/2017/03/cover-17-1489724170.jpg',
    price: '22000-25000',
    ecoFeatures: ['Beach Hopping', 'Stargazing'],
  },
  {
    id: 3,
    title: 'Varanasi',
    image: 'https://th.bing.com/th/id/R.4e252c62cdb51d2a1856c3ff0cef4deb?rik=vXYnFUzQEsP3ZQ&riu=http%3a%2f%2fbrightlinetours.com%2fwp-content%2fuploads%2f2018%2f07%2fvara-2-ed.jpg&ehk=0fQW8pc%2bNxhcXRyBjjZ5IgVCysFYy6frf23Xrdnqw3U%3d&risl=&pid=ImgRaw&r=0',
    price: '15000-20000',
    ecoFeatures: ['Local craft', 'Boat ride'],
  },
];

export const PopularDestinations = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Eco-Friendly Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  From <span className="text-xl font-bold">₹{destination.price}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};