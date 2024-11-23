import React from 'react';
import { Leaf, Compass, Mountain, Bike, TreePine, Tent, Recycle, Bird } from 'lucide-react';
import NavBar from './NavBar';
import Footer from './Footer';

export default function Services() {
  const services = [
    {
      icon: <Leaf className="w-8 h-8 text-green-500" />,
      title: "Sustainable Transportation",
      description: "Eco-friendly transport options including electric vehicles, bikes, and public transit recommendations."
    },
    {
      icon: <TreePine className="w-8 h-8 text-green-500" />,
      title: "Green Accommodations",
      description: "Certified eco-lodges, sustainable hotels, and carbon-neutral stays carefully selected for minimal environmental impact."
    },
    {
      icon: <Mountain className="w-8 h-8 text-green-500" />,
      title: "Nature Experiences",
      description: "Guided tours and activities that promote conservation and support local wildlife preservation efforts."
    },
    {
      icon: <Recycle className="w-8 h-8 text-green-500" />,
      title: "Zero-Waste Planning",
      description: "Comprehensive trip planning with focus on reducing waste and supporting sustainable practices."
    },
    {
      icon: <Bird className="w-8 h-8 text-green-500" />,
      title: "Wildlife Conservation",
      description: "Ethical wildlife viewing experiences that contribute to conservation and habitat protection."
    },
    {
      icon: <Tent className="w-8 h-8 text-green-500" />,
      title: "Eco-Adventure Tours",
      description: "Exciting outdoor experiences designed with environmental consciousness and minimal impact."
    },
    {
      icon: <Compass className="w-8 h-8 text-green-500" />,
      title: "Local Culture Immersion",
      description: "Authentic experiences supporting local communities and preserving cultural heritage."
    },
    {
      icon: <Bike className="w-8 h-8 text-green-500" />,
      title: "Active Eco-Tourism",
      description: "Human-powered adventures including hiking, biking, and kayaking in pristine natural settings."
    }
  ];

  return (<>
  <NavBar />
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-green-800 text-white py-24">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80")'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Eco-Friendly Travel Services</h1>
          <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
            Discover sustainable ways to explore the world while preserving its beauty for future generations
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
              <div className="px-6 pb-6">
                <button className="text-green-600 font-medium hover:text-green-700 transition-colors duration-300 flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Eco-Adventure?</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Join us in making travel a force for positive change. Let's explore the world responsibly together.
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-300">
            Plan Your Green Journey
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
