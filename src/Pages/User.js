import React, { useContext } from 'react'
import profil from '../Data/profil'
import FirebaseContext from '../Components/constext/FirebaseContext'
import { MdBookmarkBorder } from "react-icons/md"
import { MdOutlineChangeCircle } from "react-icons/md"
import { useState } from 'react'

function User() {
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
        users
    } = useContext(FirebaseContext)

    console.log(users[0].Name)


    const [border, setBorder] = useState('border-t-2')
    return (
        <div className='mx-auto max-w-2xl grid grid-rows-2 mt-5 gap-10'>
            <div className='grid grid-cols-3'>
                <div className='col-span-1'>
                    <img className='w-28 h-28 rounded-full' src={name} />
                </div>
                <div className='col-span-2 grid grid-rows-3 gap-3'>
                    <div className='flex items-center gap-5'>
                        <h1>{nickname}</h1>
                        <button className='border p-1 text-xs rounded-md'>Profil Düzenle</button>
                        <MdOutlineChangeCircle />
                    </div>
                    <div className='flex items-center gap-8 text-xs '>
                        <h1>6 gönderi</h1>
                        <h1>takipçi:{users[0].follower}</h1>
                        <h1>takip:{users[0].folow}</h1>
                    </div>
                    <div className='text-xs'>
                        <h1 className='font-bold '>{name +" "+ surname}</h1>
                        <a className='text-blue-400' href='www.twitter.com/elonmusk'>www.twitter.com/elonmusk</a>
                    </div>
                </div>
            </div>
            <div className='border-t grid grid-rows-2 justify-center'>
                <div className='flex gap-x-10 text-xs'>
                    <div><h1 className={border}>KAYDEDİLENLER</h1></div>
                    <div><h1 className={border}>KAYDEDİLENLER</h1></div>
                    <div><h1 className={border}>ETİKETLENENLER</h1></div>
                </div>
                <div>
                    asdas
                </div>
            </div>
        </div>
    )
}

export default User