import Layout from "./pages/Layout/Layout"
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from "./pages/Projects/Projects";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='/work' element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
