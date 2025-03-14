import React from 'react';
import { Store } from 'lucide-react';
import type { Marketplace } from '../types';

interface MarketplaceSelectProps {
  value: Marketplace;
  onChange: (marketplace: Marketplace) => void;
  disabled?: boolean;
}

export function MarketplaceSelect({ value, onChange, disabled }: MarketplaceSelectProps) {
  const marketplaces: Marketplace[] = ['Swish', 'Talabat', 'Zepto', 'Bistro'];

  return (
    <div className="flex items-center space-x-3">
      <Store className="h-5 w-5 text-gray-500" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as Marketplace)}
        disabled={disabled}
        className={`
          block w-full rounded-md border-gray-300 shadow-sm
          focus:border-blue-500 focus:ring-blue-500
          bg-white px-4 py-2 text-gray-900
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {marketplaces.map((marketplace) => (
          <option key={marketplace} value={marketplace}>
            {marketplace}
          </option>
        ))}
      </select>
    </div>
  );
}