import React,{useState, useEffect} from 'react'
import story from '../../Data/storyData'
import Post from './Post'
import { db } from "../../firebase"
import { collection, docs, getDocs,onSnapshot } from "firebase/firestore"


function Posts() {
   //post State
   const [posts, setPost] = useState([])


   //Firebase connect
   const postCollectionRef = collection(db, "posts")
   useEffect(() => {      
     onSnapshot(postCollectionRef,(snapshot)=>{
         setPost(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
     })   
   }, [])

  
  return (
    <div className='mt-5  '>

      {/* Story data was used as post data */}
      {
        story.map((item, i)=>{
            return <Post key={i} name={item.name} img={item.img} id={item.id} />
        })
      }    
    </div>
  )
}

export default Posts