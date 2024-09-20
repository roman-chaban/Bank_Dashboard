import type { FC } from 'react';
import styles from '@/styles/components/Transaction.module.scss';
import { TransactionList } from './TransactionList';

export const Transaction: FC = () => {
  return (
    <div className={styles['transaction']}>
      <div className={styles['transaction__container']}>
        <h3 className={styles['transaction__title']}>Recent Transaction</h3>
        <div className={styles['transaction__block']}>
          <TransactionList />
        </div>
      </div>
    </div>
  );
};
