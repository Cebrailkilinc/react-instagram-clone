import React, { useState } from 'react'
import uggetions from '../Data/uggestion'
import story from '../Data/storyData'

import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { BsImage } from "react-icons/bs"
import { MdOutlineTagFaces } from "react-icons/md"
import { useEffect } from 'react'

function Message() {
    const [profile, setProfile] = useState({
        name: "Elon musk",
        picture: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQU2JRbbl3LBOm_an3eI5iplFhOoLESyBwUfmWDO49BS1EYuGUE"
    })



    return (
        <div className='grid grid-cols-3  max-w-2xl p-2 mx-auto top-3 border-2 h-[500px] mt-5 ' >
            {/* Left Panel */}
            <div className='col-span-1 overflow-y-auto' >
                <div className='flex items-center justify-around bg-white border-b-2 p-2 z-30 sticky top-0' >
                    <a>cbrlKilinc</a>
                    <BsPencilSquare />
                </div>
                <div>
                    {
                        story.map((item, i) => {
                            return (
                                <button onClick={() => { setProfile({ name: item.name, picture: item.img }) }} key={i} className='flex items-center text-xxs p-2 focus:bg-sky-200 w-56 '>
                                    <img className='w-10 h-10 rounded-full' src={item.img} />
                                    <h1 className='flex ml-3' >{item.name}</h1>
                                </button>
                            )
                        })
                    }
                </div>
            </div>

            {/* Right Panel Panel */}
            <div className='col-span-2 h-full  ' >
                <div className='border-b-2 '>
                    <button className='flex items-center text-xxs p-2'>
                        <img className='w-6 h-6 rounded-full' src={profile.picture} />
                        <h1 className='flex-1 ml-3' >{profile.name}</h1>
                    </button>
                </div>
                <div className="flex items-center justify-between  border-2 px-2 py-1 gap-1 rounded-2xl mt-96">
                    <MdOutlineTagFaces size={25} />
                    <input className='align-bottom w-full border-none focus:ring-0 outline-none flex-1 ml-2 text-xxs' placeholder='mesaj yaz' />
                    <div className='flex items-center gap-2'>
                        <BsImage size={25} />
                        <AiOutlineHeart size={25} />
                    </div>

                </div>
            </div>
        </div >

    )
}

export default Message