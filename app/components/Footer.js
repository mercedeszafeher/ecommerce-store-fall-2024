import Link from 'next/link';
import styles from './Footer.module.scss';

export default function NavBar() {
  return (
    <footer className={styles.footer}>
      <p>© 2024 WanderBrew. All rights reserved.</p>
      <p>
        Your Passport to International Brews | Taste the globe, one sip at a
        time.
      </p>
      <p>
        Contact Us:{' '}
        <a href="mailto:support@wanderbrew.com">support@wanderbrew.com</a>
      </p>
      <p>Follow Us: @WanderBrew</p>
      <div className={styles.socialIcons}>
        {/* Optional: Add social media icons here */}
      </div>
      <p>
        <Link href="/#">Terms & Conditions</Link> |{' '}
        <Link href="/#">Privacy Policy</Link> |{' '}
        <Link href="/#">Shipping & Returns</Link>
      </p>
    </footer>
  );
}
