'use client';
import styled from 'styled-components';
import Item from '@/components/home/Item';
import Card from '@/components/Card';
import Button from '@/components/Button';

import { useTheme } from '@/providers/ThemeProvider';

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  gap: ${16 / 16}rem;
`;

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

      <Button onClick={toggleTheme}>button</Button>
    </Container>
  );
};

export default Body;
