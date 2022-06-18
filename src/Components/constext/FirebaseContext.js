import React from 'react'
import { useState, useEffect } from 'react'
import { createContext } from "react"
import { addDoc, collection, docs, getDocs, query, where, onSnapshot, doc, setDoc, Firestore } from "firebase/firestore"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db, auth } from "../../firebase"
import { useNavigate } from 'react-router-dom';




const FirebaseContext = createContext()
export const FirebaseProvider = ({ children }) => {

  const [error, setError] = useState(false)
  const [email, setEmail] = useState("cebrail@gmail.com")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [nickname, setNickname] = useState("")
  const [login, setLogin] = useState(false)
  const [post, setPost] = useState("")
  const [users, setUsers] = useState(null)

  const navigate = useNavigate();



  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setLogin(false)
        navigate("/")

        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        onSnapshot(q, (snapshot) => {
          let userList = [];
          snapshot.docs.forEach((doc) => {
            userList.push(doc.data())
          })
          setUsers(userList)
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  console.log(users)
  


  const values = {
    email, setEmail,
    password, setPassword,
    error, setError,
    name, setName,
    surname, setSurname,
    nickname, setNickname, setLogin, login, post, handleLogin,users
  }


  return <FirebaseContext.Provider value={values} >{children}</FirebaseContext.Provider>

}

export default FirebaseContext;