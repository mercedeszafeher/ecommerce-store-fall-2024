import AddToCart from './components/AddToCart';
import styles from './page.module.scss';
import ProductPage from './products/page';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <AddToCart />
      <h1>WanderBrew</h1>
      <ProductPage />
    </div>
  );
}
