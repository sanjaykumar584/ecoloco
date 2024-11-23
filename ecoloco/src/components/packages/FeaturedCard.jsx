import React from 'react';

const FeaturedCard = ({ category }) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:-translate-y-2">
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10" />
      <img 
        src={category.image} 
        alt={category.name}
        className="object-cover w-full h-80 transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
            {category.icon}
          </div>
          <h3 className="text-2xl font-bold text-white">{category.name}</h3>
        </div>
        <p className="mt-2 text-white/90">{category.description}</p>
      </div>
    </div>
  );
};

export default FeaturedCard;
