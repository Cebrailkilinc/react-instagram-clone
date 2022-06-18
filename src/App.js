import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Message from './Pages/Message';
import Feed from './Components/Feed/Feed';
import User from './Pages/User';
import Login from "./Pages/Login"
import Dasboard from './Pages/Dasboard';
import { useState } from 'react';
import Register from './Pages/Register';
import { FirebaseProvider } from './Components/constext/FirebaseContext';





function App() {
  
 
  const [login, setLogin] = useState(true)
  
  return (
    <BrowserRouter>
      <FirebaseProvider>
        <Routes>
          <Route exact path='/*' element={ <Dasboard/> } />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </FirebaseProvider>
    </BrowserRouter>
  );
}

export default App;
