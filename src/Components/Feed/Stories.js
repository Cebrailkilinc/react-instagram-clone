import React from 'react'
import story from '../../Data/storyData'
import Story from './Story'
import { BiChevronRight, BiChevronLeft } from "react-icons/bi"
import { useState, useRef } from 'react'

function Stories() {
    const storiesRef = useRef(null)
    const [showLeft, setShowLeft] = useState(false)
    const [showRight, setShowRight] = useState(true)

    const onScroll = () => {
        if (storiesRef.current.scrollLeft == storiesRef.current.scrollWidth - storiesRef.current.clientWidth) {
            setShowRight(true)
        } else {
            setShowRight(true)
        }
        if (storiesRef.current.scrollLeft > 0) {
            setShowLeft(true);
        } else {
            setShowLeft(false);
        }
    }
    return (
        <div className="relative border border-solid border-gray-3200  py-3 mt-5 bg-white rounded-lg">
            <div className='flex bg-white scrollbar-hide scroll-smooth overflow-x-scroll  ' onScroll={onScroll} ref={storiesRef} >
                {
                    story.map((item, i) => {
                        return <Story key={i} name={item.name} image={item.img} />                        
                    })
                }
            </div>            
            {/* <div className='flex absolute top-0 p-4 justify-between items-center w-full '>
                <button onClick={() => { storiesRef.current.scrollLeft = storiesRef.current.scrollLeft - 600 }}>
                    <BiChevronLeft className='cursor-pointer drop-shadow-lg text-gray-400 bg-white w-5 h-5 mt-5 rounded-full filter' />
                </button>
                <button onClick={() => {
                    storiesRef.current.scrollLeft = storiesRef.current.scrollLeft + 600;
                }}>
                    <BiChevronRight className='cursor-pointer drop-shadow-lg text-gray-400 bg-white w-5 h-5 mt-5 rounded-full' />
                </button>       
            </div> */}
        </div>
    )
}

export default Stories