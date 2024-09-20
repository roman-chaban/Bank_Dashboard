import type { FC } from 'react';
import styles from '@/styles/components/ActivityTable.module.scss';

export const ActivityTable: FC = () => {
  return (
    <div className={styles['activityTable']}>
      <div className={styles['table__container']}>
        <div className={styles['deposit__block']}>
          <h4 className={styles['deposit__title']}>Deposit</h4>
          <h4 className={styles['withdraw__title']}>Withdraw</h4>
        </div>
        <div className={styles['activity__graphic']}></div>
      </div>
    </div>
  );
};
