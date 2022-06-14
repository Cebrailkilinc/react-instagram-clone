import React, { useState, useEffect } from 'react'
import { db } from "../../firebase"
import { addDoc, collection, docs, getDocs, onSnapshot, doc, setDoc } from "firebase/firestore"
import nextId from "react-id-generator"

import { GrClose } from "react-icons/gr"
import { IoIosImages } from "react-icons/io"


function NewPost({ setShow }) {
const [picture, setPicture] = useState(null) 
console.log(picture)   

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
                    <div className='grid justify-items-center mt-28 gap-y-3' >
                        <div className=' items-center' >
                            <IoIosImages color='grey' size={80} />
                        </div>
                        <div className='text-center' >
                            <h3 className='text-gray-400 text-lg' >Fotoğrafları ve videoları buraya sürükle</h3>
                            {/* <label htmlFor='file' className='bg-cyan-600 p-1 px-2 rounded-md text-xs ml-24 mt-3 text-white' >                               
                            </label> */}
                            <label className=" bg-cyan-600 p-1 px-2 rounded-md text-xs  mt-3 text-white " htmlFor="file_input">Upload file</label>
                            <input  onChange={(e)=>{setPicture(e.target.value)}} className="hidden w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPost