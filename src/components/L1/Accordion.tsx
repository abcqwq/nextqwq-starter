'use client';
import styled from 'styled-components';
import useMeasureHeight from '@/hooks/use-measure-height';
import React from 'react';

import { ChevronDown } from 'lucide-react';

const Container = styled.div``;

const ItemContainer = styled.div``;

const ItemHeader = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  font: inherit;
  color: inherit;

  padding: ${12 / 16}rem;
  border-radius: ${6 / 16}rem;
  &:hover {
    cursor: pointer;
    background-color: var(--color-bg-3);
  }

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChevronDownStyled = styled(ChevronDown)`
  margin-left: auto;
  transition: transform 0.3s ease;

  transform: rotate(var(--rotate, 0deg));
`;

const ItemContent = styled.div`
  overflow: hidden;
  transition: height 0.3s ease;
  padding: 0 ${12 / 16}rem;
`;

export type AccordionItem = {
  _id?: string;
  title: string;
  content: React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Item = ({
  title,
  content,
  active,
  onClickHeader
}: AccordionItem & { active: boolean; onClickHeader: () => void }) => {
  const { ref, getHeight } = useMeasureHeight();

  const calculateContentHeight = () => {
    return active ? getHeight() : 0;
  };

  return (
    <ItemContainer>
      <ItemHeader onClick={onClickHeader}>
        {title}{' '}
        <ChevronDownStyled
          size={16}
          style={
            {
              '--rotate': active ? '180deg' : '0deg'
            } as React.CSSProperties
          }
        />
      </ItemHeader>
      <ItemContent
        ref={ref}
        style={
          {
            height: `${calculateContentHeight()}px`
          } as React.CSSProperties
        }
      >
        {content}
      </ItemContent>
    </ItemContainer>
  );
};

const Accordion = ({ items }: AccordionProps) => {
  items.forEach((item) => {
    if (!item._id) {
      item._id = crypto.randomUUID();
    }
  });

  const [activeItemId, setActiveItemId] = React.useState<string>('');
  const toggleActiveItem = (id: string) => {
    setActiveItemId((prevId) => (prevId === id ? '' : id));
  };

  return (
    <Container>
      {items.map((item) => (
        <Item
          key={item._id}
          {...item}
          active={activeItemId === item._id}
          onClickHeader={() => toggleActiveItem(item._id || '')}
        />
      ))}
    </Container>
  );
};

export default Accordion;
