'use client';
import { useQuery } from '@tanstack/react-query';
import Center from '@/components/center/center';
import { getTodosQueryOption } from '@/network/api/get-todos';

const Page = () => {
  const { data, isSuccess, isError, isLoading } = useQuery(
    getTodosQueryOption()
  );

  return (
    <Center>
      <p>hola</p>
      {JSON.stringify(data)}
      {isSuccess && <p>Data fetched successfully!</p>}
      {isError && <p>Error fetching data.</p>}
      {isLoading && <p>Loading...</p>}
    </Center>
  );
};

export default Page;
