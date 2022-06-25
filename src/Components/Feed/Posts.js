import React, { useState, useEffect } from 'react'
import Post from './Post'

//Firebase functions
import { db } from "../../firebase"
import { collection, docs, getDocs, onSnapshot, orderBy, query } from "firebase/firestore"


function Posts() {
  //post State
  const [posts, setPost] = useState([])

  //Firebase connect and get post datas
  const postCollectionRef = collection(db, "posts")
  const q = query(postCollectionRef, orderBy("time", "desc"))
  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setPost(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
  }, [])


  return (
    <div className='mt-5  '>
      {/* Story data was used as post data */}
      {
        posts.map((item, i) => {
          return <Post key={i} name={item.name} img={item.image} statement={item.description} profileImg={item.profileImg} nickName={item.nickname} id={item.id} />
        })
      }
    </div>
  )
}

export default Posts