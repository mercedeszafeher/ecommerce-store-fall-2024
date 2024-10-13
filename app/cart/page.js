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
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

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
              <p>Price: {beer.price} €</p>
              <p>Quantity: {beer.quantity}</p>
            </div>
          ))}
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}
