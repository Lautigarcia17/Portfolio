
import './index.css'
import { Routes, Route } from 'react-router-dom';
import { ScrollProvider } from './context/ScrollContext';
import AppShell from './pages/AppShell';
import { NotFoundPage, ProjectsPage, SectionLayoutPage } from './lazyRoutes';


function App() {
  return (
    <>
      <ScrollProvider>
        <Routes>
          <Route path='/' element={<AppShell />} >
            <Route index element={<SectionLayoutPage />} />
            <Route path='/work' element={<ProjectsPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ScrollProvider>
    </>
  )
}

export default App
