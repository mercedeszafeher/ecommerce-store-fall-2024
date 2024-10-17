'use client';

import { useRouter } from 'next/navigation';

export default function CheckoutButton({ overallTotalPrice }) {
  const router = useRouter();

  // Function to handle checkout logic
  const handleCheckout = () => {
    if (!overallTotalPrice || overallTotalPrice <= 0) {
      alert(
        'Your cart is empty. Please add items to your cart before checkout.',
      );
      return;
    }

    // Store the total price in local storage or pass it through query params
    localStorage.setItem('totalPrice', overallTotalPrice);
    // Navigate to the checkout page
    router.push('/checkout');
  };

  return (
    <div>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
}
