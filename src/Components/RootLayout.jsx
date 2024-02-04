import { Outlet } from 'react-router-dom';
import Navbar from './Structure/Navbar';
import Footer from './Structure/Footer';


export default function RootLayout() {
  return (
    <>
      <header className="text-zinc-700 dark:text-zinc-400 ">
        <Navbar />
      </header>

      <main className="text-zinc-700 dark:text-zinc-400">
        <Outlet />
      </main>

    <Footer />
    
    </>
  );
}