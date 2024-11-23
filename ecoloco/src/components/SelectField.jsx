import React from 'react';

export function SelectField({ label, icon: Icon, value, onChange, options }) {
  const selectedOption = options.find(opt => opt.id === value);

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-6 h-6 text-blue-600" />
        <label className="text-xl font-semibold text-gray-900">{label}</label>
      </div>
      <div className="relative">
        <select
          value={value || ''}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full p-4 bg-white border border-gray-300 rounded-lg shadow-sm appearance-none cursor-pointer
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select {label}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name} - ${option.price}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {selectedOption && (
        <div className="mt-2 p-4 bg-blue-50 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">{selectedOption.description}</span>
            <span className="text-lg font-bold text-blue-600">${selectedOption.price}</span>
          </div>
        </div>
      )}
    </div>
  );
}
