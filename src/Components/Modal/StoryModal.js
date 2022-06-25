import { useState } from 'react'

// React Icons
import { GrClose } from "react-icons/gr"





function StoryModal({ setShowStoryModal, image, name }) {

    const stories = [
        {
            url: "kullanıcı 1",
            header: { heading: name, subheading: 'Posted 5h ago', profileImage: image }
        },
        {
            url: "kullanıcı 2",
            header: { heading: name, subheading: 'Posted 32m ago', profileImage: image }

        },
        {
            url: "kullanıcı 3",
            header: { heading: name, subheading: 'Posted 32m ago', profileImage: image }
        },
        {
            url: "kullanıcı 4",
            header: { heading: name, subheading: 'Posted 32m ago', profileImage: image }, type: 'video', duration: 1000
        },
        {
            url: "kullanıcı 5",
            header: { heading: name, subheading: 'Posted 32m ago', profileImage: image }, type: 'video', duration: 1000
        },
        {
            url: "kullanıcı 6",
            header: { heading: name, subheading: 'Posted 5h ago', profileImage: image }
        },
        {
            url: "kullanıcı 7",
            header: { heading: name, subheading: 'Posted 32m ago', profileImage: image }

        },
        {
            url: "kullanıcı 8",
            header: { heading: name, subheading: 'Posted 32m ago', profileImage: image }
        },
        {
            url: "kullanıcı 9",
            header: { heading: name, subheading: 'Posted 32m ago', profileImage: image }, type: 'video', duration: 1000
        },
        {
            url: "kullanıcı 10",
            header: { heading: name, subheading: 'Posted 32m ago', profileImage: image }, type: 'video', duration: 1000
        },

    ]

    const [num, setNum] = useState(5)

    

    


    return (
        <>
            <div className='fixed inset-0 bg-black bg-opacity-90  flex items-center justify-center  z-50' >
                <div >
                    <GrClose color="white" className='cursor-pointer absolute top-5 right-5 ' onClick={() => { setShowStoryModal(false) }} />
                </div>
                <div className='flex items-center gap-10'>
                    <div className='bg-slate-100 w-40 h-60 rounded-md' >
                        <h1>{stories[num].url}</h1>
                    </div>

                    <div className='bg-slate-100 w-40 h-60 rounded-md' >
                        <h1>{stories[num + 1].url}</h1>
                    </div>

                    <div className='bg-slate-100 w-80 h-[500px] rounded-3xl mb' >
                        <button onClick={() => { setNum(num - 1) }} className='relative top-60 right-8 z-40 bg-white'>pre</button>
                        <h1>{name}</h1>
                        <button onClick={() => { setNum(num + 1) }} className='bg-red-800 relative left-80 top-48' >next</button>
                    </div>

                    <div className='bg-slate-100 w-40 h-60 rounded-md' >
                        <h1>{stories[num + 3].url}</h1>
                    </div>

                    <div className='bg-slate-100 w-40 h-60 rounded-md' >
                        <h1>{stories[num + 4].url}</h1>
                    </div>

                </div>
            </div>

        </>

    )
}

export default StoryModal