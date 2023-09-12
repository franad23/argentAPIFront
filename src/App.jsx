import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

//Pages
import Homepage from './pages/homepage/Homepage';
import DocsPage from './pages/docspage/DocsPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/docs" element={<DocsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
