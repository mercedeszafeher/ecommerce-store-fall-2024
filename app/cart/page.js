'use client';
import { useEffect, useState } from 'react';
import RemoveFromCart from '../components/RemoveFromCart';

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
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((beer) => {
            const beerType =
              typeof beer.brand === 'string' ? beer.brand.toLowerCase() : '';

            return (
              <div key={`beers-${beer.id}`} style={{ marginBottom: '10px' }}>
                <img
                  src={
                    typeof beer.brand === 'string'
                      ? `/images/beers/${beerType}.png`
                      : '/images/no-image.png'
                  }
                  alt={beer.brand}
                  style={{ width: '100px', height: 'auto' }}
                />
                <h2>{beer.brand}</h2>
                <p>Price (per item): {(beer.price / 100).toFixed(2)} €</p>
                <p>Quantity: {beer.quantity}</p>
                <p>
                  Total for this item: {(beer.totalPrice / 100).toFixed(2)} €{' '}
                </p>
                <RemoveFromCart id={beer.id} />
              </div>
            );
          })}
          <h3>Overall Total: {overallTotalPrice} €</h3>
        </div>
      )}
    </div>
  );
}
