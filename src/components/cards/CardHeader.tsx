import Link from 'next/link';
import { FC } from 'react';
import styles from '@/styles/components/Cards.module.scss';

export const CardHeader: FC = () => {
  return (
    <div className={styles['cards__header']}>
      <h3 className={styles['cards__title']}>My Cards</h3>
      <Link href={''} className={styles['cards__link']}>
        See All
      </Link>
    </div>
  );
};
