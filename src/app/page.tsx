import { Balance } from '@/components/balance/Balance';
import { Cards } from '@/components/cards/Cards';
import { SubSectionContainer } from '@/components/containers/subSectionContainer';
import { Transaction } from '@/components/transaction/Transaction';
import { Transfer } from '@/components/transfer/Transfer';
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
        <SubSectionContainer $leftFraction="1.2fr" $rightFraction="1.8fr">
          <Transfer />
          <Balance />
        </SubSectionContainer>
      </div>
    </section>
  );
}
