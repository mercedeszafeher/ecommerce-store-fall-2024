import Image from 'next/image';
import Link from 'next/link';
import styles from './NotFoundPage.module.scss';

export default function RootNotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/page-not-found.png"
            alt="Page not found"
            width={400}
            height={400}
            className={styles.notFoundImage}
          />
        </div>

        <div className={styles.notFoundMessage}>
          <h1>Sorry, this page was not found..</h1>
          <p>
            The page you’re looking for doesn’t exist or has been moved. Please
            check the URL or return to the homepage.
          </p>
          <Link href="/" className={styles.returnLink}>
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
