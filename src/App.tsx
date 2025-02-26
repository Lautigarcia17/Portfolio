
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from "./pages/Projects/Projects";
import SectionLayout from "./pages/SectionLayout/SectionLayout";
import { ScrollProvider } from './context/ScrollContext';


function App() {
  return (
    <ScrollProvider>
      <Router>
        <Routes>
          <Route path='/' element={<SectionLayout />} />
          <Route path='/work' element={<Projects />} />
        </Routes>
      </Router>
    </ScrollProvider>
  )
}

export default App
