import Image from 'next/image';
import { getBeer } from '../database/beer';

export const metadata = {
  title: 'Our assortment',
  description: ' ',
};

export default function ProductPage() {
  const beerAssortment = getBeer();
  return (
    <div>
      <h1>Worldwide Brews, Just a Click Away </h1>
      <h3>Our Assortment:</h3>
      {beerAssortment.map((beer) => {
        return (
          <div key={`beers-${beer.id}`}>
            <div>{beer.name}</div>
            <Image
              src={`/images/beers/${beer.name.toLowerCase()}.png`}
              alt={beer.name}
              width={200}
              height={400}
            />
          </div>
        );
      })}
    </div>
  );
}
