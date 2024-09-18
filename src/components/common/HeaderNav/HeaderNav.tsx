'use client';

import { ChangeEvent, useMemo, useState, type FC } from 'react';
import styles from '@/styles/components/HeaderNav.module.scss';
import { Input } from '@/components/ui/Input/Input';
import { Button } from '@/components/ui/Button/Button';
import { buttonIcons } from '@/data/buttonIcons';
import { inputIcon } from '@/data/inputIcon';



const classNames = {
  label: styles.searchLabel,
  labelText: styles.searchLabelText,
  input: styles.searchInput,
};

export const HeaderNav: FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const memoizedButtonIcons = useMemo(() => buttonIcons, []);
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className={styles.header__nav}>
      <h3 className={styles.overview__title}>Overview</h3>
      <div className={styles.header__menu}>
        <Input
          inputIcon={inputIcon}
          properties={{
            htmlFor: 'search',
            id: 'search',
            name: 'search',
            type: 'text',
            placeholder: 'Search for something',
            value: searchValue,
            onChange: handleChangeValue,
          }}
          classNames={classNames}
        />
        {memoizedButtonIcons.map((icon) => (
          <Button
            type="button"
            className={styles.header__menu_button}
            key={icon.iconId}
          >
            {icon.icon}
          </Button>
        ))}
      </div>
    </nav>
  );
};
