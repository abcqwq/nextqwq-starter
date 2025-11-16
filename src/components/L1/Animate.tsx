'use client';
import styled from 'styled-components';
import useExitAnimation from '@/hooks/use-exit-delay';

const Container = styled.div<{ $animation: any; $duration: number }>`
  position: fixed;
  inset: 0;
  pointer-events: none;

  & > * {
    pointer-events: auto;
    animation: ${({ $animation }) => $animation}
      ${({ $duration }) => $duration}ms ease forwards;
  }
`;

type AnimateProps = {
  children: React.ReactNode;

  active: boolean;
  duration?: number;

  animationIn: any;
  animationOut: any;
};

const Animate = ({
  children,
  active,
  duration = 5000,
  animationIn,
  animationOut
}: AnimateProps) => {
  const { rendered, closing } = useExitAnimation(active, duration);

  if (!rendered) return null;

  return (
    <Container
      $animation={closing ? animationOut : animationIn}
      $duration={duration}
    >
      {children}
    </Container>
  );
};

export default Animate;
