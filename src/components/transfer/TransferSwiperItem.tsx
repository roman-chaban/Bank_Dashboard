import Image from 'next/image';
import { FC } from 'react';
import styles from '@/styles/components/TransferSwiperItem.module.scss';
import { Item } from '@/data/transferList';

interface TransferSwiperItemProps {
  item: Item;
}

export const TransferSwiperItem: FC<TransferSwiperItemProps> = ({ item }) => {
  return (
    <li className={styles['items__list--item']}>
      <Image
        src={item.icon}
        alt={item.title}
        width={50}
        height={50}
        className={styles['item__image']}
      />
      <h5 className={styles['item__title']}>{item.title}</h5>
      <span className={styles['item__role']}>{item.role}</span>
    </li>
  );
};
