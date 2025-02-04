import React, { useState } from 'react';
import MarketPrices from './MarketPrices';
import AddItemForm from './AddItemForm';
import PortfolioTable from './PortfolioTable';
import { calculateItemValue } from '../../utils/calculations';
import { JewelryItem, MarketPricesType, NewItemForm } from '../../types/jewelery';
import { INITIAL_MARKET_PRICES, INITIAL_NEW_ITEM } from '../../constants/jewelryConstants';

const JewelryPortfolio = () => {
    const initialItem: JewelryItem = {
        id: Date.now(), 
        name: 'Necklace',
        metalType: 'gold',
        metalWeight: 20,
        gemType: 'diamond',
        gemWeight: 2,
        value: 1500,
    };

    const [items, setItems] = useState<JewelryItem[]>([initialItem]);
    const [marketPrices, setMarketPrices] = useState<MarketPricesType>(INITIAL_MARKET_PRICES);
    const [newItem, setNewItem] = useState<NewItemForm>(INITIAL_NEW_ITEM);

    const handleUpdatePrice = (type: keyof MarketPricesType, value: number) => {
        setMarketPrices(prev => {
            const updated = { ...prev, [type]: value };
            setItems(items.map(item => ({
                ...item,
                value: calculateItemValue(item, updated)
            })));
            return updated;
        });
    };

    const handleNewItemChange = (updates: Partial<NewItemForm>) => {
        setNewItem(prev => ({ ...prev, ...updates }));
    };

    const handleAddItem = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newItem.name || !newItem.metalWeight || !newItem.gemWeight) return;

        const itemWithValue: JewelryItem = {
            ...newItem,
            id: Date.now(),
            value: calculateItemValue(newItem, marketPrices),
        };

        setItems(prev => [...prev, itemWithValue]);
        setNewItem(INITIAL_NEW_ITEM);
    };

    const handleRemoveItem = (id: number) => {
        setItems(prev => prev.filter(item => item.id !== id));
    };

    const totalPortfolioValue = items.reduce((sum, item) => sum + item.value, 0);

    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold text-gray-800">Jewelry Portfolio Tracker</h1>

            <MarketPrices
                prices={marketPrices}
                onUpdatePrice={handleUpdatePrice}
            />

            <AddItemForm
                newItem={newItem}
                onNewItemChange={handleNewItemChange}
                onSubmit={handleAddItem}
            />

            <PortfolioTable
                items={items}
                onRemoveItem={handleRemoveItem}
                totalValue={totalPortfolioValue}
            />
        </div>
    );
};

export default JewelryPortfolio;
