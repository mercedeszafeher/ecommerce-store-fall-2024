'use client';

import { useState } from 'react';
import createOrUpdateCart from '../cookies/actions';
import styles from './Addtocart.module.scss';

export default function AddToCart({ id, brand, price }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = async () => {
    try {
      await createOrUpdateCart(id, brand, quantity, price);
      alert('Added to your cart!');
    } catch (error) {
      console.error('Failed to add item to cart', error);
    }
  };

  return (
    <div className={styles.addToCartContainer}>
      <div className={styles.quantityControl}>
        <label htmlFor={`quantity-${id}`}>
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

      <button onClick={handleAddToCart} className={styles.addToCartButton}>
        Add to Cart
      </button>
    </div>
  );
}
