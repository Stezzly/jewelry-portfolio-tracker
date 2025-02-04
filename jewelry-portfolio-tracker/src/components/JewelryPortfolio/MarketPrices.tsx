import React, { useState } from 'react';
import PriceInput from './PriceInput';
import { MarketPricesType } from '../../types/jewelery';

interface MarketPricesProps {
    prices: MarketPricesType;
    onUpdatePrice: (type: keyof MarketPricesType, value: number) => void;
}

const MarketPrices = ({ prices, onUpdatePrice }: MarketPricesProps) => {
    // State to manage the selected metal and gem
    const [selectedMetal, setSelectedMetal] = useState<keyof MarketPricesType>('gold');
    const [selectedGem, setSelectedGem] = useState<keyof MarketPricesType>('diamond');

    const metals = [
        { label: 'Gold', value: 'gold' },
        { label: 'Silver', value: 'silver' }
    ];

    const gems = [
        { label: 'Diamond', value: 'diamond' },
        { label: 'Ruby', value: 'ruby' },
        { label: 'Sapphire', value: 'sapphire' }
    ];

    const handleSelectMetal = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMetal(e.target.value as keyof MarketPricesType);
    };

    const handleSelectGem = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGem(e.target.value as keyof MarketPricesType);
    };

    return (
        <div className="rounded-lg shadow-md bg-white p-6">
            <h2 className="text-xl font-semibold mb-4">Current Market Prices</h2>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="w-full">
                    <label className="block mb-2 text-gray-700">Select Metal:</label>
                    <select
                        value={selectedMetal}
                        onChange={handleSelectMetal}
                        className="block w-full p-2 rounded-lg border border-gray-300 hover:border-gray-500 focus:ring-0 focus:outline-none focus:border-indigo-500"
                    >
                        {metals.map((metal) => (
                            <option key={metal.value} value={metal.value}>
                                {metal.label}
                            </option>
                        ))}
                    </select>
                    <div className="mt-2">
                        <PriceInput
                            label={`${selectedMetal.charAt(0).toUpperCase() + selectedMetal.slice(1)} Price`}
                            value={prices[selectedMetal]}
                            onChange={(value) => onUpdatePrice(selectedMetal, value)}
                            unit="g"
                        />
                    </div>
                </div>

                <div className="w-full">
                    <label className="block mb-2 text-gray-700">Select Gem:</label>
                    <select
                        value={selectedGem}
                        onChange={handleSelectGem}
                        className="block w-full p-2 rounded-lg border border-gray-300 hover:border-gray-500 focus:ring-0 focus:outline-none focus:border-indigo-500"
                    >
                        {gems.map((gem) => (
                            <option key={gem.value} value={gem.value}>
                                {gem.label}
                            </option>
                        ))}
                    </select>
                    <div className="mt-2">
                        <PriceInput
                            label={`${selectedGem.charAt(0).toUpperCase() + selectedGem.slice(1)} Price`}
                            value={prices[selectedGem]}
                            onChange={(value) => onUpdatePrice(selectedGem, value)}
                            unit="ct"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketPrices;