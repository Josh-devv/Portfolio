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
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const element = useRef(null);
  useFadeUpEffect(element);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`${VITE_API_SERVER}/project`);
            const data = await response.json();

            // Fetch images for each project
            const projectsWithImages = data.projects.map(project => {
                return {
                    ...project,
                    imageUrl: `${VITE_API_SERVER}${project.images}`
                };
            });

            setProjects(projectsWithImages);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    fetchData();
  }, []);

  useEffect(() => {
    document.title = 'Projects | Sofela Joshua';

    return () => {
      document.title = 'Sofela Joshua | Frontend Developer';
    };
  }, []);

  return (
    <section ref={element} className="fade translate-y-[100px] opacity-5">
      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <h2 className="text-3xl font-bold dark:text-white">Projects</h2>
        <p className="my-6">
          Among countless projects, these are my proudest achievements — <span className="italic">a testament to my dedication and creativity.</span>
        </p>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} containerClassName="bg-zinc-50 p-4 rounded-lg dark:bg-zinc-800" height={60} borderRadius={'10px'} baseColor="gray" />
            ))
          ) : (
            projects.map((project, i) => (
              <Link key={i} to={`/projects/${project.id}`} className="border border-transparent bg-zinc-50 flex items-center gap-3 hover:border-gray-200 cursor-pointer p-4 rounded-lg dark:bg-zinc-800 dark:hover:border-zinc-600">
                <div className="bg-gray-100 p-2 rounded-md w-16 h-16 sm:w-32 sm:h-32 flex items-center justify-center">
                  <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium mb-2 dark:text-white">{project.name}</h4>
                  <p className="text-sm dark:text-white">{project.tagline}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
