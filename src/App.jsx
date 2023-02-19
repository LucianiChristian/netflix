import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Browse from './Pages/Browse/Browse';
import Home from './Pages/Home/Home';
import Entrance from './Pages/Entrance/Entrance';
import SignUp from './Pages/Entrance/components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Entrance />} />
          <Route path="/signUp" element={<Entrance />} />
          <Route path="/browse" element={<Browse/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App