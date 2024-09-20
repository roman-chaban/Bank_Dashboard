import { CardClassNames } from '@/components/cards/Card';
import styles from '@/styles/components/Cards.module.scss';

export const cardClassNames: CardClassNames = {
  card: styles.card,
  cardAdditionalInformation: styles.card__additionalInformation,
  cardContainer: styles.card__container,
  cardBalance: styles.card__balance,
  cardCash: styles.card__cash,
  cardHeader: styles.card__header,
  cardMain: styles.card__main,
  cardHolder: styles.card__holder,
  holderTitle: styles.holder__title,
  holder: styles.holder,
  cardNumber: styles.card__number,
  cardImage: styles.card__image,
  payImage: styles.pay__image,
};

export const whiteCardClassNames: CardClassNames = {
  card: styles.whiteCard,
  cardAdditionalInformation: styles.whiteCard__additionalInformation,
  cardContainer: styles.whiteCard__container,
  cardBalance: styles.card__balanceWhite,
  cardCash: styles.card__cashWhite,
  cardHeader: styles.card__header,
  cardMain: styles.card__mainWhite,
  cardHolder: styles.card__holder,
  holderTitle: styles.holder__titleWhite,
  holder: styles.holder__white,
  cardNumber: styles.card__numberWhite,
  cardImage: styles.card__image,
  payImage: styles.pay__image,
};
