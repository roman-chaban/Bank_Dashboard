/* eslint-disable react/display-name */
import { memo, type FC } from 'react';
import styles from '@/styles/components/DashboardMenu.module.scss';
import { ListItem, sidebarNavigationItems } from '@/data/sidebarItems';
import { DashboardMenuItem } from '../DashboardMenuItem/DashboardMenuItem';

interface DashboardMenuProps {}

export const DashboardMenu: FC<DashboardMenuProps> = memo(({}) => {
  return (
    <nav className={styles.dashboard__nav}>
      <ul className={styles.dashboard__menu}>
        {sidebarNavigationItems.map((item: ListItem) => (
          <DashboardMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
});
