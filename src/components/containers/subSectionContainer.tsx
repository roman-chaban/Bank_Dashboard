'use client';

import type { FC, ReactNode } from 'react';
import styled from 'styled-components';

const SubSectionContainerStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`;

export const SubSectionContainer: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <SubSectionContainerStyle>{children}</SubSectionContainerStyle>;
};
