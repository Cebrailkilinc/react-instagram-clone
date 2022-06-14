import React, { useState } from 'react'
import Register from './Register';
import { useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FirebaseContext from "../Components/constext/FirebaseContext"
import { Link, Routes, Route } from 'react-router-dom';
import { FaFacebookSquare } from "react-icons/fa"
import { collection, query, where } from "firebase/firestore";

import { auth,db } from "../firebase"
import { getDoc } from 'firebase/firestore';



function Login({ setLogin }) {
    const { } = useContext(FirebaseContext)



    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setLogin(false)
                const citiesRef = collection(db, "users");
                console.log(getDoc(citiesRef))
                
             
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });



    }



    return (
        <div className="grid grid-cols-6 gap-4 text-center ">
            <div className=" col-span-6 flex justify-center">
                <div className='hidden md:block'>
                    <img className='w-[400px]' src='phones.png' />
                </div>
                <div className='border p-5 mt-3' >
                    <img className='mx-auto p-6' src='https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png' />
                    <form onSubmit={handleLogin}>
                        <input placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='border block w-64 mx-auto mt-2 text-xs p-1 outline-none' />
                        <input type="password" value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} className='border block mt-2 w-64 mx-auto text-xs p-1 outline-none' />
                        <button className='  bg-sky-600 mt-2 w-64 rounded-md text-white text-xs p-1' >Giriş Yap</button>
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
                            <Link to="/register" ><span className='text-bold text-blue-600 cursor-pointer' >Kayıt Ol</span></Link>
                        </h1>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login