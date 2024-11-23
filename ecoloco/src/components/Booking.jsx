import React, { useState } from 'react';
import { Building2, Car } from 'lucide-react';
import { SelectField } from './SelectField';
import { BookingButton } from './BookingButton';
import { stays, transport } from './data/bookingData';

function Booking() {
    const [selectedStay, setSelectedStay] = useState(null);
    const [selectedTransport, setSelectedTransport] = useState(null);

  const handleBooking = () => {
    if (!selectedStay || !selectedTransport) {
      alert("Please select both stay and transport options");
      return;
    }
    
    const stay = stays.find(s => s.id === selectedStay);
    const transport = transport.find(t => t.id === selectedTransport);
    const total = (stay?.price || 0) + (transport?.price || 0);
    
    alert(`Booking confirmed!\nTotal: $${total}`);
  };

  const calculateTotal = () => {
    const stay = stays.find(s => s.id === selectedStay);
    const transportOption = transport.find(t => t.id === selectedTransport);
    return (stay?.price || 0) + (transportOption?.price || 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Perfect Getaway</h1>
          <p className="text-lg text-gray-600">Select your accommodation and transportation</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <SelectField
            label="Select Your Stay"
            icon={Building2}
            value={selectedStay}
            onChange={setSelectedStay}
            options={stays}
          />

          <SelectField
            label="Choose Transportation"
            icon={Car}
            value={selectedTransport}
            onChange={setSelectedTransport}
            options={transport}
          />

          <BookingButton
            onClick={handleBooking}
            disabled={!selectedStay || !selectedTransport}
            total={calculateTotal()}
          />
        </div>
      </div>
    </div>
  );
}

export default Booking;