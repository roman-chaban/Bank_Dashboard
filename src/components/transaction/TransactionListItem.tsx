import type { FC } from 'react';
import Image from 'next/image';
import styles from '@/styles/components/Transaction.module.scss';

interface TransactionListItemProps {
  listItem: {
    icon: string;
    title: string;
    subtitle: string;
    price: number;
  };
}

export const TransactionListItem: FC<TransactionListItemProps> = ({
  listItem,
}) => {
  return (
    <div className={styles['listItem']}>
      <Image
        src={listItem.icon}
        alt={listItem.title}
        width={55}
        height={55}
        className={styles['listItem__image']}
      />
      <li className={styles['listItem__item']}>
        <h3 className={styles['listItem__title']}>{listItem.title}</h3>
        <p className={styles['listItem__subtitle']}>{listItem.subtitle}</p>
      </li>
      <span
        className={styles['listItem__price']}
        style={{ color: listItem.price > 0 ? '#41d4a8 ' : '#ff4b4a' }}
      >
        {listItem.price > 0 ? '+' : ''}
        {listItem.price}$
      </span>
    </div>
  );
};
