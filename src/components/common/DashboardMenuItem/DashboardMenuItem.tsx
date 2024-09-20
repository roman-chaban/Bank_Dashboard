import type { FC } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/DashboardMenuItem.module.scss';

interface DashboardMenuItemProps {
  item: { label: string; href: string; icon: JSX.Element };
}

export const DashboardMenuItem: FC<DashboardMenuItemProps> = ({ item }) => {
  return (
    <li className={styles['menu__list_item']}>
      {item.icon}
      <Link href={item.href} className={styles['menu__list_link']}>
        {item.label}
      </Link>
    </li>
  );
};
