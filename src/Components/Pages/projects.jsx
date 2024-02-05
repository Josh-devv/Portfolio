import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useFadeUpEffect from '../Hooks/fadeUp';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useFetch from '../Hooks/useFetch';

const apiUrl = "http://localhost:3000/api";

const ProjectItem = ({ data }) => (
  <Link to={`/projects/${data.id}`} className="border border-transparent bg-zinc-50 flex items-center gap-3 hover:border-gray-200 cursor-pointer p-4 rounded-lg dark:bg-zinc-800 dark:hover:border-zinc-600">
    <div className="bg-gray-100 p-2 rounded-md min-w-[60px] min-h-[60px] flex items-center justify-center">
      {data.images.map((image, index) => (
        <img key={index} src={`http://localhost:3000${image}`} alt={`Project ${data.name} Image ${index}`} className="w-[60px]" />
      ))}
    </div>
    <div>
      <h4 className="font-medium mb-2 dark:text-white">{data.name}</h4>
      <p className="text-sm dark:text-white">{data.tagline}</p>
    </div>
  </Link>
);

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const element = useRef(null);
  useFadeUpEffect(element);

  useEffect(() => {
    document.title = 'Projects | Sofela Joshua';

    return () => {
      document.title = 'Sofela Joshua | Fullstack Engineer';
    };
  }, []);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('API Data:', data);
        setProjects(data?.projects || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
        // Display a user-friendly error message to the user
      });
  }, []);

  return (
    <section ref={element} className="fade translate-y-[100px] pt-5 max-md:pb-0 pb-24 opacity-5">
      <div className="max-w-7xl mx-auto px-8 xl:px-0">
        <h2 className="text-3xl font-bold dark:text-white">Projects</h2>
        <p className="my-6">
          Among countless projects, these are my proudest achievements — <span className="italic">a testament to my dedication and creativity.</span>
        </p>

        <section className={`projects ${projects.length === 0 ? 'flex' : 'grid'} items-center justify-center`}>
          {loading ? (
            <Skeleton containerClassName="flex-1" count={5} height={60} borderRadius={'10px'} baseColor="gray" />
          ) : (
            projects.map((data, i) => <ProjectItem key={i} data={data} />)
          )}
        </section>
      </div>
    </section>
  );
};

export default Projects;
