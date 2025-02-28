
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Projects from "./pages/Projects/Projects";
import SectionLayout from "./pages/SectionLayout/SectionLayout";
import { ScrollProvider } from './context/ScrollContext';
import AppShell from './pages/AppShell';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <ScrollProvider>
        <Routes>
          <Route path='/' element={<AppShell />} >
            <Route index element={<SectionLayout />} />
            <Route path='/work' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </ScrollProvider>
    </>
  )
}

export default App
