import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './Pages/HomeScreen/HomeScreen';

// 2 - Establish routes / route

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
