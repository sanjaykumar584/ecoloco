import React from 'react';
import { Leaf, Globe, Heart, TreePine, Mountain, Users } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: "Eco-Conscious Travel",
    description: "Every journey is crafted with environmental protection at its core."
  },
  {
    icon: Globe,
    title: "Cultural Preservation",
    description: "Supporting and celebrating local communities and their heritage."
  },
  {
    icon: Heart,
    title: "Mindful Exploration",
    description: "Creating positive impact through thoughtful travel choices."
  },
  {
    icon: TreePine,
    title: "Carbon Neutral",
    description: "Leading the way in sustainable tourism practices."
  },
  {
    icon: Mountain,
    title: "Hidden Gems",
    description: "Uncovering secret spots while preserving their natural beauty."
  },
  {
    icon: Users,
    title: "Local Connection",
    description: "Fostering meaningful interactions with local communities."
  }
];

export function Mission() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To pioneer a new era of travel where adventure meets responsibility, 
            ensuring that every journey contributes to the preservation of our planet's 
            natural wonders and cultural heritage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm 
                         hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-green-50 group-hover:bg-green-100 transition-colors">
                  <value.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}