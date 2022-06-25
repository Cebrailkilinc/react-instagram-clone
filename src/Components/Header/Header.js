import { useState } from 'react';
import NewPost from "../Modal/NewPost";
import Profile from './Profile';

// React Icons
import { Link, useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { MdOutlineExplore } from "react-icons/md"
import { CgAddR } from "react-icons/cg"


function Header({ setLogin }) {

    const [show, setShow] = useState(false)

    //Router
    const navigate = useNavigate()

    const openModal = () => {
        setShow(true)
    }

    if (show === true) {
        return <NewPost  setShow={setShow} />
    }

    return (
        <header className='bg-white shadow-lg sticky top-0 z-50 border-b-1 '>
            <div className='container mx-auto max-w-2xl flex justify-between py-3'>
                {/*LEFT */}
                <div >
                    <Link to="/" >
                        <img className="w-20 " src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' />
                    </Link>
                </div>
                {/*MIIDDLE - INPUT*/}
                <div>
                    <input
                        placeholder='Ara'
                        className='border-none focus:ring-0 outline-none bg-gray-200 hidden md:block rounded-md w-60'
                    />
                </div>
                {/*RIGHT */}
                <div className='flex space-x-5 text-2xl text-neutral-800'>
                    <Link to="/"  >
                        <AiFillHome />
                    </Link>
                    <Link to="/message" >
                        <RiMessengerLine />
                    </Link>
                    <CgAddR onClick={openModal} className='cursor-pointer' />
                    <Link to="/" >
                        <MdOutlineExplore />
                    </Link>
                    <Link to="/" >
                        <AiOutlineHeart />
                    </Link>
                    <Profile setLogin={() => { navigate("/login") }} />
                </div>

            </div>
        </header>
    )
}

export default Header