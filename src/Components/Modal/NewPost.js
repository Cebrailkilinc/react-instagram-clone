import React, { useState, useEffect, useContext } from 'react'
import { db } from "../../firebase"
import { addDoc, collection, docs, getDocs, onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore"
import FirebaseContext from '../constext/FirebaseContext'


import { GrClose } from "react-icons/gr"
import { IoIosImages } from "react-icons/io"
import { createUserWithEmailAndPassword } from 'firebase/auth'


function NewPost({ setShow }) {
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
        users,
        uids

    } = useContext(FirebaseContext)

    const [selectedImage, setSelectedImage] = useState();

    const [image, setImage] = useState("")
    const [isUpload, setIsUpload] = useState("")

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader()

            reader.onload = function (e) {
                setImage(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    console.log(image)


    //Add New Post 
    const handleAdd = () => {
        const docRef = addDoc(collection(db, "posts"), {
            nickname: users[0].Nickname,
            image: image,
            description: "",
            comment: "aaa",

        });

    }


    // //     try{
    // //         if(!users[0].Nickname) return console.log(nickname);

    // //     const frankDocRef = doc(db, "posts","wqe" );
    // //     setDoc(frankDocRef, {

    // //         Name: name,
    // //         Surname: surname,
    // //         Nickname: users[0].Nickname,
    // //         Email: email,
    // //         Password: password,
    // //         Post: {
    // //             image: "ssss",
    // //             description: "",
    // //             comment: ""
    // //         },
    // //         folow: 0,
    // //         follower: 0

    // //     });
    // // }catch(error){
    // //     return false
    // // }

    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-70   flex items-center justify-center  z-50' >
                <div >
                    <GrClose color="grey" className='cursor-pointer absolute top-5 right-5 ' onClick={() => { setShow(false) }} />
                </div>
                <div className='bg-white  h-[450px] w-[420px] rounded-xl   '>
                    <div className=' text-xs flex justify-center border-b-2 p-2  '>
                        Yeni gönderi oluştur
                    </div>

                    <div className='grid justify-items-center  gap-y-3' >
                        <div className=' items-center' >
                           {image ? <img src={image} /> :  <IoIosImages color='grey' size={80} /> }
                        </div>
                        
                        <div className='text-center' >
                            <h3 className='text-gray-400 text-lg' >Fotoğrafları ve videoları buraya sürükle</h3>
                            {/* <label htmlFor='file' className='bg-cyan-600 p-1 px-2 rounded-md text-xs ml-24 mt-3 text-white' >                               
                            </label> */}
                            <label className=" bg-cyan-600 p-1 px-2 rounded-md text-xs  mt-3 text-white " htmlFor="file_input">Upload file</label>
                            <input
                                onChange={handleImageChange}
                                className="hidden w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input"
                                type="file"
                            />
                            <button onClick={handleAdd}>deneme</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPost