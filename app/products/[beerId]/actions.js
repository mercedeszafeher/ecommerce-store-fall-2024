'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function createOrUpdateCart(beerId, quantity, price) {
  // Get the cart cookie or initialize an empty array
  const cartCookie = await getCookie('cart');
  const cartItems = cartCookie === undefined ? [] : parseJson(cartCookie);

  // Check if the beer is already in the cart
  const beerToUpdate = cartItems.find((cartItem) => cartItem.id === beerId);

  if (beerToUpdate) {
    // Beer already exists, update the quantity
    beerToUpdate.quantity += quantity;
  } else {
    // Add new beer entry to the cart
    cartItems.push({ id: beerId, quantity, price });
  }

  // Update the cart cookie with the new values
  const newCart = JSON.stringify(cartItems);
  (await cookies()).set('cart', newCart, { path: '/' });
}
