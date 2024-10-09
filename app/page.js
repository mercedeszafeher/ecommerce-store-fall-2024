import AddToCart from './AddToCart';
import Footer from './components/Footer';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <AddToCart />
      <h1>WanderBrew</h1>

      <Footer />
    </div>
  );
}
