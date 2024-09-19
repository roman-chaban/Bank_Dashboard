import React, { FC, memo } from 'react';
import styles from '@/styles/components/SkeletonCard.module.scss';

interface SkeletonCardProps {
  isWhite?: boolean;
}

export const SkeletonCard: FC<SkeletonCardProps> = ({ isWhite = false }) => {
  return (
    <div
      className={
        isWhite ? styles['skeleton-card--white'] : styles['skeleton-card']
      }
      aria-hidden="true"
    >
      <div className={styles['skeleton-card__header']}>
        <div className={styles['skeleton-balance']}></div>
        <div className={styles['skeleton-icon']}></div>
      </div>
      <div className={styles['skeleton-card__main']}>
        <div className={styles['skeleton-info']}>
          <div className={styles['skeleton-holder']}></div>
          <div className={styles['skeleton-valid']}></div>
        </div>
        <div className={styles['skeleton-info']}>
          <div className={styles['skeleton-holder']}></div>
          <div className={styles['skeleton-valid']}></div>
        </div>
      </div>
      <div className={styles['skeleton-card__footer']}>
        <div className={styles['skeleton-number']}></div>
        <div className={styles['skeleton-paymethod']}></div>
      </div>
    </div>
  );
};

export default memo(SkeletonCard);
