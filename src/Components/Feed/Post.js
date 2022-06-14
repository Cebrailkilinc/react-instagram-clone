import React, { useState, useEffect } from 'react'
import Comment from '../Modal/Comment';
import Options from '../Modal/Options';

//React Icons
import { FiMoreHorizontal } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai";
import { BiHappyAlt } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi"



function Post({ img, id, name }) {
    const [showComment, setCommentShow] = useState(false)
    const [showOption, setOptionShow] = useState(false)


    if (showOption === true) {
        return <Options setOptionShow={setOptionShow} />
    }

    if (showComment === true) {
        return <Comment name={name} img={img} setOptionShow={setOptionShow} setCommentShow={setCommentShow} />
    }
    const openComment = () => {
        setCommentShow(true)
    }
    const openOptions = () => {
        setOptionShow(true)
    }

    


    return (
        <div className='items-center mt-5 border border-solid border-gray-200 bg-white rounded-lg '>
            {/* Header */}
            <div className='flex items-center justify-between p-4'>
                <img src={img} className="w-10 h-10 border border-red-500 rounded-full" />
                <h1 className='flex-1 ml-2 text-xs' >{name}</h1>
                <FiMoreHorizontal className='cursor-pointer' onClick={openOptions} />
            </div>
            {/* Post img */}
            <div className='bg-black'>
                <img className='w-72 object-cover m-auto' src={img} />
            </div>

            {/* Post Coption */}
            <div className='flex items-center justify-between p-4 text-xl'>
                <div className='flex items-center cursor-pointer  space-x-3 '>
                    <AiOutlineHeart />
                    <FaRegComment onClick={openComment} />
                    <FiSend />
                </div>
                <div className='flex items-center cursor-pointer  space-x-3' >
                    <BiBookmark />
                </div>
            </div>
            {/*Nymber of like */}
            <div className='flex items-center pl-4 text-xs'>
                <p>42 beğenme</p>
            </div>

            {/* Comments */}
            <div className='items-center p-4 text-xs'>
                <div><a href='#'>{name}</a>: çok güzel bir foto </div>
                <div><a href='#'>{name}</a>: çok güzel bir foto </div>
                <div><a href='#'>{name}</a>: çok güzel bir foto </div>
                <div><a href='#'>{name}</a>: çok güzel bir foto </div>
            </div>
            <form className='flex items-center justify-between p-4 ' >
                <BiHappyAlt className='text-xl ' />
                <input
                    type="text"
                    placeholder='add comment'
                    className='border-none focus:ring-0 outline-none flex-1 ml-2 text-xxs'
                />
                <button className='border-none text-blue-600 text-xs' >Paylaş</button>
            </form>
        </div>
    )
}

export default Post