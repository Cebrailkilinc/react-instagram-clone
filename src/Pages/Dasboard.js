import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from '../Components/Header/Header'
import Message from './Message'
import Feed from '../Components/Feed/Feed'
import UsersProfile from './UsersProfile';


function Dasboard({ setLogin }) {
    return (
        <>
            <Header setLogin={setLogin} />
            <Routes>
                <Route path="/*" element={<Feed />} />
                <Route path="/message" element={<Message />} />
                <Route path="/user" element={<UsersProfile/>} />               
            </Routes>
        </>
    )
}

export default Dasboard