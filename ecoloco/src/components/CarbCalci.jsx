import React, { useState } from 'react';
import { Leaf, Car, Train, Plane, AlertCircle } from 'lucide-react';
import NavBar from './NavBar';
import Footer from './Footer';
const CarbCalci = () => {
  const [people, setPeople] = useState(1);
  const [distance, setDistance] = useState(100);
  const [result, setResult] = useState(null);

  const calculateEmissions = () => {
    const emissions = {
      car: 0.17,
      train: 0.041,
      plane: 0.255,
      electricCar: 0.053,
      bicycle: 0,
    };

    const normalEmission =
      distance *
      people *
      (0.4 * emissions.car + 0.3 * emissions.plane + 0.3 * emissions.train);

    const ecoEmission =
      distance *
      people *
      (0.6 * emissions.train +
        0.3 * emissions.electricCar +
        0.1 * emissions.bicycle);

    setResult({
      ecoTrip: Number(ecoEmission.toFixed(2)),
      normalTrip: Number(normalEmission.toFixed(2)),
      saved: Number((normalEmission - ecoEmission).toFixed(2)),
    });
  };

  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Leaf className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Carbon Emission Calculator
          </h1>
          <p className="text-gray-600">
            Compare your eco-friendly trip with a conventional journey
          </p>
        </header>

        <main>
          <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of People
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={people}
                    onChange={(e) =>
                      setPeople(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Distance (km)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={distance}
                    onChange={(e) =>
                      setDistance(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <button
                  type="button"
                  onClick={calculateEmissions}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200"
                >
                  Calculate Emissions
                </button>
              </form>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Transportation Mix</h3>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-2">Eco Trip</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Train className="h-4 w-4" /> <span>60% Train</span>
                      <Car className="h-4 w-4 ml-4" />{" "}
                      <span>30% Electric Car</span>
                      <Leaf className="h-4 w-4 ml-4" /> <span>10% Bicycle</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-medium text-gray-700 mb-2">Normal Trip</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Car className="h-4 w-4" /> <span>40% Car</span>
                      <Plane className="h-4 w-4 ml-4" /> <span>30% Plane</span>
                      <Train className="h-4 w-4 ml-4" /> <span>30% Train</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {result && (
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Leaf className="h-8 w-8 text-green-500 mx-auto mb-2" />,
                  title: "Eco Trip Emissions",
                  value: result.ecoTrip,
                  color: "text-green-600",
                },
                {
                  icon: <Car className="h-8 w-8 text-red-500 mx-auto mb-2" />,
                  title: "Normal Trip Emissions",
                  value: result.normalTrip,
                  color: "text-red-600",
                },
                {
                  icon: (
                    <AlertCircle className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  ),
                  title: "Carbon Saved",
                  value: result.saved,
                  color: "text-blue-600",
                },
              ].map(({ icon, title, value, color }, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg p-6 text-center"
                >
                  {icon}
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className={`text-3xl font-bold ${color}`}>{value}</p>
                  <p className="text-gray-600">kg CO₂</p>
                </div>
              ))}
            </section>
          )}
        </main>

        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>
            Note: Calculations are based on average emission factors and may vary
            based on specific vehicles and conditions.
          </p>
        </footer>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CarbCalci;
