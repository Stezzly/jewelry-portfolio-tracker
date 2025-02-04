import React from 'react';
import PriceInput from './PriceInput';
import { MarketPricesType } from '../../types/jewelery';

interface MarketPricesProps {
    prices: MarketPricesType;
    onUpdatePrice: (type: keyof MarketPricesType, value: number) => void;
}

const MarketPrices = ({ prices, onUpdatePrice }: MarketPricesProps) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Current Market Prices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PriceInput
                label="Gold"
                value={prices.gold}
                onChange={(value) => onUpdatePrice('gold', value)}
                unit="g"
            />
            <PriceInput
                label="Silver"
                value={prices.silver}
                onChange={(value) => onUpdatePrice('silver', value)}
                unit="g"
            />
            {Object.entries({ diamond: 'Diamond', ruby: 'Ruby', sapphire: 'Sapphire' })
                .map(([key, label]) => (
                    <div key={key}>
                        <PriceInput
                            label={label}
                            value={prices[key as keyof MarketPricesType]}
                            onChange={(value) => onUpdatePrice(key as keyof MarketPricesType, value)}
                            unit="ct"
                        />
                    </div>
                ))}
        </div>
    </div>
);

export default MarketPrices;