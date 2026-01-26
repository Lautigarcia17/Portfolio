
import './index.css'
import { Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './context/NavigationContext';
import { LanguageProvider } from './context/LanguageContext';
import AppShell from './pages/AppShell';
import Projects from './pages/Projects/Projects';
import SectionLayout from './pages/SectionLayout/SectionLayout';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <LanguageProvider>
        <NavigationProvider>
          <Routes>
            <Route path='/' element={<AppShell />} >
              <Route index element={<SectionLayout />} />
              <Route path='/work' element={<Projects />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </NavigationProvider>
      </LanguageProvider>
    </>
  )
}

export default App
