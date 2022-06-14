import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header/Header'
import Message from './Message'
import Feed from '../Components/Feed/Feed'
import User from './User'
import Login from './Login'
import Register from './Register';

function Dasboard({ setLogin }) {
    return (
        <>
            <Header setLogin={setLogin} />
            <Routes>
                <Route path="*" element={<Feed />} />
                <Route path="/message" element={<Message />} />
                <Route path="/user" element={<User/>} />               
            </Routes>
        </>
    )
}

export default Dasboard