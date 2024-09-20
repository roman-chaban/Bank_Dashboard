import type { FC } from 'react';
import styles from '@/styles/components/WeeklyActivity.module.scss';
import { ActivityTable } from './ActivityTable';

export const WeeklyActivity: FC = () => {
  return (
    <div className={styles['weekly__activity']}>
      <div className={styles['weeklyActivity__container']}>
        <h3 className={styles['activity__title']}>Weekly Activity</h3>
        <ActivityTable />
      </div>
    </div>
  );
};
