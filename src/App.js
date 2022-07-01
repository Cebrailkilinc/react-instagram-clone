import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Message from './Pages/Message';
import Feed from './Components/Feed/Feed';
import Login from "./Pages/Login"
import Dasboard from './Pages/Dasboard';
import { useState } from 'react';
import Register from './Pages/Register';
import { FirebaseProvider } from './Components/constext/FirebaseContext';
import { useContext } from 'react';
import FirebaseContext from './Components/constext/FirebaseContext';





function App() {
  const {
    handleLogin,
    email,
    setEmail,
    password,
    setPassword,
    error,
    setError,
    deneme,
    nickname,
    setNickname,
    name,
    surname,
    users,login
} = useContext(FirebaseContext)


  
 

  return (
  
      <Routes>
        <Route exact path='/*' element={login ? <Dasboard /> : <Login/>} />       
        <Route path='/register' element={<Register />} />
      </Routes>

  );
}

export default App;
