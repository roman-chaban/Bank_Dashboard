export interface BalanceColumnItem {
  id: number;
  label: string;
}

export type BalanceColumn = Array<BalanceColumnItem>;

export const balanceColumnItems: BalanceColumn = [
  {
    id: 1,
    label: '800',
  },
  {
    id: 2,
    label: '600',
  },
  {
    id: 3,
    label: '400',
  },
  {
    id: 4,
    label: '200',
  },
  {
    id: 5,
    label: '0',
  },
];
