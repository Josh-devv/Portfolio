import { useQuery } from '@tanstack/react-query';

export default function useFetch(endpoint, key) {

  
  const { isPending, error, data } = useQuery({
    queryKey: [endpoint, key],
    queryFn: async () => {
      const res = await fetch(endpoint);
      return await res.json();
    },
  });

  if (isPending) {
    console.log('ispending....');
    return { isPending };
  }

  if (error) {
    console.log('error...');
    return { error };
  }

  console.log(data);

  return { data };
}

