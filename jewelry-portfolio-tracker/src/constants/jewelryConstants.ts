export const GOLD_PURITY_RATIOS = {
    '24': 0.999,
    '22': 0.916,
    '18': 0.750,
    '14': 0.583,
    '10': 0.417
  } as const;
  
  export const INITIAL_MARKET_PRICES = {
    gold: 0,
    silver: 0,
    diamond: 0,
    ruby: 0,
    sapphire: 0
  };
  
  export const INITIAL_NEW_ITEM = {
    name: '',
    metalType: 'gold',
    goldKarat: '24',
    metalWeight: 0,
    gemType: 'diamond',
    gemWeight: 0
  } as const;