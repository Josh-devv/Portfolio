// ProjectContext.js
import { createContext, useReducer, useContext } from 'react';

const ProjectContext = createContext();

const projectReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS_SUCCESS':
      return { ...state, projects: action.payload, loading: false };
    case 'FETCH_PROJECTS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const ProjectProvider = ({ children }) => {
  const [state, dispatch] = useReducer(projectReducer, {
    projects: [],
    loading: true,
    error: null,
  });

  return (
    <ProjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectContext.Provider>
  );
};

const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectProvider');
  }
  return context;
};

export { ProjectProvider, useProjectContext };
