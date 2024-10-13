'use client';

import { useState } from 'react';
import { getBeer } from '../database/beers';
import createOrUpdateCart from '../products/[beerId]/actions';
import styles from './Addtocart.module.scss';

export default function AddToCart({ beerId, price }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    await createOrUpdateCart(beerId, quantity, price);
    alert('Added to your cart!');
  };

  return (
    <div className={styles.addToCartContainer}>
      <div className={styles.quantityControl}>
        <label htmlFor={`quantity-${beerId}`}>
          Quantity:
          <input
            className={styles.quantityInput}
            type="number"
            value={quantity}
            min="1"
            onChange={(event) => setQuantity(parseInt(event.target.value))}
          />
        </label>
      </div>

      <button
        onClick={() => handleAddToCart(getBeer.id, getBeer.price)}
        className={styles.addToCartButton}
      >
        Add to Cart
      </button>
    </div>
  );
}
