'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default async function createOrUpdateCart(
  id,
  brand,
  image,
  quantity,
  price,
  action = 'add',
) {
  // Get the cart cookie or initialize an empty array
  const cartCookie = await getCookie('cart');
  const cartItems = cartCookie === undefined ? [] : parseJson(cartCookie);
  const priceInCents = Math.round(price * 100);

  if (typeof brand !== 'string' || typeof image !== 'string') {
    console.error('Brand and image should be strings');
    return;
  }

  if (action === 'add') {
    // Check if the beer is already in the cart
    const beerToUpdate = cartItems.find((cartItem) => cartItem.id === id);

    if (beerToUpdate) {
      // Beer already exists, update the quantity
      beerToUpdate.quantity += quantity;
      beerToUpdate.totalPrice = beerToUpdate.quantity * priceInCents;
    } else {
      // Add new beer entry to the cart
      cartItems.push({
        id,
        brand,
        image,
        quantity,
        price: priceInCents,
        totalPrice: quantity * priceInCents,
      });
    }
  }

  // Update the cart cookie with the new values
  await updateCartCookie(cartItems);
}

// Helper function to update the cart cookie
async function updateCartCookie(cartItems) {
  const newCart = JSON.stringify(cartItems);
  (await cookies()).set('cart', newCart, { path: '/' });
}
