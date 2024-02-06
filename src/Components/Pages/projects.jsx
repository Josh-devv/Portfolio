import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
const { VITE_API_SERVER } = import.meta.env;
import useFadeUpEffect from '../Hooks/fadeUp';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useFetch from '../Hooks/useFetch';
import { useQuery } from '@tanstack/react-query';


export default function Projects() {

  const { data } = useFetch(`${VITE_API_SERVER}/project`, 'getProjects');
  console.log();
  const { projects } = data || {};
  //const [loading, setLoading] = useState(true);
  const element = useRef(null);
  useFadeUpEffect(element);
  
  useEffect(() => {
    document.title = 'Projects | Sofela Joshua';
    return () => {
      document.title = 'Sofela Joshua | Frontend Developer';
    };
  }, []);



  const project =
    projects?.map((data, id) => {
      console.log(data.images);
      return (
        <Link key={id} to={data.id} className="border border-transparent bg-zinc-50 flex items-center gap-3 hover:border-gray-200 cursor-pointer p-4 rounded-lg dark:bg-zinc-800 dark:hover:border-zinc-600">
          <div className="bg-gray-100 p-2 rounded-md flex items-center justify-center">
            {data.images.map((imageUrl, index) => (
              <img key={index} src={`${VITE_API_SERVER}${imageUrl}`} alt="Project Image" className="w-16 h-16 object-cover" />
            ))}
          </div>
          <div>
            <h4 className="font-medium mb-2 dark:text-white">{data.title}</h4>
            <p className="text-sm dark:text-white">{data.tagline}</p>
          </div>
        </Link>
      );
    }) || [];

  return (
    <section ref={element} className="fade translate-y-[100px] opacity-5">
      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <h2 className="text-3xl font-bold dark:text-white">Projects</h2>
        <p className="my-6">
          Among countless projects, these are my proudest achievements — <span className="italic">a testament to my dedication and creativity.</span>
        </p>

        <section className={`projects ${project?.length <= 0 ? 'flex' : 'grid'} items-center justify-center`}>
          {project?.length > 0 ? project : <Skeleton containerClassName="flex-1" count={5} height={60} borderRadius={'10px'} baseColor="gray" />}
        </section>
      </div>
    </section>
  );
}
