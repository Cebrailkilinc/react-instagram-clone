import { useEffect, useContext, useState } from 'react'
import { db } from "../firebase"
import { collection, docs, doc, setDoc, getDocs, onSnapshot, orderBy, where, query } from "firebase/firestore"
import FirebaseContext from '../Components/constext/FirebaseContext'
import { IoSettingsOutline } from "react-icons/io5"

function UsersProfile() {

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
        <div className='max-w-2xl m-auto '>
            <div className='flex mt-12 border-b-2 pb-10 '>
                <div className='profilPhoto flex items-center w-1/3 '>
                    <img className='w-28 h-28 rounded-full m-auto' src={users[0].Photo} />
                </div>
                <div className='Yazılar text-sm w-2/3 ml-5'>
                    <div className='flex gap-5 items-center'>
                        <h1>{users[0].Nickname}</h1>
                        <button className='border p-1 rounded-sm  font-semibold text-xs'>Profil düzenle</button>
                        <IoSettingsOutline size={25} />
                    </div>
                    <div className='flex items-center gap-5 mt-5 mb-5 text-xs'>
                        <h1>6 gönderi</h1>
                        <h1>takipçi:{users[0].follower}</h1>
                        <h1>takip:{users[0].folow}</h1>
                    </div>
                    <div className='text-xs'>
                        <h1 className=' font-semibold'>{users[0].Name + " " + users[0].Surname}</h1>
                        <h1 className='text-cyan-600'>www.gabriel.com</h1>
                    </div>
                </div>
            </div>
            <div className=' flex text-xxs gap-10 justify-center mt-2 font-semibold'>
                <h1>GÖNDERİLER</h1>
                <h1>KAYDEDİLENLER</h1>
                <h1>ETİKETLENENLER</h1>
            </div>
            <div className='flex flex-wrap justify-evenly gap-y-3 mt-5'>
                <img className='w-28 sm:w-52' src='https://picsum.photos/200' />
                <img className='w-28 sm:w-52' src='https://picsum.photos/200' />
                <img className='w-28 sm:w-52' src='https://picsum.photos/200' />
                <img className='w-28 sm:w-52' src='https://picsum.photos/200' />
                <img className='w-28 sm:w-52' src='https://picsum.photos/200' />
                <img className='w-28 sm:w-52' src='https://picsum.photos/200' />
                <img className='w-28 sm:w-52' src='https://picsum.photos/200' />
            </div>
        </div>
    )
}

export default UsersProfile