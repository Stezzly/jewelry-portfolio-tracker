import React from 'react';
import { Trash2 } from 'lucide-react';
import { JewelryItem } from '../../types/jewelery';

interface PortfolioTableProps {
    items: JewelryItem[];
    onRemoveItem: (id: number) => void;
    totalValue: number;
}

const PortfolioTable = ({ items, onRemoveItem, totalValue }: PortfolioTableProps) => (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Portfolio Items</h2>
        <div className="overflow-x-auto">
            <table className="w-full min-w-full">
                <thead>
                    <tr className="bg-gray-50">
                        <th className="p-3 text-left">Name</th>
                        <th className="p-3 text-left">Metal</th>
                        <th className="p-3 text-left">Karat</th>
                        <th className="p-3 text-left">Metal Weight</th>
                        <th className="p-3 text-left">Gem</th>
                        <th className="p-3 text-left">Gem Weight</th>
                        <th className="p-3 text-left">Value</th>
                        <th className="p-3 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id} className="border-t">
                            <td className="p-3">{item.name}</td>
                            <td className="p-3 capitalize">{item.metalType}</td>
                            <td className="p-3">{item.metalType === 'gold' ? `${item.goldKarat}kt` : '-'}</td>
                            <td className="p-3">{item.metalWeight}g</td>
                            <td className="p-3 capitalize">{item.gemType}</td>
                            <td className="p-3">{item.gemWeight}ct</td>
                            <td className="p-3">${item.value.toFixed(2)}</td>
                            <td className="p-3">
                                <button
                                    onClick={() => onRemoveItem(item.id)}
                                    className="text-red-600 hover:text-red-800"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="mt-4 text-xl font-semibold">
            Total Portfolio Value: ${totalValue.toFixed(2)}
        </div>
    </div>
);

export default PortfolioTable;