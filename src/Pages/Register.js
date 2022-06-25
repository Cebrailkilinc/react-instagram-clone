import React, { useState } from 'react'
import { addDoc, collection, docs, getDocs, onSnapshot, doc, setDoc, query, where } from "firebase/firestore"


import { Link } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa"
import { auth, db } from "../firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useContext } from 'react';
import FirebaseContext from '../Components/constext/FirebaseContext';
import { async } from '@firebase/util';
import { useNavigate } from 'react-router-dom';




function Register() {

    const {
        deneme,
        handleRegister,
        email,
        setEmail,
        password,
        setPassword,
        error,
        setError,
        name,
        setName,
        surname,
        setSurname,
        nickname,
        setNickname,
        post,
    } = useContext(FirebaseContext)

    const navigate = useNavigate()
    const createAccount = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                try {
                    const frankDocRef = doc(db, "users", nickname);
                    setDoc(frankDocRef, {
                        uid: user.uid,
                        Name: name,
                        Surname: surname,
                        Nickname: nickname,
                        Email: email,
                        Password: password,
                        Photo:"https://picsum.photos/seed/picsum/200/300",
                        Post: {
                            image: "",
                            description: "",
                            comment: ""
                        },
                        folow: 0,
                        follower: 0

                    });
                    navigate("/")
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    return (
        <div className="grid grid-cols-6 gap-4 text-center ">
            <div className="col-start-2 col-span-4 flex justify-center items-center">
                <div className='border p-5 mt-3 ' >
                    <img className='mx-auto p-6' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
                    <form onSubmit={createAccount}>
                        <input placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} className='border block w-64 mx-auto mt-2 text-xs p-1 outline-none' />
                        <input placeholder='Surname' value={surname} onChange={(e) => { setSurname(e.target.value) }} className='border block w-64 mx-auto mt-2 text-xs p-1 outline-none' />
                        <input placeholder='Nick Name' value={nickname} onChange={(e) => { setNickname(e.target.value) }} className='border block w-64 mx-auto mt-2 text-xs p-1 outline-none' />
                        <input placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='border block w-64 mx-auto mt-2 text-xs p-1 outline-none' />
                        <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} className='border block mt-2 w-64 mx-auto text-xs p-1 outline-none' />
                        <button className='  bg-sky-600 mt-2 w-64 rounded-md text-white text-xs p-1' >Kayıt Ol</button>
                    </form>
                    <div className='flex items-center justify-center gap-2 text-xs my-auto mt-5 '>
                        <span className='border w-24'></span>
                        <h6>Yada</h6>
                        <span className='border w-24'></span>
                    </div>
                    <div className='flex items-center justify-center gap-2 text-xs mt-5 cursor-pointer' >
                        <FaFacebookSquare color='blue' size={20} />
                        <h1>Facebook ile Giriş Yap</h1>
                    </div>
                    {error ? <div className='text-xs flex-wrap w-48 mx-auto text-red-600 mt-5'>Girdiğin kullanıcı adı bir hesaba ait değil. Lütfen kullanıcı adını kontrol et ve tekrar dene.</div> : null}
                    <div className='flex items-center justify-center text-xs mt-5 ' >
                        <h1><a href='#'>Şifremi Unuttum</a></h1>
                    </div>
                    <div className='flex items-center justify-center text-xs mt-5 border p-5 ' >
                        <h1>Hesabın varmı ?
                            <Link to="/" ><span className='text-bold text-blue-600 cursor-pointer' >Giriş yap</span></Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register