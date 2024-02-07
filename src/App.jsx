import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './Components/RootLayout';
import './styles/index.css'
import Main from './Components/Pages/Main';
import Hero from './Components/Structure/Hero';
import About from './Components/Pages/About';
import Projects from './Components/Pages/projects';
import Blogs from './Components/Pages/Blogs';
import Resume from './Components/Pages/Resume';
import Details from './Components/Pages/Details';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index Component={Main}/>
      <Route path='about' Component={About}/>
      <Route path='projects' Component={Projects}/>
      <Route path='projects/:id' Component={Details}/>
      <Route path='blog' Component={Blogs}/>
      <Route path='about/resume' Component={Resume}/>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
