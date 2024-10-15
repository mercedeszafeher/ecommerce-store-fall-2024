import styles from './page.module.scss';
import ProductPage from './products/page';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>WanderBrew</h1>
      <ProductPage />
    </div>
  );
}
