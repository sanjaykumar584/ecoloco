import React, { useState } from 'react';
import { Plane, Calendar, Users, Clock, MapPin, Send, Palmtree } from 'lucide-react';
import axios from 'axios';

import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Enquiry() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [destination, setDestination] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [travelers, setTravelers] = useState('');
  const [budget, setBudget] = useState('');
  const [travelStyle, setTravelStyle] = useState('cultural');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      destination,
      departureDate,
      returnDate,
      travelers,
      budget,
      travelStyle,
      message,
    };
    console.log('Form submitted:', formData);
    
    try {
      const response = await axios.post('http://localhost:3000/enquiry', {
        data: formData,
      });
      console.log(response.data)
      navigate('/')
      alert("Response added! Will reach you in 24 hours")
    } catch (error) {
      console.log(error.message)
    }
  };

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-12 relative">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-2">Plan Your Dream Vacation</h2>
                <p className="text-blue-100">
                  Fill out the form below and our travel experts will get back to you within 24 hours
                </p>
              </div>
              <Palmtree className="absolute right-8 bottom-8 text-blue-400/20 w-24 h-24" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Travel Details */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination</label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Where do you want to go?"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                      <input
                        type="date"
                        value={departureDate}
                        onChange={(e) => {setDepartureDate(e.target.value)}}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                      <input
                        type="date"
                        value={returnDate}
                        onChange={(e) => setReturnDate(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
                <input
                  type="number"
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  required
                  min="1"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How many people?"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Budget per person</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="economy">$0 - $1,500</option>
                  <option value="moderate">$1,500 - $3,000</option>
                  <option value="luxury">$3,000 - $5,000</option>
                  <option value="ultra">$5,000+</option>
                </select>
              </div>

              {/* Travel Style */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Travel Style</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Luxury', 'Adventure', 'Cultural', 'Relaxation'].map((style) => (
                    <label
                      key={style}
                      className={`flex items-center justify-center px-4 py-2 border rounded-lg cursor-pointer transition-colors ${
                        travelStyle === style.toLowerCase()
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="radio"
                        value={style.toLowerCase()}
                        checked={travelStyle === style.toLowerCase()}
                        onChange={(e) => setTravelStyle(e.target.value)}
                        className="sr-only"
                      />
                      {style}
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about any special requirements or preferences..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Enquiry;
