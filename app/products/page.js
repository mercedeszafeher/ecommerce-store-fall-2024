import Image from 'next/image';
import Link from 'next/link';
import AddToCart from '../components/AddToCart';
import { getBeersInsecure } from '../database/beers';
import styles from './ProductPage.module.scss';

export const metadata = {
  title: 'Our assortment',
  description: ' ',
};

export default async function ProductPage() {
  const beers = await getBeersInsecure();
  return (
    <div className={styles.pageContainer}>
      <h1>Worldwide Brews, Just a Click Away </h1>
      <h2>Our Assortment:</h2>
      <div className={styles.beerGrid}>
        {beers.map((beer) => {
          return (
            <div className={styles.beerCard} key={`beers-${beer.id}`}>
              <Link href={`/products/${beer.id}`}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={
                      typeof beer.brand === 'string'
                        ? `/images/beers/${beer.brand.toLowerCase()}.png`
                        : '/images/no-image.png'
                    }
                    alt={beer.brand}
                    layout="fill"
                    className={styles.beerImage}
                  />
                </div>
                <div className={styles.beerName}>{beer.brand}</div>
              </Link>
              <AddToCart
                id={beer.id}
                brand={beer.brand}
                image={
                  typeof beer.brand === 'string'
                    ? `/images/beers/${beer.brand.toLowerCase()}.png`
                    : '/images/no-image.png'
                }
                price={beer.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
