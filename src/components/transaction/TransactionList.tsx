import { transactionList } from '@/data/transactionList';
import type { FC } from 'react';
import { TransactionListItem } from './TransactionListItem';
import styles from '@/styles/components/Transaction.module.scss';

export const TransactionList: FC = () => {
  return (
    <ul className={styles['transaction__list']}>
      {transactionList.map((listItem) => (
        <TransactionListItem key={listItem.id} listItem={listItem} />
      ))}
    </ul>
  );
};
