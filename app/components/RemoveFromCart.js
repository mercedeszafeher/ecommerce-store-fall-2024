'use client';

import removeFromCart from '../cookies/actions';
import styles from './RemoveFromCart.module.scss';

export default function RemoveFromCart({ id }) {
  const handleRemoveFromCart = async () => {
    try {
      await removeFromCart(id, null, null, null, 'delete');
      alert('Item removed from your cart!');
    } catch (error) {
      console.error('Failed to remove item from cart', error);
    }
  };

  return (
    <button
      onClick={handleRemoveFromCart}
      className={styles.removeFromCartButton}
    >
      Delete
    </button>
  );
}
