import React, { useState, useEffect, useContext } from 'react'
import Comment from '../Modal/Comment';
import Options from '../Modal/Options';

//Context connect
import FirebaseContext from '../constext/FirebaseContext';

//React Icons
import { FiMoreHorizontal } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai";
import { BiHappyAlt } from "react-icons/bi";
import { BiBookmark } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi"
import {BsFillHeartFill} from "react-icons/bs"

function Post({ img, nickName, profileImg }) {
    const {
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
        setLogin,
        login,
        post,
        handleLogin,
        users, statement
    } = useContext(FirebaseContext)
    const [showComment, setCommentShow] = useState(false)
    const [showOption, setOptionShow] = useState(false)
    const [numberOfLike, setNumberOfLike] = useState(0)
    const [likeButton, setLikeButton] = useState(true)
    const [commentValue, setCommentValue] = useState("")
    const [commentStorage, setCommentStorage] = useState([
        {
            nickname: "deneme",
            comment: "lorem ipsum dolor"
        }
    ])

    const handleLikeButton = () => {
        setLikeButton(likeButton ? false : true)
        setNumberOfLike(likeButton ? numberOfLike + 1 : numberOfLike - 1)

    }

    const addComment = (e) => {
        e.preventDefault()
        let newComment = { nickname: nickname, comment: commentValue }
        let arr = commentStorage.concat(newComment)
        setCommentStorage(arr)
        setCommentValue("")

    }

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
        <div className='items-center mt-5 border border-solid border-gray-300 bg-white rounded-lg '>
            {/* Header */}
            <div className='flex items-center justify-between p-4'>
                <img src={profileImg} className="w-10 h-10 border border-red-500 rounded-full" />
                <h1 className='flex-1 ml-2 text-xs' >{nickName}</h1>
                <FiMoreHorizontal className='cursor-pointer' onClick={openOptions} />
            </div>
            {/* Post img */}

            <div className='bg-black w-full h-80 flex text-center justify-center '>
                <img className=' object-center  object-contain' src={img} />
            </div>
            {/* Post Coption */}

            <div className='flex items-center justify-between p-4 text-xl'>
                <div className='flex items-center cursor-pointer text-slate-800  space-x-3 '>
                   { likeButton ? <AiOutlineHeart onClick={handleLikeButton} /> : <BsFillHeartFill color='red' onClick={handleLikeButton}/>} 
                    <FaRegComment onClick={openComment} />
                    <FiSend />
                </div>
                <div className='flex items-center cursor-pointer  space-x-3' >
                    <BiBookmark />
                </div>
            </div>
            {/*Nymber of like */}
            <div className='flex items-center pl-4 text-xs'>
                <p className='font-semibold text-neutral-800'>{numberOfLike} beğenme</p>
            </div>
          

            {/* Comments */}
            <div className='items-center p-4 text-xs'>
                {
                    commentStorage.map((item, i) => {
                        return <div key={i}><a className='font-semibold' href='#'>{users ? users[0].Nickname : ""}</a>: {item.comment} </div>

                    })
                }

            </div>
            <form className='flex items-center justify-between p-4 ' >
                <BiHappyAlt className='text-xl ' />
                <input
                    type="text"
                    placeholder='Add comment'
                    className='border-none focus:ring-0 outline-none flex-1 ml-2 text-xxs'
                    onChange={(e) => { setCommentValue(e.target.value) }}
                    value={commentValue}
                />
                <button onClick={addComment} className='border-none text-blue-600 text-xs' >Paylaş</button>
            </form>
        </div>
    )
}

export default Post