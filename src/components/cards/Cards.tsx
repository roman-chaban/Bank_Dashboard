'use client';

import type { FC } from 'react';
import styles from '@/styles/components/Cards.module.scss';
import { CardHeader } from './CardHeader';
import { cardClassNames, whiteCardClassNames } from '@/data/cardsClasses';
import { useFetch } from '@/hooks/useFetch';
import { Card } from './Card';
import { SkeletonCard } from './SkeletonCard';

export interface CardData {
  cardBalance: number;
  icon: string;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  payMethod: string;
}

interface CardsProps {}

export const Cards: FC<CardsProps> = ({}) => {
  const { data, error, loading } = useFetch<CardData[]>({
    url: 'services/cards.json',
  });

  if (loading)
    return (
      <div className={styles.skeleton__container}>
        <SkeletonCard />
        <SkeletonCard isWhite />
      </div>
    );
  if (error)
    return (
      <div className={styles.error}>
        Unable to load cards. Please try again later.
      </div>
    );

  return (
    <div className={styles.cards}>
      <div className={styles.cards__container}>
        <CardHeader />
        <div className={styles.payCards}>
          {data && data.length > 0 && (
            <>
              <Card classNames={cardClassNames} cardSettings={data[0]} />
              <Card classNames={whiteCardClassNames} cardSettings={data[1]} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
