'use client';

import Image from 'next/image';
import styles from './ErrorPage.module.scss';

export default function RootError() {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContent}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/something-went-wrong.png"
            alt="Something went wrong"
            width={400}
            height={400}
            className={styles.errorImage}
          />
        </div>

        <div className={styles.errorMessage}>
          <h1>Oops! Something went wrong...</h1>
          <p>We’re sorry, but something didn’t go as planned.</p>
        </div>
      </div>
    </div>
  );
}
