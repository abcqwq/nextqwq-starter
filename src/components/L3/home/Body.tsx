'use client';
import styled from 'styled-components';
import Item from '@/components/L3/home/Item';
import Card from '@/components/L1/Card';
import Button from '@/components/L1/Button';
import ProfileCard from '@/components/L1/ProfileCard';
import Link from '@/components/L1/Link';
import Accordion from '@/components/L1/Accordion';

import type { AccordionItem } from '@/components/L1/Accordion';
import { useTheme } from '@/providers/ThemeProvider';

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: ${16 / 16}rem;
`;

const accordionItems: AccordionItem[] = [
  {
    title: 'what is this?',
    content: 'this is an accordion component.'
  },
  {
    title: 'how does it work?',
    content: 'it works by toggling the visibility of content sections.'
  },
  {
    title: 'why use it?',
    content: 'to organize content in a compact and user-friendly way.'
  }
];

const Body = () => {
  const { toggleTheme } = useTheme();

  return (
    <Container>
      <Item
        title="shadow palette"
        samples={
          <>
            <Card shadow="small" color="3">
              small
            </Card>
            <Card shadow="medium" color="3">
              medium
            </Card>
            <Card shadow="large" color="3">
              large
            </Card>
          </>
        }
      />

      <ProfileCard />
      <Button onClick={toggleTheme}>button</Button>

      <Item
        title="links"
        samples={
          <>
            <Link href="/about">about</Link>
            <Link href="https://github.com/abcqwq" external={true}>
              github
            </Link>
          </>
        }
      />

      <Accordion items={accordionItems} />
    </Container>
  );
};

export default Body;
