'use client';
import { useEffect, useState } from 'react';
import CheckoutButton from '../components/CheckoutButton';
import RemoveFromCart from '../components/RemoveFromCart';
import styles from './CartPage.module.scss';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Function to get cookie from the browser in the client
    const getCartItemsFromCookies = () => {
      const cartCookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('cart='));
      return cartCookie
        ? JSON.parse(decodeURIComponent(cartCookie.split('=')[1]))
        : [];
    };

    // Fetch the cart items from the cookie
    const cartFromCookies = getCartItemsFromCookies();
    setCartItems(cartFromCookies);
  }, []);

  // Calculate the total price
  const overallTotalPriceInCents = cartItems.reduce(
    (sum, item) => sum + item.totalPrice,
    0,
  );
  const overallTotalPrice = (overallTotalPriceInCents / 100).toFixed(2);

  return (
    <div className={styles.cartContainer}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className={styles.emptyCartMessage}> Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((beer) => {
            const beerType =
              typeof beer.brand === 'string' ? beer.brand.toLowerCase() : '';

            return (
              <div key={`beers-${beer.id}`} className={styles.cartItem}>
                <img
                  src={
                    typeof beer.brand === 'string'
                      ? `/images/beers/${beerType}.png`
                      : '/images/no-image.png'
                  }
                  alt={beer.brand}
                  className={styles.itemImage}
                />
                <div className={styles.itemDetails}>
                  <h2 className={styles.itemBrand}>{beer.brand}</h2>
                  <p className={styles.itemPrice}>
                    Price (per item): {(beer.price / 100).toFixed(2)} €
                  </p>
                  <p className={styles.itemQuantity}>
                    Quantity: {beer.quantity}
                  </p>
                  <p className={styles.itemTotal}>
                    Total for this item: {(beer.totalPrice / 100).toFixed(2)} €{' '}
                  </p>
                </div>
                <RemoveFromCart id={beer.id} />
              </div>
            );
          })}
          <div className={styles.checkoutSection}>
            <h3>Overall Total: {overallTotalPrice} €</h3>
            <CheckoutButton cartItems={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
}
