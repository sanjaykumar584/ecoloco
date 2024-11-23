import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative h-48">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full">
          {category.icon}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900">{category.name}</h3>
        <p className="mt-1 text-sm text-gray-600">{category.description}</p>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
          Explore Packages
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
