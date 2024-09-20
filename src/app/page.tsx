import { Cards } from '@/components/cards/Cards';
import { SubSectionContainer } from '@/components/containers/subSectionContainer';
import { Transaction } from '@/components/transaction/Transaction';
import { Expense } from '@/components/weekly/Expense';
import { WeeklyActivity } from '@/components/weekly/WeeklyActivity';
import { inter } from '@/fonts/fonts';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <section className={`${styles['home']} ${inter.className}`}>
      <div className={styles['home__container']}>
        <SubSectionContainer>
          <Cards />
          <Transaction />
        </SubSectionContainer>
        <SubSectionContainer>
          <WeeklyActivity />
          <Expense />
        </SubSectionContainer>
      </div>
    </section>
  );
}
