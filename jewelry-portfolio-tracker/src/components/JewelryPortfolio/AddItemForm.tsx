import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { NewItemForm } from '../../types/jewelery';
import { GOLD_PURITY_RATIOS } from '../../constants/jewelryConstants';

interface AddItemFormProps {
    newItem: NewItemForm;
    onNewItemChange: (updates: Partial<NewItemForm>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

const AddItemForm = ({ newItem, onNewItemChange, onSubmit }: AddItemFormProps) => {
    const [metalWeightError, setMetalWeightError] = useState('');
    const [gemWeightError, setGemWeightError] = useState('');
    const [isEmptyError, setIsEmptyError] = useState('');

    const handleMetalWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (newItem.metalType !== 'none' && (isNaN(value) || value <= 0)) {
            setMetalWeightError('Metal weight must be a positive number.');
        } else {
            setMetalWeightError('');
            onNewItemChange({ metalWeight: value });
            setIsEmptyError('');
        }
        if (e.target.value === "") {
            onNewItemChange({ metalWeight: 0 });
            setMetalWeightError("");
            setIsEmptyError('');
        }
    };

    const handleGemWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (newItem.gemType !== 'none' && (isNaN(value) || value <= 0)) {
            setGemWeightError('Gem weight must be a positive number.');
        } else {
            setGemWeightError('');
            onNewItemChange({ gemWeight: value });
            setIsEmptyError('');
        }
        if (e.target.value === "") {
            onNewItemChange({ gemWeight: 0 });
            setGemWeightError("");
            setIsEmptyError('');
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if ((newItem.metalType !== 'none' && newItem.metalWeight <= 0) ||
            (newItem.gemType !== 'none' && newItem.gemWeight <= 0)) {
            setIsEmptyError('Please input a positive weight for selected metal and gem types.');
        } else if ((newItem.metalType === 'none' && newItem.gemType === 'none') ||
            (newItem.metalWeight === 0 && newItem.metalType !== 'none' && newItem.gemWeight === 0 && newItem.gemType !== 'none')) {
            setIsEmptyError('Please select and input at least one of metal or gem.');
        } else {
            setIsEmptyError('');  // Clear any previous error
            onSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-center">Add New Item</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Item Name */}
                <div className="col-span-full">
                    <label htmlFor="itemName" className="block text-gray-700 text-sm font-bold mb-1">Item Name:</label>
                    <input
                        type="text"
                        id="itemName"
                        value={newItem.name}
                        onChange={(e) => onNewItemChange({ name: e.target.value })}
                        placeholder="Item Name"
                        className="p-2 border rounded w-full"
                        required
                    />
                </div>

                {/* Metal Type */}
                <div>
                    <label htmlFor="metalType" className="block text-gray-700 text-sm font-bold mb-1">Metal Type:</label>
                    <select
                        id="metalType"
                        value={newItem.metalType}
                        onChange={(e) => onNewItemChange({ metalType: e.target.value as 'gold' | 'silver' | 'none' })}
                        className="p-2 border rounded w-full"
                    >
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                        <option value="none">None</option>
                    </select>
                </div>

                {/* Gold Karat Selection */}
                {newItem.metalType === 'gold' && (
                    <div>
                        <label htmlFor="goldKarat" className="block text-gray-700 text-sm font-bold mb-1">Gold Karat:</label>
                        <select
                            id="goldKarat"
                            value={newItem.goldKarat}
                            onChange={(e) => onNewItemChange({ goldKarat: e.target.value as keyof typeof GOLD_PURITY_RATIOS })}
                            className="p-2 border rounded w-full"
                        >
                            {Object.entries(GOLD_PURITY_RATIOS).map(([karat, purity]) => (
                                <option key={karat} value={karat}>
                                    {karat}kt ({(purity * 100).toFixed(1)}%)
                                </option>
                            ))}
                        </select>
                    </div>
                )}

                {/* Metal Weight */}
                {newItem.metalType !== 'none' && (
                    <div>
                        <label htmlFor="metalWeight" className="block text-gray-700 text-sm font-bold mb-1">Metal Weight (g):</label>
                        <div className="relative flex items-center">
                            <input
                                type="number"
                                id="metalWeight"
                                value={newItem.metalWeight === 0 ? "" : newItem.metalWeight}
                                onChange={handleMetalWeightChange}
                                placeholder="Metal Weight"
                                className={`p-2 border rounded w-full ${metalWeightError ? 'border-red-500' : ''}`}
                            />
                        </div>
                        {metalWeightError && <p className="text-red-500 text-sm mt-1">{metalWeightError}</p>}
                    </div>
                )}

                {/* Gem Type */}
                <div>
                    <label htmlFor="gemType" className="block text-gray-700 text-sm font-bold mb-1">Gem Type:</label>
                    <select
                        id="gemType"
                        value={newItem.gemType}
                        onChange={(e) => onNewItemChange({ gemType: e.target.value as 'diamond' | 'ruby' | 'sapphire' | 'none' })}
                        className="p-2 border rounded w-full"
                    >
                        <option value="diamond">Diamond</option>
                        <option value="ruby">Ruby</option>
                        <option value="sapphire">Sapphire</option>
                        <option value="none">None</option>
                    </select>
                </div>

                {/* Gem Weight */}
                {newItem.gemType !== 'none' && (
                    <div>
                        <label htmlFor="gemWeight" className="block text-gray-700 text-sm font-bold mb-1">Gem Weight (ct):</label>
                        <div className="relative flex items-center">
                            <input
                                type="number"
                                id="gemWeight"
                                value={newItem.gemWeight === 0 ? "" : newItem.gemWeight}
                                onChange={handleGemWeightChange}
                                placeholder="Gem Weight"
                                className={`p-2 border rounded w-full ${gemWeightError ? 'border-red-500' : ''}`}
                            />
                        </div>
                        {gemWeightError && <p className="text-red-500 text-sm mt-1">{gemWeightError}</p>}
                    </div>
                )}

                {/* Submit Button */}
                <div className="col-span-full">
                    <button
                        type="submit"
                        className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded w-full"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add Item</span>
                    </button>
                    {isEmptyError && <p className="text-red-500 text-sm mt-1">{isEmptyError}</p>}
                </div>
            </div>
        </form>

    );
};

export default AddItemForm;