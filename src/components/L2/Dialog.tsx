'use client';
import styled from 'styled-components';
import Modal from '@/components/L1/Modal';
import Button from '@/components/L1/Button';

const Container = styled.div`
  display: grid;
  gap: ${16 / 16}rem;
`;

const ContentWrapper = styled.div`
  display: grid;
  gap: ${8 / 16}rem;
`;

const Header = styled.div``;

const Body = styled.div`
  color: var(--color-text-2);
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${8 / 16}rem;
`;

export type DialogAction = {
  label: string;
  onClick: () => void;
  category?: 'primary' | 'secondary';
};

type DialogProps = {
  active: boolean;

  header?: string;
  children: React.ReactNode;
  actions?: DialogAction[];
};

const Dialog = ({ active, header, children, actions }: DialogProps) => {
  return (
    <Modal active={active}>
      <Container>
        <ContentWrapper>
          {header && <Header>{header}</Header>}
          <Body>{children}</Body>
        </ContentWrapper>

        <Footer>
          {actions?.map((action, index) => (
            <Button key={index} onClick={action.onClick}>
              {action.label}
            </Button>
          ))}
        </Footer>
      </Container>
    </Modal>
  );
};

export default Dialog;
