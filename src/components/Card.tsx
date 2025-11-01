'use client';
import styled from 'styled-components';

const Container = styled.div`
  padding: ${16 / 16}rem ${24 / 16}rem;
  border-radius: ${8 / 16}rem;

  box-shadow: var(--shadow);
  background-color: var(--color);
`;

const shadowMapper = {
  small: 'var(--shadow-s)',
  medium: 'var(--shadow-m)',
  large: 'var(--shadow-l)'
};

const colorMapper = {
  '1': 'var(--color-bg-1)',
  '2': 'var(--color-bg-2)',
  '3': 'var(--color-bg-3)'
};

type CardProps = {
  children: React.ReactNode;
  shadow?: 'small' | 'medium' | 'large';
  color?: '1' | '2' | '3';
};

const Card = ({ children, shadow = 'small', color = '2' }: CardProps) => {
  return (
    <Container
      style={
        {
          '--shadow': shadowMapper[shadow],
          '--color': colorMapper[color]
        } as React.CSSProperties
      }
    >
      {children}
    </Container>
  );
};

export default Card;
