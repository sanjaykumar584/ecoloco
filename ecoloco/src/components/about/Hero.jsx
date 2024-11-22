import React from 'react';
import { Compass } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e"
          alt="Majestic mountain landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <Compass className="w-16 h-16 text-green-400" />
        </div>
        <h1 className="text-6xl font-bold mb-6 tracking-tight">
          Wanderlust
          <span className="block text-green-400">Eco Adventures</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
          Crafting sustainable journeys that leave footprints in hearts, not on Earth.
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}