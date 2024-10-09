import 'server-only';

const beerAssortment = [
  {
    id: 1,
    name: 'Budweiser',
    type: 'beer',
    origin: 'USA',
    price: '1.29 eur',
  },
  {
    id: 2,
    name: 'Soproni',
    type: 'beer',
    origin: 'Hungary',
    price: '0.99 eur',
  },
  {
    id: 3,
    name: 'Ottakringer',
    type: 'beer',
    origin: 'Austria',
    price: '1.16 eur',
  },
  {
    id: 4,
    name: 'Paulaner',
    type: 'beer',
    origin: 'Germany',
    price: '1.59 eur',
  },
  {
    id: 5,
    name: 'Kozel',
    type: 'beer',
    origin: 'Czech Republic',
    price: '0.89 eur',
  },
];

export function getBeer() {
  return beerAssortment;
}
