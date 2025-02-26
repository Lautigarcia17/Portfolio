
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from "./pages/Projects/Projects";
import SectionLayout from "./pages/SectionLayout/SectionLayout";
import { ScrollProvider } from './context/ScrollContext';
import AppShell from './pages/AppShell';


function App() {
  return (
    <>
      <ScrollProvider>
        <Routes>
          <Route path='/' element={<AppShell />} >
            <Route index element={<SectionLayout />} />
            <Route path='/work' element={<Projects />} />
          </Route>
        </Routes>
      </ScrollProvider>
    </>
  )
}

export default App
