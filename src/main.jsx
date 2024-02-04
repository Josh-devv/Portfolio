import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { ProjectProvider } from './Components/Context/ProjectContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <ProjectProvider>
        <App />
        <ReactQueryDevtools />
      </ProjectProvider>
    </QueryClientProvider>
);