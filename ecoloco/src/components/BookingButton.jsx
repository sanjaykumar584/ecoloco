import React from 'react';
import { CalendarCheck, ArrowRight } from 'lucide-react';

export function BookingButton({ onClick, disabled, total }) {
  return (
    <div className="text-center">
      <div className="mb-4">
        {!disabled && (
          <p className="text-lg font-semibold text-gray-700">
            Total: <span className="text-blue-600">${total}</span>
          </p>
        )}
      </div>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`
          inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold
          transition-all duration-300
          ${
            !disabled
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }
        `}
      >
        <CalendarCheck className="w-5 h-5" />
        Confirm Booking
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
}
