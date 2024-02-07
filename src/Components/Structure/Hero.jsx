import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="">
      <div className="max-w-7xl pt-20 max-sm:pt-[16] flex flex-col md:flex-row items-center justify-between mx-auto gap-8 px-5 xl:px-0">
        <section className="md:w-[50%] w-auto">
          <h2 className="text-4xl lg:text-[40px] font-bold dark:text-white">
            Frontend Developer and a Father of Two{" "}
          </h2>
          <p className="text-lg my-6 dark:text-zinc-400">
            A frontend developer with a passion for building intuitive and
            visually stunning user interfaces. With a keen eye for design and a
            knack for coding and bringing concepts to life with precision and
            elegance. Whether it's crafting responsive layouts, optimizing
            performance, or enhancing user experience, I am dedicated to
            delivering top-notch results
          </p>

          <section className="flex flex-wrap gap-4">
            <a
              href="https://github.com/josh-devv"
              target="_blank"
              rel="noreferrer"
              className="tech_stack flex items-center gap-1 border-b border-zinc-200 cursor-pointer pb-1"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="24"
                viewBox="0 0 496 512"
                className="dark:text-white"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>

              <span className="text-sm">GitHub</span>
            </a>

            <a
              href="https://x.com/sofelajoshua"
              target="_blank"
              rel="noreferrer"
              className="tech_stack flex items-center gap-1 border-b border-zinc-200 cursor-pointer pb-1"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="24"
                viewBox="0 0 512 512"
                className="dark:text-white"
              >
                <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
              </svg>

              <span className="text-sm">Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/oluwasegun-sofela-8a062b22b/"
              target="_blank"
              rel="noreferrer"
              className="tech_stack flex items-center gap-1 border-b border-zinc-200 cursor-pointer pb-1"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="24"
                viewBox="0 0 448 512"
                className="dark:text-white"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>

              <span className="text-sm">Linkedin</span>
            </a>

            <Link
              to="/about/resume"
              className="tech_stack flex items-center gap-1 border-b border-zinc-200 cursor-pointer pb-1"
            >
              <span className="text-sm">View Résumé</span>
              <svg
                fill="#3f3f46"
                xmlns="http://www.w3.org/2000/svg"
                height="14"
                width="14"
                viewBox="0 0 512 512"
              >
                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
              </svg>
            </Link>
            <a
              href="mailto:sofelajoshua@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="tech_stack flex items-center gap-1 border-b border-zinc-200 cursor-pointer pb-1"
            >
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                width="24"
                viewBox="0 0 512 512"
                className="dark:text-white"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>

              <span className="text-sm">Email</span>
            </a>
          </section>
        </section>

        <svg
          viewBox="0 0 800 600"
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          className="max-sm:w-[90%]"
        >
          <rect
            x="100"
            y="100"
            width="200"
            height="200"
            stroke="#4CAF50"
            stroke-width="2"
            fill="none"
          />
          <rect
            x="300"
            y="100"
            width="200"
            height="200"
            stroke="#FF4081"
            stroke-width="2"
            fill="none"
          />
          <rect
            x="500"
            y="100"
            width="200"
            height="200"
            stroke="#03A9F4"
            stroke-width="2"
            fill="none"
          />

          <rect
            x="100"
            y="300"
            width="200"
            height="200"
            stroke="#795548"
            stroke-width="2"
            fill="none"
          />
          <rect
            x="300"
            y="300"
            width="200"
            height="200"
            stroke="#FF9800"
            stroke-width="2"
            fill="none"
          />
          <rect
            x="500"
            y="300"
            width="200"
            height="200"
            stroke="#9C27B0"
            stroke-width="2"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
}
