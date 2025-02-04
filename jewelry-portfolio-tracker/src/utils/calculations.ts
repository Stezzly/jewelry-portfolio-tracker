import { JewelryItem, MarketPricesType } from '../types/jewelery';
import { GOLD_PURITY_RATIOS } from '../constants/jewelryConstants';

export const calculateItemValue = (
    item: Omit<JewelryItem, 'id' | 'value'>,
    marketPrices: MarketPricesType
): number => {
    let metalValue = 0;
    if (item.metalType === 'gold' && item.goldKarat && item.metalWeight > 0) {
        const purityRatio = GOLD_PURITY_RATIOS[item.goldKarat];
        metalValue = item.metalWeight * marketPrices.gold * purityRatio;
    } else if (item.metalType === 'silver' && item.metalWeight > 0) {
        metalValue = item.metalWeight * marketPrices.silver;
    } else if (item.metalType !== 'none' && item.metalWeight > 0) {
        metalValue = item.metalWeight * marketPrices[item.metalType as keyof MarketPricesType];
    }

    let gemValue = 0;
    if (item.gemType !== 'none' && item.gemWeight > 0) {
        gemValue = item.gemWeight * marketPrices[item.gemType as keyof MarketPricesType];
    }

    return metalValue + gemValue;
};