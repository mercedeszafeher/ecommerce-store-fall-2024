import Image from 'next/image';
import Link from 'next/link';
import { getBeers } from '../database/beers';
import styles from './ProductPage.module.scss';

export const metadata = {
  title: 'Our assortment',
  description: ' ',
};

export default function ProductPage() {
  const beers = getBeers();
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
                    src={`/images/beers/${beer.brand.toLowerCase()}.png`}
                    alt={beer.brand}
                    layout="fill"
                    className={styles.beerImage}
                  />
                </div>
                <div className={styles.beerName}>{beer.brand}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
