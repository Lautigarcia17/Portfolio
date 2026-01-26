
import './index.css'
import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import AppShell from './pages/AppShell';
import SectionLayout from './pages/SectionLayout/SectionLayout';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <>
      <LanguageProvider>
        <Routes>
          <Route path='/' element={<AppShell />} >
            <Route index element={<SectionLayout />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </>
  )
}

export default App
