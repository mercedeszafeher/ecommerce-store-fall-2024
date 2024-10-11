import 'server-only';

const beers = [
  {
    id: 1,
    brand: 'Budweiser',
    type: 'American-style Lager',
    category: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 2,
    brand: 'BudLight',
    type: 'American-style light Lager',
    category: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 3,
    brand: 'Lagunitas',
    type: ' India Pale Ale',
    category: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 4,
    brand: 'NewBelgium',
    type: 'Citrusy sweet Belgian-style beer',
    category: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 5,
    brand: 'SierraNevada',
    type: 'Light-bodied, Pilsner-style Lager',
    category: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 6,
    brand: 'Miller',
    type: 'American-style Lager',
    category: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 7,
    brand: 'SamuelAdams',
    type: 'Boston Lager',
    category: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 8,
    brand: 'Kona',
    type: 'Light Golden Ale',
    category: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 9,
    brand: 'Breckenridge',
    type: 'German Amber Lager',
    category: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 10,
    brand: 'Dreher',
    type: 'Lager',
    category: 'beer',
    origin: 'Hungary',
    price: '1.29 eur',
  },
  {
    id: 11,
    brand: 'Soproni',
    type: 'Traditional Hungarian Lager',
    category: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 12,
    brand: 'AranyAszok',
    type: 'Pilsner Lager',
    category: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 13,
    brand: 'PecsiSor',
    type: 'Premium Lager',
    category: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 14,
    brand: 'MonyoBrewing',
    type: ' Pale Lager',
    category: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 15,
    brand: 'FeherNyul',
    type: 'IPA',
    category: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 16,
    brand: 'Horizont',
    type: 'Pale Ale',
    category: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 17,
    brand: 'Rizmajer',
    type: 'Pale Lager',
    category: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 18,
    brand: 'Hubris',
    type: 'very light Pale Ale',
    category: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 19,
    brand: 'Foti',
    type: 'unpasteurized Zwickelbier',
    category: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 20,
    brand: 'Ottakringer',
    type: 'Vienna Lager',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 21,
    brand: 'Gosser',
    type: 'Austrian Märzen',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 22,
    brand: 'Stiegl',
    type: 'thirst-quenching Lager',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 23,
    brand: 'Zipfer',
    type: 'Pale Bock',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 24,
    brand: 'Edelweiss',
    type: 'Wheat Beer',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 25,
    brand: 'Egger',
    type: 'easy-drinking malty Lager',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 26,
    brand: 'Wieselburger',
    type: 'an easy, simple, tasteless Lager',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 27,
    brand: 'Puntigamer',
    type: 'European Pale Lager style',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 28,
    brand: 'Zillertal',
    type: 'Märzen',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 29,
    brand: 'Solsch',
    type: 'Lager',
    category: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 30,
    brand: 'Paulaner',
    type: 'Amber Lager ',
    category: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 31,
    brand: 'Wernesgruner',
    type: 'German Pilsner',
    category: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 32,
    brand: 'Erdinger',
    type: 'Light Wheat Ale',
    category: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 33,
    brand: 'Becks',
    type: 'characterful Pilsner',
    category: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 34,
    brand: 'Lowenbrau',
    type: 'Helles Lager',
    category: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 35,
    brand: 'Holsten',
    type: 'German Pilsner',
    category: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 36,
    brand: 'Hofbrau',
    type: 'Pale Lager',
    category: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 37,
    brand: 'Karlsberg',
    type: 'Natur Radler',
    category: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 38,
    brand: 'Tegernseer',
    type: 'Helles Lager',
    category: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 39,
    brand: 'Kozel',
    type: 'Pale Lager',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 40,
    brand: 'PilsnerUrquell',
    type: 'Pale Lager',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 41,
    brand: 'Staropramen',
    type: 'Premium Lager',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 42,
    brand: 'Branik',
    type: 'Czech Pale Lager',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 43,
    brand: 'Bernard',
    type: 'Champagne type beer',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 44,
    brand: 'Krusovice',
    type: 'Pale',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 45,
    brand: 'Gambrinus',
    type: 'Czech Pale',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 46,
    brand: 'Lobkowicz',
    type: 'Czech Pilsner',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 47,
    brand: 'CernaHora',
    type: 'Fruit Beer',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 48,
    brand: 'Starobrno',
    type: 'Czech light Lager',
    category: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
  {
    id: 49,
    brand: 'Sol',
    type: 'Mexican Lager',
    category: 'beer',
    origin: 'Mexico',
    price: '0.89 eur',
  },
  {
    id: 50,
    brand: 'Corona',
    type: 'Alcohol-free Mexican Lager',
    category: 'beer',
    origin: 'Mexico',
    price: '0.89 eur',
  },
  {
    id: 51,
    brand: 'NegraModelo',
    type: 'Munich Dunkel-style Lager',
    category: 'beer',
    origin: 'Mexico',
    price: '0.89 eur',
  },
  {
    id: 52,
    brand: 'Victoria',
    type: 'Vienna-style Lager',
    category: 'beer',
    origin: 'Mexico',
    price: '0.89 eur',
  },
  {
    id: 53,
    brand: 'Pacifico',
    type: 'Pilsner-style Lager',
    category: 'beer',
    origin: 'Mexico',
    price: '0.89 eur',
  },
  {
    id: 54,
    brand: 'Saigon',
    type: 'Vietnam Pilsner-type Lager',
    category: 'beer',
    origin: 'Asia',
    price: '0.89 eur',
  },
  {
    id: 55,
    brand: 'BeerLao',
    type: 'Laos Pilsner',
    category: 'beer',
    origin: 'Asia',
    price: '0.89 eur',
  },
  {
    id: 56,
    brand: 'ChangBeer',
    type: 'European Style Lager Beer',
    category: 'beer',
    origin: 'Asia',
    price: '0.89 eur',
  },
  {
    id: 57,
    brand: 'Leo',
    type: 'Full-flavored standard Lager',
    category: 'beer',
    origin: 'Asia',
    price: '0.89 eur',
  },
  {
    id: 58,
    brand: 'SanMiguel',
    type: 'Pilsner-style Lager',
    category: 'beer',
    origin: 'Asia',
    price: '0.89 eur',
  },
  {
    id: 59,
    brand: 'Leffe',
    type: 'Belgian Blonde Ale style',
    category: 'beer',
    origin: 'Belgium',
    price: '0.89 eur',
  },
  {
    id: 60,
    brand: 'Duvel',
    type: 'Strong Golden Pale Ale',
    category: 'beer',
    origin: 'Belgium',
    price: '0.89 eur',
  },
  {
    id: 61,
    brand: 'Kasteel',
    type: 'Belgian Red Strong Fruit Ale',
    category: 'beer',
    origin: 'Belgium',
    price: '0.89 eur',
  },
  {
    id: 62,
    brand: 'SaisonDupont',
    type: 'classic Belgian seasonal Ale',
    category: 'beer',
    origin: 'Belgium',
    price: '0.89 eur',
  },
  {
    id: 63,
    brand: 'StFeuillien',
    type: 'Traditional Farmhouse Ale',
    category: 'beer',
    origin: 'Belgium',
    price: '0.89 eur',
  },
];

export function getBeers() {
  return beers;
}

export function getBeer(id) {
  return beers.find((beer) => beer.id === id);
}
