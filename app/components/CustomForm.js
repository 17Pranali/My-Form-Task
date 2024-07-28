// app/components/CustomForm.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const CustomForm = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg max-w-lg mx-auto relative">
      <button className="absolute top-2 right-2 text-white">
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <h2 className="text-white text-xl mb-4">Customize Filter</h2>
      
      <div className="mb-4">
        <label className="text-gray-400 block mb-2">Pair age:</label>
        <div className="flex space-x-2">
          <input type="text" placeholder="Min" className="flex-1 p-2 bg-gray-800 text-white rounded" />
          <span className="flex items-center text-gray-500">hours</span>
          <input type="text" placeholder="Max" className="flex-1 p-2 bg-gray-800 text-white rounded" />
          <span className="flex items-center text-gray-500">hours</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-gray-400 block mb-2">Invested:</label>
        <div className="flex space-x-2">
          <input type="text" placeholder="Min" className="flex-1 p-2 bg-gray-800 text-white rounded" />
          <input type="text" placeholder="Max" className="flex-1 p-2 bg-gray-800 text-white rounded" />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-gray-400 block mb-2">ROI:</label>
        <div className="flex space-x-2">
          <input type="text" placeholder="Min" className="flex-1 p-2 bg-gray-800 text-white rounded" />
          <span className="flex items-center text-gray-500">%</span>
          <input type="text" placeholder="Max" className="flex-1 p-2 bg-gray-800 text-white rounded" />
          <span className="flex items-center text-gray-500">%</span>
        </div>
      </div>

      <div className="mb-4">
        <label className="text-gray-400 block mb-2">24 Hours change:</label>
        <div className="flex space-x-2">
          <input type="text" placeholder="Min" className="flex-1 p-2 bg-gray-800 text-white rounded" />
          <span className="flex items-center text-gray-500">%</span>
          <input type="text" placeholder="Max" className="flex-1 p-2 bg-gray-800 text-white rounded" />
          <span className="flex items-center text-gray-500">%</span>
        </div>
      </div>

      <div className="flex justify-center space-x-4">
        <button className="bg-gray-700 text-white px-4 py-2 rounded">Reset</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Botly</button>
      </div>
    </div>
  );
};

export default CustomForm;
