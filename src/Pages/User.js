import React, { useContext, useState } from 'react'
import FirebaseContext from '../Components/constext/FirebaseContext'
import { db } from "../firebase"
import { collection, docs, getDocs, onSnapshot, orderBy, where, query } from "firebase/firestore"

//React Icons
import { IoSettingsOutline } from "react-icons/io5"
import { useEffect } from 'react'


function User() {
    const { users } = useContext(FirebaseContext)

    const [userPost, setUserPost] = useState()  
    const postCollectionRef = collection(db, "posts")
    const q = query(postCollectionRef, where("nickname", "==", users ? users[0].Nickname : ""))
    useEffect(() => {
        onSnapshot(q, (snapshot) => {
            setUserPost(snapshot.docs.map((doc) => ({ ...doc.data() })))
        })
    }, [])

    return (
        <div className='mx-auto max-w-2xl grid grid-rows-2 mt-5 gap-10'>
            <div className='grid grid-cols-3 border-b'>
                <div className='col-span-1 rounded-full'>
                    <img className='w-28 h-28 rounded-full' src={users[0].Photo} />
                </div>
                <div className='col-span-2 grid grid-rows-3 '>
                    <div className='flex items-center gap-5'>
                        <h1 className='font-semibold text-lg'>{users[0].Nickname}</h1>
                        <button className='border p-1 text-xs rounded-md'>Profil Düzenle</button>
                        <IoSettingsOutline className='cursor-pointer' />
                    </div>
                    <div className='flex items-center gap-8 text-xs '>
                        <h1>6 gönderi</h1>
                        <h1>takipçi:{users[0].follower}</h1>
                        <h1>takip:{users[0].folow}</h1>
                    </div>
                    <div className='text-xs'>
                        <h1 className='font-bold '>{users[0].Name + " " + users[0].Surname}</h1>
                        <a className='text-blue-400' href='www.twitter.com/elonmusk'>www.twitter.com/elonmusk</a>
                    </div>
                </div>
            </div>
            <div >
                <div className="grid grid-cols-3 gap-4">
                    {                        
                        userPost ?
                        userPost.map((item,i)=>{
                           return <img key={i} className='w-52 h-52 transition-opacity hover:opacity-60' src={item.image} />
                        })
                        : null
                    }         
                </div>
            </div>
        </div>
    )
}

export default User