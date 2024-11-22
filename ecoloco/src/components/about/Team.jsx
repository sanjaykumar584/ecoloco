import React from 'react';

const team = [
  {
    name: "Sarah Chen",
    role: "Founder & Vision Guide",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "Every journey should leave the world better than we found it."
  },
  {
    name: "David Torres",
    role: "Sustainability Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    quote: "Sustainable travel is not just a choice, it's our future."
  },
  {
    name: "Emma Wilson",
    role: "Experience Curator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "Creating memories that honor both people and planet."
  }
];

export function Team() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Wanderers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate souls dedicated to crafting sustainable adventures that transform lives.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="aspect-w-3 aspect-h-4 mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent 
                              rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6 text-white">
                    <p className="text-lg italic">"{member.quote}"</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}