import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Browse from './Pages/Browse/Browse';
import Home from './Pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/browse" element={<Browse/>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App