import React from 'react'
import { GrClose } from "react-icons/gr"
import { IoIosImages } from "react-icons/io"
import { FiMoreHorizontal } from "react-icons/fi"
import { BiBookmark } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai";
import { BiHappyAlt } from "react-icons/bi";
import { addDoc, collection } from 'firebase/firestore'

import {db} from "../../firebase"

function Comment({ setCommentShow, setOptionShow, img, name }) {





    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-70   flex items-center justify-center  z-50' >
                <div >
                    <GrClose color="grey" className='cursor-pointer absolute top-5 right-5 ' onClick={() => { setCommentShow(false) }} />
                </div>
                <div className='bg-white h-5/6 w-4/6 rounded-sm grid grid-cols-4  '>
                    <div className='col-span-2 grid place-content-center bg-black'>
                        <div><img className='max-h-[450px]' src={img} /></div>
                    </div>
                    <div className='col-span-2'>
                        <div className='flex items-center justify-between border-b-2 p-4 cursor-pointer'>
                            <img src={img} className="w-10 h-10 border border-red-500 rounded-full" />
                            <h1 className='flex-1 ml-2 text-xs' >{name}</h1>
                            <FiMoreHorizontal onClick={() => setOptionShow(true)} />
                        </div>
                        <div className='items-center p-4 text-xs justify-center '>
                            <div><a href='#'>{name}</a>: çok güzel bir foto </div>
                            <div><a href='#'>{name}</a>: çok güzel bir foto </div>
                            <div><a href='#'>{name}</a>: çok güzel bir foto </div>
                            <div><a href='#'>{name}</a>: çok güzel bir foto </div>
                        </div>
                        <div className='flex items-center justify-between p-4 text-xl'>
                            <div className='flex items-center cursor-pointer  space-x-3 '>
                                <AiOutlineHeart />
                                <FaRegComment />
                                <FiSend />
                            </div>
                            <div className='flex items-center cursor-pointer  space-x-3' >
                                <BiBookmark />
                            </div>
                        </div>

                        <form className='flex items-center justify-between p-4 bottom-0 '>
                            <div>
                                <input
                                    type="text"
                                    placeholder='add comment'
                                    className='fixed bottom-15   border-none focus:ring-0 outline-none flex-1 ml-2 text-xxs'
                                />
                                <button className='border-none text-blue-600 text-xs' >Paylaş</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment