import type { FC } from 'react';
import styles from '@/styles/components/Header.module.scss';
import Image from 'next/image';
import { HeaderNav } from '../HeaderNav/HeaderNav';

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__container']}>
        <div className={styles['header__logo']}>
          <Image
            src="/favicon/dashboard.svg"
            alt="Dashboard Logo"
            width={36}
            height={36}
            className={styles['header__logo_image']}
          />
          <h3 className={styles['header__logo_dashboard']}>BankDash</h3>
        </div>
        <HeaderNav />
      </div>
    </header>
  );
};
