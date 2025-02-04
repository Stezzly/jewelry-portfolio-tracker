import React, { FormEvent } from 'react';

import { Plus } from 'lucide-react';
import { NewItemForm } from '../../types/jewelery';
import { GOLD_PURITY_RATIOS } from '../../constants/jewelryConstants';

interface AddItemFormProps {
    newItem: NewItemForm;
    onNewItemChange: (updates: Partial<NewItemForm>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

const AddItemForm = ({ newItem, onNewItemChange, onSubmit }: AddItemFormProps) => (
    <form onSubmit={onSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold">Add New Item</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <input
                type="text"
                value={newItem.name}
                onChange={(e) => onNewItemChange({ name: e.target.value })}
                placeholder="Item Name"
                className="p-2 border rounded"
            />
            <select
                value={newItem.metalType}
                onChange={(e) => onNewItemChange({ metalType: e.target.value as 'gold' | 'silver' })}
                className="p-2 border rounded"
            >
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
            </select>
            {newItem.metalType === 'gold' && (
                <select
                    value={newItem.goldKarat}
                    onChange={(e) => onNewItemChange({ goldKarat: e.target.value as keyof typeof GOLD_PURITY_RATIOS })}
                    className="p-2 border rounded"
                >
                    {Object.entries(GOLD_PURITY_RATIOS).map(([karat, purity]) => (
                        <option key={karat} value={karat}>
                            {karat}kt ({(purity * 100).toFixed(1)}%)
                        </option>
                    ))}
                </select>
            )}
            <div className="relative">
                <input
                    type="number"
                    value={newItem.metalWeight}
                    onChange={(e) => onNewItemChange({ metalWeight: parseFloat(e.target.value) || 0 })}
                    placeholder="Metal Weight"
                    className="p-2 pl-2 pr-8 border rounded w-full"
                />
                <span className="absolute right-3 top-2.5 text-gray-500">g</span>
            </div>
            <select
                value={newItem.gemType}
                onChange={(e) => onNewItemChange({ gemType: e.target.value as 'diamond' | 'ruby' | 'sapphire' })}
                className="p-2 border rounded"
            >
                <option value="diamond">Diamond</option>
                <option value="ruby">Ruby</option>
                <option value="sapphire">Sapphire</option>
            </select>
            <div className="relative">
                <input
                    type="number"
                    value={newItem.gemWeight}
                    onChange={(e) => onNewItemChange({ gemWeight: parseFloat(e.target.value) || 0 })}
                    placeholder="Gem Weight"
                    className="p-2 pl-2 pr-8 border rounded w-full"
                />
                <span className="absolute right-3 top-2.5 text-gray-500">ct</span>
            </div>
            <button
                type="submit"
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
                <Plus className="w-4 h-4" />
                <span>Add Item</span>
            </button>
        </div>
    </form>
);

export default AddItemForm;