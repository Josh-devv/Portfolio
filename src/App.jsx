import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import './styles/index.css'
//import Home from './components/Pages/Main';
//import Home from './Components/Pages/Main'
import Main from './Components/Pages/Main';
import Hero from './Components/Structure/Hero';
import About from './Components/Pages/About';
import Projects from './Components/Pages/projects';
/*
import Home from './components/Pages/Main';
import About from './components/Pages/About';
import Projects from './components/Pages/Projects';
import ProjectDetail from './components/Pages/ProjectDetail';
import Blogs from './components/Pages/Blogs';
import Photos from './components/Pages/Photos';
import Resume from './components/Pages/Resume';
*/

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index Component={Main}/>
      <Route path='about' Component={About}/>
      <Route path='projects' Component={Projects}/>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
