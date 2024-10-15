import Image from 'next/image';
import Link from 'next/link';
import styles from './Navbar.module.scss';
import ShoppingCart from './ShoppingCart';

export default function NavBar() {
  return (
    <header className={styles.header}>
      <div className={styles.navContainer}>
        {/* Logo on the left */}
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/beers/logo.png"
              alt="WanderBrew Logo"
              width={150}
              height={75}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Brew Picks</Link>
          <Link href="/contact">Contact</Link>
          <ShoppingCart />
        </nav>
      </div>
    </header>
  );
}
