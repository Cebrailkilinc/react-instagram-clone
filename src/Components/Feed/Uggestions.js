import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import uggestions from "../../Data/uggestion"


function Uggestions() {

    const handleClick = (event) => {
        if (event.target.innerText === "Takip") {
            event.target.innerText = "Takip Et"
        }else{
            event.target.innerText = "Takip"
        }        
    }

    return (
        <div className='ml-5 mt-28 fixed '>
            <div className='flex items-center justify-between text-xs' >
                <p>Senin İçin Önerilenler</p>
                <button className='border-none text-gray-400 ml-3' >Tümünü Gör</button>
            </div>
            <div >
                {
                    uggestions.map((item, i) => {
                        return (
                            <div key={i} className='flex items-center justify-between text-xxs font-sans font-semibold mt-1 ' >
                                <img className='w-10 h-10 rounded-full' src={item.img} />
                                <h1 className='flex-1 ml-3' >{item.name}</h1>
                                <button onClick={handleClick} className='border-none text-sky-600 ml-12' >Takip Et</button>
                            </div>
                        )
                    })
                }
            </div>      

        </div>
    )
}

export default Uggestions