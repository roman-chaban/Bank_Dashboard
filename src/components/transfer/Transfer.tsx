import type { FC } from 'react';
import styles from '@/styles/components/Transfer.module.scss';
import { TransferSwiper } from './TransferSwiper';
import { TransferAmount } from './TransferAmount';

interface TransferProps {}

export const Transfer: FC<TransferProps> = ({}) => {
  return (
    <div className={styles['transfer']}>
      <h3 className={styles['transfer__title']}>Quick Transfer</h3>
      <div className={styles['transfer__container']}>
        <TransferSwiper />
        <TransferAmount />
      </div>
    </div>
  );
};
