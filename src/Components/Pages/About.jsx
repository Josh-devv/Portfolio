/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//import CV from '../../assets/Resume.pdf';
import fadeUp from '../Hooks/fadeUp'


export default function About() {
  const element = useRef(null);
  fadeUp(element);

  useEffect(() => {
    document.title = 'About | Sofela Joshua';

    return () => {
      document.title = 'Sofela Joshua | Frontend Developer';
    };
  }, []);

  return (
    <section ref={element} className="fade translate-y-[110px]  opacity-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse xl:flex-row items-center xl:items-start justify-between px-8 xl:px-0">
          <div className="max-w-full xl:max-w-[50%]">
            <h2 className="font-bold text-lg xl:text-3xl dark:text-white">Hi there!, I'm Sofela Joshua, a Frontend developer and a Computer Science student based in Lagos, Nigeria. Driven to create cutting-edge solutions.</h2>

            <p className="my-6 text-sm xl:text-base">
              I'm a versatile frontend developer and a trader in Lagos, Nigeria. I bring a passion for creating effective and innovative solutions, websites and solving complex problems through code. As a developer, I've honed my skills in
              ReactJS and Typescript for building dynamic and interactive user interfaces. Adept at utilizing TailwindCSS and Bootstrap to create responsive and visually appealing designs.
              <br />
              
              <br />
              Let's collaborate and turn ideas into reality!
            </p>

            <section className="skills my-10">
              <h2 className="font-bold text-xl xl:text-2xl mb-6 dark:text-white">Noteworthy Skills and Attribute</h2>

              <ul>
                <li>
                  <span className="font-bold dark:text-white">Attention to Detail:</span> <span>I derive satisfaction from crafting meticulous designs and user interfaces, placing a strong emphasis on quality to ensure a polished end product.</span>
                </li>

                <li className="my-6">
                  <span className="font-bold dark:text-white">Self motivated & Independent:</span>{' '}
                  <span>
                    Recognizing the value of time and efficiency, I excel in delivering assignments and projects with minimal supervision. My proactive approach allows you the freedom to trust in the quality and timeliness of my work, eliminating the
                    need for constant oversight.
                  </span>
                </li>

                <li>
                  <span className="font-bold dark:text-white">Collaboration Advocate:</span>{' '}
                  <span>
                    Beyond individual excellence, I believe in the power of collaboration. Whether it's contributing to a team project or fostering a sense of community, I bring a collaborative spirit that enhances the collective success of any
                    endeavor.
                  </span>
                </li>

                <li className="my-6">
                  <span className="font-bold dark:text-white">Continous Learner:</span>{' '}
                  <span>
                    In the ever-evolving landscape of technology, I am committed to continuous learning. Staying abreast of the latest industry trends and technologies ensures that my skills remain cutting-edge, contributing to the overall success of
                    the projects I undertake.
                  </span>
                </li>

                <li>
                  <span className="font-bold dark:text-white">Effective Communication:</span>{' '}
                  <span>Clear and concise communication is integral to project success. I possess strong communication skills, facilitating smooth collaboration with team members and stakeholders, ensuring everyone is on the same page.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-xl xl:text-2xl mb-6 dark:text-white">Usage</h2>
              <p>Tools, technologies and gadgets I use but not limited to.</p>

              <div className="my-10">
                <h3 className="font-bold text-lg xl:text-xl mb-3 dark:text-white">Technologies</h3>
                <div className="flex items-center flex-wrap xl:items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg fill="#61dbfb" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512">
                      <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                    </svg>

                    <a href="https://react.dev/" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      React
                    </a>
                  </div>

                  <span>- Javascript Framework</span>
                </div>

                <div className="flex items-center flex-wrap xl:items-center gap-2 my-6">
                  <div className="flex items-center gap-1">
                    <svg fill="yellow" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 448 512">
                      <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                    </svg>

                    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Javascript
                    </a>
                  </div>

                  <span>- Programming Language</span>
                </div>

                <div className="flex items-center flex-wrap xl:items-center gap-2 my-6">
                  <div className="flex items-center gap-1">
                    <img src="/typescript.png" alt="typescript logo" className="w-[15px] h-[15px]" />

                    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Typescript
                    </a>
                  </div>

                  <span>- Dynamic Typed language (Extends Javascript)</span>
                </div>

                <div className="flex items-center flex-wrap xl:items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 496 512">
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>

                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Github
                    </a>
                  </div>

                  <span className="text-center xl:text-left">- Cloud based version control</span>
                </div>

                <div className="flex items-center flex-wrap xl:items-center gap-2 my-6">
                  <div className="flex items-center gap-1">
                    <svg fill="#3E2C00" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 448 512">
                      <path d="M439.6 236.1L244 40.5a28.9 28.9 0 0 0 -40.8 0l-40.7 40.6 51.5 51.5c27.1-9.1 52.7 16.8 43.4 43.7l49.7 49.7c34.2-11.8 61.2 31 35.5 56.7-26.5 26.5-70.2-2.9-56-37.3L240.2 199v121.9c25.3 12.5 22.3 41.9 9.1 55a34.3 34.3 0 0 1 -48.6 0c-17.6-17.6-11.1-46.9 11.3-56v-123c-20.8-8.5-24.6-30.7-18.6-45L142.6 101 8.5 235.1a28.9 28.9 0 0 0 0 40.8l195.6 195.6a28.9 28.9 0 0 0 40.8 0l194.7-194.7a28.9 28.9 0 0 0 0-40.8z" />
                    </svg>

                    <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Git
                    </a>
                  </div>

                  <span>- Version control system</span>
                </div>

                <div className="flex items-center flex-wrap xl:items-center gap-2">
                  <div className="flex items-center gap-1">
                    <svg fill=" #c69" xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512">
                      <path d="M301.8 378.9c-.3 .6-.6 1.1 0 0zm249.1-87a131.2 131.2 0 0 0 -58 13.5c-5.9-11.9-12-22.3-13-30.1-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9a122.8 122.8 0 0 0 -5.3 19.1c-2.3 11.7-25.8 53.5-39.1 75.3-4.4-8.5-8.1-16-8.9-22-1.2-9.1-2.5-14.5-1.1-25.3s7.7-26.1 7.6-27.2-1.4-6.6-14.3-6.7-24 2.5-25.3 5.9-2.7 11.4-5.3 19.1-33.9 77.3-42.1 95.4c-4.2 9.2-7.8 16.6-10.4 21.6-.4 .8-.7 1.3-.9 1.7 .3-.5 .5-1 .5-.8-2.2 4.3-3.5 6.7-3.5 6.7v.1c-1.7 3.2-3.6 6.1-4.5 6.1-.6 0-1.9-8.4 .3-19.9 4.7-24.2 15.8-61.8 15.7-63.1-.1-.7 2.1-7.2-7.3-10.7-9.1-3.3-12.4 2.2-13.2 2.2s-1.4 2-1.4 2 10.1-42.4-19.4-42.4c-18.4 0-44 20.2-56.6 38.5-7.9 4.3-25 13.6-43 23.5-6.9 3.8-14 7.7-20.7 11.4-.5-.5-.9-1-1.4-1.5-35.8-38.2-101.9-65.2-99.1-116.5 1-18.7 7.5-67.8 127.1-127.4 98-48.8 176.4-35.4 189.8-5.6 19.4 42.5-41.9 121.6-143.7 133-38.8 4.3-59.2-10.7-64.3-16.3-5.3-5.9-6.1-6.2-8.1-5.1-3.3 1.8-1.2 7 0 10.1 3 7.9 15.5 21.9 36.8 28.9 18.7 6.1 64.2 9.5 119.2-11.8 61.8-23.8 109.9-90.1 95.8-145.6C386.5 18.3 293-.2 204.6 31.2c-52.7 18.7-109.7 48.1-150.7 86.4-48.7 45.6-56.5 85.3-53.3 101.9 11.4 58.9 92.6 97.3 125.1 125.7-1.6 .9-3.1 1.7-4.5 2.5-16.3 8.1-78.2 40.5-93.7 74.7-17.5 38.8 2.9 66.6 16.3 70.4 41.8 11.6 84.6-9.3 107.6-43.6s20.2-79.1 9.6-99.5c-.1-.3-.3-.5-.4-.8 4.2-2.5 8.5-5 12.8-7.5 8.3-4.9 16.4-9.4 23.5-13.3-4 10.8-6.9 23.8-8.4 42.6-1.8 22 7.3 50.5 19.1 61.7 5.2 4.9 11.5 5 15.4 5 13.8 0 20-11.4 26.9-25 8.5-16.6 16-35.9 16-35.9s-9.4 52.2 16.3 52.2c9.4 0 18.8-12.1 23-18.3v.1s.2-.4 .7-1.2c1-1.5 1.5-2.4 1.5-2.4v-.3c3.8-6.5 12.1-21.4 24.6-46 16.2-31.8 31.7-71.5 31.7-71.5a201.2 201.2 0 0 0 6.2 25.8c2.8 9.5 8.7 19.9 13.4 30-3.8 5.2-6.1 8.2-6.1 8.2a.3 .3 0 0 0 .1 .2c-3 4-6.4 8.3-9.9 12.5-12.8 15.2-28 32.6-30 37.6-2.4 5.9-1.8 10.3 2.8 13.7 3.4 2.6 9.4 3 15.7 2.5 11.5-.8 19.6-3.6 23.5-5.4a82.2 82.2 0 0 0 20.2-10.6c12.5-9.2 20.1-22.4 19.4-39.8-.4-9.6-3.5-19.2-7.3-28.2 1.1-1.6 2.3-3.3 3.4-5C434.8 301.7 450.1 270 450.1 270a201.2 201.2 0 0 0 6.2 25.8c2.4 8.1 7.1 17 11.4 25.7-18.6 15.1-30.1 32.6-34.1 44.1-7.4 21.3-1.6 30.9 9.3 33.1 4.9 1 11.9-1.3 17.1-3.5a79.5 79.5 0 0 0 21.6-11.1c12.5-9.2 24.6-22.1 23.8-39.6-.3-7.9-2.5-15.8-5.4-23.4 15.7-6.6 36.1-10.2 62.1-7.2 55.7 6.5 66.6 41.3 64.5 55.8s-13.8 22.6-17.7 25-5.1 3.3-4.8 5.1c.5 2.6 2.3 2.5 5.6 1.9 4.6-.8 29.2-11.8 30.3-38.7 1.6-34-31.1-71.4-89-71.1zm-429.2 144.7c-18.4 20.1-44.2 27.7-55.3 21.3C54.6 451 59.3 421.4 82 400c13.8-13 31.6-25 43.4-32.4 2.7-1.6 6.6-4 11.4-6.9 .8-.5 1.2-.7 1.2-.7 .9-.6 1.9-1.1 2.9-1.7 8.3 30.4 .3 57.2-19.1 78.3zm134.4-91.4c-6.4 15.7-19.9 55.7-28.1 53.6-7-1.8-11.3-32.3-1.4-62.3 5-15.1 15.6-33.1 21.9-40.1 10.1-11.3 21.2-14.9 23.8-10.4 3.5 5.9-12.2 49.4-16.2 59.2zm111 53c-2.7 1.4-5.2 2.3-6.4 1.6-.9-.5 1.1-2.4 1.1-2.4s13.9-14.9 19.4-21.7c3.2-4 6.9-8.7 10.9-13.9 0 .5 .1 1 .1 1.6-.1 17.9-17.3 30-25.1 34.8zm85.6-19.5c-2-1.4-1.7-6.1 5-20.7 2.6-5.7 8.6-15.3 19-24.5a36.2 36.2 0 0 1 1.9 10.8c-.1 22.5-16.2 30.9-25.9 34.4z" />
                    </svg>

                    <a href="https://sass-lang.com/" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Bootstrap
                    </a>
                  </div>

                  <span></span>
                </div>

                <div className="flex items-center flex-wrap xl:items-center gap-2 my-6">
                  <div className="flex items-center gap-1">
                    <img src="/tailwind_img.jpg" alt="tailwind icon" className="w-[18px]" />

                    <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Tailwind CSS
                    </a>
                  </div>

                  <span>- CSS Framework</span>
                </div>
              </div>

              <div>
                <h2 className="text-lg xl:text-xl font-bold mb-3 dark:text-white">Tools</h2>

                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    <img src="/vscode_img.webp" alt="visual studio code icon" />

                    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Visual Studio Code
                    </a>
                  </div>

                  <span>- Text Editor</span>
                </div>

                <div className="flex items-center flex-wrap gap-2 my-6">
                  <div className="flex items-center gap-1">
                    <img src="/firefox_img.webp" alt="mozilla firefox icon" />

                    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Firefox
                    </a>
                  </div>

                  <span>- Web Browser</span>
                </div>

                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center gap-1">
                    <img src="https://www.google.com/chrome/static/images/chrome-logo.svg" alt="Google chrome icon" className="w-[15px] h-[15px]" />

                    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Google Chrome
                    </a>
                  </div>

                  <span>- Web Browser</span>
                </div>

                <div className="flex items-center flex-wrap gap-2 mt-6">
                  <div className="flex items-center gap-1">
                    <img src="/spotify_img.webp" alt="spotify icon" />

                    <a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blank" rel="noreferrer" className="underline text-blue-500 font-semibold">
                      Spotify
                    </a>
                  </div>

                  <span>- Music Streaming</span>
                </div>
              </div>
            </section>
          </div>

          <div className="mb-6 xl:mb-0 dark:text-white">
            <img src="" alt="" className="bg-zinc-200 rounded-lg w-[250px] lg:w-[500px]" />

            <div className=" flex items-center justify-between my-4">
              <Link to="resume" className="flex items-center justify-center gap-1 p-2 border-transparent border hover:border-zinc-200 cursor-pointer w-[90%] rounded-md dark:bg-zinc-800 dark:hover:border-zinc-600">
                <span className="font-bold">View Résumé</span>
                <svg fill="#3f3f46" xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 512 512">
                  <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                </svg>
              </Link>

              <a href="" download="Ayoola Abdullah Resume" className="border border-transparent hover:border-zinc-200 cursor-pointer p-3 rounded-md dark:hover:border-zinc-600">
                <svg fill="#16a34a" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>
              </a>
            </div>

            <a href="mailto:officialayo540@gmail.com" target="_blank" rel="noreferrer" className="email flex items-center gap-1 cursor-pointer">
              <svg fill="#3f3f46" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
              </svg>
              <span>sofelajoshua@gmail.com</span>
            </a>
          </div>
        </div>


        <section className="px-8 pt-10 xl:px-0">
          <h2 className="text-lg font-bold dark:text-white">Socials</h2>
          <p className="mt-3 mb-6">If you'd like to support me, you could follow my socials or buy me a coffee! ☕</p>

          <section className="socials flex-wrap max-w-full xl:max-w-[80%] pt-10 text-sm">
            <a href="https://twitter.com/officialayo540" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-md hover:bg-zinc-200 dark:bg-zinc-800 dark:border-gray-800">
              <label htmlFor="myCheckBox">
                <svg fill="#1DA1F2" xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                  <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                </svg>
              </label>
              <div className="text-zinc-600 font-medium dark:text-white">Twitter</div>
            </a>

            <a href="https://github.com/abdullah43577" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-md hover:bg-zinc-200 dark:bg-zinc-800 dark:border-gray-800">
              <label htmlFor="myCheckBox">
                <svg fill="#333" xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </label>
              <div className="text-zinc-600 font-medium dark:text-white">Github</div>
            </a>

            <a href="https://www.linkedin.com/in/ayo540/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-md hover:bg-zinc-200 dark:bg-zinc-800 dark:border-gray-800">
              <label htmlFor="myCheckBox">
                <svg fill="#0077b5" xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </label>
              <div className="text-zinc-600 font-medium dark:text-white">Linkedin</div>
            </a>

            <a href="https://www.buymeacoffee.com/ayo540" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-md hover:bg-zinc-200 dark:bg-zinc-800 dark:border-gray-800">
              <label htmlFor="myCheckBox">
                <img src="https://cdn.buymeacoffee.com/assets/logos/xmas-bmc-logo-1.5.png" alt="coffee icon" className="w-[14px]" />
              </label>
              <div className="text-zinc-600 font-medium dark:text-white">Buy me a Coffee</div>
            </a>
          </section>
        </section>
      </div>
    </section>
  );
}