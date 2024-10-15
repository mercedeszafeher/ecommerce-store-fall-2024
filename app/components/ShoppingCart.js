import Image from 'next/image';
import Link from 'next/link';
import styles from './ShoppingCart.module.scss';

export default function ShoppingCart() {
  return (
    <div className={styles.shoppingCart}>
      <Link href="/cart">
        <Image
          src="/images/shopping-cart.png"
          alt="Shopping Cart"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}
