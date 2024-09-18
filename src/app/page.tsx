import { Cards } from '@/components/cards/Cards';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.home__container}>
        <Cards />
      </div>
    </section>
  );
}
