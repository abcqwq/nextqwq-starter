'use client';
import styled from 'styled-components';
import Animate from '@/components/L1/Animate';

import { fadeIn, fadeOut } from '@/animations/fade';

const OuterContainer = styled.div`
  background-color: hsla(0, 0%, 0%, 0.5);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;
  z-index: 2;
  isolation: isolate;

  contain: layout style paint;
`;

const Container = styled.div`
  background-color: var(--color-bg-2);

  border-radius: ${10 / 16}rem ${10 / 16}rem;
  padding: ${24 / 16}rem ${24 / 16}rem;
`;

type ModalProps = {
  active: boolean;
  children: React.ReactNode;
};

const Modal = ({ active, children }: ModalProps) => {
  return (
    <Animate
      active={active}
      animationIn={fadeIn}
      animationOut={fadeOut}
      duration={300}
    >
      <OuterContainer>
        <Container>{children}</Container>
      </OuterContainer>
    </Animate>
  );
};

export default Modal;
