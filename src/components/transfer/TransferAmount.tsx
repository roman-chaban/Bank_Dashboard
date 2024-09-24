'use client';

import { ChangeEvent, useState, type FC } from 'react';
import styles from '@/styles/components/TransferAmount.module.scss';
import { Input } from '../ui/Input/Input';
import { Button } from '../ui/Button/Button';
import Image from 'next/image';

export const TransferAmount: FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles['transfer__amount']}>
      <div className={styles['transfer__amount--container']}>
        <h4 className={styles['amount__title']}>Write Amount</h4>
        <div className={styles['amount__block']}>
          <Input
            properties={{
              htmlFor: 'amount',
              id: 'amount',
              name: 'amount',
              placeholder: '525.50',
              type: 'text',
              onChange: handleChange,
              value: value,
              className: styles['amount__input'],
            }}
            classNames={{
              input: '',
              label: `${styles['amount__label']}`,
              labelText: '',
            }}
          />
          <Button type="button" className={styles['sign__button']}>
            Send
            <Image
              src="/images/icons/telegram-icon.svg"
              alt="Telegram Icon"
              width={17}
              height={14}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
