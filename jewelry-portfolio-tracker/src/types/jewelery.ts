export interface MarketPricesType {
    gold: number;
    silver: number;
    diamond: number;
    ruby: number;
    sapphire: number;
}

export interface JewelryItem {
    id: number;
    name: string;
    metalType: 'gold' | 'silver' | 'none';
    goldKarat?: '24' | '22' | '18' | '14' | '10';
    metalWeight: number;
    gemType: 'diamond' | 'ruby' | 'sapphire' | 'none';
    gemWeight: number;
    value: number;
}

export interface NewItemForm {
    name: string;
    metalType: 'gold' | 'silver' | 'none';
    goldKarat?: '24' | '22' | '18' | '14' | '10';
    metalWeight: number;
    gemType: 'diamond' | 'ruby' | 'sapphire' | 'none';
    gemWeight: number;
}