import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Browse from './Pages/Browse/Browse';
import Home from './Pages/Home/Home';
import Entrance from './Pages/Entrance/Entrance';
import { useEffect, useRef } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, logout } from './redux/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user) {
        dispatch(login({
          uid: user.uid,
          email: user.email,
        }));
      }
      else {
        dispatch(logout());
      }
    })
  }, [])

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