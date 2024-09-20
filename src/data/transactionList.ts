export interface TransactionListItem {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  price: number;
}

export const transactionList: TransactionListItem[] = [
  {
    id: 1,
    icon: '/images/transaction-icons/first.svg',
    title: 'Deposit from my Card',
    subtitle: '28 January 2024',
    price: -850,
  },
  {
    id: 2,
    icon: '/images/transaction-icons/second.svg',
    title: 'Deposit Paypal',
    subtitle: '25 January 2024',
    price: 2500,
  },
  {
    id: 3,
    icon: '/images/transaction-icons/third.svg',
    title: 'John Wilson',
    subtitle: '21 January 2024',
    price: 5400,
  },
];
