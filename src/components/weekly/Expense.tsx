import type { FC } from 'react';
import styles from '@/styles/components/Expense.module.scss';

export const Expense: FC = () => {
  return (
    <div className={styles['expense']}>
      <div className={styles['expense__container']}>
        <h3 className={styles['expense__title']}>Expense Statistics</h3>
        <div className={styles['expense__block']}>
          <div className={styles['triangle__container']}>
            <div className={styles['content__block']}>
              <span className={styles['content__percent']}>30%</span>
              <h4 className={styles['content__tittle']}>Entertainment</h4>
            </div>
          </div>
          <div className={styles['orangeTriangle__container']}>
            <div
              className={styles['content__block']}
              id={styles['orange__block']}
            >
              <span className={styles['content__percent']}>15%</span>
              <h4 className={styles['content__tittle']}>Bill Expense</h4>
            </div>
          </div>
          <div className={styles['blueTriangle__container']}>
            <div
              className={styles['content__block']}
              id={styles['blue__block']}
            >
              <span className={styles['content__percent']}>35%</span>
              <h4 className={styles['content__tittle']}>Others</h4>
            </div>
          </div>
          <div className={styles['pinkTriangle__container']}>
            <div className={styles['content__block']}>
              <span className={styles['content__percent']}>20%</span>
              <h4 className={styles['content__tittle']}>Investment</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
