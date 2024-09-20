import type { FC } from 'react';
import { CardData } from './Cards';
import Image from 'next/image';

export interface CardClassNames {
  card: string;
  cardContainer: string;
  cardAdditionalInformation: string;
  cardHeader: string;
  cardBalance: string;
  cardCash: string;
  cardMain: string;
  cardHolder: string;
  holderTitle: string;
  holder: string;
  cardNumber: string;
  cardImage: string;
  payImage: string;
}

interface CardProps {
  classNames: CardClassNames;
  cardSettings: CardData;
}

export const Card: FC<CardProps> = ({ classNames, cardSettings }) => {
  return (
    <div className={classNames.card}>
      <div className={classNames.cardContainer}>
        <div className={classNames.cardHeader}>
          <h5 className={classNames.cardCash}>
            <span className={classNames.cardBalance}>Balance</span>$
            {cardSettings.cardBalance}
          </h5>
          <Image
            src={cardSettings.icon}
            alt="Chip Icon"
            width={34}
            height={34}
            loading={'lazy'}
            className={classNames.payImage}
          />
        </div>
        <div className={classNames.cardMain}>
          <div className={classNames.cardHolder}>
            <h4 className={classNames.holderTitle}>CARD HOLDER</h4>
            <span className={classNames.holder}>{cardSettings.cardHolder}</span>
          </div>
          <div className={classNames.cardHolder}>
            <h4 className={classNames.holderTitle}>VALID THRU</h4>
            <span className={classNames.holder}>{cardSettings.validThru}</span>
          </div>
        </div>
        <div className={classNames.cardAdditionalInformation}>
          <h3 className={classNames.cardNumber}>{cardSettings.cardNumber}</h3>
          <Image
            src={cardSettings.payMethod}
            alt="Pay method Icon"
            width={44}
            height={30}
            loading={'lazy'}
            className={classNames.cardImage}
          />
        </div>
      </div>
    </div>
  );
};
