'use client';

import { useState } from 'react';

const Calculator = () => {
  const [homePrice, setHomePrice] = useState(1650000);
  const COMMISSION_RATE = 0.025; // 2.5%

  const calculateCashback = (price: number): number => {
    const commission = price * COMMISSION_RATE; // 2.5% typical commission
    return commission * 0.5; // 50% of the commission as cashback
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency: 'CAD',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="price-range" className="block text-sm font-medium text-gray-700 mb-2">
            Home price: {formatCurrency(homePrice)}
          </label>
          <input
            type="range"
            id="price-range"
            min="500000"
            max="3000000"
            step="10000"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>{formatCurrency(500000)}</span>
            <span>{formatCurrency(3000000)}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900">Traditional Broker</h4>
            <p className="text-sm text-gray-500 mb-4">2.5% Commission</p>
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(homePrice * COMMISSION_RATE)}
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-blue-900">Your Savings</h4>
            <p className="text-sm text-blue-500 mb-4">With Home Buyer Savings</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatCurrency(calculateCashback(homePrice))}
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Breakdown</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Standard Commission:</span>
              <span className="font-medium">{formatCurrency(homePrice * COMMISSION_RATE)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="text-gray-900 font-medium">Your Cashback:</span>
              <span className="text-blue-600 font-bold">
                {formatCurrency(calculateCashback(homePrice))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator; 