import Image from 'next/image';
import React from 'react';
import { getBeer } from '../../database/beers';
import styles from './BeerPage.module.scss';

export async function generateMetadata(props) {
  const singleBeer = getBeer(Number((await props.params).beerId));
  return {
    title: singleBeer.brand,
    description: 'This is the page for the single product',
  };
}
export default async function BeerPage(props) {
  const singleBeer = getBeer(Number((await props.params).beerId));

  return (
    <div className={styles.productContainer}>
      <div className={styles.productContent}>
        {/* Left Section - Product Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={`/images/beers/${singleBeer.brand.toLowerCase()}.png`}
            alt={singleBeer.brand}
            width={400}
            height={400}
            className={styles.productImage}
          />
        </div>

        {/* Right Section - Product Details */}
        <div className={styles.productDetails}>
          <h1 className={styles.productTitle}>{singleBeer.brand}</h1>
          <p className={styles.productDescription}>
            Explore the unique story behind this brew. Discover its flavor
            profile, origin, and what makes it stand out in our world-class
            selection.
          </p>
          <div className={styles.productPrice}>Price: {singleBeer.price}</div>
          <div className={styles.productInfo}>
            This <span className={styles.highlight}>{singleBeer.category}</span>{' '}
            is from{' '}
            <span className={styles.highlight}>{singleBeer.origin}</span>, which
            is a <span className={styles.highlight}>{singleBeer.type}</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
