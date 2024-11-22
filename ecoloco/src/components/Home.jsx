import React from 'react';
import Navbar from './Navbar';
import { SearchBar } from './home/SearchBar';
import { PopularDestinations } from './home/PopularDestinations';
import { Leaf, Recycle, TreePine, Wind } from 'lucide-react';
import Footer from './Footer';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80"
            alt="Sustainable Travel Background"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-48">
          <div className="text-center">
            <span className="inline-flex items-center bg-green-600/90 text-white px-4 py-2 rounded-full mb-6">
              <Leaf className="w-5 h-5 mr-2" />
              Sustainable Travel for a Better Tomorrow
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Explore the World,<br />Preserve Its Beauty
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover eco-friendly destinations and sustainable travel experiences
            </p>
          </div>
        </div>

        <SearchBar />
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Carbon Neutral</h3>
              <p className="text-gray-600">All trips offset carbon emissions</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Recycle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Zero Waste</h3>
              <p className="text-gray-600">Sustainable practices throughout</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <TreePine className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Impact</h3>
              <p className="text-gray-600">Support local communities</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 p-3 rounded-full mb-4">
                <Wind className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Clean Energy</h3>
              <p className="text-gray-600">Renewable energy partners</p>
            </div>
          </div>
        </div>
      </section>

      <PopularDestinations />
      
      {/* Newsletter Section */}
      <section className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Eco Community
            </h2>
            <p className="text-white/90 mb-8">
              Get sustainable travel tips and exclusive eco-friendly deals
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer/>

    </div>
  );
};

export default Home;