'use client';

import styled from 'styled-components';

interface SubSectionContainerProps {
  $leftFraction?: string;
  $rightFraction?: string;
}

export const SubSectionContainer = styled.div<SubSectionContainerProps>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({
    $leftFraction = '2fr',
    $rightFraction = '1fr',
  }) => `${$leftFraction} ${$rightFraction}`};
  gap: 30px;
`;
