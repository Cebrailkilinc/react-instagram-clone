import React, { useState, useEffect, useContext } from 'react'

//Database Functions
import { db } from "../../firebase"
import { addDoc, collection, docs, getDocs, onSnapshot, doc, setDoc, updateDoc, serverTimestamp, orderBy } from "firebase/firestore"

//Context Api
import FirebaseContext from '../constext/FirebaseContext'

// React Icons
import { GrClose } from "react-icons/gr"
import { IoIosImages } from "react-icons/io"
import { createUserWithEmailAndPassword } from 'firebase/auth'


function NewPost({ setShow }) {

    //Context datas
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
        uids,statement, setStatement

    } = useContext(FirebaseContext)

    const [selectedImage, setSelectedImage] = useState();
    const [image, setImage] = useState("")


    // Add image from local storage
    const handleImageSelectLocal = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader()

            reader.onload = function (e) {
                setImage(e.target.result)
            }
            reader.readAsDataURL(e.target.files[0])
        }
    }
    
    const addPostStatement = (e) =>{
        setStatement(e.target.value)
    }


    //Add New Post 
    const handleAddImageToFirebase = () => {
        const docRef = addDoc(collection(db, "posts"), {
            nickname: users[0].Nickname,
            profileImg: users ? users[0].Photo : "",
            image: image,
            description: "",
            comment: "aaa",
            time: serverTimestamp()
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

    //{image ? <img className='object-center  object-contain' src={image} /> :  <IoIosImages color='grey' size={80} /> }

    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-70   flex items-center justify-center  z-50' >
                <div >
                    <GrClose color="grey" className='cursor-pointer absolute top-5 right-5 ' onClick={() => {setShow(false) }} />
                </div>
                <div className='bg-white rounded-xl w-1/3 h-2/3  '>
                    <div className=' text-xs flex justify-center border-b-2 p-2  '>
                        Yeni gönderi oluştur
                    </div>

                    {image ?

                        <div className='  grid  place-items-center' >
                            <img className='object-fill w-80 h-72 mt-2' src={image} />
                            <div className='flex items-center mt-2 gap-2 '>
                                <input className='border rounded-md p-1 outline-none'  placeholder='Açıklama Ekle...' onChange={ addPostStatement}/>
                                <button className=" bg-cyan-600 p-1 px-2 rounded-md text-xs text-white " onClick={handleAddImageToFirebase}>Paylaş</button>
                            </div>

                        </div>
                        :
                        <div className='grid justify-items-center mt-20 gap-y-3' >
                            <div className=' items-center' >
                                {image ? <img className='object-center  object-contain' src={image} /> : <IoIosImages color='grey' size={80} />}
                            </div>

                            <div className='text-center' >
                                <h3 className='text-gray-400 text-lg' >Fotoğrafları ve videoları buraya sürükle</h3>
                                {/* <label htmlFor='file' className='bg-cyan-600 p-1 px-2 rounded-md text-xs ml-24 mt-3 text-white' >                               
                            </label> */}
                                <label className=" bg-cyan-600 p-1 px-2 rounded-md text-xs  mt-3 text-white " htmlFor="file_input">Bilgisayardan Seç</label>
                                <input
                                    onChange={handleImageSelectLocal}
                                    className="hidden w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                    id="file_input"
                                    type="file"
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default NewPost