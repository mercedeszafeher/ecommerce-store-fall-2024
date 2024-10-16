'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../util/cookies';
import { parseJson } from '../util/json';

export default async function deleteCartItem(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;
    console.log('Deleting item with ID:', id);

    const cartCookie = await getCookie('cart');
    const cartItems = cartCookie === undefined ? [] : parseJson(cartCookie);

    // Filter out the item to delete
    const updatedCartItems = cartItems.filter((item) => item.id !== id);

    // Update the cart cookie
    const newCart = JSON.stringify(updatedCartItems);
    (await cookies()).set('cart', newCart, { path: '/' });

    return res.status(200).json({ message: 'Item deleted successfully' });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
