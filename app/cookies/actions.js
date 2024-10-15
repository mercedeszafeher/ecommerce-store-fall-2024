'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default async function createOrUpdateCart(
  id,
  brand,
  quantity,
  price,
  action = 'add',
) {
  // Get the cart cookie or initialize an empty array
  const cartCookie = await getCookie('cart');
  const cartItems = cartCookie === undefined ? [] : parseJson(cartCookie);

  const priceInCents = Math.round(price * 100);

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
        id: id,
        brand: brand,
        quantity,
        price: priceInCents,
        totalPrice: quantity * priceInCents,
      });
    }
  } else if (action === 'delete') {
    const beerToDelete = cartItems.find((cartItem) => cartItem.id === id);

    if (beerToDelete) {
      const newQuantity = quantity - beerToDelete.quantity;

      if (newQuantity <= 0) {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        await updateCartCookie(updatedCartItems);
        return;
      } else {
        beerToDelete.quantity = newQuantity;
        beerToDelete.totalPrice = newQuantity * priceInCents;
      }
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
