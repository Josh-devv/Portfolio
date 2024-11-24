import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSunnyOutline} from 'react-icons/io5'
import {CiMenuFries} from 'react-icons/ci'
import log from './josh.png'

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavBar = function () {
    setIsNavOpen((prevValue) => !prevValue);
    document.documentElement.classList.toggle('height');
  };

  const toggleBackground = function () {
    let currentBg;
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
      currentBg = 'dark';
      localStorage.setItem('dark', currentBg);
    } else {
      document.documentElement.classList.remove('dark');
      currentBg = 'Null';
      localStorage.setItem('dark', currentBg);
    }
  };

  useEffect(() => {
    const currentBg = localStorage.getItem('dark');
    if (currentBg === 'dark') document.documentElement.classList.add(currentBg);
  }, []);

  const handleLogoClick = function () {
    if (isNavOpen) {
      toggleNavBar();
    }
  };

  return (
    <nav className="border border-zinc-200 relative dark:border-gray-800">
      <div className="flex items-center justify-between py-4 lg:py-8 max-w-7xl mx-auto max-sm:px-4 px-8 xl:px-0">
        <Link to="/" onClick={handleLogoClick}>
          <img src={log} alt="logo" className="w-[70px]" />
        </Link>

        <ul
          className={`flex flex-col md:flex-row fixed md:static bg-white md:p-0 w-full h-screen md:w-auto md:h-auto left-0 top-[74px] p-8 items-start md:items-center gap-6 text-sm font-bold ${
            isNavOpen ? 'translate-x-[0%]' : 'translate-x-[100%]'
          } md:translate-x-[0%] dark:text-white dark:bg-zinc-900 md:bg-none md:bg-transparent dark:md:bg-transparent z-[9000]`}
        >
          <Link to="/" onClick={toggleNavBar}>
            <li className="cursor-pointer dark:hover:text-green-600">Home</li>
          </Link>
          <Link to="about" onClick={toggleNavBar}>
            <li className="cursor-pointer dark:hover:text-green-600">About Me</li>
          </Link>

          <Link to="projects" onClick={toggleNavBar}>
            <li className="cursor-pointer dark:hover:text-green-600">Projects</li>
          </Link>

          <Link to="blog" onClick={toggleNavBar}>
            <li className="cursor-pointer dark:hover:text-green-600">Blogs</li>
          </Link>
         

        </ul>

        <div className="flex items-center gap-2">
          <div className=" rounded-full p-2 max-sm:p-5 w-[40px] h-[40px] cursor-pointer relative flex items-center gap-3 dark:border-gray-800" onClick={toggleBackground}>
            <IoSunnyOutline size={40}/>
          </div>

          
          <div className="border border-gray-200 rounded-md p-2 cursor-pointer md:hidden dark:border-zinc-600" onClick={toggleNavBar}>
            <div className="burger">
              <CiMenuFries size={25} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}