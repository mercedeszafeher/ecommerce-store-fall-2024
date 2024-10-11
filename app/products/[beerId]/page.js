import Image from 'next/image';
import React from 'react';
import { getBeer } from '../../database/beers';

export async function generateMetadata(props) {
  const singleBeer = getBeer(Number((await props.params).beerId));
  return {
    title: singleBeer.brand,
    description:
      'Explore the unique story behind this brew. Discover its flavor profile, origin, and what makes it stand out in our world-class selection.',
  };
}
export default async function BeerPage(props) {
  const singleBeer = getBeer(Number((await props.params).beerId));

  return (
    <div>
      <h1>{singleBeer.brand}</h1>
      <div>Price: {singleBeer.price}</div>
      <div>
        <Image
          src={`/images/beers/${singleBeer.brand.toLowerCase()}.png`}
          alt={singleBeer.brand}
          width={300}
          height={300}
        />
        This {singleBeer.category} is from {singleBeer.origin} which is a{' '}
        {singleBeer.type}.
      </div>
    </div>
  );
}
