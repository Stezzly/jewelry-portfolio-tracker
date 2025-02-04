import React from 'react';
import { Plus } from 'lucide-react';
import { NewItemForm } from '../../types/jewelery';
import { GOLD_PURITY_RATIOS } from '../../constants/jewelryConstants';

interface AddItemFormProps {
    newItem: NewItemForm;
    onNewItemChange: (updates: Partial<NewItemForm>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

const AddItemForm = ({ newItem, onNewItemChange, onSubmit }: AddItemFormProps) => {

    const handleMetalWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value) && value > 0) {
            onNewItemChange({ metalWeight: value });
        } else if (e.target.value === "") {
            onNewItemChange({ metalWeight: 0 });
        }
    };

    const handleGemWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value) && value > 0) {
            onNewItemChange({ gemWeight: value });
        } else if (e.target.value === "") {
            onNewItemChange({ gemWeight: 0 });
        }
    };

    return (
        <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-xl font-semibold">Add New Item</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label htmlFor="itemName" className="block text-gray-700 text-sm font-bold mb-2">Item Name:</label>
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

                <div>
                    <label htmlFor="metalType" className="block text-gray-700 text-sm font-bold mb-2">Metal Type:</label>
                    <select
                        id="metalType"
                        value={newItem.metalType}
                        onChange={(e) => onNewItemChange({ metalType: e.target.value as 'gold' | 'silver' })}
                        className="p-2 border rounded w-full"
                    >
                        <option value="gold">Gold</option>
                        <option value="silver">Silver</option>
                    </select>
                </div>

                {newItem.metalType === 'gold' && (
                    <div>
                        <label htmlFor="goldKarat" className="block text-gray-700 text-sm font-bold mb-2">Gold Karat:</label>
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

                <div>
                    <label htmlFor="metalWeight" className="block text-gray-700 text-sm font-bold mb-2">Metal Weight (g):</label>
                    <div className="relative flex items-center">
                        <input
                            type="number"
                            id="metalWeight"
                            value={newItem.metalWeight === 0 ? "" : newItem.metalWeight}
                            onChange={handleMetalWeightChange}
                            placeholder="Metal Weight"
                            className="p-2 border rounded w-full"
                        />
                        <span className="absolute left-2 text-gray-500">g</span>
                    </div>
                </div>

                <div>
                    <label htmlFor="gemType" className="block text-gray-700 text-sm font-bold mb-2">Gem Type:</label>
                    <select
                        id="gemType"
                        value={newItem.gemType}
                        onChange={(e) => onNewItemChange({ gemType: e.target.value as 'diamond' | 'ruby' | 'sapphire' })}
                        className="p-2 border rounded w-full"
                    >
                        <option value="diamond">Diamond</option>
                        <option value="ruby">Ruby</option>
                        <option value="sapphire">Sapphire</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="gemWeight" className="block text-gray-700 text-sm font-bold mb-2">Gem Weight (ct):</label>
                    <div className="relative flex items-center">
                        <input
                            type="number"
                            id="gemWeight"
                            value={newItem.gemWeight === 0 ? "" : newItem.gemWeight}
                            onChange={handleGemWeightChange}
                            placeholder="Gem Weight"
                            className="p-2 border rounded w-full"
                        />
                        <span className="absolute left-2 text-gray-500">ct</span>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <button
                        type="submit"
                        className="flex items-center justify-center space-x-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-full"
                    >
                        <Plus className="w-4 h-4" />
                        <span>Add Item</span>
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddItemForm;