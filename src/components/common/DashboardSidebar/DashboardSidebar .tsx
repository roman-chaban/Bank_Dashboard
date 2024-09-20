import type { FC } from 'react';
import styles from '@/styles/components/DashboardSidebar.module.scss';
import { DashboardMenu } from '../DashboardMenu/DashboardMenu';

interface DashboardSidebarProps {}

export const DashboardSidebar: FC<DashboardSidebarProps> = () => {
  return (
    <aside className={styles['dashboardSidebar']}>
      <div className={styles['dashboardSidebar__container']}>
        <DashboardMenu />
      </div>
    </aside>
  );
};
