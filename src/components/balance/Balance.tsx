import type { FC } from 'react';
import styles from '@/styles/components/Balance.module.scss';
import { BalanceColumnItem, balanceColumnItems } from '@/data/balanceColumn';
import { BalanceRowItem, balanceRowItems } from '@/data/balanceRow';

export const Balance: FC = () => {
  return (
    <div className={styles['balance']}>
      <div className={styles['balance__container']}>
        <h3 className={styles['balance__title']}>Balance History</h3>
        <div className={styles['balance__table']}>
          <ul className={styles['balance__column']}>
            {balanceColumnItems.map((item: BalanceColumnItem) => (
              <>
                <li key={item.id} className={styles['balance__column--item']}>
                  {item.label}
                  <span className={styles['line']}></span>
                </li>
              </>
            ))}
          </ul>
          <ul className={styles['balance__row']}>
            {balanceRowItems.map((item: BalanceRowItem) => (
              <>
                <li key={item.id} className={styles['balance__row--item']}>
                  {item.label}
                <span className={styles['line__up']}></span>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
