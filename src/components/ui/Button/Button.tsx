import type { FC, ReactNode } from 'react';

type ButtonTypes = 'button' | 'submit' | 'reset';

interface ButtonProps {
  type: ButtonTypes;
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, type, className }) => {
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
};
