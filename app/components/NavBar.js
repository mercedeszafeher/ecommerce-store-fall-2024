import Link from 'next/link';
import styles from '../globals.scss';

export default function NavBar() {
  return (
    <header className={styles}>
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Brew Picks</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
