'use client';
import type React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // fallback for dvh incase it isn't supported
  height: 100vh;
  height: 100dvh;

  background-color: var(--color-background);
  color: var(--color-text);
`;

const Center = ({ children }: { children: React.ReactNode }) => {
  return <Container>{children}</Container>;
};

export default Center;
