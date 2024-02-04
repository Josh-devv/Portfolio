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

// ?Todo

// * 1) Add Nexilistings and current Project to the API
// * 2) Get the smaller versions of each images rendered on the projects page
// * 3) Implement lazy loading for the images in the projects page and the image on the about page.