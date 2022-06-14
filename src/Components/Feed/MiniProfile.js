import React, { useEffect, useState } from 'react'
import { collection, doc, onSnapshot, orderBy, query, snapshotEqual } from "firebase/firestore"
import { db } from '../../firebase'
import profil from '../../Data/profil'

function MiniProfile() {
  
    return (
        <div className='ml-5 mt-8 items-center  fixed'>
            <div className='flex items-center   text-xs'>
                <img className='rounded-full w-14 h-14' src={profil[0].img} />
                <h1 className='flex-1 ml-3'>{profil[0].name}</h1>
                <button className='border-none text-blue-600 ml-8' >Geçiş Yap</button>
            </div>
        </div>
    )
}

export default MiniProfile