import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import Browse from './Pages/Browse/Browse';
import Home from './Pages/Home/Home';
import Entrance from './Pages/Entrance/Entrance';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login, loginAsync, logout } from './redux/userSlice';
import Profile from './Pages/Profile/Profile';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if(user) {
        dispatch(loginAsync(user.uid, user.email));
      }
      else {
        dispatch(logout());
      }
    })
  }, [])

  return (

      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Entrance />} />
          <Route path="/signUp" element={<Entrance />} />
          <Route path="/browse" element={<Browse/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
  )
}

export default App