'use client';

import { useEffect, useState } from 'react';
import { getBeer } from '../database/beers'; // Import getBeer from your database

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
    const beerData = cartFromCookies.map((item) => {
      const beer = getBeer(item.id); // Retrieve beer information from database
      return { ...beer, quantity: item.quantity };
    });
    setCartItems(beerData);
  }, []);

  // Calculate the total price
  const overallTotalPriceInCents = cartItems.reduce(
    (sum, item) => sum + item.totalPrice,
    0,
  );
  const overallTotalPrice = (overallTotalPriceInCents / 100).toFixed(2);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((beer) => (
            <div key={`beers-${beer.id}`} style={{ marginBottom: '20px' }}>
              <h2>{beer.brand}</h2>
              <p>Price (per item): {(beer.price / 100).toFixed(2)} €</p>
              <p>Quantity: {beer.quantity}</p>
              <p>
                Total for this item: {(beer.totalPrice / 100).toFixed(2)} €{' '}
              </p>
            </div>
          ))}
          <h3>Overall Total: {overallTotalPrice} €</h3>
        </div>
      )}
    </div>
  );
}
