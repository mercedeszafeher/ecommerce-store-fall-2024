'use client';
import { useRouter } from 'next/navigation';
import styles from './CheckoutButton.module.scss';

export default function CheckoutButton({ cartItems }) {
  const router = useRouter();

  // Function to handle checkout logic
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert(
        'Your cart is empty. Please add items to your cart before checkout.',
      );
      return;
    }

    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.totalPrice,
      0,
    );

    // Store the cart items and total price in localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('totalPrice', (totalPrice / 100).toFixed(2));

    // Navigate to the checkout page
    router.push('/checkout');
  };

  return (
    <div className={styles.checkoutButtonContainer}>
      <button className={styles.checkoutButton} onClick={handleCheckout}>
        Proceed to Checkout
      </button>
    </div>
  );
}
