'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './CompletePurchase.module.scss';

const deleteCookie = (cookieName) => {
  document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export default function CompletePurchase({
  cartItems,
  totalPrice,
  isFormValid,
}) {
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const clearCart = () => {
    try {
      localStorage.removeItem('cartItems');
      localStorage.removeItem('totalPrice');

      deleteCookie('cart');
      deleteCookie('totalPrice');

      console.log('Cart and cookies cleared successfully');
      return true;
    } catch (error) {
      console.error('Error clearing cart or cookies:', error);
      return false;
    }
  };

  const handleCompletePurchase = async () => {
    if (!isFormValid) {
      alert(
        'Please fill out all required fields before completing the purchase.',
      );
      return;
    }

    if (!totalPrice || totalPrice <= 0 || cartItems.length === 0) {
      alert(
        'Your cart is empty. Please add items before completing the purchase.',
      );
      return;
    }

    setIsProcessing(true);

    const isCartCleared = await clearCart();

    if (isCartCleared) {
      router.push('/thankyou');
    } else {
      alert('Failed to complete the purchase. Please try again.');
    }

    setIsProcessing(false);
  };

  return (
    <div className={styles.completePurchaseButtonContainer}>
      <button
        className={styles.completePurchaseButton}
        onClick={handleCompletePurchase}
        disabled={isProcessing || !isFormValid}
      >
        {isProcessing ? 'Processing...' : 'Complete Purchase'}
      </button>
    </div>
  );
}
