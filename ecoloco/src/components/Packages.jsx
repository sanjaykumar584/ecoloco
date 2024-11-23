import React from 'react';
import { 
  CompassIcon, 
  MountainIcon, 
  ChurchIcon, 
  WavesIcon, 
  SnowflakeIcon, 
  TreesIcon, 
  PalmtreeIcon 
} from 'lucide-react';
import NavBar from './Navbar';
import Footer from './Footer';

const categories = [
  {
    name: "Adventure",
    icon: <CompassIcon className="w-6 h-6" />,
    description: "Thrilling experiences for the daring soul",
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    name: "Religious",
    icon: <ChurchIcon className="w-6 h-6" />,
    description: "Spiritual journeys to sacred destinations",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    name: "Hill Station",
    icon: <MountainIcon className="w-6 h-6" />,
    description: "Serene escapes in mountain retreats",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    name: "Coastal",
    icon: <WavesIcon className="w-6 h-6" />,
    description: "Beautiful beaches and coastal getaways",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    name: "Snow",
    icon: <SnowflakeIcon className="w-6 h-6" />,
    description: "Winter wonderlands and snow adventures",
    image: "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80",
    featured: true
  },
  {
    name: "Forest",
    icon: <TreesIcon className="w-6 h-6" />,
    description: "Immersive forest and wildlife experiences",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80",
    featured: false
  },
  {
    name: "Islands",
    icon: <PalmtreeIcon className="w-6 h-6" />,
    description: "Tropical paradise destinations",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&q=80",
    featured: false
  }
];

function Packages() {
  return (
    <>
    <NavBar />
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Discover Your Next Adventure
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Explore our curated collection of travel experiences
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Featured Categories */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.filter(cat => cat.featured).map((category) => (
              <div 
                key={category.name}
                className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 z-10" />
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="object-cover w-full h-[400px] transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                  <p className="mt-2 text-lg text-white/90">{category.description}</p>
                  <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-lg transition-colors duration-300">
                    Explore Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Categories */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div 
                key={category.name}
                className="group bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className="relative h-48">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-700">
                    {category.icon}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-gray-900">{category.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{category.description}</p>
                  <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                    View Packages
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
    
    <Footer />
    </>
  );
}

export default Packages;
