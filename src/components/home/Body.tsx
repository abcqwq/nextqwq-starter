'use client';
import styled from 'styled-components';
import Item from '@/components/home/Item';
import Card from '@/components/Card';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: ${16 / 16}rem;
`;

const Body = () => {
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
    </Container>
  );
};

export default Body;
