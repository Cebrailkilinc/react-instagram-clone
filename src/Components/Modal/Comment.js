import { useContext } from 'react'
import FirebaseContext from '../constext/FirebaseContext'

// React-Icons
import { GrClose } from "react-icons/gr"
import { IoIosImages } from "react-icons/io"
import { FiMoreHorizontal } from "react-icons/fi"
import { BiBookmark } from "react-icons/bi"
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs"


function Comment({ setCommentShow, setOptionShow, img, handleLikeButton, likeButton, setCommentValue, addComment, commentStorage, numberOfLike, nickName, profileImg,statement }) {
    const { users } = useContext(FirebaseContext)

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
                            <img src={profileImg} className="w-10 h-10 border border-red-500 rounded-full" />
                            <h1 className='flex-1 ml-2 text-xs' >{nickName}</h1>
                            <FiMoreHorizontal onClick={() => setOptionShow(true)} />
                        </div>
                        <div className='items-center p-4 text-xs justify-center'>
                            <div className='flex items-center gap-3' >
                                <img src={profileImg} className="w-6 h-6 border border-red-500 rounded-full" />
                                <p>{statement ? nickName + " " + statement : null }</p>
                            </div>

                            {
                                commentStorage.map((item, i) => {
                                    return <div key={i}><a className='font-semibold' href='#'>{users ? users[0].Nickname : ""}</a>: {item.comment}</div>
                                })
                            }
                        </div>
                        <div className='fixed bottom-12 border-t ml-2'>
                            <div className=' flex items-center justify-between  p-4 text-xl'>
                                <div className='flex items-center cursor-pointer  space-x-3 '>
                                    {likeButton ? <AiOutlineHeart onClick={handleLikeButton} /> : <BsFillHeartFill color='red' onClick={handleLikeButton} />}
                                    <FaRegComment />
                                    <FiSend />
                                </div>
                                <div className='flex items-center cursor-pointer  space-x-3' >
                                    <BiBookmark />
                                </div>
                            </div>
                            <div className='flex items-center pl-4 text-xs'>
                                <p className='font-semibold text-neutral-800'>{numberOfLike} beğenme</p>
                            </div>
                            <form className='flex items-center justify-between p-4'>
                                <div >
                                    <input
                                        type="text"
                                        placeholder='add comment'
                                        className=' border-none focus:ring-0 outline-none w-72 text-sm '
                                        onChange={(e) => { setCommentValue(e.target.value) }}
                                    />
                                    <button onClick={addComment} className='border-none text-blue-600 text-sm' >Paylaş</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment