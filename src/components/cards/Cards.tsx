import type { FC } from 'react';
import styles from '@/styles/components/Cards.module.scss';
import { CardHeader } from './CardHeader';

interface CardsProps {}

export const Cards: FC<CardsProps> = ({}) => {
  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <CardHeader />
      </div>
    </div>
  );
};
