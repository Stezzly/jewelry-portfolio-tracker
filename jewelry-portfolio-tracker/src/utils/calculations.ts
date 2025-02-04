import { JewelryItem, MarketPricesType } from '../types/jewelery';
import { GOLD_PURITY_RATIOS } from '../constants/jewelryConstants';

export const calculateItemValue = (
    item: Omit<JewelryItem, 'id' | 'value'>,
    marketPrices: MarketPricesType
): number => {
    let metalValue;
    if (item.metalType === 'gold' && item.goldKarat) {
        const purityRatio = GOLD_PURITY_RATIOS[item.goldKarat];
        metalValue = item.metalWeight * marketPrices[item.metalType] * purityRatio;
    } else {
        metalValue = item.metalWeight * marketPrices[item.metalType];
    }
    const gemValue = item.gemWeight * marketPrices[item.gemType];
    return metalValue + gemValue;
};