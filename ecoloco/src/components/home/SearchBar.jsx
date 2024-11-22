import React from 'react';
import { Search, Calendar, Users, Bike } from 'lucide-react';

export const SearchBar = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 md:p-6 w-full max-w-4xl mx-auto -mt-8 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Eco destination"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="When?"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        
        <div className="relative">
          <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
            <option>2 Travelers</option>
            <option>1 Traveler</option>
            <option>3 Travelers</option>
            <option>4+ Travelers</option>
          </select>
        </div>

        <div className="relative">
          <Bike className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 appearance-none bg-white">
            <option>Eco Transport</option>
            <option>Train Travel</option>
            <option>Bike Tours</option>
            <option>Walking Tours</option>
          </select>
        </div>
      </div>
      
      <button className="w-full md:w-auto mt-4 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
        Find Eco Adventures
      </button>
    </div>
  );
};